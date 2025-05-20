import { introToExpContent } from "@/app/data/textContent";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

export default function ExpHeading() {
  const expHeadingRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

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
  }, {});

  return (
    <div ref={expHeadingRef} className="grid grid-cols-12 py-[4rem]">
      <div className="col-span-10 col-start-2 tracking-wider  text-lg text-end uppercase md:text-2xl lg:text-[3rem]">
        <div className="expheading">{introToExpContent.h2}</div>
      </div>
    </div>
  );
}
