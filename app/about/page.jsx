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
import IntroParagraph from "../components/IntroParagraph";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function page() {
  const elStyels = [
    { backGround: "#CAE894", textColor: "black", spanColor: "black" },
    { backGround: "#AF95E2", textColor: "black", spanColor: "black" },
    { backGround: "#3E0B5E", textColor: "white", spanColor: "white" },
  ];
  useGSAP(() => {
    SplitText.create(".continue", {
      type: "words, chars",
      autoSplit: true,
      onSplit: (self) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".continue",
            start: "top 70%",
            end: "top 25%",
            scrub: true,
          },
        });

        return tl
          .from(self.chars, {
            xPercent: 10,
            yPercent: 5,
            opacity: 0,
            stagger: 0.1,
            ease: "power1.inOut",
          })
          .to(".fill-bg", {
            scaleX: 1,
            transformOrigin: "left top",
            duration: 1,
            ease: "power2.out",
          });
      },
    });
  }, {});

  return (
    <>
      <div className="w-full h-screen bg-blue-100"></div>
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-span-10">
          <h4 className="continue text-[3rem] font-thin text-end">
            I’m actively building and learning. For more, visit my{" "}
            <Link
              href={"/"}
              className="link-bg px-4 py-2 rounded-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-500 origin-bottom scale-x-0 fill-bg"></div>
              <span className="relative text-secondary font-semibold">
                github
              </span>
            </Link>
          </h4>
        </div>
      </div>
      <div className="w-full h-screen bg-blue-100"></div>
    </>
  );
}
