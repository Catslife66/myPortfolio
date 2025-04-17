import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { heroContent } from "@/app/data/textContent";

function ExploreBtn() {
  const exploreBtnRef = useRef(null);

  const btnSpans = (cls) =>
    heroContent.btn.split("").map((char, i) => (
      <span
        key={i}
        className={cls}
        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
      >
        {char}
      </span>
    ));

  useGSAP(
    () => {
      const originalSpans =
        exploreBtnRef.current.querySelectorAll(".originalLine");
      const copySpans = exploreBtnRef.current.querySelectorAll(".copyLine");

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      tl.to(
        originalSpans,
        {
          rotationX: 90,
          transformOrigin: "top",
          stagger: {
            each: 0.1,
            ease: "none",
            from: "start",
          },
        },
        0
      ).to(
        copySpans,
        {
          rotationX: 0,
          opacity: 1,
          transformOrigin: "bottom",
          stagger: {
            each: 0.1,
            ease: "none",
            from: "start",
          },
        },
        0
      );
    },
    { scope: exploreBtnRef }
  );

  return (
    <div ref={exploreBtnRef} className="relative flex flex-col">
      <h3 className="font-semibold text-sm text-shade flex flex-row uppercase">
        {btnSpans("copyLine")}
      </h3>
      <h3 className="absolute font-semibold text-light text-sm flex flex-row uppercase">
        {btnSpans("originalLine")}
      </h3>
    </div>
  );
}

export default function Index() {
  const heroContainerRef = useRef(null);
  const shadowTopRef = useRef(null);
  const shadowBottomRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, Observer);

      Observer.create({
        target: heroContainerRef.current,
        onMove: (self) => {
          const clientX = self.x;
          const clientY = self.y;
          const deltaX =
            (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
          const deltaY =
            (clientY - window.innerHeight / 2) / (window.innerHeight / 2);
          const tl = gsap.timeline({
            duration: 0.3,
            ease: "power3.out",
          });
          const xOffset = 2;
          const yOffset = 8;
          tl.to(
            [shadowTopRef.current, shadowBottomRef.current],
            {
              translateX: deltaX >= 0 ? `${xOffset}%` : `-${xOffset}%`,
              translateY: deltaY >= 0 ? `${yOffset}%` : `-${yOffset}%`,
            },
            0
          );
        },
      });
    },
    { scope: heroContainerRef }
  );

  return (
    <section
      ref={heroContainerRef}
      className="bg-white z-10 w-full h-screen mx-auto flex flex-col justify-center items-center"
    >
      <div className="w-full h-screen relative z-5 flex flex-col justify-center items-center">
        <div className="relative">
          <h1 className="absolute top-0 left-0 z-10 char-stroke px-4 text-white text-6xl font-extrabold text-center uppercase md:text-[120px]">
            Xiaohong
          </h1>
          <h1
            ref={shadowTopRef}
            className="h1-shadow char-stroke px-4 text-white text-6xl font-extrabold text-center uppercase md:text-[120px]"
          >
            Xiaohong
          </h1>
        </div>
        <div className="text-shade p-4 text-center font-light md:font-normal">
          {heroContent.paragraph}
        </div>
        <div className="relative">
          <h1 className="absolute top-0 left-0 z-10 char-stroke px-4 text-white text-6xl font-extrabold text-center uppercase md:text-[120px]">
            Zhuang
          </h1>
          <h1
            ref={shadowBottomRef}
            className="h1-shadow px-4 text-6xl font-extrabold text-center uppercase md:text-[120px]"
          >
            Zhuang
          </h1>
        </div>
        <div className="text-shade text-sm font-light text-center py-2 md:font-normal">
          {heroContent.h4}
        </div>
        <div className="absolute bottom-10">
          <ExploreBtn />
        </div>
      </div>
    </section>
  );
}
