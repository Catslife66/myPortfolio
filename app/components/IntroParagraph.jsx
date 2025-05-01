import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import Observer from "gsap/Observer";
import { useRef } from "react";

export default function IntroParagraph({ content, cls, containerCls = "" }) {
  const h2Ref = useRef(null);

  useGSAP(
    () => {
      if (!h2Ref.current) return;
      gsap.registerPlugin(ScrollTrigger);
      const target = document.querySelector(`.${cls}`);
      const chars = target.querySelectorAll(".h2Char");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });

      scrollTl.to(chars, {
        opacity: 1,
        y: 0,
        stagger: {
          amount: 1.5,
          from: "start",
          ease: "none",
        },
      });

      function handleResize() {
        gsap.set(chars, { opacity: 1, y: 0 });
      }

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: h2Ref }
  );

  return (
    <div className={`grid grid-cols-12 ${containerCls}`}>
      <h2
        ref={h2Ref}
        className={`col-span-10 col-start-2 flex flex-row flex-wrap justify-end text-shade text-2xl md:text-4xl uppercase ${cls}`}
      >
        {content.split(" ").map((char, idx) => (
          <span key={idx} className="me-3 mb-1 h2Char">
            {char}
          </span>
        ))}
      </h2>
    </div>
  );
}
