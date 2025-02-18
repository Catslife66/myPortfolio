import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ModelScene from "./ModelScene";

export default function SkillIndex() {
  const groupRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card1HeadingRef = useRef(null);
  const card2HeadingRef = useRef(null);
  const card3HeadingRef = useRef(null);
  const card4HeadingRef = useRef(null);

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

        groupRef.current.dataset.round1offset = offsets[0];
        groupRef.current.dataset.round2offset = offsets[1];
        groupRef.current.dataset.round3offset = offsets[2];

        groupRef.current.dataset.initHeight = cumulativeY;
        gsap.set(groupRef.current, { height: cumulativeY });

        gsap.set(groupRef.current, { maxHeight: "100vh" });
      }

      function animateCardImage() {
        const imgGroup = gsap.utils.toArray(".cardImg");
        imgGroup.forEach((img, _i) => {
          let imgScrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 1,
            },
          });
          imgScrollTl.fromTo(img, { scale: 0.5 }, { scale: 1 });
        });
      }

      function animateCardSlide() {
        const cardScrollTl = gsap.timeline({
          scrollTrigger: {
            pin: true,
            scrub: 1,
            trigger: groupRef.current,
            start: "top top",
            endTrigger: card4Ref.current,
            end: "top 360px",
            markers: true,
          },
        });
        let cardGroup1 = [card2Ref.current, card3Ref.current, card4Ref.current];
        let cardGroup2 = [card3Ref.current, card4Ref.current];

        cardScrollTl
          .to([card2Ref.current, card3Ref.current, card4Ref.current], {
            y: (_i, card) =>
              parseFloat(card.dataset.initialY) -
              parseFloat(groupRef.current.dataset.round1offset),
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
              parseFloat(groupRef.current.dataset.round2offset),
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
              parseFloat(groupRef.current.dataset.round3offset),
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
    { scope: groupRef.current }
  );

  return (
    <ul ref={groupRef} className="relative w-full h-screen bg-pink-500 z-20">
      <li
        ref={card1Ref}
        className="absolute bg-orange-200 w-full max-h-[588] p-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:px-[2rem]"
      >
        <div className="flex flex-col md:justify-between md:w-2/3 md:me-4 lg:me-8">
          <h3
            ref={card1HeadingRef}
            className="py-4 text-2xl font-bold md:py-8 md:text-3xl lg:text-4xl"
          >
            Full-Stack Development
          </h3>
          <div className="flex flex-col space-y-4 space-x-4 md:space-x-8 md:grid md:grid-cols-3 md:space-y-0">
            <p className="md:col-span-2 md:pe-8">
              I specialize in building scalable web applications using React,
              Redux, and JavaScript for dynamic front-end experiences, while
              leveraging Django and Node.js for robust back-end solutions. With
              experience in PostgreSQL and MongoDB, I design efficient database
              structures to support data-driven applications.
            </p>
            <ul className="list-disc text-sm font-bold md:space-y-2">
              <li>React, Redux, JavaScript, Node.js</li>
              <li>Django, Django Rest Framework</li>
              <li>PostgreSQL, MongoDB</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[200px] rounded-sm bg-pink-200 md:w-1/3 md:h-[300px]">
          <ModelScene />
        </div>
      </li>

      <li
        ref={card2Ref}
        className="absolute bg-purple-200 w-full max-h-[588] p-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:px-[2rem]"
      >
        <div className="flex flex-col md:justify-between md:w-2/3 md:me-4 lg:me-8">
          <h3
            ref={card2HeadingRef}
            className="py-4 text-2xl font-bold md:py-8 md:text-3xl lg:text-4xl"
          >
            UI/UX & 3D Web Development
          </h3>
          <div className="flex flex-col space-y-4 space-x-4 md:space-x-8 md:grid md:grid-cols-3 md:space-y-0">
            <p className="md:col-span-2 md:pe-4">
              Combining my strong design intuition from a marketing background
              with technical expertise, I create visually engaging interfaces
              using Tailwind CSS and Bootstrap 5. I also have foundational
              experience in Three.js (R3F, Drei) and Spline, allowing me to
              integrate 3D elements and interactive experiences into web
              applications.
            </p>
            <ul className="list-disc text-sm font-bold md:space-y-2">
              <li>Three.js (R3F, Drei), Spline</li>
              <li>Tailwind CSS, Bootstrap 5</li>
              <li>Strong design intuition from marketing experience</li>
            </ul>
          </div>
        </div>
        <div className="cardImg md:w-1/3 md:h-[300px]"></div>
      </li>

      <li
        ref={card3Ref}
        className="absolute bg-pink-200 w-full max-h-[588] p-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:px-[2rem]"
      >
        <div className="flex flex-col md:justify-between md:w-2/3 md:me-4 lg:me-8">
          <h3
            ref={card3HeadingRef}
            className="py-4 text-2xl font-bold md:py-8 md:text-3xl lg:text-4xl"
          >
            DevOps & Deployment
          </h3>
          <div className="flex flex-col space-y-4 space-x-4 md:space-x-8 md:grid md:grid-cols-3 md:space-y-0">
            <p className="md:col-span-2 md:pe-8">
              I ensure smooth deployment and scalability of applications using
              Docker and Kubernetes, along with cloud services like AWS. My
              expertise in Nginx and Git helps optimize server management and
              version control, while experience in CMS development allows for
              efficient content management solutions.
            </p>
            <ul className="list-disc text-sm font-bold md:space-y-2">
              <li>Docker, Kubernetes, AWS</li>
              <li>Nginx, Git, CMS Development</li>
            </ul>
          </div>
        </div>
        <div className="cardImg md:w-1/3 md:h-[300px]"></div>
      </li>

      <li
        ref={card4Ref}
        className="absolute bg-green-200 w-full max-h-[588] p-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:px-[2rem]"
      >
        <div className="flex flex-col md:justify-between md:w-2/3 md:me-4 lg:me-8">
          <h3
            ref={card4HeadingRef}
            className="py-4 text-2xl font-bold md:py-8 md:text-3xl lg:text-4xl"
          >
            Branding, Marketing & Content Strategy
          </h3>
          <div className="flex flex-col space-y-4 space-x-4 md:space-x-8 md:grid md:grid-cols-3 md:space-y-0">
            <p className="md:col-span-2 md:pe-8">
              With over 5 years of experience in hotel branding and digital
              marketing, I have successfully developed and executed branding
              strategies, website and booking system development, and campaign
              management. My ability to integrate technology with marketing
              ensures impactful digital solutions that align with brand
              positioning.
            </p>
            <ul className="list-disc text-sm font-bold md:space-y-2">
              <li>Hotel branding, digital platforms, & strategy</li>
              <li>Website & booking system development</li>
              <li>Content creation, campaign execution, & brand positioning</li>
            </ul>
          </div>
        </div>
        <div className="cardImg md:w-1/3 md:h-[300px]"></div>
      </li>
    </ul>
  );
}
