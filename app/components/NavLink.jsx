"use client";

import Link from "next/link";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function NavLink({ title, href, onClick }) {
  const handleMouseEnter = (e) => {
    const target = e.currentTarget.querySelector(".line");

    let tl = gsap.timeline();
    tl.to(target, {
      opacity: 1,
      attr: {
        d: "M2.5 11C2.5 11 29.9237 11 48 11C66.0763 11 93.5 11 93.5 11",
      },
      duration: 0.05,
      ease: "bounce",
    })
      .to(target, {
        opacity: 1,
        transformOrigin: "center center",
        attr: {
          d: "M2.5 11C2.5 11 29.9586 19 48 19C66.0414 19 93.5 11 93.5 11",
        },
        duration: 0.05,
        ease: "bounce",
      })
      .to(target, {
        opacity: 1,
        transformOrigin: "center center",
        attr: {
          d: "M2.5 11C2.5 11 29.9237 11 48 11C66.0763 11 93.5 11 93.5 11",
        },
        duration: 0.05,
        ease: "bounce",
      })
      .to(target, {
        opacity: 1,
        transformOrigin: "center center",
        attr: {
          d: "M2.5 11C2.5 11 29.9237 2.5 48 2.5C66.0763 2.5 93.5 11 93.5 11",
        },
        duration: 0.05,
        ease: "bounce",
      })
      .to(target, {
        opacity: 1,
        transformOrigin: "center center",
        attr: {
          d: "M2.5 11C2.5 11 29.9237 11 48 11C66.0763 11 93.5 11 93.5 11",
        },
        duration: 0.05,
        ease: "bounce",
      });
  };

  const handleMouseLeave = (e) => {
    const target = e.currentTarget.querySelector(".line");
    gsap.set(target, {
      opacity: 0,
    });
  };

  return (
    <div
      className="link link-container p-[2rem]"
      //   onMouseEnter={handleMouseEnter}
      //   onMouseLeave={handleMouseLeave}
    >
      <Link className="nav-link" href={href} onClick={onClick}>
        {title}
      </Link>

      <svg
        width="96"
        height="21"
        viewBox="0 0 96 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="line opacity-0"
          d="M2.5 11C2.5 11 29.9237 11 48 11C66.0763 11 93.5 11 93.5 11"
          //d="M2.5 11C2.5 11 29.9586 19 48 19C66.0414 19 93.5 11 93.5 11"
          //d="M2.5 11C2.5 11 29.9237 2.5 48 2.5C66.0763 2.5 93.5 11 93.5 11"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
