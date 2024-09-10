import React, { useRef, useMemo } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { Environment, Sphere } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

const TransparentSphere = () => {
  const sphereRef = useRef();
  const envMap = useLoader(RGBELoader, "assets/textures/sky.hdr");
  //   const uniforms = useMemo(
  //     () => ({
  //       u_time: { value: 0 },
  //       u_opacity: { value: 0.5 },
  //       u_envMap: { value: null },
  //     }),
  //     []
  //   );

  // useFrame((state) => {
  //   if (sphereRef.current) {
  //     sphereRef.current.material.uniforms.u_time.value =
  //       0.4 * state.clock.getElapsedTime();
  //     sphereRef.current.material.uniforms.u_envMap.value = envMap;
  //   }
  // });
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (sphereRef.current) {
      // Create a color-changing effect with sine waves
      const hue = (Math.sin(elapsedTime * 0.5) * 0.5 + 0.5) * 360; // Hue varies over time
      const color = new THREE.Color(`hsl(${hue}, 100%, 70%)`); // HSL color model for smooth transitions
      sphereRef.current.material.color.set(color); // Update the material color
    }
  });

  return (
    <group>
      <mesh ref={sphereRef} scale={1.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          transmission={1} // Maximum transparency
          transparent={true} // Ensure material respects alpha blending
          roughness={0.8} // Minimal roughness for a clear surface
          metalness={0} // Non-metallic surface
          ior={2.45} // Slightly higher than water to mimic thin glass
          thickness={3} // Very thin glass layer
          envMap={envMap} // Reflective environment map
          envMapIntensity={1} // Control reflection intensity
          clearcoat={1} // Enhance reflective surface
          clearcoatRoughness={0} // Smooth clearcoat for maximum shine
          reflectivity={0.9} // High reflectivity for glass-like appearance
          color={"#ffffff"} // Clear color for glass effect
          attenuationDistance={0.2} // Subtle light attenuation
          attenuationColor={"#ffffff"}
        />
        {/* <shaderMaterial
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          attach={"material"}
        /> */}
      </mesh>
    </group>
  );
};

const SphereScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment background={false} files="assets/textures/sky.hdr" />
      <TransparentSphere />
    </Canvas>
  );
};

export default SphereScene;
