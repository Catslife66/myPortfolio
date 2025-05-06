"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import Link from "next/link";

export default function NotFound() {
  const notFoundContainerRef = useRef(null);
  const shadowTopRef = useRef(null);
  const shadowBottomRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(Observer);

      Observer.create({
        target: notFoundContainerRef.current,
        onMove: (self) => {
          const clientX = self.x;
          const clientY = self.y;
          const deltaX =
            (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
          const deltaY =
            (clientY - window.innerHeight / 2) / (window.innerHeight / 2);
          const tl = gsap.timeline({
            duration: 0.3,
            ease: "power3.out",
          });
          const xOffset = 2;
          const yOffset = 8;
          tl.to(
            [shadowTopRef.current, shadowBottomRef.current],
            {
              translateX: deltaX >= 0 ? `${xOffset}%` : `-${xOffset}%`,
              translateY: deltaY >= 0 ? `${yOffset}%` : `-${yOffset}%`,
            },
            0
          );
        },
      });
    },
    { scope: notFoundContainerRef }
  );
  return (
    <div ref={notFoundContainerRef} className="w-full h-screen">
      <div className="w-full h-screen relative z-5 flex flex-col justify-center items-center space-y-4">
        <div className="relative">
          <h1 className="absolute tracking-wider top-0 left-0 z-10 char-stroke px-4 text-secondary text-6xl font-extrabold text-center uppercase md:text-[120px]">
            404
          </h1>
          <h1
            ref={shadowTopRef}
            className="h1-shadow tracking-wider px-4 text-6xl font-extrabold text-center uppercase md:text-[120px]"
          >
            404
          </h1>
        </div>
        <Link
          href={"/"}
          className="text-primary bg-lighter rounded-lg font-bold italic px-4 py-2 text-center"
        >
          Return Home
        </Link>
        <div className="relative">
          <h1 className="absolute top-0 left-0 z-10 char-stroke px-4 text-secondary text-6xl font-extrabold text-center uppercase md:text-[120px]">
            NOT FOUND
          </h1>
          <h1
            ref={shadowBottomRef}
            className="h1-shadow px-4 text-6xl font-extrabold text-center uppercase md:text-[120px]"
          >
            NOT FOUND
          </h1>
        </div>
      </div>
    </div>
  );
}
