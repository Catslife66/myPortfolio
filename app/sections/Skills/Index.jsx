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

export default function SkillIndex() {
  const cardGroupRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const cardRefArray = [card1Ref, card2Ref, card3Ref, card4Ref];
  const card1HeadingRef = useRef(null);
  const card2HeadingRef = useRef(null);
  const card3HeadingRef = useRef(null);
  const card4HeadingRef = useRef(null);
  const cardHeadingRefArray = [
    card1HeadingRef,
    card2HeadingRef,
    card3HeadingRef,
    card4HeadingRef,
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const cards = [
        card1Ref.current,
        card2Ref.current,
        card3Ref.current,
        card4Ref.current,
      ];
      const headings = [
        card1HeadingRef.current,
        card2HeadingRef.current,
        card3HeadingRef.current,
        card4HeadingRef.current,
      ];

      cards.some((card) => {
        !card;
        return;
      });

      function setInitElementsPosition() {
        let cumulativeY = 0;
        cards.forEach((card) => {
          const height = card.getBoundingClientRect().height;
          gsap.set(card, { y: cumulativeY });
          card.dataset.initialY = cumulativeY;
          card.dataset.currentY = cumulativeY;
          cumulativeY += height;
        });

        let offsets = cards.map((card, i) => {
          return (
            card.getBoundingClientRect().bottom -
            headings[i].getBoundingClientRect().bottom
          );
        });

        cardGroupRef.current.dataset.round1offset = offsets[0];
        cardGroupRef.current.dataset.round2offset = offsets[1];
        cardGroupRef.current.dataset.round3offset = offsets[2];

        cardGroupRef.current.dataset.initHeight = cumulativeY;
        gsap.set(cardGroupRef.current, { height: cumulativeY });

        gsap.set(cardGroupRef.current, { maxHeight: "100vh" });
      }

      function animateCardImage() {
        const videoGroup = gsap.utils.toArray(".videoObj");
        videoGroup.forEach((video, _i) => {
          gsap.timeline({
            scrollTrigger: {
              trigger: video,
              start: "top 70%",
              end: "top top",
              onEnter: () => video.play(),
              onLeave: () => video.pause(),
              onEnterBack: () => video.play(),
              onLeaveBack: () => video.pause(),
            },
          });
        });
      }

      function animateCardSlide() {
        const cardScrollTl = gsap.timeline({
          scrollTrigger: {
            pin: true,
            scrub: 1,
            trigger: cardGroupRef.current,
            start: "top 10%",
            endTrigger: card4Ref.current,
            end: "top 360px",
          },
        });
        let cardGroup1 = [card2Ref.current, card3Ref.current, card4Ref.current];
        let cardGroup2 = [card3Ref.current, card4Ref.current];

        cardScrollTl
          .to([card2Ref.current, card3Ref.current, card4Ref.current], {
            y: (_i, card) =>
              parseFloat(card.dataset.initialY) -
              parseFloat(cardGroupRef.current.dataset.round1offset),
            duration: 1,
            ease: "none",
            onUpdate: () => {
              cardGroup1.forEach((card, _i) => {
                card.dataset.currentY = gsap.getProperty(card, "y");
              });
            },
          })

          .to([card3Ref.current, card4Ref.current], {
            y: (_i, card) =>
              parseFloat(card.dataset.currentY) -
              parseFloat(cardGroupRef.current.dataset.round2offset),
            duration: 1,
            ease: "none",
            onUpdate: () => {
              cardGroup2.forEach((card, _i) => {
                card.dataset.currentY = gsap.getProperty(card, "y");
              });
            },
          })

          .to(card4Ref.current, {
            y: () =>
              parseFloat(card4Ref.current.dataset.currentY) -
              parseFloat(cardGroupRef.current.dataset.round3offset),
            duration: 1,
            ease: "none",
            onUpdate: () => {
              card4Ref.current.dataset.currentY = gsap.getProperty(
                card4Ref.current,
                "y"
              );
            },
          });
      }

      const initialFrame = () => {
        setInitElementsPosition();
        animateCardSlide();
        animateCardImage();
      };

      if (!cardGroupRef.current) return;

      initialFrame();

      const handleResize = () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        setInitElementsPosition();
        animateCardSlide();
        animateCardImage();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: cardGroupRef }
  );

  return (
    <>
      <SectionIntro itemsGroup={[programmingImgGroup, skillsetImgGroup]} />
      <div className="w-full px-4 pt-[4rem] mb-[4rem] md:pt-[5rem] lg:pt-[6rem]">
        <ul
          ref={cardGroupRef}
          className="relative w-full h-screen bg-white z-20"
        >
          {skillsetContent.map((item, idx) => (
            <li
              key={`item-${idx}`}
              ref={cardRefArray[idx]}
              className={`absolute bg-white w-full max-h-[588] p-4 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:px-[2rem]
                ${idx !== 0 ? "border-t border-t-light" : ""}`}
            >
              <div className="flex flex-col md:justify-between md:w-2/3 md:me-4 lg:me-8">
                <h3
                  ref={cardHeadingRefArray[idx]}
                  className="py-4 text-2xl text-shade font-bold md:py-8 md:text-3xl lg:text-4xl"
                >
                  {item.title}
                </h3>
                <div className="flex flex-col space-y-4 space-x-4 md:space-x-8 md:grid md:grid-cols-3 md:space-y-0">
                  <p className="md:col-span-2 md:pe-8">{item.description}</p>
                  <ul className="list-disc text-sm font-bold md:space-y-2">
                    {item.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/3 h-[300px]">
                <video
                  className="w-full h-full object-cover rounded-lg videoObj"
                  src={item.mediasrc}
                  muted
                  playsInline
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
