"use client";
import React, { useRef } from "react";
import Cursor from "../components/Cursor";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function page() {
  const containerRef = useRef(null);

  return (
    <>
      <Cursor />

      <div className="w-full h-screen bg-green-100"></div>
    </>
  );
}
