"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ExperienceItem from "./ExperienceItem";
import { experienceData } from "@/app/data/experienceData";

export default function Experience() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".mask-img", {
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: "top top",
        endTrigger: ".mask-img",
        end: "bottom 20%",
        scrub: true,
        markers: true,
      },
      ease: "power1.out",
    });
  }, {});

  return (
    <>
      <div
        className="relative masking-container border-b border-themeBlueD"
        ref={containerRef}
      >
        <div className="max-w-screen-xl mx-auto text-center text-lg h-screen flex flex-wrap justify-center items-center md:text-2xl md:px-[8rem] lg:text-3xl">
          <p className="px-4 leading-[4rem] md:leading-[5rem]">
            With{" "}
            <span className="font-bold px-4 text-xl md:text-3xl lg:text-4xl">
              5
            </span>{" "}
            years of experience in{" "}
            <span className="font-bold px-4 text-xl md:text-3xl lg:text-4xl">
              hotel marketing,
            </span>{" "}
            I specialised in crafting impactful strategies, launching innovative
            <span className="font-bold px-4 text-xl md:text-3xl lg:text-4xl">
              digital platforms,{" "}
            </span>
            and redefining guest engagement through{" "}
            <span className="font-bold px-4 text-xl md:text-3xl lg:text-4xl">
              creativity,{" "}
            </span>
            <span className="font-bold px-4 text-xl md:text-3xl lg:text-4xl">
              collaboration,{" "}
            </span>
            and a
            <span className="font-bold px-4 text-xl md:text-3xl lg:text-4xl">
              commitment
            </span>{" "}
            to excellence.
          </p>
        </div>
        <div className="mask-img">
          <div className="max-w-screen-xl mx-auto text-center text-lg h-screen flex flex-wrap justify-center items-center md:text-2xl md:px-[8rem] lg:text-3xl">
            <p className="px-4 leading-[4rem] md:leading-[5rem]">
              With{" "}
              <span className="font-bold px-4 text-xl md:text-3xl lg:text-4xl">
                5
              </span>{" "}
              years of experience in{" "}
              <span className="font-bold px-4 text-xl md:text-3xl lg:text-4xl">
                hotel marketing,
              </span>{" "}
              I specialised in crafting impactful strategies, launching
              innovative
              <span className="font-bold px-4 text-xl md:text-3xl lg:text-4xl">
                digital platforms,{" "}
              </span>
              and redefining guest engagement through{" "}
              <span className="font-bold px-4 text-xl md:text-3xl lg:text-4xl">
                creativity,{" "}
              </span>
              <span className="font-bold px-4 text-xl md:text-3xl lg:text-4xl">
                collaboration,{" "}
              </span>
              and a
              <span className="font-bold px-4 text-xl md:text-3xl lg:text-4xl">
                commitment
              </span>{" "}
              to excellence.
            </p>
          </div>
        </div>
      </div>

      {experienceData.map((item, i) => (
        <ExperienceItem
          key={i}
          time={item.time}
          workplace={item.workplace}
          location={item.location}
          position={item.position}
        />
      ))}
    </>
  );
}
