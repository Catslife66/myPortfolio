"use client";

import dynamic from "next/dynamic";

import ExperienceSection from "./sections/Experience/Index";

import Hero from "./sections/Hero/Index";
import SkillSection from "./sections/SkillSection";

export default function Home() {
  return (
    <div className="bg-blue-100">
      <Hero />
      <ExperienceSection />
      <SkillSection />

      <div className="h-screen bg-green-500"></div>
      <div className="h-screen bg-red-400"></div>
      <div className="h-screen bg-green-400"></div>
      <div className="h-screen bg-blue-400"></div>
    </div>
  );
}
