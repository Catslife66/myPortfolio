"use client";

import dynamic from "next/dynamic";

import ExperienceList from "./sections/Experience/ExperienceList";
import SkillSection from "./sections/SkillSection";
import Heading2 from "./components/Heading2";
import Experience from "./sections/Experience/Index";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen ">
        <Heading2 content={"HELLO THERE"} />
      </div>

      <div className="h-screen bg-purple-400">{/* <SkillSection /> */}</div>

      <div className="h-screen bg-amber-400">
        {/* <Experience />
        <ExperienceList /> */}
      </div>
      <div className="h-screen bg-red-400"></div>
      <div className="h-screen bg-green-400"></div>
      <div className="h-screen bg-blue-400"></div>
    </>
  );
}
