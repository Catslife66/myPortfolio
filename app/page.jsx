"use client";

// import SphereScene from "./components/Sphere";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/Hero"), {
  ssr: false,
});

const Intro = dynamic(() => import("./components/Intro"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-full relative">
      <div className="w-full h-screen">
        <Hero />
      </div>
      <div className="w-full h-full" style={{ height: "1400px" }}>
        <Intro />
      </div>
      <div className="w-full h-screen">hello</div>
    </main>
  );
}
