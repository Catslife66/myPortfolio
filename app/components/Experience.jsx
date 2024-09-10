import Spline from "@splinetool/react-spline/next";
import { Suspense } from "react";

const Experience = () => {
  return (
    <>
      <h1>hi</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full h-screen">
          <Spline scene="https://prod.spline.design/TXOSXs66dPJWqcuG/scene.splinecode" />
        </div>
      </Suspense>
    </>
  );
};

export default Experience;
