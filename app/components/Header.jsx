"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import NavLink from "./NavLink";

const Header = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const navRef = useRef(null);
  const [isClosed, setIsClosed] = useState(true);

  const handleChangePath = (e) => {
    e.preventDefault();
    const nextPath = e.currentTarget.getAttribute("href");
    if (currentPath !== nextPath) {
      gsap.to(".block", {
        scaleY: 1,
        ease: "power1.inOut",
        stagger: {
          from: "random",
        },
        onComplete: () => {
          router.push(nextPath);
        },
      });
    }
  };

  return (
    <nav ref={navRef} className="bg-transparent w-full fixed p-4 z-100">
      <div className="w-full h-full px-8 flex flex-col items-center mx-auto md:flex-row md:justify-between">
        <div className="w-full flex flex-row justify-between">
          <Link
            href={"/"}
            onClick={handleChangePath}
            className="flex items-center"
          >
            <span className="text-xl italic font-extrabold text-primary">
              JosieDev
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
            onClick={() => setIsClosed(!isClosed)}
          >
            {isClosed ? (
              <svg
                className="w-6 h-6 text-gray-800"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800"
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
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="w-full hidden md:flex md:justify-end md:items-center">
          <ul className="flex flex-col font-medium md:flex-row md:gap-4">
            <NavLink
              title="My CV"
              href={"/assets/files/cv.pdf"}
              onClick={handleChangePath}
            />
            <NavLink title="Contact" href={"mailto:josie58@live.cn"} />
          </ul>
        </div>
        <div
          className={`w-full mt-4 md:hidden md:py-8 ${
            isClosed ? "hidden" : ""
          }`}
        >
          <ul className="flex flex-col bg-lighter">
            <NavLink
              title="My CV"
              href={"/assets/files/cv.pdf"}
              onClick={handleChangePath}
            />
            <NavLink title="Contact" href={"mailto:josie58@live.cn"} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
