import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionIntro from "@/app/components/SectionIntro";
import {
  programmingImgGroup,
  skillsetContent,
  skillsetImgGroup,
} from "@/app/data/textContent";
import {
  TextLoopCard,
  PixiCard,
  RotateCard,
  HeartBeatLoopCard,
} from "./CardImgGroup";

gsap.registerPlugin(ScrollTrigger);

export default function SkillIndex() {
  const cardGroupRef = useRef(null);
  const cardRefs = useRef([]);
  const cardHeadingRefs = useRef([]);

  useGSAP(
    () => {
      function setInitElementsPosition() {
        let cumulativeY = 0;
        let offsets = [];
        cardRefs.current.forEach((card, i) => {
          const height = card.getBoundingClientRect().height;
          const heading = cardHeadingRefs.current[i];
          const offset =
            card.getBoundingClientRect().bottom -
            heading.getBoundingClientRect().bottom;

          gsap.set(card, { y: cumulativeY });
          card.dataset.initialY = cumulativeY;
          card.dataset.currentY = cumulativeY;

          cumulativeY += height;
          offsets.push(offset);
        });

        cardGroupRef.current.dataset.initHeight = cumulativeY;
        gsap.set(cardGroupRef.current, { height: cumulativeY });

        // Store offsets on dataset if needed later
        cardGroupRef.current.dataset.offsets = JSON.stringify(offsets);
      }

      function animateCards() {
        const offsets = JSON.parse(cardGroupRef.current.dataset.offsets);
        const tl = gsap.timeline({
          scrollTrigger: {
            pin: true,
            scrub: 1,
            trigger: cardGroupRef.current,
            start: "top 10%",
            endTrigger: cardRefs.current[cardRefs.current.length - 1],
            end: "top 360px",
          },
        });

        offsets.forEach((offset, index) => {
          const movingCards = cardRefs.current.slice(index + 1);
          if (movingCards.length > 0) {
            tl.to(movingCards, { y: `-=${offset}` });
          }
        });
      }

      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        setInitElementsPosition();
        animateCards();
      });
      mm.add("(max-width: 767px)", () => {
        setInitElementsPosition();
      });
    },
    { scope: cardGroupRef }
  );

  return (
    <section id="skills" className="w-full mb-[4rem]">
      <SectionIntro itemsGroup={[programmingImgGroup, skillsetImgGroup]} />
      <div className="w-full px-4 pt-[4rem]">
        <div
          ref={cardGroupRef}
          className="relative w-full h-screen bg-base z-20 md:max-h-[100vh]"
        >
          {skillsetContent.map((item, idx) => (
            <div
              key={`item-${idx}`}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`absolute bg-base w-full min-h-[400px] p-4 flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:px-[2rem] ${
                idx !== 0 ? "border-t border-t-secondary" : ""
              }`}
            >
              <div className="flex flex-col md:w-2/3 md:me-4 lg:me-8">
                <h3
                  ref={(el) => (cardHeadingRefs.current[idx] = el)}
                  className="py-4 text-xl text-white font-bold md:py-8 md:text-2xl lg:text-3xl"
                >
                  <span className="text-secondary text-shadow">
                    {item.title}
                  </span>
                </h3>
                <div className="flex flex-col flex-1 items-start space-y-4 space-x-4 md:space-x-8 md:grid md:grid-cols-3 md:space-y-0">
                  <p className="font-light text-lg md:col-span-2 md:pe-8">
                    {item.description}
                  </p>
                  <ul className="list-disc text-sm font-semibold md:font-bold md:space-y-2">
                    {item.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full h-[300px] relative bg-secondary rounded-lg md:w-1/3">
                {idx === 0 && <HeartBeatLoopCard />}
                {idx === 1 && <PixiCard />}
                {idx === 2 && <TextLoopCard />}
                {idx === 3 && <RotateCard />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
