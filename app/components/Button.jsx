"use client";

import gsap from "gsap";

export function PrimaryButton({ context }) {
  const handleHover = (e) => {
    const buttonTarget = e.currentTarget.querySelector(".clip-target");
    gsap.to(buttonTarget, { width: "100%", duration: 0.5, ease: "power2.out" });
  };

  const handleLeave = (e) => {
    const buttonTarget = e.currentTarget.querySelector(".clip-target");
    gsap.to(buttonTarget, { width: "0%", duration: 0.5, ease: "power2.in" });
  };

  return (
    <>
      <button
        className="relative px-4 py-2 border  rounded-full overflow-hidden bg-themePinkL"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <span className="relative z-10 text-themeBlack">{context}</span>
        <svg className="absolute top-0 left-0 w-full h-full z-0">
          <rect
            className="clip-target"
            width="0%"
            height="100%"
            rx="20"
            // fill="#F06C9B"
            fill="#F5D491"
          />
        </svg>
      </button>
    </>
  );
}

export function SecondaryButton({ context }) {
  const handleHover = (e) => {
    const buttonTarget = e.currentTarget.querySelector(".clip-target");
    gsap.to(buttonTarget, { width: "100%", duration: 0.5, ease: "power2.out" });
  };

  const handleLeave = (e) => {
    const buttonTarget = e.currentTarget.querySelector(".clip-target");
    gsap.to(buttonTarget, { width: "0%", duration: 0.5, ease: "power2.in" });
  };

  return (
    <>
      <button
        className="relative px-4 py-2 rounded-full overflow-hidden bg-themeBlueL"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <span className="relative z-10 text-themeWhite">{context}</span>
        <svg className="absolute top-0 left-0 w-full h-full z-0">
          <rect
            className="clip-target"
            width="0%"
            height="100%"
            rx="20"
            // fill="#61A0AF"
            fill="#F06C9B"
          />
        </svg>
      </button>
    </>
  );
}
