import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ExperienceIntro() {
  const paragraph1 =
    "With over 5 years of professional experience in the hospitality industry, I’ve led and contributed to impactful branding, marketing, and digital transformation projects across several renowned hotel groups.";
  const paragraph2 =
    "My work has spanned brand development, visual identity systems, marketing strategy, and the implementation of digital platforms—from hotel websites to WeChat mini-programs and central booking systems.";
  const paragraph3 =
    "I thrive at the intersection of creativity and strategy, consistently delivering solutions that strengthen brand presence and enhance user engagement.";
  const words1 = paragraph1.split(" ");
  const words2 = paragraph2.split(" ");
  const words3 = paragraph3.split(" ");

  //   gsap.registerPlugin(ScrollTrigger);

  //   const words1Array = gsap.utils.toArray(".para1 span");
  //   const words2Array = gsap.utils.toArray(".para2 span");
  //   const words3Array = gsap.utils.toArray(".para3 span");
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".para1",
  //       start: "top top",
  //       end: "+=1000",
  //       scrub: 1,
  //       markers: true,
  //     },
  //   });

  //   tl.to(words1Array, {
  //     opacity: 1,
  //     stagger: {
  //       each: 0.01,
  //       ease: "none",
  //       from: "start",
  //     },
  //   })
  //     .to(words2Array, {
  //       opacity: 1,
  //       stagger: {
  //         each: 0.01,
  //         ease: "none",
  //         from: "start",
  //       },
  //     })
  //     .to(words3Array, {
  //       opacity: 1,
  //       stagger: {
  //         each: 0.01,
  //         ease: "none",
  //         from: "start",
  //       },
  //     });
  // }, {});

  return (
    <div className="scaleTarget max-w-screen-lg h-screen mx-auto flex flex-col justify-center items-center font-extrabold text-3xl leading-[56px] space-y-8 p-4 md:p-8">
      <div className="flex flex-wrap justify-center items-center para1">
        {words1.map((word, i) => (
          <span key={i} className="opacity-40">
            {word}&nbsp;
          </span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center para2">
        {words2.map((word, i) => (
          <span key={i} className="opacity-40">
            {word}&nbsp;
          </span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center para3">
        {words3.map((word, i) => (
          <span key={i} className="opacity-40">
            {word}&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
