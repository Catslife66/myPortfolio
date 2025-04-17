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
            fontWeight: 600,
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
                className="flex flex-1 justify-center items-center me-4 w-full h-full"
              >
                <Image
                  src={item.src}
                  alt={item.alt || "image"}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ) : (
              <div
                key={i}
                className="slide-item text-2xl md:text-6xl font-thin flex flex-1 justify-center items-center me-4"
              >
                <h2 className="text-shade uppercase">{item.text}</h2>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}
