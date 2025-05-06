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

export default function IntroSelf() {
  const txt =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae quis corrupti quia totam placeat voluptas rerum temporibus, aspernatur quo, eos ratione harum est nulla. Soluta quos ab ex deserunt commodi ipsam nam exercitationem magni quisquam neque tempore officia voluptas quia, esse dolores perspiciatis explicabo eius ullam suscipit, unde rerum.";

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    SplitText.create(".introself", {
      type: "words, lines",
      wordsClass: "introwords++",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        return gsap.from(self.lines, {
          scrollTrigger: {
            trigger: ".introself",
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
    <section id="intro" className="w-full py-4 md:py-8">
      <SectionIntro itemsGroup={[aboutImgGroup, meImgGroup]} />
      <div className="grid grid-cols-12 py-[4rem] md:py-[6rem]">
        <div className="col-span-10 col-start-2 space-y-8">
          {experienceIntro.content.map((txt, idx) => (
            <p
              key={idx}
              className="introself text-xl tracking-widest leading-[2.5rem]"
            >
              {txt}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
// text-xl tracking-widest font-bold text-darker leading-[2.5rem]
