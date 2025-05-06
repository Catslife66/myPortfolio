import React from "react";
import gsap from "gsap";
import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import IntroParagraph from "@/app/components/IntroParagraph";
import { expToSkillContent } from "@/app/data/textContent";
import { projectsContent } from "@/app/data/projectsContent";

export default function Index() {
  return (
    <section id="projects">
      <IntroParagraph content={expToSkillContent.h2} cls="project" />
      <div className="w-full py-[4rem] md:pt-[8rem]">
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
