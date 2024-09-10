"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

const Blob = () => {
  const blobRef = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
      u_opacity: { value: 0.5 },
      u_roughness: { value: 0.1 },
    }),
    []
  );

  useFrame((state) => {
    if (blobRef.current) {
      blobRef.current.material.uniforms.u_time.value =
        0.4 * state.clock.getElapsedTime();
    }
  });

  return (
    <group>
      <mesh ref={blobRef} scale={1}>
        <icosahedronGeometry args={[1, 20]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    </group>
  );
};

const BlobScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Blob />
    </Canvas>
  );
};

export default BlobScene;
