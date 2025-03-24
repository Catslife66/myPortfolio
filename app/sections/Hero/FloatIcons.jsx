import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Icons({ pathClassName = "", content = "" }) {
  return (
    <div className={`text-path ${pathClassName}`}>
      <svg
        width="220"
        height="220"
        viewBox="-20 -20 220 220"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id={pathClassName}
            d="M0,90 
         A90,90 0 1,1 180,90 
         A90,90 0 1,1 0,90"
            fill="black"
            stroke="black"
          />
        </defs>
        <text className="text-lg" fill="black">
          <textPath href={`#${pathClassName}`}>{content}</textPath>
        </text>
      </svg>
    </div>
  );
}

export default function FloatIcons() {
  useGSAP(() => {
    const textMoveGroup = gsap.utils.toArray(".text-path");

    if (!textMoveGroup) return;
    textMoveGroup.forEach((textPath, _i) => {
      gsap.to(textPath, {
        rotate: "+=360",
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    }, 0);
  }, {});

  return (
    <div className="w-full h-full absolute hidden top-0 left-0 z-2 sm:block">
      {/* icon 1 */}
      <Icons
        pathClassName="text-1-path"
        content="Detail-Oriented | Problem-Solver"
      />
      {/* icon 2 */}
      <Icons
        pathClassName="text-2-path"
        content="Passionate About Web Developer"
      />

      {/* icon 3 */}
      <Icons pathClassName="text-3-path" content="Nature & Animal Lover" />

      {/* icon 4 */}
      <Icons pathClassName="text-4-path" content="Multi-culture" />
    </div>
  );
}
