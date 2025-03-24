import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Text3D,
  Center,
  Preload,
  Lightformer,
  Environment,
  CameraControls,
  RenderTexture,
  ContactShadows,
  MeshTransmissionMaterial,
  useMatcapTexture,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import { Maitree } from "next/font/google";

function Letter() {
  const [matcap, url] = useMatcapTexture(
    21, // index of the matcap texture https://github.com/emmelleppi/matcaps/blob/master/matcap-list.json
    1024 // size of the texture ( 64, 128, 256, 512, 1024 )
  );

  return (
    <Text3D
      font="assets/fonts/bold.blob"
      bevelEnabled
      smooth={1}
      scale={0.125}
      size={12}
      height={1}
      curveSegments={10}
      bevelThickness={2}
      bevelSize={2}
      bevelOffset={0}
      bevelSegments={5}
    >
      X
      <meshMatcapMaterial matcap={matcap} />
      {/* <MeshTransmissionMaterial
        clearcoat={1}
        thickness={40}
        chromaticAberration={0.25}
        anisotropy={0.4}
      /> */}
    </Text3D>
  );
}

export default function LetterShapeScene() {
  return (
    <Canvas style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <ambientLight intensity={1} />
      <Environment preset="forest" />
      <Letter />
      <OrbitControls />
    </Canvas>
  );
}
