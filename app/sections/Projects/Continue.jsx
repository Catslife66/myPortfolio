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
    <div ref={textRef} className="grid grid-cols-12">
      <div className="col-start-2 col-span-10">
        <h4 className="continue font-semibold text-shadow text-secondary text-2xl text-center md:text-3xl">
          I’m actively building and learning. For more, visit my{" "}
          <Link
            href={"https://github.com/Catslife66"}
            className="px-4 py-2 rounded-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-secondary scale-x-0 rounded-lg fill-bg">
              <svg
                className="text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                />
              </svg>
            </div>
            <span className="relative text-white font-semibold">github</span>
          </Link>
        </h4>
      </div>
    </div>
  );
}
