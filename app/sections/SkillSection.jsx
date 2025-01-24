import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SkillSection() {
  const cardGroupRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let cxt = gsap.context(() => {
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     scrub: 1,
      //     pin: true,
      //     trigger: cardGroupRef.current,
      //     start: "top 20%",
      //     endTrigger: card2Ref.current,
      //     end: "top  50%",
      //     markers: true,
      //   },
      // });
      // tl.to(card2Ref.current, {
      //   translateY: "-300px",
      // });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: card1Ref.current,
            start: "top 50%",
            end: "top 0%",
            scrub: 1,
            markers: true,
          },
          ease: "power1.inOut",
        })
        .to(card2Ref.current, {
          translateY: "-300px",
        })
        .to(card3Ref.current, {
          translateY: "-300px",
        })
        .to(card4Ref.current, {
          translateY: "-300px",
        });
    });
    return () => cxt.revert();
  }, []);

  return (
    <div className="p-4 bg-green-100">
      <h2 className="text-4xl font-bold">My Programming Skills</h2>
      <div ref={cardGroupRef} className="card-container py-4 relative">
        <div ref={card1Ref} className="card1 bg-blue-200 relative z-10">
          <h3 className="text-5xl font-bold py-4">Card Title 1</h3>
          <div
            className="flex flex-row space-x-8 py-4"
            style={{ minHeight: "300px" }}
          >
            <div className="w-2/3 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              vel itaque quia mollitia error quibusdam voluptatum architecto
              nobis ab aut. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quidem vel itaque quia mollitia error quibusdam voluptatum
              architecto nobis ab aut.
            </div>
            <div className="w-1/3 bg-blue-400"></div>
          </div>
        </div>
        <div ref={card2Ref} className="relative z-20">
          <div className="bg-red-200">
            <h3 className="text-5xl font-bold py-4">Card Title 2</h3>
            <div
              className="flex flex-row space-x-8 py-4"
              style={{ minHeight: "300px" }}
            >
              <div className="w-2/3 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                vel itaque quia mollitia error quibusdam voluptatum architecto
                nobis ab aut. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quidem vel itaque quia mollitia error quibusdam voluptatum
                architecto nobis ab aut.
              </div>
              <div className="w-1/3 bg-blue-400"></div>
            </div>
          </div>
          <div ref={card3Ref} className="relative z-30">
            <div className="bg-green-200">
              <h3 className="text-5xl font-bold py-4">Card Title 3</h3>
              <div
                className="flex flex-row space-x-8 py-4"
                style={{ minHeight: "300px" }}
              >
                <div className="w-2/3 text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem vel itaque quia mollitia error quibusdam voluptatum
                  architecto nobis ab aut. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quidem vel itaque quia mollitia
                  error quibusdam voluptatum architecto nobis ab aut.
                </div>
                <div className="w-1/3 bg-blue-400"></div>
              </div>
            </div>
            <div ref={card4Ref} className="relative z-40">
              <div className="bg-pink-200">
                <h3 className="text-5xl font-bold py-4">Card Title 4</h3>
                <div
                  className="flex flex-row space-x-8 py-4"
                  style={{ minHeight: "300px" }}
                >
                  <div className="w-2/3 text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem vel itaque quia mollitia error quibusdam voluptatum
                    architecto nobis ab aut. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quidem vel itaque quia
                    mollitia error quibusdam voluptatum architecto nobis ab aut.
                  </div>
                  <div className="w-1/3 bg-blue-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div ref={card3Ref} className="card3 bg-purple-200 relative z-30">
          <h3 className="text-5xl font-bold py-4">Card Title 3</h3>
          <div
            className="flex flex-row space-x-8 py-4"
            style={{ minHeight: "300px" }}
          >
            <div className="w-2/3 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              vel itaque quia mollitia error quibusdam voluptatum architecto
              nobis ab aut. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quidem vel itaque quia mollitia error quibusdam voluptatum
              architecto nobis ab aut.
            </div>
            <div className="w-1/3 bg-blue-400"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

{
  /* <div ref={card4Ref} className="card4 bg-green-200 relative z-40">
<h3 className="text-5xl font-bold py-4">Card Title 4</h3>
<div
  className="flex flex-row space-x-8 py-4"
  style={{ minHeight: "300px" }}
>
  <div className="w-2/3 text-xl">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
    vel itaque quia mollitia error quibusdam voluptatum architecto
    nobis ab aut. Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Quidem vel itaque quia mollitia error quibusdam voluptatum
    architecto nobis ab aut.
  </div>
  <div className="w-1/3 bg-blue-400"></div>
</div>
</div> */
}
