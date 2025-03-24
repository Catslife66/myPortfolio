import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useAspect, useVideoTexture, useTexture } from "@react-three/drei";

function Video() {
  const size = useAspect(900, 600);
  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url="assets/images/bird.jpg" />}>
        <VideoMaterial url="assets/videos/bird.mp4" />
      </Suspense>
    </mesh>
  );
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

export default function VideoScene() {
  return (
    <Canvas
      orthographic
      style={{
        backgroundColor: "#cc7b32",
        width: "100%",
        height: "100%",
        borderRadius: "5%",
      }}
    >
      <Video />
    </Canvas>
  );
}
