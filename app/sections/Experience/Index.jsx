import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import { experienceContent, introToExpContent } from "@/app/data/textContent";
import IntroParagraph from "@/app/components/IntroParagraph";

export default function Index() {
  const flipCardsRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(Observer);

    const flipCards = gsap.utils.toArray(".flipCard");

    flipCards.forEach((card, _id) => {
      const topEls = card.querySelectorAll(".onTop");
      const bottomEls = card.querySelectorAll(".onBottom");
      const imgEls = card.querySelectorAll(".flipCardImg");
      Observer.create({
        target: card,
        onHover: () => {
          gsap.to(topEls, {
            top: "-100%",
          });
          gsap.to(bottomEls, {
            translateY: 0,
          });
          gsap.to(imgEls, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          });
        },
        onHoverEnd: () => {
          gsap.to(topEls, {
            top: 0,
          });
          gsap.to(
            bottomEls,
            {
              translateY: "100%",
            },
            "<"
          );
          gsap.to(imgEls, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          });
        },
        onMove: (self) => {
          gsap.to(
            imgEls,
            {
              left: `${(self.x / window.innerWidth) * 100}%`,
              top: "-100%",
            },
            0
          );
        },
      });
    });
  }, {});

  return (
    <section className="w-full py-4 md:py-8" id="experience">
      <IntroParagraph content={introToExpContent.h2} cls="experience" />
      <div
        ref={flipCardsRef}
        className="w-full min-h-[70vh] md:min-h-[55vh] px-4 flex flex-1 flex-col items-center overflow-hidden pt-[4rem] md:pt-[6rem]"
      >
        {experienceContent.map((item, id) => (
          <div
            key={id}
            className="flipCard w-full flex flex-col justify-center items-center relative py-2 md:grid md:grid-cols-12 hover:cursor-pointer"
          >
            <div className="md:col-span-2 relative flex items-end justify-start overflow-y-hidden">
              <span className="onBottom text-darker">{item.time}</span>
              <span className="onTop text-secondary">{item.time}</span>
            </div>
            <div className="md:col-span-8 relative flex items-end justify-center overflow-y-hidden text-xl md:text-3xl font-bold">
              <span className="onBottom text-darker text-center">
                {item.workplace}
              </span>
              <span className="onTop text-secondary text-center">
                {item.workplace}
              </span>
            </div>
            <div className="md:col-span-2 relative flex items-end justify-end overflow-y-hidden">
              <span className="onBottom text-darker text-end">
                {item.position}
              </span>
              <span className="onTop text-secondary text-end">
                {item.position}
              </span>
            </div>

            <div className="flipCardImg">
              <div className="w-[200px] h-[250px] absolute">
                <Image
                  src={item.image.src}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={item.image.alt}
                />
              </div>
              <div className="w-[200px] h-[250px] absolute top-4 left-4">
                <Image
                  src={item.image.src}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={item.image.alt}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
