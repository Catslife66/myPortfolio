"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".mask-img", {
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)", // Grow to full size
        scrollTrigger: {
          trigger: ".wrapper",
          pin: true,
          start: "top 20%",
          endTrigger: ".mask-img",
          end: "bottom 20%",
          scrub: true,
          markers: true,
        },
        ease: "power1.out",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="text-container text-3xl px-[18rem] py-[4rem] text-center leading-[4rem]">
          With <span className="text-4xl font-bold px-4">5</span> years of
          experience in{" "}
          <span className="text-4xl font-bold px-4">hotel marketing</span>, I
          specialised in crafting impactful strategies, launching innovative{" "}
          <span className="text-4xl font-bold px-4">digital platforms</span>,
          and redefining guest engagement through{" "}
          <span className="text-4xl font-bold px-4">creativity</span>,{" "}
          <span className="text-4xl font-bold px-4">collaboration</span>, and a
          <span className="text-4xl font-bold px-4">commitment</span> to
          excellence.
        </div>
        <div className="mask-img">
          <div className="text-3xl px-[18rem] py-[4rem] text-center leading-[4rem]">
            With <span className="text-4xl font-bold px-4">5</span> years of
            experience in{" "}
            <span className="text-4xl font-bold px-4">hotel marketing</span>, I
            specialised in crafting impactful strategies, launching innovative{" "}
            <span className="text-4xl font-bold px-4">digital platforms</span>,
            and redefining guest engagement through{" "}
            <span className="text-4xl font-bold px-4">creativity</span>,{" "}
            <span className="text-4xl font-bold px-4">collaboration</span>, and
            a<span className="text-4xl font-bold px-4">commitment</span> to
            excellence.
          </div>
        </div>
      </div>
      {/* <div className="relative max-w-screen-xl mx-auto w-full h-full">
        <div className="bg-mask">
          <div className="bg-target pt-[10rem] text-4xl space-y-8">
            <div>5 years of marketing in the hotel industry.</div>
            <div>Developed branding strategies and digital platforms.</div>
            <div>Executed campaigns to drive growth and engagement.</div>
          </div>
        </div>
        <div className="fg">
          <div className="pt-[10rem] text-4xl space-y-8">
            <div>5 years of marketing in the hotel industry.</div>
            <div>Developed branding strategies and digital platforms.</div>
            <div>Executed campaigns to drive growth and engagement.</div>
          </div>
        </div>
      </div> */}

      {/* details */}
      {/* <div className="w-full flex flex-col space-y-8">
        <div>
          <div className="max-w-screen-xl mx-auto">
            <span>Aug 2017 - Dec 2020</span>
            <span>China Southern Airlines Hotel Management Division</span>
            <span>Branding & Positioning Specialist</span>
          </div>
        </div>
        <div>
          <div className="max-w-screen-xl mx-auto">
            <span>Aug 2017 - Dec 2020</span>
            <span>China Southern Airlines Hotel Management Division</span>
            <span>Branding & Positioning Specialist</span>
          </div>
        </div>
        <div>
          <div className="max-w-screen-xl mx-auto">
            <span>Aug 2017 - Dec 2020</span>
            <span>China Southern Airlines Hotel Management Division</span>
            <span>Branding & Positioning Specialist</span>
          </div>
        </div>
      </div> */}
    </>
  );
}

{
  /* <div className="text-3xl px-[18rem] py-[4rem] text-center leading-[4rem]">
          With <span className="text-4xl font-bold px-4">5</span> years of
          experience in{" "}
          <span className="text-4xl font-bold px-4">hotel marketing</span>, I
          specialised in crafting impactful strategies, launching innovative{" "}
          <span className="text-4xl font-bold px-4">digital platforms</span>,
          and redefining guest engagement through{" "}
          <span className="text-4xl font-bold px-4">creativity</span>,{" "}
          <span className="text-4xl font-bold px-4">collaboration</span>, and a
          <span className="text-4xl font-bold px-4">commitment</span> to
          excellence.
        </div> */
}
