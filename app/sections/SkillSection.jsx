import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Heading2 from "../components/Heading2";

function SkillsetCard({
  bgColorClass,
  cardTitle,
  cardContent = "some content",
  cardImg = "",
}) {
  return (
    <div className={bgColorClass}>
      <h3 className="text-5xl font-bold py-4">{cardTitle}</h3>
      <div className="flex flex-row space-x-8 py-4">
        <div className="w-2/3 text-xl">{cardContent}</div>
        <div className="w-1/3 bg-blue-400" style={{ height: "200px" }}>
          {cardImg}
        </div>
      </div>
    </div>
  );
}

export default function SkillSection() {
  const cardGroupRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        pin: true,
        scrub: 1,
        trigger: ".cardgroup",
        start: "top top",
        end: "+=1000",
        markers: true,
      },
    });

    tl.to(
      [card2Ref.current, card3Ref.current, card4Ref.current],
      { yPercent: -70, ease: "none", duration: 1 },
      0
    );

    tl.to(
      [card3Ref.current, card4Ref.current],
      { yPercent: -140, ease: "none", duration: 1 },
      1
    );

    tl.to(card4Ref.current, { yPercent: -210, ease: "none", duration: 1 }, 2);
  }, {});

  return (
    <div className="bg-amber-200">
      <Heading2
        className="text-5xl font-bold py-[4rem]"
        content="My programming skills"
      />
      <ul className="cardgroup bg-pink-900">
        <li
          ref={card1Ref}
          className="card card1 bg-orange-200 w-full p-4 flex flex-col space-y-4 md:flex-row md:space-y-0"
        >
          <div className="flex flex-col md:justify-between md:w-2/3 md:me-4 lg:me-8">
            <h3 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">
              Full-Stack Development
            </h3>
            <div className="flex flex-col space-y-4 space-x-4 md:space-x-8 md:grid md:grid-cols-3 md:space-y-0">
              <p className="md:col-span-2 md:pe-8">
                I specialize in building scalable web applications using React,
                Redux, and JavaScript for dynamic front-end experiences, while
                leveraging Django and Node.js for robust back-end solutions.
                With experience in PostgreSQL and MongoDB, I design efficient
                database structures to support data-driven applications.
              </p>
              <ul className="list-disc text-sm font-bold md:space-y-2">
                <li>React, Redux, JavaScript, Node.js</li>
                <li>Django, Django Rest Framework</li>
                <li>PostgreSQL, MongoDB</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-[200px] bg-blue-700 rounded-md md:w-1/3 md:h-[300px]"></div>
        </li>

        <li
          ref={card2Ref}
          className="card card2 bg-purple-200 w-full p-4 flex flex-col space-y-4 md:flex-row md:space-y-0"
        >
          <div className="flex flex-col md:justify-between md:w-2/3 md:me-4 lg:me-8">
            <h3 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">
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
          <div className="w-full h-[200px] bg-blue-700 rounded-md md:w-1/3 md:h-[300px]"></div>
        </li>

        <li
          ref={card3Ref}
          className="card card3 bg-pink-200 w-full p-4 flex flex-col space-y-4 md:flex-row md:space-y-0"
        >
          <div className="flex flex-col md:justify-between md:w-2/3 md:me-4 lg:me-8">
            <h3 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">
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
          <div className="w-full h-[200px] bg-blue-700 rounded-md md:w-1/3 md:h-[300px]"></div>
        </li>

        <li
          ref={card4Ref}
          className="card card4 bg-green-200 w-full p-4 flex flex-col space-y-4 md:flex-row md:space-y-0"
        >
          <div className="flex flex-col md:justify-between md:w-2/3 md:me-4 lg:me-8">
            <h3 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">
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
                <li>
                  Content creation, campaign execution, & brand positioning
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-[200px] bg-blue-700 rounded-md md:w-1/3 md:h-[300px]"></div>
        </li>
      </ul>
    </div>
  );
}

{
  /* <div ref={cardGroupRef} className="card-container py-4 relative">
<div ref={card1Ref} className="relative z-10">
  <SkillsetCard bgColorClass="bg-blue-100" cardTitle={"card 1"} />
  <div ref={card2Ref} className="relative z-20">
    <SkillsetCard bgColorClass="bg-red-100" cardTitle={"card 2"} />
    <div ref={card3Ref} className="relative z-30">
      <SkillsetCard bgColorClass="bg-green-100" cardTitle={"card 3"} />
      <div ref={card4Ref} className="relative z-40">
        <SkillsetCard
          bgColorClass="bg-yellow-100"
          cardTitle={"card 4"}
        />
      </div>
    </div>
  </div>
</div>
</div> */
}

// useGSAP(() => {
//   gsap.registerPlugin(ScrollTrigger);
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       scrub: 1,
//       pin: true,
//       trigger: card1Ref.current,
//       start: "top top",
//       end: "+=400",
//       markers: true,
//     },
//   });

// }, {});

// useLayoutEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);

//   let cxt = gsap.context(() => {
//     // const tl = gsap.timeline({
//     //   scrollTrigger: {
//     //     scrub: 1,
//     //     pin: true,
//     //     trigger: cardGroupRef.current,
//     //     start: "top 20%",
//     //     endTrigger: card2Ref.current,
//     //     end: "top  50%",
//     //     markers: true,
//     //   },
//     // });
//     // tl.to(card2Ref.current, {
//     //   translateY: "-300px",
//     // });

//     gsap
//       .timeline({
//         scrollTrigger: {
//           pin: true,
//           trigger: cardGroupRef.current,
//           start: "top top",
//           end: "bottom 50%",
//           scrub: 1,
//           // markers: true,
//         },
//         ease: "power1.inOut",
//       })
//       .to(card2Ref.current, {
//         translateY: "-200px",
//       })
//       .to(card3Ref.current, {
//         translateY: "-200px",
//       })
//       .to(card4Ref.current, {
//         translateY: "-200px",
//       });
//   });
//   return () => cxt.revert();
// }, []);
