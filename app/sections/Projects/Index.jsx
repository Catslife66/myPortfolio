import React from "react";
import ProjectCard from "./ProjectCard";
import IntroParagraph from "@/app/components/IntroParagraph";
import { expToSkillContent } from "@/app/data/textContent";
import { projectsContent } from "@/app/data/projectsContent";

export default function Index() {
  return (
    <section id="projects">
      <IntroParagraph
        content={expToSkillContent.h2}
        cls={expToSkillContent.class}
        containerCls="pb-[4rem] pt-[8rem] md:pb-[5rem] md:pt-[4rem] lg:pt-[3rem]"
      />
      <div className="w-full py-[4rem] md:pt-[5rem]">
        <div className="flex flex-col space-y-8 py-8">
          {projectsContent.map((project, idx) => (
            <React.Fragment key={idx}>
              <ProjectCard project={project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
