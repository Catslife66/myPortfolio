import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Finger() {
  return (
    <svg
      width="160px"
      height="160px"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M11.2009 58.7439C14.1832 58.7439 18.4668 58.9956 20.4806 58.9956C22.4944 58.9956 24.9136 61.6579 34.3512 61.6579C43.7887 61.6579 45.7257 58.3513 45.6447 55.9322C45.5636 53.5131 47.4494 53.2144 47.9571 50.599C48.3454 48.5895 47.3683 48.2012 47.3683 46.9085C47.3683 45.62 49.2755 44.9501 49.2755 42.7785C49.2755 40.6068 47.5817 38.8319 47.5817 38.8319C47.5817 38.8319 59.8437 38.8319 64.1956 38.8319C68.5517 38.8319 73.9958 39.1946 73.9958 34.4758C73.9958 29.757 68.1891 30.3202 65.1044 30.3202C62.0196 30.3202 43.3237 30.2391 43.3237 30.2391C43.3237 30.2391 50.948 28.1826 50.948 22.2522C50.948 16.3217 46.8222 17.4608 43.5071 20.4389C37.6662 25.6825 23.8896 22.7385 19.1879 34.9579C19.1879 34.9579 18.7868 36.2763 10.0959 34.736C10.0959 34.736 6 35.3974 6 45.748C6 56.8709 11.2009 58.7439 11.2009 58.7439Z"
          fill="url(#paint0_linear)"
        ></path>{" "}
        <path
          d="M50.4274 19.4019C50.7517 20.0717 50.9479 20.9975 50.9479 22.2562C50.9479 27.5339 44.9193 29.7397 43.5924 30.1621L37.6022 30.3839H32.1624C42.4191 28.6602 49.7661 23.0625 50.4274 19.4019Z"
          fill="url(#paint1_linear)"
        ></path>{" "}
        <path
          d="M50.948 22.2561C50.948 28.1866 43.3237 30.2431 43.3237 30.2431L31.9534 30.5247C31.9534 30.5247 37.3036 28.9418 41.4507 28.7498C46.69 28.5066 50.8456 24.8032 50.8499 20.8481C50.9139 21.262 50.948 21.7313 50.948 22.2561Z"
          fill="url(#paint2_linear)"
        ></path>{" "}
        <path
          d="M64.1954 38.8317C59.8393 38.8317 47.5815 38.8317 47.5815 38.8317C47.5815 38.8317 48.7676 40.0818 49.1559 41.7671C48.8743 40.9309 46.9373 39.3309 45.8877 38.6568C44.7571 37.9315 47.0183 37.4622 50.0049 37.4622C52.9915 37.4622 64.5069 37.219 69.1617 37.219C71.9435 37.219 73.9999 36.1353 73.9999 34.4756C73.9957 39.1944 68.5516 38.8317 64.1954 38.8317Z"
          fill="url(#paint3_linear)"
        ></path>{" "}
        <path
          d="M48.0084 50.2789C48.0041 49.0757 46.4895 48.6704 46.4895 46.9382C46.4895 45.206 49.2713 44.1479 49.2713 42.7783C49.2713 44.95 47.3641 45.6198 47.3641 46.9126C47.3641 48.1286 48.2388 48.5467 48.0084 50.2789Z"
          fill="url(#paint4_linear)"
        ></path>{" "}
        <path
          d="M14.5286 57.6429C21.7262 57.2205 16.5936 51.7764 24.3288 57.5832C28.7489 60.9026 37.0346 60.0621 40.2985 59.6994C43.5666 59.3368 44.2322 56.555 44.7143 54.618C45.1367 52.9369 47.3041 52.3055 47.8716 50.9487C47.27 53.2399 45.5676 53.6238 45.6444 55.9278C45.7255 58.3469 43.7885 61.6535 34.3509 61.6535C24.9133 61.6535 22.4942 58.9912 20.4804 58.9912C18.4666 58.9912 14.183 58.7394 11.2007 58.7394C11.2007 58.7394 9.40871 58.0952 7.92822 55.3134C9.64337 55.8297 11.926 57.7965 14.5286 57.6429Z"
          fill="url(#paint5_linear)"
        ></path>{" "}
        <path
          d="M19.188 34.9578C21.6455 28.5751 26.5776 26.3309 31.5567 24.8931C23.7318 27.7772 21.1804 35.3802 19.5506 36.4682C18.0445 37.4708 13.4452 38.2217 8.70508 35.5765C9.46879 34.8341 10.0917 34.736 10.0917 34.736C18.7869 36.2762 19.188 34.9578 19.188 34.9578Z"
          fill="url(#paint6_linear)"
        ></path>{" "}
        <path
          d="M6.00854 46.4389C11.3716 45.577 16.3549 49.5108 24.5637 49.5108C33.5746 49.5108 38.302 55.3815 47.3982 52.1432C46.6559 53.4744 45.585 54.093 45.649 55.9276C45.73 58.3468 43.793 61.6533 34.3554 61.6533C24.9178 61.6533 22.4987 58.991 20.4849 58.991C18.4711 58.991 14.1875 58.735 11.2052 58.7393C11.2009 58.7436 6.21761 56.9473 6.00854 46.4389Z"
          fill="url(#paint7_linear)"
        ></path>{" "}
        <path
          opacity="0.5"
          d="M44.595 37.1337C44.595 39.6765 45.4441 41.1271 45.4441 43.1836C45.4441 45.2401 44.1982 51.8959 39.7568 51.8959C35.3153 51.8959 26.3044 48.2651 25.1652 44.2716C24.026 40.2781 29.4829 33.1786 33.118 32.577C36.7488 31.9712 44.595 33.1402 44.595 37.1337Z"
          fill="url(#paint8_radial)"
        ></path>{" "}
        <path
          d="M31.6504 30.563C31.6504 30.563 43.2383 30.2388 43.3194 30.2388L44.0575 29.9955C44.0575 29.8292 43.554 29.7737 43.3834 29.7737C43.0548 29.7737 34.9655 29.5092 31.6504 30.563Z"
          fill="#975500"
        ></path>{" "}
        <path
          opacity="0.5"
          d="M70.3862 34.0237C70.3862 35.4402 67.0455 36.6561 60.4707 35.7431C53.8917 34.8343 45.7981 37.9574 45.7981 34.4716C45.7981 30.9859 58.8494 32.7053 60.876 32.7053C62.9026 32.7053 70.3862 31.1907 70.3862 34.0237Z"
          fill="url(#paint9_radial)"
        ></path>{" "}
        <defs>
          {" "}
          <linearGradient
            id="paint0_linear"
            x1="34.4007"
            y1="79.0112"
            x2="42.1414"
            y2="23.9156"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop offset="0.00132565" stopColor="#F0C492"></stop>{" "}
            <stop offset="1" stopColor="#F8DBBA"></stop>{" "}
          </linearGradient>{" "}
          <linearGradient
            id="paint1_linear"
            x1="39.3489"
            y1="16.6059"
            x2="46.4066"
            y2="45.8992"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#FFBC47" stopOpacity="0"></stop>{" "}
            <stop offset="1" stopColor="#C86F34"></stop>{" "}
          </linearGradient>{" "}
          <linearGradient
            id="paint2_linear"
            x1="39.1828"
            y1="18.8687"
            x2="44.8492"
            y2="36.2727"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#FFBC47" stopOpacity="0"></stop>{" "}
            <stop offset="1" stopColor="#C86F34"></stop>{" "}
          </linearGradient>{" "}
          <linearGradient
            id="paint3_linear"
            x1="62.7991"
            y1="27.1772"
            x2="52.9334"
            y2="58.5953"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#FFBC47" stopOpacity="0"></stop>{" "}
            <stop offset="1" stopColor="#C86F34"></stop>{" "}
          </linearGradient>{" "}
          <linearGradient
            id="paint4_linear"
            x1="50.564"
            y1="46.5274"
            x2="41.8524"
            y2="46.5274"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#FFBC47" stopOpacity="0"></stop>{" "}
            <stop offset="1" stopColor="#E68E43"></stop>{" "}
          </linearGradient>{" "}
          <linearGradient
            id="paint5_linear"
            x1="29.0401"
            y1="45.8316"
            x2="22.8171"
            y2="85.7493"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#FFBC47" stopOpacity="0"></stop>{" "}
            <stop offset="1" stopColor="#C86F34"></stop>{" "}
          </linearGradient>{" "}
          <linearGradient
            id="paint6_linear"
            x1="28.028"
            y1="36.768"
            x2="3.43989"
            y2="16.4297"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#FFBC47" stopOpacity="0"></stop>{" "}
            <stop offset="1" stopColor="#C86F34"></stop>{" "}
          </linearGradient>{" "}
          <linearGradient
            id="paint7_linear"
            x1="28.0024"
            y1="40.5442"
            x2="18.1368"
            y2="106.871"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#FFBC47" stopOpacity="0"></stop>{" "}
            <stop offset="1" stopColor="#C86F34"></stop>{" "}
          </linearGradient>{" "}
          <radialGradient
            id="paint8_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(40.5785 42.2054) rotate(-90) scale(10.3565 5.25878)"
          >
            {" "}
            <stop stopColor="#F8E6D2"></stop>{" "}
            <stop offset="1" stopColor="#F8E6D2" stopOpacity="0"></stop>{" "}
          </radialGradient>{" "}
          <radialGradient
            id="paint9_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(58.0979 34.2274) rotate(-178.412) scale(12.7002 1.48143)"
          >
            {" "}
            <stop stopColor="#F8E6D2"></stop>{" "}
            <stop offset="1" stopColor="#F8E6D2" stopOpacity="0"></stop>{" "}
          </radialGradient>{" "}
        </defs>{" "}
      </g>
    </svg>
  );
}

export default function Contact() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const content = contentRef.current;

    content.innerHTML += content.innerHTML;

    const totalWidth = content.scrollWidth / 2;

    const fingers = gsap.utils.toArray(".finger");

    gsap.set(fingers, { rotateZ: 45 });

    gsap.fromTo(
      fingers,
      {
        xPercent: -5,
        yPercent: -5,
      },
      {
        xPercent: 5,
        yPercent: 5,
        repeatDelay: 0.5,
        repeat: -1,
      }
    );

    gsap.fromTo(
      content,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 20,
        ease: "linear",
        repeat: -1,
      }
    );
  }, {});

  return (
    <section
      id="getintouch"
      className="w-full py-8 md:py-[4rem] md:mt-[4rem] overflow-hidden z-0 bg-base"
    >
      <div
        ref={containerRef}
        className="w-full whitespace-nowrap flex justify-start"
      >
        <div ref={contentRef} className="flex gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="uppercase text-8xl font-extrabold text-secondary char-stroke whitespace-nowrap">
                get in touch
              </span>
              <span className="finger">
                <Finger />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
