import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SectionIntro({ itemsGroup = [] }) {
  const slideContainerRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slideContainerRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        ease: "none",
      });
      const slides = slideContainerRef.current.querySelectorAll(".slide");

      slides.forEach((slide, index) => {
        tl.to(
          slide,
          {
            translateX: index % 2 === 0 ? "-1%" : "-15%",
          },
          0
        );

        tl.to(
          ".slide .slide-item",
          {
            flexGrow: 1.2,
            fontWeight: 900,
          },
          0
        );
      });
    },
    { scope: slideContainerRef }
  );

  return (
    <div
      ref={slideContainerRef}
      className="flex flex-col py-[4rem] space-y-4 overflow-x-hidden md:py-[5rem]"
    >
      {itemsGroup.map((items, groupIdx) => (
        <div
          key={groupIdx}
          className={`slide w-[150%] h-[200px] flex ${
            groupIdx % 2 === 0 ? "-translate-x-[25%]" : ""
          }`}
        >
          {items.map((item, i) =>
            item.type === "image" ? (
              <div
                key={i}
                className="flex flex-1 justify-center items-center me-4 w-full h-full relative"
              >
                <Image
                  src={item.src}
                  alt={item.alt || "image"}
                  fill={true}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ) : (
              <div
                key={i}
                className="slide-item text-2xl md:text-6xl font-thin flex flex-1 justify-center items-center me-4 relative"
              >
                <h2 className="text-primary italic text-center px-4 py-2 uppercase z-10">
                  {item.text}
                </h2>
                <h2 className="text-secondary italic text-center px-4 py-2 uppercase z-10 text-bg">
                  {item.text}
                </h2>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}
