import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import FloatIcons from "./FloatIcons";

function ExploreBtn() {
  const content = "SCROLL TO EXPLORE MORE";
  const contentArray = content.split("");

  useGSAP(() => {
    const originalSpans = document.querySelectorAll(".line1");
    const copySpans = document.querySelectorAll(".line2");

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.to(
      originalSpans,
      {
        duration: 2,
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
        duration: 2,
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
  }, {});

  return (
    <div className="relative flex flex-col">
      <h3 className="font-extrabold text-sm text-green-800 flex flex-row">
        {contentArray.map((char, i) => (
          <span
            key={i}
            className="line2"
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </span>
        ))}
      </h3>
      <h3 className="absolute font-extrabold text-sm flex flex-row">
        {contentArray.map((char, i) => (
          <span
            key={i}
            className="font-extrabold text-sm line1"
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </span>
        ))}
      </h3>
    </div>
  );
}

export default function Hero() {
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const deltaX = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const deltaY =
      (clientY - window.innerHeight / 2) / (window.innerHeight / 2);

    handleTextShadowMove({ deltaX, deltaY });

    function handleTextShadowMove({ deltaX, deltaY }) {
      const tl = gsap.timeline({
        duration: 0.3,
        ease: "power3.out",
      });
      const xOffset = 2;
      const yOffset = 8;
      tl.to(
        ".h1-shadow",
        {
          translateX: deltaX >= 0 ? `${xOffset}%` : `-${xOffset}%`,
          translateY: deltaY >= 0 ? `${yOffset}%` : `-${yOffset}%`,
        },
        0
      );
    }
  };

  return (
    <section
      className="z-10 w-full h-screen mx-auto flex flex-col justify-center items-center"
      onMouseMove={handleMouseMove}
    >
      <div className="w-full h-screen relative z-5 flex flex-col justify-center items-center">
        <div className="relative">
          <h1 className="absolute top-0 left-0 z-10 char-stroke px-4 text-white text-6xl font-extrabold text-center uppercase md:text-[120px]">
            Xiaohong
          </h1>
          <h1 className="h1-shadow char-stroke px-4 text-white text-6xl font-extrabold text-center uppercase md:text-[120px]">
            Xiaohong
          </h1>
        </div>
        <div className="text-gray-500 p-4 text-center">
          A self-taught Programmer with a passion for Web development and a
          strong background in Marketing.
        </div>
        <div className="relative">
          <h1 className="absolute top-0 left-0 z-10 char-stroke px-4 text-white text-6xl font-extrabold text-center uppercase md:text-[120px]">
            Zhuang
          </h1>
          <h1 className="h1-shadow px-4 text-6xl font-extrabold text-center uppercase md:text-[120px]">
            Zhuang
          </h1>
        </div>
        <div className="text-gray-400 text-sm text-center py-2">aka Josie</div>
        <div className="absolute bottom-10">
          <ExploreBtn />
        </div>
      </div>

      <FloatIcons />
    </section>
  );
}
