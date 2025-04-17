"use client";

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { experienceContent } from "../data/textContent";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";

export default function page() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const imgsRef = useRef(null);
  const targetRef = useRef(null);
  const itemRefs = useRef([]);

  const IMGWIDTH = 200;
  const IMGHEIGHT = 250;
  const XOFFSET = 20;

  const [displayIdx, setDisplayIdx] = useState(0);

  useGSAP(
    () => {
      gsap.registerPlugin(Observer);

      itemRefs.current.forEach((_item, idx) => {
        Observer.create({
          target: itemRefs.current[idx],
          type: "pointer",
          onHover: (self) => {
            setDisplayIdx(idx);
            const topEls = itemRefs.current[idx].querySelectorAll(".ot");
            const bottomEls = itemRefs.current[idx].querySelectorAll(".ob");
            gsap.to(topEls, {
              top: "-100%",
              duration: 0.3,
            });
            gsap.to(bottomEls, {
              top: "0%",
              duration: 0.3,
            });
            if (img1Ref.current && img2Ref.current) {
              gsap.to([img1Ref.current, img2Ref.current], {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                duration: 0.3,
                ease: "power3.out",
              });
            }
          },
          onHoverEnd: () => {
            const topEls = itemRefs.current[idx].querySelectorAll(".ot");
            const bottomEls = itemRefs.current[idx].querySelectorAll(".ob");
            gsap.to(bottomEls, {
              top: "100%",
              duration: 0.3,
            });
            gsap.to(topEls, {
              top: "0%",
              duration: 0.3,
            });

            gsap.to([img1Ref.current, img2Ref.current], {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
              duration: 0.3,
              ease: "power3.out",
            });
          },
          onMove: (self) => {
            let xPos;

            if (self.x + IMGWIDTH + XOFFSET >= window.innerWidth) {
              xPos = self.x - IMGWIDTH - XOFFSET;
            } else {
              xPos = self.x + XOFFSET;
            }

            if (imgsRef.current && img1Ref.current && img2Ref.current) {
              gsap.to(
                imgsRef.current,
                {
                  x: xPos,
                  y: self.y + 20,
                },
                0
              );
            }
          },
        });
      });
    },
    { scope: targetRef }
  );

  return (
    <div ref={targetRef} className="w-full h-screen">
      <div ref={imgsRef} className="absolute z-10">
        {displayIdx !== null && (
          <>
            <div className="w-[200px] h-[250px] absolute top-0 left-0 z-20">
              <img
                ref={img1Ref}
                className="clipImg"
                src={experienceContent[displayIdx].image.src}
                alt={experienceContent[displayIdx].image.alt}
              />
            </div>
            <div className="w-[200px] h-[250px] absolute top-10 left-5 z-20">
              <img
                ref={img2Ref}
                className="clipImg"
                src={experienceContent[displayIdx].image.src}
                alt={experienceContent[displayIdx].image.alt}
              />
            </div>
          </>
        )}
      </div>

      <div className="w-full h-screen px-4 flex flex-col justify-center lg:px-8">
        {experienceContent.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (itemRefs.current[idx] = el)}
            className="w-full flex flex-col items-center cursor-pointer py-2 lg:flex-row lg:items-end"
          >
            <div className="w-full text-center lg:text-start lg:w-1/4 h-[24px] font-semibold relative overflow-hidden">
              <span className="absolute w-full h-hull top-full left-0 text-gray-400 ob">
                {item.time}
              </span>
              <span className="absolute w-full h-hull top-0 left-0 ot">
                {item.time}
              </span>
            </div>

            <div className="w-full lg:w-1/2 h-[30px] text-xl md:text-2xl lg:text-3xl xl:text-4xl xl:h-[40px] font-bold text-center relative overflow-hidden">
              <span className="absolute w-full h-full top-full left-0 text-gray-400 ob">
                {item.workplace}
              </span>
              <span className="absolute w-full h-hull top-0 left-0 ot">
                {item.workplace}
              </span>
            </div>

            <div className="w-full text-center lg:w-1/4 h-[24px] font-semibold lg:text-end relative overflow-hidden">
              <span className="absolute w-full h-hull top-full left-0 text-gray-400 ob">
                {item.position}
              </span>
              <span className="absolute w-full h-hull top-0 left-0 ot">
                {item.position}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
