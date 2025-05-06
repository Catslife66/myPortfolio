"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ReactLenis, useLenis } from "lenis/react";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";

export default function Template({ children }) {
  const lenis = useLenis(({ scroll }) => {});

  const loadingRef = useRef(null);
  const mainRef = useRef(null);

  useGSAP(() => {
    if (!mainRef) return;

    const blocks = loadingRef.current.querySelectorAll(".block");
    gsap.set(blocks, { scaleY: 1, transformOrigin: "top center" });

    gsap.to(blocks, {
      duration: () => Math.random(),
      scaleY: 0,
      ease: "power1.inOut",
      stagger: {
        from: "random",
      },
      onComplete: () => {
        mainRef.current.classList.remove("loading");
      },
    });
  }, {});

  return (
    <ReactLenis root>
      {/* <Cursor /> */}
      <Header />
      {/* page loading animation */}
      <div ref={loadingRef} className="load-animation-container">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-row flex-1">
            {Array.from({ length: 10 }).map((_, colIndex) => (
              <div key={colIndex} className="block"></div>
            ))}
          </div>
        ))}
      </div>

      <main ref={mainRef} className="loading">
        {children}
      </main>
      <Footer />
    </ReactLenis>
  );
}
