import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useControls } from "leva";
import Model from "./Models";

export default function ModelScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        position: [-3, 4.5, 52],
        fov: 20,
      }}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "5%",
        transformOrigin: "center center",
      }}
    >
      <fog attach="fog" args={["lightpink", -10, 100]} />
      <Suspense fallback={null}>
        <ambientLight intensity={1} />

        <Model position={[-4.5, -4, 0]} rotation={[0, -2.8, 0]} />
        <spotLight position={[50, 50, -30]} castShadow />
        <Environment preset="warehouse" />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
