"use client";

import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PixiPlugin from "gsap/PixiPlugin";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { projectsContent } from "../data/projectsContent";
import Observer from "gsap/Observer";

import { SplitText } from "gsap/SplitText";
import ProjectSlides from "../sections/Projects/ProjectSlides";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function page() {
  useGSAP(() => {}, {});

  return (
    <>
      <div className="w-full h-screen bg-blue-100"></div>
      <ProjectSlides />
      <div className="w-full h-screen bg-blue-100"></div>
    </>
  );
}
