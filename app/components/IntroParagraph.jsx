import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import Observer from "gsap/Observer";
import { useRef } from "react";

export default function IntroParagraph({ content, cls, containerCls = "" }) {
  const h2Ref = useRef(null);

  useGSAP(() => {
    if (!h2Ref.current) return;
    gsap.registerPlugin(ScrollTrigger, Observer);
    const chars = h2Ref.current.querySelectorAll(".h2Char");

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: h2Ref.current,
        start: "top 80%",
        end: "top 50%",
      },
    });

    scrollTl.fromTo(
      chars,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        stagger: {
          amount: 1.5,
          from: "start",
          ease: "none",
        },
      }
    );
  }, {});

  return (
    <div className={`grid grid-cols-12 ${containerCls}`}>
      <div className="col-span-10 col-start-2 ">
        <h2
          ref={h2Ref}
          className={`flex flex-row flex-wrap justify-end text-shade text-2xl md:text-4xl uppercase ${cls}`}
        >
          {content.split(" ").map((char, idx) => (
            <span key={idx} className="me-3 mb-1 h2Char">
              {char}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}
