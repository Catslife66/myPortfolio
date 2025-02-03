"use client";

import dynamic from "next/dynamic";

import ExperienceList from "./sections/Experience/ExperienceItem";
import SkillSection from "./sections/SkillSection";
import Heading2 from "./components/Heading2";
import Experience from "./sections/Experience/Index";
import NavLink from "./components/NavLink";
import Hero from "./sections/Hero/Index";

export default function Home() {
  return (
    <>
      <div className="bg-themeWhite">
        <Hero />
      </div>
      <div className="">
        <Experience />
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>

      {/* <div className="h-screen"></div>
      <div className="h-screen bg-red-400"></div>
      <div className="h-screen bg-green-400"></div>
      <div className="h-screen bg-blue-400"></div> */}
    </>
  );
}
