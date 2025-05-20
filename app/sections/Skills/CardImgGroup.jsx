import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as PIXI from "pixi.js";
import PixiPlugin from "gsap/PixiPlugin";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

export function PixiCard() {
  const gridSize = 12;
  const color1 = 0x3e0b5e;
  const color2 = 0xcae894;
  const color3 = 0x224c25;
  const circOffsetX = 0.11111;
  const circOffsetY = 0.15873;
  const animDuration = 1;

  useGSAP(() => {
    gsap.registerPlugin(PixiPlugin);
    PixiPlugin.registerPIXI(PIXI);

    async function initCanvas() {
      const app = new PIXI.Application();
      const board = document.querySelector(".board");
      const { width, height } = board.getBoundingClientRect();
      await app.init({
        width: width,
        height: height || 300,
        backgroundColor: 0xaf95e2,
        antialias: true,
        resizeTo: board,
      });

      board.appendChild(app.canvas);

      app.ticker.stop();

      gsap.ticker.add(() => {
        app.ticker.update();
      });

      const circD = Math.floor(width / gridSize);

      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const container = new PIXI.Container();
          const circContainer1 = new PIXI.Container();
          const circContainer2 = new PIXI.Container();
          const circContainer3 = new PIXI.Container();

          const circle1 = new PIXI.Graphics()
            .circle(0, 0, circD / 2)
            .fill(color1);
          circContainer1.addChild(circle1);
          circContainer1.x = 0;
          circContainer1.y = 0;

          container.addChild(circContainer1);

          const circle2 = new PIXI.Graphics()
            .circle(0, 0, circD / 2)
            .fill(color2);
          circContainer2.addChild(circle2);
          circContainer2.x = -circOffsetX * circD;
          circContainer2.y = circOffsetY * circD;
          container.addChild(circContainer2);

          const circle3 = new PIXI.Graphics()
            .circle(0, 0, circD / 2)
            .fill(color3);
          circContainer3.addChild(circle3);
          circContainer3.x = circOffsetX * circD;
          circContainer3.y = circOffsetY * circD;
          container.addChild(circContainer3);

          app.stage.addChild(container);

          container.x = i * circD + circD / 2 + i * 2;
          container.y = j * circD + circD / 2 + j * 2;
        }
      }

      return app;
    }

    function animatePixi(app) {
      gsap
        .timeline({ delay: 0.2 })
        .from(app.stage.children, {
          pixi: { scale: 0, rotation: 360 },
          duration: 2,
          ease: "power4",
          stagger: {
            each: 0.1,
            grid: [gridSize, gridSize],
            from: [0, 1],
          },
        })
        .to(
          app.stage.children,
          {
            duration: animDuration,
            ease: "sine.inOut",
            stagger: {
              each: 0.1,
              repeat: -1,
              yoyo: true,
              grid: [gridSize, gridSize],
              from: [0, 1],
              onStart: function () {
                gsap.to(this.targets()[0].children, {
                  pixi: { scale: 0.15 },
                  duration: animDuration,
                  ease: "sine.inOut",
                  repeat: -1,
                  yoyo: true,
                });
              },
            },
          },
          0.1
        );
    }

    (async () => {
      const app = await initCanvas();
      animatePixi(app);
    })();
  }, {});
  return <div className="board rounded-lg w-full h-[300px]"></div>;
}

export function RotateCard() {
  const n = 8;
  const rots = [
    { ry: 270, a: 0.5 },
    { ry: 0, a: 0.85 },
    { ry: 90, a: 0.4 },
    { ry: 180, a: 0.0 },
  ];

  useGSAP(() => {
    const cubes = gsap.utils.toArray(".cube");

    cubes.forEach((cube, id) => {
      const faces = cube.querySelectorAll(".face");
      faces.forEach((face, idx) => {
        gsap.set(face, {
          z: 200,
          rotateY: () => rots[idx].ry,
          transformOrigin: "50% 50% -201px",
        });
      });
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: { ease: "power3.inOut", duration: 1 },
      });
      tl.fromTo(
        cube,
        {
          rotateY: -90,
        },
        {
          rotateY: 90,
          ease: "power1.inOut",
          duration: 2,
        }
      )
        .fromTo(
          faces,
          {
            color: (j) =>
              `hsl(81, 65%, ${
                75 + ([rots[3].a, rots[0].a, rots[1].a][j] || 0) * 0
              }%)`,
          },
          {
            color: (j) =>
              `hsl(260, 57%, ${
                74 + ([rots[0].a, rots[1].a, rots[2].a][j] || 0) * 0
              }%)`,
          },
          0
        )
        .to(
          faces,
          {
            color: (j) =>
              "hsl(" +
              ((id / n) * 75 + 130) +
              ", 67%," +
              100 * [rots[1].a, rots[2].a, rots[3].a][j] +
              "%)",
          },
          1
        )
        .progress(id / n);
    });

    gsap
      .timeline()
      .from(
        ".tray",
        {
          yPercent: -3,
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        },
        0
      )
      .fromTo(
        ".tray",
        { rotate: -15 },
        {
          rotate: 15,
          duration: 4,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        },
        0
      )
      .from(
        ".die",
        {
          duration: 0.01,
          opacity: 0,
          stagger: { each: -0.05, ease: "power1.in" },
        },
        0
      )
      .to(
        ".tray",
        {
          scale: 1.2,
          duration: 2,
          ease: "power3.inOut",
          yoyo: true,
          repeat: -1,
        },
        0
      );
  }, {});

  return (
    <div className="flex w-full justify-center items-center overflow-hidden max-h-[300px] bg-darker opacity-2 rounded-lg">
      <div className="tray w-full">
        {Array.from({ length: n }).map((_item, id) => (
          <div key={id} className="die">
            <div className="cube">
              <div className="face" style={{ fontSize: "60px" }}>
                JOSIE
              </div>
              <div className="face" style={{ fontSize: "58px" }}>
                CODES
              </div>
              <div className="face" style={{ fontSize: "55px" }}>
                ANIMATION
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TextLoopCard() {
  const loopColor = "#224C25";
  const hoopColor = "#CAE894";
  const ballColor = "#F9F9F9";
  const startBall = 0;
  const endBall = 0.975;

  useGSAP(() => {
    gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);
    gsap.set(".hoop", {
      drawSVG: "98% 100%",
      autoAlpha: 1,
      immediateRender: true,
    });
    gsap.set(".ball", {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50%, 50%",
    });

    const tl = gsap.timeline({});
    function restart() {
      tl.play(0);
    }
    tl.to(".ball", {
      duration: 6,
      ease: "power3.inOut",
      immediateRender: true,
      motionPath: {
        path: ".loop",
        align: ".loop",
        start: startBall,
        end: endBall,
      },
    })
      .to(".hoop", {
        duration: 0.3,
        ease: "back.inOut",
        drawSVG: "99.5% 100%",
      })
      .to(".hoop", {
        duration: 0.3,
        ease: "back.inOut",
        drawSVG: "98% 100%",
        delay: 0.1,
      })
      .to(
        ".ball",
        {
          duration: 6,
          ease: "power3.inOut",
          motionPath: {
            path: ".loop",
            align: ".loop",
            start: endBall,
            end: startBall,
          },
        },
        "+=0.01"
      )
      .add(restart);
  }, {});

  return (
    <div className="rounded-lg h-full w-full flex justify-center items-center p-4 md:p-8">
      <svg viewBox="0 0 146 69">
        <path
          className="loop"
          d="M2 5.00001V65C2 65 4 48.5 6 42C8 35.5 11.3179 28.8504 17 31C20.3971 32.2852 22.3186 34.8725 22.5 38.5C23 48.5 21.5 52 22.5 60.5C22.8392 63.3829 24.7256 65.1463 27.5 66C34 68 36.1207 60.0049 40.5 55C44 51 47 49.5 51 45.5C53.0526 43.4474 54.5701 41.4019 54.5 38.5C54.4343 35.7811 53.2777 33.4862 51 32C48.8741 30.6129 47 30.5 44.5 32C41.7538 33.6477 40.1245 35.5014 39 38.5C37.5 42.5 37.8157 45.1684 38 49.5C38.1873 53.9013 38.8535 56.9783 41.5 60.5C44.2809 64.2006 46.7325 65.5932 51 66C56.1318 66.4892 59.3548 63.1452 63 59.5C70.5 52 70.6131 45.3145 73.5 35.5C76.0184 26.9381 77.5 13 77.5 13C77.5 13 78.8448 4.1922 75 3.00001C72.4633 2.21343 71.1944 3.11375 69.5 5.00001C67.8056 6.88626 67.5145 8.64019 67 11C62.8799 29.8959 67 57.5 68.5 60.5C70 63.5 72.4003 65.5164 76 66C81.7539 66.773 87 56 87 56L93 42L98 26C98 26 99.7879 18.714 99.5 14C99.3062 10.8273 98 7.00001 98 7.00001C98 7.00001 96.8589 3.69226 95.5 3.00001C94.1234 2.29872 92.2881 3.1355 90.8422 4.10167C89.2131 5.19018 88.3557 7.03078 88.1262 8.97657C87.065 17.9752 84.3683 45.2126 88.5 60.5C89.4071 63.8561 92.0696 65.4354 95.5 66C99.8978 66.7238 102.867 64.096 105.5 60.5C108.307 56.6668 109.5 48.5 109.5 48.5C109.5 48.5 107.329 60.6429 112.5 64C115.792 66.137 118.903 66.444 122.5 65C126.097 63.556 129 57.5 129 57.5C129 57.5 133.384 50.1705 133 45.5C132.611 40.765 131.599 34.6911 127 33.5C124.887 32.9527 123.17 33.0934 121.5 34.5C119.24 36.4039 119.5 39.0452 119.5 42C119.5 44.9549 121.5 49.5 121.5 49.5C121.5 49.5 123.401 53.8836 125.5 56C128.024 58.5452 129.916 60.4719 133.5 60.5C136.474 60.5233 138.369 59.5744 140.5 57.5C142.253 55.7936 143.5 52 143.5 52"
          fill="none"
          stroke={loopColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 5.00001V65C2 65 4 48.5 6 42C8 35.5 11.3179 28.8504 17 31C20.3971 32.2852 22.3186 34.8725 22.5 38.5C23 48.5 21.5 52 22.5 60.5C22.8392 63.3829 24.7256 65.1463 27.5 66C34 68 36.1207 60.0049 40.5 55C44 51 47 49.5 51 45.5C53.0526 43.4474 54.5701 41.4019 54.5 38.5C54.4343 35.7811 53.2777 33.4862 51 32C48.8741 30.6129 47 30.5 44.5 32C41.7538 33.6477 40.1245 35.5014 39 38.5C37.5 42.5 37.8157 45.1684 38 49.5C38.1873 53.9013 38.8535 56.9783 41.5 60.5C44.2809 64.2006 46.7325 65.5932 51 66C56.1318 66.4892 59.3548 63.1452 63 59.5C70.5 52 70.6131 45.3145 73.5 35.5C76.0184 26.9381 77.5 13 77.5 13C77.5 13 78.8448 4.1922 75 3.00001C72.4633 2.21343 71.1944 3.11375 69.5 5.00001C67.8056 6.88626 67.5145 8.64019 67 11C62.8799 29.8959 67 57.5 68.5 60.5C70 63.5 72.4003 65.5164 76 66C81.7539 66.773 87 56 87 56L93 42L98 26C98 26 99.7879 18.714 99.5 14C99.3062 10.8273 98 7.00001 98 7.00001C98 7.00001 96.8589 3.69226 95.5 3.00001C94.1234 2.29872 92.2881 3.1355 90.8422 4.10167C89.2131 5.19018 88.3557 7.03078 88.1262 8.97657C87.065 17.9752 84.3683 45.2126 88.5 60.5C89.4071 63.8561 92.0696 65.4354 95.5 66C99.8978 66.7238 102.867 64.096 105.5 60.5C108.307 56.6668 109.5 48.5 109.5 48.5C109.5 48.5 107.329 60.6429 112.5 64C115.792 66.137 118.903 66.444 122.5 65C126.097 63.556 129 57.5 129 57.5C129 57.5 133.384 50.1705 133 45.5C132.611 40.765 131.599 34.6911 127 33.5C124.887 32.9527 123.17 33.0934 121.5 34.5C119.24 36.4039 119.5 39.0452 119.5 42C119.5 44.9549 121.5 49.5 121.5 49.5C121.5 49.5 123.401 53.8836 125.5 56C128.024 58.5452 129.916 60.4719 133.5 60.5C136.474 60.5233 138.369 59.5744 140.5 57.5C142.253 55.7936 143.5 52 143.5 52"
          className="hoop"
          opacity={0}
          fill="none"
          stroke={hoopColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle className="ball" cx="2" cy="5" r="2" fill={ballColor} />
      </svg>
    </div>
  );
}

export function HeartBeatLoopCard() {
  const pathColor = "#224C25";
  const beatColor = "#CAE894";

  useGSAP(() => {
    gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);
    gsap.set(".line", {
      drawSVG: "0% 2%",
      autoAlpha: 1,
      immediateRender: true,
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(".line", {
      drawSVG: "100%",
      opacity: 1,
      ease: "none",
      duration: 4,
    }).to(".line", {
      drawSVG: "100% 100%",
      ease: "none",
      duration: 4,
    });
  }, {});
  return (
    <div className="rounded-lg h-full w-full flex justify-center items-center p-4 md:p-8">
      <svg viewBox="0 0 183 58" fill="none">
        <path
          className="path"
          d="M1 34.5614H21L31.5 8.06142L41 56.5614L52 20.0614L57.5 34.5614H78C78 34.5614 72.9372 28.7792 71 24.5614C69.0628 20.3437 67.2519 17.6421 68 13.0614C68.7481 8.48077 73.5258 1.24696 79.5 1.06142C85.4742 0.875869 91.5 10.5614 91.5 10.5614C91.5 10.5614 98.9747 0.108422 105 1.06142C111.025 2.01441 113.964 7.71457 115 13.0614C116.036 18.4083 113.432 23.03 111.5 26.5614C109.568 30.0928 105 34.5614 105 34.5614H126.5L131 20.0614L141.5 56.5614L151.5 8.06142L162 34.5614H182"
          stroke={pathColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="line"
          d="M1 34.5614H21L31.5 8.06142L41 56.5614L52 20.0614L57.5 34.5614H78C78 34.5614 72.9372 28.7792 71 24.5614C69.0628 20.3437 67.2519 17.6421 68 13.0614C68.7481 8.48077 73.5258 1.24696 79.5 1.06142C85.4742 0.875869 91.5 10.5614 91.5 10.5614C91.5 10.5614 98.9747 0.108422 105 1.06142C111.025 2.01441 113.964 7.71457 115 13.0614C116.036 18.4083 113.432 23.03 111.5 26.5614C109.568 30.0928 105 34.5614 105 34.5614H126.5L131 20.0614L141.5 56.5614L151.5 8.06142L162 34.5614H182"
          opacity={0}
          stroke={beatColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
