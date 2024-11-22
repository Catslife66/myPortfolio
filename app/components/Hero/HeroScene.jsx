// import { useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment, useTexture } from "@react-three/drei";
// import { easing } from "maath";

// function ParallaxLayer({ texture, position, scale, width, height }) {
//   return (
//     <mesh position={position} scale={scale}>
//       <planeGeometry args={[width, height]} />
//       <meshBasicMaterial map={texture} transparent={true} />
//     </mesh>
//   );
// }

// function ParallaxScene() {
//   const textures = useTexture([
//     "assets/textures/layer1.png",
//     "assets/textures/layer2.png",
//     "assets/textures/layer3.png",
//     "assets/textures/layer4.png",
//     "assets/textures/layer5.png",
//     "assets/textures/layer6.png",
//     "assets/textures/layer7.png",
//   ]);

//   const layers = [
//     {
//       texture: textures[0],
//       position: [0, 3.4, 2.4],
//       scale: [1.2, 1, 1],
//       width: 78,
//       height: 45,
//     },
//     {
//       texture: textures[1],
//       position: [1.3, 7.7, -28],
//       scale: [2.7, 2, 1],
//       width: 60,
//       height: 50,
//     },
//     {
//       texture: textures[2],
//       position: [9.6, -22, -70],
//       scale: [4, 4, 1],
//       width: 100,
//       height: 60,
//     },
//     {
//       texture: textures[3],
//       position: [6, 3.5, -120],
//       scale: [6, 3.5, 1],
//       width: 50,
//       height: 55,
//     },
//     {
//       texture: textures[4],
//       position: [1.2, 4, -180],
//       scale: [2.4, 1.3, 1],
//       width: 200,
//       height: 200,
//     },
//     {
//       texture: textures[5],
//       position: [3, 0, -300],
//       scale: [2.8, 1.8, 1],
//       width: 300,
//       height: 200,
//     },
//     {
//       texture: textures[6],
//       position: [5.7, 0, -420],
//       scale: [3, 3, 1],
//       width: 400,
//       height: 200,
//     },
//   ];

//   return (
//     <group>
//       {layers.map((layer, index) => (
//         <ParallaxLayer
//           key={index}
//           texture={layer.texture}
//           position={layer.position}
//           scale={layer.scale}
//           width={layer.width}
//           height={layer.height}
//         />
//       ))}
//     </group>
//   );
// }

// function Env() {
//   const pointer = useRef({ x: 0, y: 0 });

//   useFrame((state, delta) => {
//     const { x, y } = state.pointer;

//     easing.damp3(
//       state.camera.position,
//       [
//         Math.sin(state.pointer.x / 8) * 10,
//         1.2 + state.pointer.y,
//         Math.cos(state.pointer.x / 8) * 30,
//       ],
//       0.5,
//       delta
//     );
//     state.camera.lookAt(0, 0, 0);
//   });

//   return null;
// }

// function Bird() {
//   const birdRef = useRef();
//   const texture = useTexture("assets/textures/bird1.png");

//   return (
//     <mesh ref={birdRef} position={[15, -8, -20]} scale={10}>
//       <planeGeometry />
//       <meshBasicMaterial map={texture} transparent={true} />
//     </mesh>
//   );
// }

// export default function Herov1() {
//   return (
//     <Canvas
//       // style={{
//       //   position: "fixed",
//       //   top: 0,
//       //   height: '50%',
//       //   width: "50%",
//       // }}
//       camera={{ position: [0, 0, 30], fov: 50 }}
//     >
//       <color attach="background" args={["skyblue"]} />
//       <Environment preset="forest" />
//       <ParallaxScene />
//       <Bird />
//       <Env />
//     </Canvas>
//   );
// }

import Spline from "@splinetool/react-spline/next";

export default function HeroScene() {
  return (
    <main>
      <Spline scene="https://prod.spline.design/t7ZzHH89xEw7UgAe/scene.splinecode" />
    </main>
  );
}
