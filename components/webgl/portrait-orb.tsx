'use client'

import { ShaderCanvas } from './shader-canvas'

/**
 * The halo that wraps the hero portrait: a turbulent brand-coloured ring,
 * rotating energy arcs, and orbiting particles. Drawn behind and around the
 * photo, so the centre stays deliberately quiet.
 */
const ORB_FRAGMENT = `
void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / max(min(u_resolution.x, u_resolution.y), 1.0);

  float t   = u_time * 0.35;
  float rad = length(p);
  float ang = atan(p.y, p.x);

  vec3 cobalt = vec3(0.122, 0.294, 1.000);
  vec3 violet = vec3(0.486, 0.227, 0.929);
  vec3 teal   = vec3(0.000, 0.702, 0.604);

  vec3  col   = vec3(0.0);
  float alpha = 0.0;

  // Turbulent halo ring — fBm displaces the radius so it never reads as a circle.
  float turb  = fbm(vec2(ang * 1.6 + t * 0.6, rad * 2.4 - t * 0.4));
  float ringR = 0.72 + (turb - 0.5) * 0.10;
  float ring  = smoothstep(0.17, 0.0, abs(rad - ringR));
  vec3  ringCol = mix(cobalt, violet, 0.5 + 0.5 * sin(ang * 2.0 + t));
  ringCol = mix(ringCol, teal, 0.5 + 0.5 * sin(ang * 3.0 - t * 1.3));
  col   += ringCol * ring;
  alpha += ring * 0.5;

  // Two bright arcs sweeping around the ring.
  float arc     = pow(max(0.0, sin(ang * 2.0 + t * 1.6)), 8.0);
  float arcBand = smoothstep(0.11, 0.0, abs(rad - 0.80));
  col   += mix(violet, teal, 0.5) * arc * arcBand * 1.5;
  alpha += arc * arcBand * 0.65;

  // Orbiting particles on slightly elliptical paths.
  for (int i = 0; i < 18; i++) {
    float fi    = float(i);
    float seed  = hash(vec2(fi, 3.7));
    float orbit = 0.80 + seed * 0.42;
    float speed = 0.30 + hash(vec2(fi, 8.1)) * 0.55;
    float phase = seed * 6.2831853 + t * speed;

    vec2  pos  = vec2(cos(phase) * orbit, sin(phase) * orbit * 0.92);
    float d    = length(p - pos);
    float core = smoothstep(0.028, 0.0, d);
    float halo = smoothstep(0.16, 0.0, d) * 0.28;

    col   += mix(cobalt, teal, seed) * (core + halo);
    alpha += core * 0.9 + halo * 0.32;
  }

  // Soft inner light so the portrait sits on a lit ground.
  float centre = smoothstep(0.78, 0.0, rad);
  col   += mix(cobalt, violet, 0.4) * centre * 0.32;
  alpha += centre * 0.26;

  // Deepen the colour on light paper so the halo reads as brand, not grey.
  col *= mix(0.80, 1.0, u_dark);

  alpha *= smoothstep(1.35, 0.85, rad); // fade before the canvas edge
  gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0) * mix(0.90, 0.92, u_dark));
}
`

export function PortraitOrb({ className }: { className?: string }) {
  return (
    <ShaderCanvas
      className={className}
      fragmentShader={ORB_FRAGMENT}
      speed={0.9}
      fallback={
        <div
          className={`${className ?? ''} rounded-full opacity-60 blur-2xl`}
          style={{
            background:
              'conic-gradient(from 0deg, var(--brand), var(--brand-2), var(--brand-3), var(--brand))',
          }}
        />
      }
    />
  )
}
