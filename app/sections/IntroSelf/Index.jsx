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
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function IntroSelf() {
  const contentRef = useRef(null);

  useGSAP(
    () => {
      SplitText.create(".introself", {
        type: "chars, words, lines",
        charsClass: "chars",
        wordsClass: "introwords++",
        linesClass: "line",
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

          return tl.from(self.chars, {
            xPercent: 50,
            opacity: 0,
            stagger: 0.1,
            ease: "power1.inOut",
          });
        },
      });
    },
    { scope: contentRef }
  );

  return (
    <section id="intro" className="w-full py-4 md:py-8">
      <SectionIntro itemsGroup={[aboutImgGroup, meImgGroup]} />
      <div
        ref={contentRef}
        className="grid grid-cols-12 py-[4rem] md:py-[6rem]"
      >
        <div className="col-span-10 col-start-2  z-10 text-lg font-light md:text-xl lg:text-2xl">
          <div className="introself">{experienceIntro.content}</div>
        </div>
      </div>
    </section>
  );
}
