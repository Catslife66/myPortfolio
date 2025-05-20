import ProjectCards from "./ProjectCards";
import IntroParagraph from "@/app/components/IntroParagraph";
import { expToSkillContent } from "@/app/data/textContent";
import Continue from "./Continue";

export default function Index() {
  return (
    <section id="projects" className="w-full mt-[8rem] lg:mt-[4rem]">
      <IntroParagraph content={expToSkillContent.h2} cls="project" />
      <ProjectCards />
      <Continue />
    </section>
  );
}
