"use client";

import React, { Suspense, useEffect, useState } from "react";
import SphereScene from "./components/Sphere";

export default function Home() {
  return (
    <main className="bg-[#D0D0D0] w-full relative">
      <div className="w-full h-screen">
        <div className="w-full h-screen flex justify-center items-center absolute text-2xl">
          Hi, I'm
          <br />
          Xiaohong Zhuang.
        </div>
        <SphereScene />
      </div>
    </main>
  );
}
