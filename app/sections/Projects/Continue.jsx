import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);
export default function Continue() {
  const textRef = useRef(null);
  useGSAP(
    () => {
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
              rotate: "-4deg",
              translateY: "8px",
              transformOrigin: "left top",
              duration: 1,
              ease: "power2.out",
            });
        },
      });
    },
    { scope: textRef }
  );
  return (
    <div ref={textRef} className="grid grid-cols-12 md:-mt-[4rem]">
      <div className="col-start-2 col-span-10">
        <h4 className="continue text-[3rem] font-thin text-end">
          I’m actively building and learning. For more, visit my{" "}
          <Link
            href={"/"}
            className="link-bg px-4 py-2 rounded-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-secondary scale-x-0 rounded-lg fill-bg"></div>
            <span className="relative text-white font-semibold">github</span>
          </Link>
        </h4>
      </div>
    </div>
  );
}
