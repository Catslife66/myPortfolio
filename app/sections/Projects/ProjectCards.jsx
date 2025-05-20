import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { projectsContent } from "@/app/data/projectsContent";
import { HotelIcon, PurseIcon, WineIcon } from "./Icons";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCards() {
  const projectsRef = useRef(null);

  const elStyels = [
    { backGround: "#CAE894", textColor: "black", spanColor: "black" },
    { backGround: "#AF95E2", textColor: "black", spanColor: "black" },
    { backGround: "#224C25", textColor: "white", spanColor: "white" },
  ];

  const generatePath = (type, width) => {
    const left = 2.5;
    const right = width - 2.5;
    const mid = width / 2;
    const y = type === "dip" ? 2.5 : type === "bump" ? 19 : 11;

    return `M${left} 11C${left} 11 ${mid - 18} ${y} ${mid} ${y}C${
      mid + 18
    } ${y} ${right} 11 ${right} 11`;
  };

  useGSAP(
    () => {
      const svgs = gsap.utils.toArray(".linkSvg");
      svgs.forEach((svg, i) => {
        const spanWidth = svg.getBoundingClientRect().width;
        svg.setAttribute("width", `${spanWidth}`);
        svg.setAttribute("viewBox", `0 0 ${spanWidth} 21`);

        const straight = generatePath("straight", spanWidth);
        const path = svg.querySelector(".linkPath");
        gsap.set(path, {
          attr: { d: straight, stroke: elStyels[i].spanColor },
        });
      });

      const projectCards = gsap.utils.toArray(".projectCard");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          pin: true,
          start: "top top",
          end: `+=500`,
          scrub: true,
          markers: true,
          onLeave: () => {
            gsap.to(projectCards, { rotation: 0 });
          },
        },
      });

      tl.to(".card0", { rotation: 2, duration: 0.2 })
        .to(".card1", {
          yPercent: -110,
          rotation: 4,
          duration: 0.5,
        })
        .to(".card1", {
          yPercent: -90,
          rotation: 2,
          zIndex: 1,
          duration: 0.3,
        })
        .to(".card2", {
          yPercent: -80,
          rotation: -2,
          zIndex: 2,
          duration: 0.5,
        });
    },
    { scope: projectsRef }
  );

  const handleMouseEvent = (e) => {
    const spanWidth = e.currentTarget.offsetWidth;
    const straight = generatePath("straight", spanWidth);
    const dip = generatePath("dip", spanWidth);
    const bump = generatePath("bump", spanWidth);

    let tl = gsap.timeline();
    const pathTarget = e.currentTarget.querySelector(".linkPath");

    tl.to(pathTarget, {
      attr: {
        d: dip,
      },
      duration: 0.1,
      ease: "bounce",
    })
      .to(pathTarget, {
        attr: {
          d: straight,
        },
        duration: 0.1,
        ease: "bounce",
      })
      .to(pathTarget, {
        attr: {
          d: bump,
        },
        duration: 0.1,
        ease: "bounce",
      })
      .to(pathTarget, {
        attr: {
          d: straight,
        },
        duration: 0.1,
        ease: "bounce",
      });
  };

  return (
    <div
      ref={projectsRef}
      className="grid grid-cols-12 min-h-[100vh] pt-8 md:pt-[4rem]"
    >
      <div className="col-start-2 col-span-10 h-[60vh] flex flex-col justify-center items-center relative">
        {projectsContent.map((project, idx) => (
          <div
            key={idx}
            className={`projectCard absolute w-full h-full flex flex-row justify-center rounded-lg p-4 md:p-[4rem] card${idx}`}
            style={{
              backgroundColor: `${elStyels[idx].backGround}`,
            }}
          >
            <div className="flex flex-col">
              <h3
                className="text-2xl font-extrabold tracking-wide md:text-3xl lg:text-4xl"
                style={{ color: `${elStyels[idx].textColor}` }}
              >
                {project.name}
              </h3>
              <div className="flex flex-row flex-wrap my-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="p-2 text-sm bg-white rounded-lg mt-2 me-2 md:me-4"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                className="my-4 md:text-xl"
                style={{ color: `${elStyels[idx].textColor}` }}
              >
                {project.description}
              </div>
              <Link
                className="flex flex-col font-semibold w-fit mt-4"
                href={`projects/${project.slug}`}
                onMouseOver={(e) => handleMouseEvent(e)}
              >
                <span
                  className="text-sm linkSpan uppercase md:text-lg"
                  style={{ color: `${elStyels[idx].spanColor}` }}
                >
                  See full case detail
                </span>
                <svg
                  className="linkSvg -translate-y-2"
                  viewBox="0 0 96 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="linkPath"
                    d=""
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex items-center justify-center me-4">
              {idx === 0 && <HotelIcon />}
              {idx === 1 && <PurseIcon />}
              {idx === 2 && <WineIcon />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
