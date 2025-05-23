import { introToExpContent } from "@/app/data/textContent";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export default function ExpHeading() {
  const expHeadingRef = useRef(null);

  useGSAP(
    () => {
      SplitText.create(".expheading", {
        type: "words, lines",
        wordsClass: "expWord",
        linesClass: "line++",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
          return gsap.from(self.lines, {
            scrollTrigger: {
              trigger: ".expheading",
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
    { scope: expHeadingRef }
  );

  return (
    <div
      ref={expHeadingRef}
      className="grid grid-cols-12 py-[4rem] md:py-[6rem]"
    >
      <div className="col-span-10 col-start-2 text-secondary heading-shadow font-bold text-xl text-end uppercase md:text-[2.5rem]">
        <div className="expheading">{introToExpContent.h2}</div>
      </div>
    </div>
  );
}
