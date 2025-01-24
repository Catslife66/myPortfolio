import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Bungee, Bungee_Outline } from "next/font/google";

export const bungeeOutline = Bungee_Outline({
  subsets: ["latin"],
  variable: "--font-bungee-outline",
  weight: ["400"],
});

export const bungee = Bungee({
  subsets: ["latin"],
  variable: "--font-bungee",
  weight: ["400"],
});

export default function Hero() {
  const shadowRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const deltaX = (clientX - window.innerWidth / 2) / (window.innerWidth / 2); // Normalize to -1 to 1
    const deltaY =
      (clientY - window.innerHeight / 2) / (window.innerHeight / 2); // Normalize to -1 to 1

    // Map normalized values to the range of -2rem to 2rem
    const maxOffset = 2; // Maximum offset in rem
    const xOffset = deltaX * maxOffset; // Scale normalized deltaX
    const yOffset = deltaY * maxOffset;

    gsap.to(shadowRef.current, {
      top: `${yOffset}rem`,
      left: `${xOffset}rem`,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {});
  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="w-full h-screen" onMouseMove={handleMouseMove}>
      <div className="px-[10rem] py-[10rem]">
        <div className="relative">
          {/* Character */}
          <div
            className={`${bungeeOutline.className} text-white text-4xl relative z-10`}
          >
            Hello
            {/* <svg
              width="63"
              height="72"
              viewBox="0 0 63 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.795 0.747211L14.6502 0.5H14.3636H2H1.08989L1.57799 1.26815L23.5894 35.9091L1.57799 70.55L1.08989 71.3182H2H14.3636H14.6425L14.7891 71.0809L31.0909 44.679L47.3927 71.0809L47.5393 71.3182H47.8182H60.1818H61.0999L60.6018 70.5469L38.2316 35.9091L60.6018 1.27126L61.0999 0.5H60.1818H47.8182H47.5317L47.3868 0.747211L31.0909 28.5565L14.795 0.747211Z"
                fill="white"
                stroke="black"
              />
            </svg> */}
          </div>
          {/* Shadow */}
          <div
            ref={shadowRef}
            className={`${bungee.className} text-4xl char-shadow`}
          >
            {/* <svg
              width="63"
              height="72"
              viewBox="0 0 63 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.795 0.747211L14.6502 0.5H14.3636H2H1.08989L1.57799 1.26815L23.5894 35.9091L1.57799 70.55L1.08989 71.3182H2H14.3636H14.6425L14.7891 71.0809L31.0909 44.679L47.3927 71.0809L47.5393 71.3182H47.8182H60.1818H61.0999L60.6018 70.5469L38.2316 35.9091L60.6018 1.27126L61.0999 0.5H60.1818H47.8182H47.5317L47.3868 0.747211L31.0909 28.5565L14.795 0.747211Z"
                fill="black"
                stroke="black"
              />
            </svg> */}
            Hello
          </div>
        </div>
      </div>
    </div>
  );
}
