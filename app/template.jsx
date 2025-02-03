"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "./components/Header";
import Cursor from "./components/Cursor";

export default function Template({ children }) {
  const mainRef = useRef(null);

  useGSAP(() => {
    if (!mainRef) return;
    // gsap.to(".block", {
    //   scaleY: 0,
    //   ease: "power1.in",
    //   stagger: {
    //     each: 0.1,
    //     axis: "x",
    //   },
    //   onComplete: () => {
    //     mainRef.current.classList.remove("loading");
    //   },
    // });
  }, {});

  return (
    <>
      <Cursor />
      <Header />
      {/* page loading animation */}
      {/* <div className="load-animation-container">
        <div className="col">
          <div className="block top"></div>
          <div className="block bottom"></div>
        </div>
        <div className="col">
          <div className="block top"></div>
          <div className="block bottom"></div>
        </div>
        <div className="col">
          <div className="block top"></div>
          <div className="block bottom"></div>
        </div>
        <div className="col">
          <div className="block top"></div>
          <div className="block bottom"></div>
        </div>
        <div className="col">
          <div className="block top"></div>
          <div className="block bottom"></div>
        </div>
      </div> */}

      <main ref={mainRef} /*className="loading"*/>{children}</main>
    </>
  );
}

{
  /* loading animation version 2 */
}
// useGSAP(() => {
//   const blocks = containerRef.current.querySelectorAll(".block");
//   gsap.set(blocks, { scaleY: 1, transformOrigin: "top center" });

//   gsap.to(blocks, {
//     duration: () => Math.random(),
//     scaleY: 0,
//     ease: "power1.inOut",
//     stagger: {
//       from: "random",
//     },
//   });
// }, {});

{
  /* <div
        ref={containerRef}
        className="w-full h-screen flex flex-col flex-wrap"
      >
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-row flex-1">
            {Array.from({ length: 10 }).map((_, colIndex) => (
              <div key={colIndex} className="flex-1 bg-red-100 block"></div>
            ))}
          </div>
        ))}
      </div> */
}
