"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import {
  DoubleSide,
  MeshBasicMaterial,
  BufferGeometry,
  Mesh,
  Object3D,
  Line,
  ShapeGeometry,
} from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Text3D() {
  const textRef = useRef();
  const lineRef = useRef();
  const content = "5 Years Marketing \n in Hotel Industry";
  const font = useLoader(FontLoader, "assets/fonts/Lato_Regular.json");
  const color = "#414141";

  useEffect(() => {
    const shapes = font.generateShapes(content, 2);
    const textGeometry = new ShapeGeometry(shapes);

    textGeometry.computeBoundingBox();
    const xMid =
      -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
    textGeometry.translate(xMid, 0, 0);

    const textMaterial = new MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.5,
      side: DoubleSide,
    });

    const lineMaterial = new MeshBasicMaterial({
      color: color,
      side: DoubleSide,
    });

    const textMesh = new Mesh(textGeometry, textMaterial);

    textRef.current.add(textMesh);

    const holeShapes = [];
    for (let i = 0; i < shapes.length; i++) {
      const shape = shapes[i];
      if (shape.holes && shape.holes.length > 0) {
        for (let j = 0; j < shape.holes.length; j++) {
          const hole = shape.holes[j];
          holeShapes.push(hole);
        }
      }
    }
    shapes.push.apply(shapes, holeShapes);

    const lineText = new Object3D();
    for (let i = 0; i < shapes.length; i++) {
      const shape = shapes[i];
      const points = shape.getPoints();
      const geometry = new BufferGeometry().setFromPoints(points);
      geometry.translate(xMid, 0, 0);
      const lineMesh = new Line(geometry, lineMaterial);

      lineText.add(lineMesh);
    }

    lineRef.current.add(lineText);

    const combinedRefs = { scale: 1 };

    gsap.to(combinedRefs, {
      scale: 8,
      scrollTrigger: {
        trigger: "#text-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          if (textRef.current && lineRef.current) {
            textRef.current.scale.set(
              combinedRefs.scale,
              combinedRefs.scale,
              combinedRefs.scale
            );
            lineRef.current.scale.set(
              combinedRefs.scale,
              combinedRefs.scale,
              combinedRefs.scale
            );
          }

          // Optional: Allow scroll to the next scene once the scale reaches the target
          if (self.progress >= 1) {
            ScrollTrigger.refresh(); // Example refresh call to update triggers
          }
        },
      },
    });
  }, []);

  return (
    <>
      <group ref={textRef} position={[0, 0, -130]} scale={[1, 1, 1]} />
      <group ref={lineRef} position={[0, 0, -100]} scale={[1, 1, 1]} />
    </>
  );
}

const Intro = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="bg-white dark:bg-gray-900" id="3dText">
        <div className="w-full h-screen">
          <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <Text3D />
          </Canvas>
        </div>
      </section>
    </Suspense>
  );
};

export default Intro;
