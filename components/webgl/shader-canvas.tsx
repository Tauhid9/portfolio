'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

/** Shared GLSL prelude: uniforms plus value-noise fBm used by every field. */
export const SHADER_PRELUDE = `
precision mediump float;

uniform vec2  u_resolution;
uniform float u_time;
uniform vec2  u_pointer;   // 0..1, canvas space
uniform float u_dark;      // 0 = light theme, 1 = dark theme

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}
`

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

interface ShaderCanvasProps {
  /** Fragment shader body. `SHADER_PRELUDE` is prepended automatically. */
  fragmentShader: string
  className?: string
  /** Shown when WebGL is unavailable, reduced-motion is on, or compilation fails. */
  fallback?: React.ReactNode
  /** Animation speed multiplier. */
  speed?: number
  /** Upper bound on device pixel ratio. Keeps fill cost sane on retina. */
  maxDpr?: number
  /** Track the pointer and feed it to `u_pointer`. */
  trackPointer?: boolean
}

/**
 * Renders a single full-viewport fragment shader on a lightweight WebGL1
 * context. Pauses when scrolled out of view or when the tab is hidden, caps
 * DPR, and degrades to `fallback` on any unsupported or failing path.
 */
export function ShaderCanvas({
  fragmentShader,
  className,
  fallback = null,
  speed = 1,
  maxDpr = 1.5,
  trackPointer = false,
}: ShaderCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (reduced) return

    const canvas = canvasRef.current
    if (!canvas) return

    const gl = (canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      powerPreference: 'low-power',
      failIfMajorPerformanceCaveat: true,
    }) ?? null) as WebGLRenderingContext | null

    if (!gl) {
      setFailed(true)
      return
    }

    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
    const fs = compile(gl, gl.FRAGMENT_SHADER, `${SHADER_PRELUDE}\n${fragmentShader}`)
    const program = gl.createProgram()

    if (!vs || !fs || !program) {
      setFailed(true)
      return
    }

    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setFailed(true)
      return
    }

    gl.useProgram(program)

    // Two triangles covering clip space.
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    )
    const posLoc = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    const uResolution = gl.getUniformLocation(program, 'u_resolution')
    const uTime = gl.getUniformLocation(program, 'u_time')
    const uPointer = gl.getUniformLocation(program, 'u_pointer')
    const uDark = gl.getUniformLocation(program, 'u_dark')

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const pointer = { x: 0.5, y: 0.5 }
    const target = { x: 0.5, y: 0.5 }

    const isDark = () => (document.documentElement.classList.contains('dark') ? 1 : 0)
    let dark = isDark()
    let elapsed = 0

    const draw = () => {
      // Skip until the element has been laid out; u_resolution of 0 would make
      // the shader divide by zero.
      if (!canvas.width || !canvas.height) return
      gl.uniform1f(uTime, elapsed)
      gl.uniform1f(uDark, dark)
      gl.uniform2f(uPointer, pointer.x, pointer.y)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr)
    const resize = () => {
      const { clientWidth: w, clientHeight: h } = canvas
      if (!w || !h) return
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uResolution, canvas.width, canvas.height)
    }
    resize()

    // Repaint on resize so a paused canvas is never left stretched or blank.
    const resizeObserver = new ResizeObserver(() => {
      resize()
      draw()
    })
    resizeObserver.observe(canvas)

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      target.x = (event.clientX - rect.left) / rect.width
      target.y = 1 - (event.clientY - rect.top) / rect.height
    }
    if (trackPointer) {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
    }

    // Only run while on screen. Tab visibility is read live in the frame loop
    // so returning to the tab resumes without waiting for an intersection change.
    let onScreen = true
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting
      },
      { threshold: 0 },
    )
    io.observe(canvas)

    // Repaint on theme change so a paused canvas does not keep the old palette.
    const themeObserver = new MutationObserver(() => {
      dark = isDark()
      draw()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    let raf = 0
    let last = performance.now()

    const onContextLost = (event: Event) => {
      event.preventDefault()
      cancelAnimationFrame(raf)
      setFailed(true)
    }
    canvas.addEventListener('webglcontextlost', onContextLost)

    // Paint once immediately so the canvas is never blank, even if the tab
    // starts backgrounded or the element starts off screen.
    draw()

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame)

      const deltaSeconds = Math.min((now - last) / 1000, 1 / 20)
      last = now
      if (!onScreen || document.hidden) return

      elapsed += deltaSeconds * speed

      // Ease the pointer so shader motion never snaps.
      pointer.x += (target.x - pointer.x) * 0.06
      pointer.y += (target.y - pointer.y) * 0.06

      draw()
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      io.disconnect()
      themeObserver.disconnect()
      canvas.removeEventListener('webglcontextlost', onContextLost)
      if (trackPointer) window.removeEventListener('pointermove', onPointerMove)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(buffer)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [fragmentShader, speed, maxDpr, trackPointer, reduced])

  if (reduced || failed) return <>{fallback}</>

  return <canvas ref={canvasRef} aria-hidden className={className} />
}
