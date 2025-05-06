"use client";

import dynamic from "next/dynamic";

import Hero from "./sections/Hero/Index";

import Experience from "./sections/Experience/Index";
import IntroSelf from "./sections/IntroSelf/Index";
import SkillIndex from "./sections/Skills/Index";
import Index from "./sections/Projects/Index";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSelf />
      <Experience />
      <SkillIndex />
      <Index />
    </>
  );
}
