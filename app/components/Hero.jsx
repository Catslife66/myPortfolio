"use client";

import * as THREE from "three";
import {
  OrbitControls,
  Caustics,
  Text,
  Text3D,
  Environment,
  MeshTransmissionMaterial,
  AccumulativeShadows,
  RandomizedLight,
  SoftShadows,
  Center,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import DewSphere from "./Sphere";
import { useControls } from "leva";

function Hero3DHeading() {
  const textRef = useRef();
  const { viewport } = useThree();

  useFrame(() => {
    if (textRef.current) {
      // console.log(viewport.width);
    }
  });

  return (
    <group ref={textRef} scale={viewport.width / 12}>
      <Center>
        <Caustics
          color="#332f2b"
          position={[0, -2, 0]}
          lightSource={[-10, 5, -5]}
          worldRadius={0.01}
          ior={1.2}
          intensity={0.005}
        >
          <Center position={[0, 0, 0]}>
            <Text3D
              castShadow
              receiveShadow
              font={"assets/fonts/Lato_Regular.json"}
              size={1}
              bevelThickness={5}
            >
              Xiaohong Zhuang
              <MeshTransmissionMaterial
                resolution={1024}
                distortion={0.5}
                color="#D0D0D0"
                thickness={1}
                anisotropy={1}
              />
            </Text3D>
          </Center>
        </Caustics>
      </Center>
    </group>
  );
}

function Hero2DHeading() {
  const textRef = useRef();
  const { viewport } = useThree();

  const { position, rotation } = useControls("Text Control", {
    position: {
      value: { x: -1.5, y: -1, z: 0.2 },
      step: 0.1,
    },
    rotation: {
      value: { x: -0.9, y: 0, z: 0 },
      step: 0.1,
    },
  });

  return (
    <group
      ref={textRef}
      position={[-viewport.width / 6, -1, 0.2]}
      rotation={[-0.9, 0, 0]}
      scale={viewport.width / 10}
    >
      <Text
        castShadow
        font={"assets/fonts/Lato-Regular.ttf"}
        color={"#919191"}
        fontSize={0.15}
        lineHeight={2}
        anchorX={"center"}
      >
        A self-taught programmer {"\n"}with a passion for web development & a
        strong background in marketing.
      </Text>
    </group>
  );
}

const Hero = () => {
  return (
    <Canvas
      shadows
      camera={{ fov: 50, position: [0, 0, 5] }}
      style={{ backgroundColor: "#D0D0D0" }}
    >
      <color attach="background" args={["#f0f0f0"]} />
      <ambientLight intensity={0.5} />
      <spotLight decay={0} position={[5, 5, -10]} angle={0.15} penumbra={1} />
      <pointLight decay={0} position={[-10, -10, -10]} />

      <Environment preset="sunset" />
      <Hero2DHeading />
      <Hero3DHeading />

      <DewSphere />
      {/* <OrbitControls /> */}
      <AccumulativeShadows
        temporal
        frames={100}
        color="gray"
        colorBlend={2}
        toneMapped={true}
        alphaTest={0.7}
        opacity={1}
        scale={12}
        position={[0, -0.5, 0]}
      >
        <RandomizedLight
          amount={8}
          radius={10}
          ambient={0.5}
          position={[5, 5, -10]}
          bias={0.001}
        />
      </AccumulativeShadows>
      <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={1} levels={1} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
};

export default Hero;
