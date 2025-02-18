import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import FloatIcons from "./FloatIcons";

export default function Hero() {
  const heroSectionRef = useRef(null);
  const shadow1Ref = useRef(null);
  const shadow2Ref = useRef(null);
  const clipRef = useRef(null);

  function handleTextShadowMove({ deltaX, deltaY }) {
    if (!shadow1Ref.current || !shadow2Ref.current) return;
    const tl = gsap.timeline({
      duration: 0.3,
      ease: "power3.out",
    });
    const xOffset = 2;
    const yOffset = 8;
    tl.to(
      shadow1Ref.current,
      {
        translateX: deltaX >= 0 ? `${xOffset}%` : `-${xOffset}%`,
        translateY: deltaY >= 0 ? `${yOffset}%` : `-${yOffset}%`,
      },
      0
    ).to(
      shadow2Ref.current,
      {
        translateX: deltaX >= 0 ? `${xOffset}%` : `-${xOffset}%`,
        translateY: deltaY >= 0 ? `${yOffset}%` : `-${yOffset}%`,
      },
      0
    );
  }

  useGSAP(
    () => {
      const textMoveGroup = gsap.utils.toArray(".text-path");

      if (!textMoveGroup) return;
      textMoveGroup.forEach((textPath, _i) => {
        gsap.to(textPath, {
          rotate: "+=360",
          duration: 10,
          repeat: -1,
          ease: "none",
        });
      }, 0);

      if (!clipRef.current) return;
      gsap.to(clipRef.current, {
        attr: { cx: "80" },
        ease: "bounce",
        duration: 2,
        yoyo: true,
        repeat: -1,
      });

      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSectionRef.current,
          pin: true,
          start: "top top",
          end: `+=200`,
          scrub: 1,
          markers: true,
        },
      });

      tl.to(".hero-animation-wrapper", {
        scale: 1,
        transformOrigin: "center center",
      })
        .to(
          shadow1Ref.current,
          {
            x: -50,
            y: -100,
          },
          0
        )
        .to(
          shadow2Ref.current,
          {
            x: 50,
            y: 100,
          },
          0
        );
    },
    { scope: heroSectionRef.current }
  );

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const deltaX = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const deltaY =
      (clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    handleTextShadowMove({ deltaX, deltaY });
  };

  return (
    <div
      ref={heroSectionRef}
      className="relative w-full h-screen mx-auto flex flex-col justify-center items-center"
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full mx-auto flex flex-col justify-center items-center">
        <div className="relative">
          <div className="z-10 relative char-stroke px-4 text-white text-6xl font-extrabold text-center uppercase md:text-[120px]">
            Xiaohong
          </div>
          <div
            ref={shadow1Ref}
            className="h1-shadow px-4 text-6xl font-extrabold text-center uppercase md:text-[120px]"
          >
            Xiaohong
          </div>
        </div>
        <div className="text-gray-500 p-4 text-center ">
          A self-taught Programmer with a passion for Web development and a
          strong background in Marketing.
        </div>
        <div className="relative">
          <div className="z-10 relative char-stroke px-4 text-white text-6xl font-extrabold text-center uppercase md:text-[120px]">
            Zhuang
          </div>
          <div
            ref={shadow2Ref}
            className="h1-shadow px-4 text-6xl font-extrabold text-center uppercase md:text-[120px]"
          >
            Zhuang
          </div>
        </div>
        <div className="text-gray-400 text-sm text-center py-2">aka Josie</div>
      </div>
      <div className="absolute bottom-10">
        <div className="relative px-4 py-2 rounded-full overflow-hidden bg-blue-200">
          <span className="relative z-10 text-center text-sm uppercase">
            EXPLORE
          </span>
          <svg className="absolute top-0 left-0 w-full h-full z-0">
            <circle ref={clipRef} cx="20" cy="20" r="20" fill="yellow" />
          </svg>
        </div>
      </div>
      <FloatIcons />
      <div className="hero-animation-wrapper"></div>
    </div>
  );
}
