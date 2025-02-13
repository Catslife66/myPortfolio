import React from "react";
import Icons from "./Icons";

export default function FloatIcons() {
  return (
    <div className="w-full h-full absolute top-0 z-1 hidden md:block">
      {/* icon 1 */}
      <Icons
        pathClassName="text-1-path"
        content="Detail-Oriented | Problem-Solver"
      />
      {/* icon 2 */}
      <Icons
        pathClassName="text-2-path"
        content="Passionate About Web Developer"
      />

      {/* icon 3 */}
      <Icons pathClassName="text-3-path" content="Nature & Animal Lover" />

      {/* icon 4 */}
      <Icons pathClassName="text-4-path" content="Multi-culture" />
    </div>
  );
}
