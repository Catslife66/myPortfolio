"use client";

import React from "react";
import Spline from "@splinetool/react-spline/next";
import Herov1 from "./HeroScene";

const Overlay = () => {
  return (
    <>
      <div className="absolute left-40 top-48 space-y-8">
        <div className="text-6xl space-y-4">
          <div>
            <span className="text-8xl">X</span>iaohong
          </div>
          <div>
            <span className="text-8xl">Z</span>huang
          </div>
        </div>
        <div className="text-lg space-y-2">
          <div>
            A self-taught {""}
            <span className="text-5xl">P</span>
            rogrammer
          </div>
          <div>
            with a passion for <span className="text-5xl">W</span>eb development
          </div>

          <div>
            {" "}
            and a strong background in {""}
            <span className="text-5xl ">M</span>arketing.
          </div>
        </div>

        <button>Know More</button>
      </div>
      <div className="absolute right-20 top-48 w-[32rem] h-[32rem] border">
        {/* <Herov1 /> */}
      </div>
    </>

    //     </div>
    //     <div className="w-3/5 bg-orange-100">
    //       <div className="w-1/2 h-full"></div>
    //     </div>
    //   </div>
    //   <button className="align-items-center pt-8 mt-8 underline">
    //     Know More
    //   </button>
    // </div>
    // <>
    //   <div className="absolute top-0 text-"
    //     style={{
    //       position: "absolute",
    //       bottom: 120,
    //       left: 120,
    //       fontSize: "18px",
    //     }}
    //   >
    //     Runtime caustics and soft shadows,
    //     <br />
    //     for more realism on the web.
    //     <br />
    //     <br />
    //     <div
    //       style={{
    //         position: "relative",
    //         marginTop: 10,
    //         display: "inline-block",
    //       }}
    //     >
    //       <a
    //         style={{ fontSize: "15px", fontWeight: 600, letterSpacing: 2 }}
    //         href="https://github.com/pmndrs/drei#caustics"
    //       >
    //         DOCUMENTATION
    //       </a>
    //       <div
    //         style={{
    //           marginTop: 6,
    //           height: 2.5,
    //           width: "100%",
    //           background: "#3e3e3d",
    //         }}
    //       />
    //     </div>
    //     <br />
    //   </div>
    // </>
  );
};

export default Overlay;
