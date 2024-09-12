"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OrbitControls, Text } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

function Text3d() {
  const textRef = useRef();
  const { viewport } = useThree();
  const CONTENT = "5 Years Marketing \n in Hotel Industry";
  const COLOR = "#414141";

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current.scale, {
        scrollTrigger: {
          trigger: "#textSection",
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
        x: viewport.width / 5,
        y: viewport.width / 5,
        z: viewport.width / 5,
      });
    }
  }, [viewport.width]);

  return (
    <group ref={textRef} rotation={[-0.2, 0, 0]} scale={viewport.width / 12}>
      <mesh position={[0, 0, 0]}>
        <Text font="assets/fonts/Lato-Black.ttf" fontSize={0.5} color={COLOR}>
          {CONTENT}
          <meshBasicMaterial />
        </Text>
      </mesh>
      <mesh position={[0, 0, -2]}>
        <Text font="assets/fonts/Lato-Black.ttf" fontSize={0.5}>
          {CONTENT}
          <meshBasicMaterial />
        </Text>
      </mesh>
    </group>
  );
}

const Intro = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section
        className="bg-white dark:bg-gray-900 w-full h-full"
        id="textSection"
      >
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Text3d />
          {/* <OrbitControls /> */}
        </Canvas>
      </section>
    </Suspense>
  );
};

export default Intro;
