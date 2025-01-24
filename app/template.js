"use client";

import React, { useLayoutEffect, useRef } from "react";
import { Bungee_Shade } from "next/font/google";
import gsap from "gsap";

export const bungeeSahde = Bungee_Shade({
  subsets: ["latin"],
  variable: "--font-bungee-shade",
  weight: ["400"],
});

export default function Template({ children }) {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    let cxt = gsap.context(() => {
      let tl = gsap.timeline();
      tl.to(".loader-container", {
        duration: 2,
        clipPath: "inset(100% 0% 0% 0%)",
        opacity: 0,
        ease: "power1.inOut",
        onComplete: () => {
          mainRef.current.classList.remove("loading");
          mainRef.current.classList.add("animate-appear");
        },
      });
    });
    return () => cxt.revert();
  }, []);

  return (
    <main>
      <div className="loader-container">
        <div className={`${bungeeSahde.className} loader`}>LOADING</div>
      </div>

      <div ref={mainRef} className="loading">
        {children}
      </div>
    </main>
  );
}
