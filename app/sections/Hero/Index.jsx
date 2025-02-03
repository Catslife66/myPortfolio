import React, { useRef } from "react";
import gsap from "gsap";
import { Bungee, Bungee_Inline, Bungee_Outline } from "next/font/google";
import { PrimaryButton, SecondaryButton } from "@/app/components/Button";

export const bungeeInline = Bungee_Inline({
  subsets: ["latin"],
  variable: "--font-bungee-inline",
  weight: ["400"],
});

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
    const deltaX = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const deltaY =
      (clientY - window.innerHeight / 2) / (window.innerHeight / 2);

    const maxOffset = 0.8; // Maximum offset in rem
    const xOffset = deltaX * maxOffset;
    const yOffset = deltaY * maxOffset;

    gsap.to(shadowRef.current, {
      top: `${yOffset}rem`,
      left: `${xOffset}rem`,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <div
      className="max-w-screen-xl h-screen mx-auto flex flex-col justify-center items-center"
      onMouseMove={handleMouseMove}
    >
      <div className="hero-heading-container">
        {/* Character */}
        <div className={`${bungeeOutline.className} hero-heading`}>
          XIAOHONG ZHUANG
        </div>
        {/* Shadow */}
        <div
          ref={shadowRef}
          className={`${bungee.className} hero-heading-shadow`}
        >
          XIAOHONG ZHUANG
        </div>
      </div>

      <div className="text-center text-themeBlack text-sm p-[2rem] md:text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        ducimus natus asperiores, eveniet aliquam veritatis repudiandae id vero
        pariatur error corrupti quaerat aspernatur obcaecati quasi est ipsa ad
        voluptates debitis!
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8">
        {/* <PrimaryButton context="Get my cv right away!" />
        <SecondaryButton context="Let me show you more about myself ->" /> */}
        <button className="btn primary-btn">Get my cv right away!</button>
        <button className="btn secondary-btn">
          Let me show you more about myself --.
        </button>
      </div>
    </div>
  );
}
