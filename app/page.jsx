"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import dynamic from "next/dynamic";

import ExperienceSection from "./sections/Experience/Index";

import Hero from "./sections/Hero/Index";
import SkillIndex from "./sections/Skills/Index";
import ProjectItem from "./sections/Projects/ProjectItem";
import ExperienceIntro from "./sections/Experience/ExperienceIntro";

export default function Home() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin",
        start: "top top",
        end: () => window.innerHeight * 2,
        scrub: 1,
        pin: true,
        markers: true,
      },
    });

    tl.to(
      ".layer",
      {
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      },
      0
    )
      .from(".scaleTarget", { scale: 0.2, opacity: 0 }, 0)

      .to(".para1 span", {
        opacity: 1,
        stagger: {
          each: 0.01,
          ease: "none",
          from: "start",
        },
      })
      .to(".para2 span", {
        opacity: 1,
        stagger: {
          each: 0.01,
          ease: "none",
          from: "start",
        },
      })
      .to(".para3 span", {
        opacity: 1,
        stagger: {
          each: 0.01,
          ease: "none",
          from: "start",
        },
      });
  }, {});

  return (
    <>
      <div className="relative pin">
        <Hero />

        <div className="z-30 w-full layer flex justify-center items-center">
          <ExperienceIntro />
        </div>
      </div>

      <div className="w-full h-screen bg-red-200">placeholder</div>

      {/* <div className="w-full h-full inline-block">
        <h2>skills</h2>
        <SkillIndex />
      </div> */}

      <div className="inline-block w-full h-screen bg-green-800">
        <h1>HELLO WORLD</h1>
        <ProjectItem />
      </div>

      {/* <div className="h-screen bg-red-400"></div>
      <div className="h-screen bg-green-400"></div>
      <div className="h-screen bg-blue-400"></div>  */}
    </>
  );
}
