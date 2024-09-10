const fragmentShader = `
uniform float u_time;
uniform float u_opacity;
varying vec3 vNormal;

void main() {
    // Animate color over time using sine functions for RGB channels
    vec3 color = vec3(
        0.5 + 0.5 * sin(u_time),
        0.5 + 0.5 * sin(u_time + 2.0),
        0.5 + 0.5 * sin(u_time + 4.0)
    );

    // Basic lighting effect with normals
    vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
    float lightIntensity = max(dot(vNormal, lightDirection), 0.5);

    vec3 finalColor = color * lightIntensity;

    // Set transparency with opacity
    gl_FragColor = vec4(finalColor, u_opacity);
}

`;

export default fragmentShader;
