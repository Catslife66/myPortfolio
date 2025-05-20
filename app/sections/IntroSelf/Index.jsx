import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
  aboutImgGroup,
  experienceIntro,
  meImgGroup,
} from "@/app/data/textContent";
import SectionIntro from "@/app/components/SectionIntro";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function IntroSelf() {
  const introContentRef = useRef(null);

  useGSAP(
    () => {
      SplitText.create(".introself", {
        type: "words, lines",
        wordsClass: "introwords++",
        linesClass: "lines",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".introself",
              start: "top 70%",
              end: "top 25%",
              scrub: true,
            },
          });

          return tl.from(self.lines, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
            ease: "none",
          });
        },
      });
    },
    { scope: introContentRef }
  );

  return (
    <section id="intro" className="w-full">
      <SectionIntro itemsGroup={[aboutImgGroup, meImgGroup]} />
      <div ref={introContentRef} className="grid grid-cols-12 py-[4rem]">
        <div className="col-span-10 col-start-2 z-10 text-lg font-light md:text-xl lg:text-2xl">
          <div className="introself">{experienceIntro.content}</div>
        </div>
      </div>
    </section>
  );
}
