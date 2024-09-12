import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  Center,
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
} from "@react-three/drei";
import { useControls } from "leva";

const DewSphere = () => {
  const sphereRef = useRef();
  const { viewport, pointer } = useThree();
  const colour = "#ffffff";

  // const config = useControls({
  //   backside: false,
  //   transmission: { value: 1, min: 0, max: 1 },
  //   roughness: { value: 0.33, min: 0, max: 1, step: 0.01 },
  //   thickness: { value: 0.04, min: 0, max: 10, step: 0.01 },
  //   ior: { value: 0.4, min: 0, max: 5, step: 0.01 },
  //   chromaticAberration: { value: 2, min: 0, max: 10 },
  //   color: colour,
  // });

  useFrame(() => {
    if (sphereRef.current) {
      const targetX = pointer.x * (viewport.width / 2);
      sphereRef.current.position.x +=
        (targetX - sphereRef.current.position.x) * 0.05;
    }
  });

  return (
    <group scale={viewport.width / 10} position={[0, 0.3, 0]}>
      <Center left>
        <mesh ref={sphereRef} receiveShadow castShadow>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshTransmissionMaterial
            backside={false}
            ior={0.4}
            color={colour}
            transmission={1}
            roughness={0.33}
            thickness={0.04}
            chromaticAberration={2}
            // {...config}
            resolution={1024}
            anisotropy={1}
          />
        </mesh>
      </Center>
    </group>
  );
};

export default DewSphere;
