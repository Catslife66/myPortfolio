"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import NavLink from "./NavLink";
import Logo from "./Logo";

const Header = () => {
  const currentPath = usePathname();
  const router = useRouter();

  const handleChangePath = (e) => {
    e.preventDefault();
    const nextPath = e.currentTarget.getAttribute("href");
    if (currentPath !== nextPath) {
      gsap.to(".block", {
        scaleY: 1,
        ease: "power1.in",
        stagger: {
          each: 0.1,
          axis: "x",
        },
        onComplete: () => {
          gsap.set(".block", { scaleY: 1 });
          router.push(nextPath);
        },
      });
    }
  };

  return (
    <nav className="bg-transparent z-10 w-full fixed">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className="link flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span>
            <Logo />
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <NavLink title="TestLink" href={"/test"} onClick={handleChangePath} />
          {/* <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
