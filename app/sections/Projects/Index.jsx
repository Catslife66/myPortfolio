import Continue from "./Continue";
import ProjectSlides from "./ProjectSlides";
import ProHeading from "./ProHeading";

export default function Index() {
  return (
    <section id="projects" className="w-full mt-[8rem] lg:mt-[4rem]">
      <ProHeading />
      <ProjectSlides />
      <Continue />
    </section>
  );
}
