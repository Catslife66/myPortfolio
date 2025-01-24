import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";

export default function Heading2({ content }) {
  const contentArray = content.split("");

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const original = document.querySelector(".original");
    const copy = document.querySelector(".copy");

    const originalSpans = original.querySelectorAll(".spin-text");
    const copySpans = copy.querySelectorAll(".spin-text");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".original",
          start: "top 50%",
          end: "bottom 50%",
          scrub: 1,
          markers: true,
        },
      });

      tl.to(
        originalSpans,
        {
          duration: 0.4,
          rotationX: 90,
          opacity: 0,
          transformOrigin: "center center",
          stagger: {
            each: 0.02,
            ease: "power2",
            from: "start",
          },
        },
        0
      )
        .to(
          copySpans,
          {
            duration: 0.05,
            opacity: 1,
            stagger: {
              each: 0.02,
              ease: "power2",
              from: "start",
            },
          },
          0.001
        )
        .to(
          copySpans,
          {
            duration: 0.4,
            rotationX: 0,
            translateY: "-50%",
            transformOrigin: "center center",
            stagger: {
              each: 0.02,
              ease: "power2",
              from: "start",
            },
          },
          0
        );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="spin-container">
        <h2 className="original flex flex-row">
          {contentArray.map((char, i) => (
            <span
              key={i}
              className="spin-text text-red-200"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </span>
          ))}
        </h2>
        <h2 className="copy flex flex-row">
          {contentArray.map((char, i) => (
            <span
              key={i}
              className="spin-text text-red-800"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </span>
          ))}
        </h2>
      </div>
    </>
  );
}
