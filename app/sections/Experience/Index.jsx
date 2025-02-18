import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ExperienceDetail from "./ExperienceDetail";

export default function ExperienceSection() {
  const divRef = useRef(null);
  const introRef = useRef(null);
  const mask1Ref = useRef(null);
  const mask2Ref = useRef(null);
  const mask3Ref = useRef(null);
  const mask4Ref = useRef(null);
  const detailRef = useRef(null);
  const content1 = "5+ years in hotel marketing & branding".split(" ");
  const content2 = "Expertise in digital platforms & strategy".split(" ");
  const content3 = "Led content, design & hotel booking systems".split(" ");
  const content4 = "Executed campaigns & brand positioning".split(" ");

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const clipShape = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: divRef.current,
          scrub: 1,
          pin: true,
          start: "top top",
          endTrigger: detailRef.current,
          end: "top top",
          ease: "none",
          duration: 2,
        },
      });
      tl.to(mask1Ref.current, {
        clipPath: clipShape,
      })
        .to(mask2Ref.current, {
          clipPath: clipShape,
        })
        .to(mask3Ref.current, {
          clipPath: clipShape,
        })
        .to(mask4Ref.current, {
          clipPath: clipShape,
        })
        .to(detailRef.current, {
          yPercent: -100,
          duration: 1,
        });
    },
    { scope: divRef.current }
  );

  return (
    <div ref={divRef} className="relative w-full h-screen bg-purple-100">
      <div
        ref={introRef}
        className="relative w-full h-screen mx-auto justify-center items-center px-4 py-[4rem] text-xl font-bold md:text-3xl md:py-[8rem] lg:text-4xl"
      >
        {/* text outline */}
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <div className="flex flex-row flex-wrap mb-8">
            {content1.map((char, i) => (
              <span key={i} className="char-stroke text-white pe-4">
                {char}
              </span>
            ))}
          </div>
          <div className="flex flex-row flex-wrap mb-8">
            {content2.map((char, i) => (
              <span key={i} className="char-stroke text-white pe-4">
                {char}
              </span>
            ))}
          </div>
          <div className="flex flex-row flex-wrap mb-8">
            {content3.map((char, i) => (
              <span key={i} className="char-stroke text-white pe-4">
                {char}
              </span>
            ))}
          </div>
          <div className="flex flex-row flex-wrap mb-8">
            {content4.map((char, i) => (
              <span key={i} className="char-stroke text-white pe-4">
                {char}
              </span>
            ))}
          </div>
        </div>
        {/* text fill */}
        <div className="absolute top-0 left-0 w-full h-full text-yellow-500 justify-center items-center px-4 py-[4rem] md:py-[8rem] flex flex-col">
          <div
            ref={mask1Ref}
            className="text-mask flex flex-row flex-wrap mb-8"
          >
            {content1.map((char, i) => (
              <span key={i} className="pe-4">
                {char}
              </span>
            ))}
          </div>
          <div
            ref={mask2Ref}
            className="text-mask flex flex-row flex-wrap mb-8"
          >
            {content2.map((char, i) => (
              <span key={i} className="pe-4">
                {char}
              </span>
            ))}
          </div>
          <div
            ref={mask3Ref}
            className="text-mask flex flex-row flex-wrap mb-8"
          >
            {content3.map((char, i) => (
              <span key={i} className="pe-4">
                {char}
              </span>
            ))}
          </div>
          <div
            ref={mask4Ref}
            className="text-mask flex flex-row flex-wrap mb-8"
          >
            {content4.map((char, i) => (
              <span key={i} className="pe-4">
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* experience details */}
      <div
        ref={detailRef}
        className="detail-section absolute bottom-0 py-4 md:py-[8rem]"
      >
        <ExperienceDetail />
      </div>
    </div>
  );
}
