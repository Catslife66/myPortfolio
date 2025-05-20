import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);
import { expToSkillContent } from "@/app/data/textContent";

export default function ProHeading() {
  const proHeadingRef = useRef(null);

  useGSAP(
    () => {
      SplitText.create(".proheading", {
        type: "words, lines",
        wordsClass: "proWord",
        linesClass: "line++",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
          return gsap.from(self.lines, {
            scrollTrigger: {
              trigger: ".proheading",
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
          });
        },
      });
    },
    { scope: proHeadingRef }
  );
  return (
    <div
      ref={proHeadingRef}
      className="grid grid-cols-12 py-[4rem] md:py-[6rem]"
    >
      <div className="col-span-10 col-start-2 text-secondary heading-shadow font-bold text-xl text-end uppercase md:text-[2.5rem]">
        <div className="proheading">{expToSkillContent.h2}</div>
      </div>
    </div>
  );
}
