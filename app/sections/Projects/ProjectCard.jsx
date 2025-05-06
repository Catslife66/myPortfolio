import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function ProjectCard({ project }) {
  const spanRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  const generatePath = (type, width) => {
    const left = 2.5;
    const right = width - 2.5;
    const mid = width / 2;
    const y = type === "dip" ? 2.5 : type === "bump" ? 19 : 11;

    return `M${left} 11C${left} 11 ${mid - 18} ${y} ${mid} ${y}C${
      mid + 18
    } ${y} ${right} 11 ${right} 11`;
  };

  useGSAP(() => {
    const spanWidth = spanRef.current.offsetWidth;
    svgRef.current.setAttribute("width", `${spanWidth}`);
    svgRef.current.setAttribute("viewBox", `0 0 ${spanWidth} 21`);

    const straight = generatePath("straight", spanWidth);
    gsap.set(pathRef.current, { attr: { d: straight } });
  }, {});

  const handleMouseEnter = () => {
    const spanWidth = spanRef.current.offsetWidth;
    const straight = generatePath("straight", spanWidth);
    const dip = generatePath("dip", spanWidth);
    const bump = generatePath("bump", spanWidth);

    let tl = gsap.timeline();

    tl.to(pathRef.current, {
      attr: {
        d: dip,
      },
      duration: 0.1,
      ease: "bounce",
    })
      .to(pathRef.current, {
        attr: {
          d: straight,
        },
        duration: 0.1,
        ease: "bounce",
      })
      .to(pathRef.current, {
        attr: {
          d: bump,
        },
        duration: 0.1,
        ease: "bounce",
      })
      .to(pathRef.current, {
        attr: {
          d: straight,
        },
        duration: 0.1,
        ease: "bounce",
      });
  };

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-4 col-start-2 relative">
        <Image
          src={project.mainImg.src}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={project.mainImg.alt}
        />
      </div>
      <div className="col-span-6 space-y-4">
        <h3 className="font-semibold text-lg">{project.name}</h3>
        <div className="flex flex-row flex-wrap">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-secondary text-white rounded-lg me-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-sm">{project.description}</div>

        <div className="hover:cursor-pointer">
          <Link
            className="font-semibold text-center"
            href={`projects/${project.slug}`}
            onMouseEnter={handleMouseEnter}
          >
            <span ref={spanRef} className="text-secondary uppercase">
              See full case detail
            </span>
          </Link>
          <svg
            ref={svgRef}
            className="-translate-y-2"
            width="96"
            height="21"
            viewBox="0 0 96 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={pathRef}
              d=""
              stroke="#AF95E2"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
