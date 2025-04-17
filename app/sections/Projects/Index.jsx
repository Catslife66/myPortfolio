import ProjectsList from "./ProjectsList";
import IntroParagraph from "@/app/components/IntroParagraph";
import { expToSkillContent } from "@/app/data/textContent";

export default function Index() {
  return (
    <>
      <IntroParagraph
        content={expToSkillContent.h2}
        cls={expToSkillContent.class}
        containerCls="pb-[4rem] pt-[8rem] md:pb-[5rem] md:pt-[4rem] lg:pt-[3rem]"
      />
      <div className="w-full py-[4rem] md:pt-[5rem]">
        <div className="flex flex-col space-y-8 py-8">
          <ProjectsList />
          <ProjectsList />
          <ProjectsList />
          <ProjectsList />
        </div>
      </div>
    </>
  );
}
