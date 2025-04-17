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
            className="flex items-center px-4 py-2 rounded-xl font-light hover:text-purple-500"
          >
            <span className="text-xl font-extrabold text-shade">JosieDev</span>
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
            <NavLink title="About" href={"/test"} onClick={handleChangePath} />
            <NavLink
              title="Projects"
              href={"/test"}
              onClick={handleChangePath}
            />
            <NavLink title="Q&A" href={"/another"} onClick={handleChangePath} />
            <NavLink
              title="Contact"
              href={"/test"}
              onClick={handleChangePath}
            />
          </ul>
        </div>
        <div className={`w-full py-8 ${isClosed ? "hidden" : ""}`}>
          <ul className="flex flex-col space-y-8">
            <NavLink title="About" href={"/test"} onClick={handleChangePath} />
            <NavLink title="About" href={"/test"} onClick={handleChangePath} />
            <NavLink title="About" href={"/test"} onClick={handleChangePath} />
            <NavLink title="About" href={"/test"} onClick={handleChangePath} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
