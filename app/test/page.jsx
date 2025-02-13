"use client";
import React, { useEffect, useRef } from "react";
import Cursor from "../components/Cursor";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Heading2 from "../components/Heading2";

export default function page() {
  const containerRef = useRef(null);

  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-heading-container ">
          {/* Character */}
          <div className={`hero-heading flex flex-col`}>
            <h1>XIAOHONG</h1>
            <h1>ZHUANG</h1>
          </div>
          {/* Shadow */}
          <div className={`hero-heading-shadow flex flex-col`}>
            <h1>XIAOHONG</h1>
            <h1>ZHUANG</h1>
          </div>
          {/* bg shadow */}
          <div className="hero-bg-shadow text-center font-extrabold">
            <h1>XIAOHONG</h1>
            <h1>ZHUANG</h1>
          </div>
        </div>
        <div className="w-1/2 text-center text-themeBlack text-sm py-[2rem] my-4 md:text-lg">
          A self-taught Programmer with a passion for Web development and a
          strong background in Marketing.
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8">
          <button className="btn primary-btn uppercase">
            Get my cv right away!
          </button>
          <button className="btn secondary-btn uppercase">
            Let me show you more about myself --.
          </button>
        </div>
      </div>
      <Heading2 content={"Heading"} />
      <div className="h-screen w-full bg-green-100"></div>
    </>
  );
}
