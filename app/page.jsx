"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./components/Hero/HeroScene"), {
  ssr: false,
});

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  return (
    <main className="">
      <div className="w-full h-screen">
        <div className="w-full h-full">
          <HeroScene />
        </div>
        <Overlay />
      </div>
    </main>
  );
}
