import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Billboard, TrackballControls } from "@react-three/drei";
import { useEffect, useRef, useMemo, useState, Suspense } from "react";

const techStack = [
  "Next.js",
  "Django",
  "GSAP",
  "Three.js",
  "React",
  "Redux",
  "JavaScript",
  "Bootstrap5",
  "TailwindCSS",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Python",
  "Django",
  "Kubernetes",
  "Django Ninja",
  "Django Rest Framework",
  "WordPress",
  "Git",
];

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const over = (e) => {
    e.stopPropagation();
    setHovered(true);
  };

  const out = () => setHovered(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);

  useFrame(({ camera }) => {
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );
  });

  return (
    <Billboard {...props}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log(children)}
        {...fontProps}
      >
        {children}
      </Text>
    </Billboard>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  const groupRef = useRef(null);
  useFrame(() => (groupRef.current.rotation.y += 0.001));
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const index = (i - 1) * count + j;
        if (index < techStack.length) {
          temp.push([
            new THREE.Vector3().setFromSpherical(
              spherical.set(radius, phiSpan * i, thetaSpan * j)
            ),
            techStack[index],
          ]);
        }
      }
    }
    return temp;
  }, [count, radius]);

  return (
    <group ref={groupRef}>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos}>
          {word}
        </Word>
      ))}
    </group>
  );
}

export default function WordCloudScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 35], fov: 90 }}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "5%",
      }}
    >
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud count={5} radius={20} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  );
}
