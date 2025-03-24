import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function City() {
  const group = useRef();
  const { nodes, materials } = useGLTF("assets/models/city.glb");
  useFrame(() => (group.current.rotation.y += 0.001));

  return (
    <group ref={group} scale={0.001} position={[0, 0, -100]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-102253.52, -210688.86, -17050.52]}>
          <mesh
            material={materials.Scene_Root}
            geometry={nodes.mesh_0.geometry}
          />
          <mesh
            material={materials.Scene_Root}
            geometry={nodes.mesh_1.geometry}
          />
          <mesh
            material={materials.Scene_Root}
            geometry={nodes.mesh_2.geometry}
          />
          <mesh
            material={materials.Scene_Root}
            geometry={nodes.mesh_3.geometry}
          />
        </group>
        <mesh position={[250000, -200000, 50000]}>
          <sphereGeometry args={[30000, 32, 32]} />
          <meshBasicMaterial color="#ff1020" />
        </mesh>
      </group>
    </group>
  );
}

export default function CityScene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 20], fov: 40 }}
      style={{
        backgroundColor: "#cc7b32",
        width: "100%",
        height: "100%",
        borderRadius: "5%",
      }}
    >
      <fog attach="fog" args={["#cc7b32", 0, 500]} />
      <City />
    </Canvas>
  );
}
