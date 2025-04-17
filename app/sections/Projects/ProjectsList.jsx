import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function ProjectsList() {
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
      <div className="col-span-5 col-start-2">
        <Image src="assets/images/pic_1.jpg" alt="test" />
      </div>
      <div className="col-span-5 space-y-4">
        <h3 className="font-semibold text-lg">Project Name</h3>
        <div className="flex flex-row flex-wrap">
          <span className="px-2 py-1 text-xs rounded-2xl border border-gray-200 me-2 mb-2">
            Lorem ipsum 1
          </span>
          <span className="px-2 py-1 text-xs rounded-2xl border border-gray-200 me-2 mb-2">
            Lorem ipsum 2
          </span>
          <span className="px-2 py-1 text-xs rounded-2xl border border-gray-200 me-2 mb-2">
            Lorem ipsum 3
          </span>
          <span className="px-2 py-1 text-xs rounded-2xl border border-gray-200 me-2 mb-2">
            Lorem ipsum 1
          </span>
          <span className="px-2 py-1 text-xs rounded-2xl border border-gray-200 me-2 mb-2">
            Lorem ipsum 1
          </span>
          <span className="px-2 py-1 text-xs rounded-2xl border border-gray-200 me-2 mb-2">
            Lorem ipsum 1
          </span>
        </div>
        <div className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          totam illum deleniti ab quo. Laborum tempore cupiditate debitis,
          dignissimos hic porro impedit obcaecati incidunt labore iure sint?
          Eveniet voluptatem officia rem atque libero! Necessitatibus animi
          deleniti ex? Eos similique vel magnam minima, ex distinctio
          perferendis aspernatur delectus sed autem alias sequi necessitatibus
          excepturi voluptatum reprehenderit odio reiciendis impedit neque
          repudiandae aut eaque corrupti voluptas?
        </div>

        <div className="hover:cursor-pointer" onMouseEnter={handleMouseEnter}>
          <Link className="font-semibold text-center" href={"/"}>
            <span ref={spanRef} className="">
              see full case detail
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
              //d="M2.5 11C2.5 11 29.9237 11 48 11C66.0763 11 93.5 11 93.5 11"
              //d="M2.5 11C2.5 11 29.9586 19 48 19C66.0414 19 93.5 11 93.5 11"
              //d="M2.5 11C2.5 11 29.9237 2.5 48 2.5C66.0763 2.5 93.5 11 93.5 11"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* <Link href={"/"} className="flex flex-row hover:-translate-y-1">
          <span>see full case detail</span>
          <span>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </span>
        </Link> */}
      </div>
    </div>
  );
}
