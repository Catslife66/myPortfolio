"use client";

import * as THREE from "three";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import {
  MeshBasicMaterial,
  MeshMatcapMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
} from "three";
import { MeshWobbleMaterial } from "@react-three/drei";

const Hero = () => {
  function WobbleSphere() {
    const meshRef = useRef();

    // useFrame(({ clock }) => {
    //   const time = clock.getElapsedTime();
    //   meshRef.current.position.y = Math.sin(time) * 0.5;
    //   meshRef.current.rotation.y = Math.sin(time) * 0.5;
    //   meshRef.current.scale.set(
    //     1 + Math.sin(time * 2) * 0.1,
    //     1 + Math.sin(time * 3) * 0.1,
    //     1 + Math.sin(time * 4) * 0.1
    //   );
    // });

    const texture = new THREE.TextureLoader().load(
      "assets/textures/rocky_ao.jpg"
    );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);

    const material = new MeshPhysicalMaterial({
      color: "#cccccc",
      transparent: true,
      opacity: 0.2,
      transmission: 1,
      roughness: 1,
      metalness: 0.2,
      ior: 1.8,
      reflectivity: 1,
      iridescence: 1,
      iridescenceIOR: 1.5,
      clearcoat: 1,
      clearcoatRoughness: 0,
      envMapIntensity: 1,
      roughnessMap: texture,
      sheen: 0.4,
      sheenColor: "#6ea257",
    });

    return (
      <Sphere ref={meshRef} args={[1, 16, 16]} material={material} />

      // <Sphere ref={meshRef} args={[1, 32, 32]}>
      //   <MeshWobbleMaterial factor={1} speed={10} />
      // </Sphere>
    );

    // <Sphere ref={meshRef} args={[1, 32, 32]} material={material} />
  }

  return (
    <div className="w-full h-screen bg-[#D0D0D0] relative">
      <div className="w-full h-screen absolute flex justify-center items-center text-blue-500 text-2xl">
        Hello World
      </div>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <WobbleSphere />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Hero;
