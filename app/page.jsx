"use client";

import dynamic from "next/dynamic";

import ExperienceSection from "./sections/Experience/Index";

import Hero from "./sections/Hero/Index";
import SkillIndex from "./sections/Skills/Index";
import ProjectItem from "./sections/Projects/ProjectItem";

export default function Home() {
  return (
    <div className="">
      <Hero />

      <ExperienceSection />

      <div className="w-full h-full inline-block">
        <h2>skills</h2>
        <SkillIndex />
      </div>

      <div className="inline-block w-full h-screen bg-green-800">
        <h1>HELLO WORLD</h1>
        <ProjectItem />
      </div>
      {/* <div className="h-screen bg-red-400"></div>
      <div className="h-screen bg-green-400"></div>
      <div className="h-screen bg-blue-400"></div>  */}
    </div>
  );
}
