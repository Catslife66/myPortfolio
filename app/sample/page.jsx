"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Observer);

export default function Home() {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let allowScroll = true;
    let currentIndex = 0;
    let swipePanels = [section1Ref.current, section2Ref.current];

    function gotoPanel(index, isScrollingDown) {
      let target = isScrollingDown
        ? swipePanels[currentIndex]
        : swipePanels[index];
      console.log(target);
      gsap.to(target, {
        yPercent: isScrollingDown ? -100 : 0,
        duration: 0.75,
      });
      currentIndex = index;
    }

    const ob = ScrollTrigger.observe({
      onUp: () => allowScroll && gotoPanel(currentIndex - 1, false),
      onDown: () => allowScroll && gotoPanel(currentIndex + 1, true),
      tolerance: 10,
      preventDefault: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        markers: true,
        start: "top top",
        end: "+=200",
        onEnter: () => {
          ob.enable();
        },
        onEnterBack: () => {
          ob.enable();
        },
      },
    });

    // let allowScroll = true;
    // let scrollTimeout = gsap.delayedCall(1, () => (allowScroll = true)).pause();
    // let currentIndex = 0;
    // let swipePanels = gsap.utils.toArray(".swipe-section .panel");
    // gsap.set(swipePanels, { zIndex: (i) => swipePanels.length - i });

    // let intentObserver = ScrollTrigger.observe({
    //   type: "wheel,touch",
    //   onUp: () => allowScroll && gotoPanel(currentIndex - 1, false),
    //   onDown: () => allowScroll && gotoPanel(currentIndex + 1, true),
    //   tolerance: 10,
    //   preventDefault: true,
    //   onEnable(self) {
    //     allowScroll = false;
    //     scrollTimeout.restart(true);
    //     let savedScroll = self.scrollY();
    //     self._restoreScroll = () => self.scrollY(savedScroll);
    //     document.addEventListener("scroll", self._restoreScroll, {
    //       passive: false,
    //     });
    //   },
    //   onDisable: (self) =>
    //     document.removeEventListener("scroll", self._restoreScroll),
    // });

    // intentObserver.disable();

    // function gotoPanel(index, isScrollingDown) {
    //   if (
    //     (index === swipePanels.length && isScrollingDown) ||
    //     (index === -1 && !isScrollingDown)
    //   ) {
    //     intentObserver.disable();
    //     return;
    //   }
    //   allowScroll = false;
    //   scrollTimeout.restart(true);

    //   let target = isScrollingDown
    //     ? swipePanels[currentIndex]
    //     : swipePanels[index];
    //   gsap.to(target, {
    //     yPercent: isScrollingDown ? -100 : 0,
    //     duration: 0.75,
    //   });

    //   currentIndex = index;
    // }

    // ScrollTrigger.create({
    //   trigger: ".swipe-section",
    //   pin: true,
    //   start: "top top",
    //   end: "+=200",
    //   markers: true,
    //   onEnter: (self) => {
    //     if (intentObserver.isEnabled) {
    //       return;
    //     }
    //     self.scroll(self.start + 1);
    //     intentObserver.enable();
    //   },
    //   onEnterBack: (self) => {
    //     if (intentObserver.isEnabled) {
    //       return;
    //     }
    //     self.scroll(self.end - 1);
    //     intentObserver.enable();
    //   },
    // });
  }, {});

  return (
    <div className="w-full h-screen">
      {/* Animated Section Wrapper */}
      <div className="relative overflow-hidden h-screen w-screen">
        <div ref={containerRef} className="h-screen w-screen swipe-section">
          <section
            ref={section1Ref}
            className="panel h-screen w-screen bg-purple-500 flex items-center justify-center"
          >
            <h2 className="text-5xl font-bold text-white">Section 1</h2>
          </section>

          <section
            ref={section2Ref}
            className="panel h-screen w-screen bg-green-500 flex items-center justify-center"
          >
            <h2 className="text-5xl font-bold text-white">Section 2</h2>
          </section>
        </div>
      </div>

      <div className="w-full h-screen bg-red-200 flex items-center justify-center">
        <h2 className="text-5xl font-bold text-black">
          Section 3 (native scroll)
        </h2>
      </div>
    </div>
  );
}
