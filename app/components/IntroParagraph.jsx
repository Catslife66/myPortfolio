import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

export default function IntroParagraph({ content, cls }) {
  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    gsap.set(`.${cls}`, { opacity: 1 });

    SplitText.create(`.${cls}`, {
      type: "words,lines",
      linesClass: "line++",
      wordsClass: "words",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        return gsap.from(self.lines, {
          scrollTrigger: {
            trigger: `.${cls}`,
            start: "top 60%",
            end: "bottom 50%",
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
    <div className="grid grid-cols-12 py-4 md:py-[4rem]">
      <h2
        className={`${cls} opacity-0 tracking-wider italic font-bold col-span-10 col-start-2 text-white text-2xl text-end md:text-4xl uppercase`}
      >
        {content}
      </h2>
    </div>
  );
}
