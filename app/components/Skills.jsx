"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sRef = useRef();

  useEffect(() => {
    gsap.to(".square", {
      scrollTrigger: {
        trigger: sRef.current, // The wrapper div
        start: "top 20%", // Start pinning at 20% of the viewport height
        end: "+=500", // End 500px from the top of the element
        pin: true, // Pin the element
        scrub: true, // Smoothly transition the animation with scrolling
        markers: true, // Enable markers to debug positions
      },
      x: 800, // Move the square 800px to the right
    });
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="wrapper" ref={sRef}>
        <div className="square"></div>
      </div>
    </div>
  );
}
