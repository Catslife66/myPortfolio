import React from "react";

export default function Icons({ pathClassName = "", content = "" }) {
  return (
    <div className={`text-path ${pathClassName}`}>
      <svg
        width="220"
        height="220"
        viewBox="-20 -20 220 220"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id={pathClassName}
            d="M0,90 
         A90,90 0 1,1 180,90 
         A90,90 0 1,1 0,90"
            fill="black"
            stroke="black"
          />
        </defs>
        <text className="text-lg" fill="black">
          <textPath href={`#${pathClassName}`}>{content}</textPath>
        </text>
      </svg>
    </div>
  );
}
