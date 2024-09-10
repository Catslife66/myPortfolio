const fragmentShader = `
uniform float u_time;
uniform samplerCube u_envMap; // Environment map for reflections
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
    // Thin-film interference effect
    float interference = 0.3 + 0.2 * sin(vPosition.y * 10.0 + u_time * 5.0);
    vec3 color = vec3(
        0.5 + 0.5 * sin(u_time + interference),
        0.5 + 0.5 * sin(u_time + interference + 2.0),
        0.5 + 0.5 * sin(u_time + interference + 4.0)
    );

    // Reflection effect using environment map
    vec3 viewDirection = normalize(-vPosition);
    vec3 reflectDirection = reflect(viewDirection, normalize(vNormal));
    vec3 envColor = textureCube(u_envMap, reflectDirection).rgb;

    // Mix base color with environment reflection for shine
    vec3 finalColor = mix(color, envColor, 0.5); // Blend color and reflection

    // Apply transparency
    float opacity = 0.3; // Adjust opacity for bubble effect
    gl_FragColor = vec4(finalColor, opacity);
}

`;

export default fragmentShader;
