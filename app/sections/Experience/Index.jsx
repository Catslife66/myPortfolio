import gsap from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { experienceContent, introToExpContent } from "@/app/data/textContent";
import IntroParagraph from "@/app/components/IntroParagraph";

export default function Index() {
  const flipCardsRef = useRef(null);

  useGSAP(
    () => {
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
    },
    { scope: flipCardsRef }
  );

  return (
    <section className="w-full">
      <IntroParagraph
        content={introToExpContent.h2}
        cls={introToExpContent.class}
        containerCls="py-[4rem] md:py[5rem]"
      />

      <div
        ref={flipCardsRef}
        className="w-full min-h-[70vh] md:min-h-[55vh] px-4 flex flex-1 flex-col items-center overflow-hidden pt-[4rem] md:pt-[5rem]"
      >
        {experienceContent.map((item, id) => (
          <div
            key={id}
            className="flipCard w-full flex flex-col justify-center items-center relative py-2 md:grid md:grid-cols-12 hover:cursor-pointer"
          >
            <div className="md:col-span-2 relative flex items-end justify-start overflow-y-hidden">
              <span className="onBottom text-shade">{item.time}</span>
              <span className="onTop text-light">{item.time}</span>
            </div>
            <div className="md:col-span-8 relative flex items-end justify-center overflow-y-hidden text-xl md:text-3xl font-bold">
              <span className="onBottom text-shade text-center">
                {item.workplace}
              </span>
              <span className="onTop text-light text-center">
                {item.workplace}
              </span>
            </div>
            <div className="md:col-span-2 relative flex items-end justify-end overflow-y-hidden">
              <span className="onBottom text-shade text-end">
                {item.position}
              </span>
              <span className="onTop text-light text-end">{item.position}</span>
            </div>

            <div className="flipCardImg">
              <div className="w-[200px] h-[250px]">
                <img src="assets/images/bird.jpg" alt="txt" />
              </div>
              <div className="w-[200px] h-[250px] absolute top-4 left-4">
                <img src="assets/images/bird.jpg" alt="txt" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
