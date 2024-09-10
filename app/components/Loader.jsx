import { Canvas } from "@react-three/fiber";
import { Environment, Html, useProgress } from "@react-three/drei";

function ProgressLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        className="relative border items-center"
        style={{ width: "250px", height: "20px" }}
      >
        <div
          className="bg-blue-600"
          style={{ width: `${progress.toFixed(2)}%`, height: "20px" }}
        ></div>
        <div className="absolute text-white text-xs font-medium top-0 left-0 pl-2">
          {progress.toFixed(2)} % <span className="px-2">loaded</span>
        </div>
      </div>
    </Html>
  );
}

const Loader = () => {
  return (
    <div className="bg-skyblue h-screen w-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight intensity={1} position={[2, 5, 0]} castShadow />
        <ProgressLoader />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Loader;
