'use client'

import { ShaderCanvas } from './shader-canvas'

/**
 * Domain-warped fBm producing a slow, continuously evolving aurora. Colours are
 * the brand triad; the pointer adds a soft bloom that follows the cursor.
 */
const AURORA_FRAGMENT = `
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / max(u_resolution.y, 1.0);
  vec2 p = vec2((uv.x - 0.5) * aspect, uv.y - 0.5) * 2.0;

  float t = u_time * 0.08;

  // Two rounds of domain warping keep the flow organic rather than tiled.
  vec2 q = vec2(fbm(p * 1.1 + t), fbm(p * 1.1 + vec2(5.2, 1.3) - t));
  vec2 r = vec2(
    fbm(p * 1.4 + 2.2 * q + vec2(1.7, 9.2) + 0.18 * t),
    fbm(p * 1.4 + 2.2 * q + vec2(8.3, 2.8) + 0.14 * t)
  );
  float f = fbm(p * 1.2 + 2.6 * r);

  vec2 m = vec2((u_pointer.x - 0.5) * aspect, u_pointer.y - 0.5) * 2.0;
  float bloom = 1.0 - smoothstep(0.0, 1.4, length(p - m));
  f += bloom * 0.20;

  vec3 cobalt = vec3(0.122, 0.294, 1.000);
  vec3 violet = vec3(0.486, 0.227, 0.929);
  vec3 teal   = vec3(0.000, 0.702, 0.604);

  vec3 col = mix(cobalt, violet, smoothstep(0.22, 0.86, f));
  col = mix(col, teal, smoothstep(0.35, 0.95, r.y) * 0.6);
  col += bloom * 0.12;

  // A high threshold keeps only the bright fBm peaks, so the field reads as
  // distinct ribbons of light rather than an even fog that muddies the page.
  float mask = smoothstep(0.34, 0.88, f);
  mask *= smoothstep(1.70, 0.35, length(p));            // vignette at the edges
  mask *= smoothstep(0.02, 0.52, uv.x);                 // clear the headline column
  mask *= smoothstep(0.0, 0.30, uv.y) * smoothstep(1.0, 0.82, uv.y);

  gl_FragColor = vec4(col, clamp(mask, 0.0, 1.0) * mix(0.44, 0.52, u_dark));
}
`

export function AuroraField({ className }: { className?: string }) {
  return (
    <ShaderCanvas
      className={className}
      fragmentShader={AURORA_FRAGMENT}
      trackPointer
      fallback={<div className={`${className ?? ''} aurora opacity-70`} />}
    />
  )
}
