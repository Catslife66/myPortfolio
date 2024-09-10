import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function CanvasWrapper() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight intensity={0.8} position={[-2.2, 0, 0.6]} castShadow />

      {/* <OrbitControls /> */}
      <Environment preset="sunset" />
    </Canvas>
  );
}
