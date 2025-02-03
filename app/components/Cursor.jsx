"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const mouseRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const isOverLinks = e.target.closest(".link");
      if (isOverLinks) {
        gsap.to(mouseRef.current, {
          opacity: 0,
          ease: "none",
        });
      } else {
        gsap.to(mouseRef.current, {
          opacity: 1,
          x: e.clientX - 10,
          y: e.clientY - 10,
          duration: 0.05,
          ease: "power1.inOut",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={mouseRef}
      className="fixed rounded-full bg-themePinkL"
      style={{
        width: "20px",
        height: "20px",
        opacity: 0,
        pointerEvents: "none",
      }}
    ></div>
  );
}
