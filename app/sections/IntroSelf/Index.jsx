import React, { useRef } from "react";
import {
  aboutImgGroup,
  experienceIntro,
  meImgGroup,
} from "@/app/data/textContent";

import SectionIntro from "@/app/components/SectionIntro";

export default function IntroSelf() {
  const content = experienceIntro.content;
  const words = content.split(" ");
  const highlightWords = experienceIntro.highlightWords;

  return (
    <>
      <SectionIntro itemsGroup={[aboutImgGroup, meImgGroup]} />
      <div className="w-full py-[4rem] md:py-[5rem]">
        <div className="grid grid-cols-12">
          <div className="col-span-10 col-start-2">
            <div className="flex flex-row flex-wrap">
              {words.map((char, idx) => (
                <span
                  key={idx}
                  className={`contentSpan text-2xl me-2 mb-3
                  ${
                    highlightWords.includes(char)
                      ? "text-light font-bold"
                      : "font-thin"
                  }
                  `}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
