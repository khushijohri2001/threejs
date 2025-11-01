varying vec2 vUv;

void main() {
    vec4 color1 = vec4(0.584, 0.988, 0.890, 1.0);
    vec4 color2 = vec4(0.855, 0.988, 0.584, 1.0);
    vec4 color3 = vec4(0.988, 0.847, 0.584, 1.0);
    vec4 color4 = vec4(0.961, 0.584, 0.902, 1.0);

    vec4 color5 = mix(color1, color2, vUv.x);
    vec4 color6 = mix(color3, color4, vUv.x);

    vec4 gradient = mix(color5, color6, vUv.y);

    gl_FragColor = gradient;
}