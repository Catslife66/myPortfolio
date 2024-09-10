"use client";

import React, { useEffect, useState } from "react";

import Hero from "../components/HeroSpline";
import Intro from "../components/Intro";
import Experience from "../components/Experience";

const HomepageTest = () => {
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const target = document.getElementById("section1");
      target.style.marginTop = scrollY * 2 + "px";
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <section className="relative flex justify-center items-center h-screen w-full">
        <div id="section1" className="abosulute h-screen w-full">
          <Hero />
        </div>
      </section>

      <section className="relative h-screen w-full">
        <div className="h-screen w-full">
          <Intro />
        </div>
      </section>

      <section className="h-screen w-full">
        <Experience />
      </section>
    </main>
  );
};

export default HomepageTest;
