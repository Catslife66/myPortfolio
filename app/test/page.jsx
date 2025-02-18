"use client";
import React, { useEffect, useRef } from "react";
import Cursor from "../components/Cursor";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Heading2 from "../components/Heading2";

export default function page() {
  const containerRef = useRef(null);

  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-heading-container ">
          {/* Character */}
          <div className={`hero-heading flex flex-col`}>
            <h1>XIAOHONG</h1>
            <h1>ZHUANG</h1>
          </div>
          {/* Shadow */}
          <div className={`hero-heading-shadow flex flex-col`}>
            <h1>XIAOHONG</h1>
            <h1>ZHUANG</h1>
          </div>
          {/* bg shadow */}
          <div className="hero-bg-shadow text-center font-extrabold">
            <h1>XIAOHONG</h1>
            <h1>ZHUANG</h1>
          </div>
        </div>
        <div className="w-1/2 text-center text-themeBlack text-sm py-[2rem] my-4 md:text-lg">
          A self-taught Programmer with a passion for Web development and a
          strong background in Marketing.
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8">
          <button className="btn primary-btn uppercase">
            Get my cv right away!
          </button>
          <button className="btn secondary-btn uppercase">
            Let me show you more about myself --.
          </button>
        </div>
      </div>
      <Heading2 content={"Heading"} />
      <div className="h-screen w-full bg-green-100"></div>

      <div
        class="c-stacking is-inview"
        data-module-stacking="m10"
        data-scroll=""
        data-scroll-offset="100%,100%"
        data-scroll-css-progress=""
        style="--progress: 0.2033876050420168;"
      >
        <ul
          class="c-stacking_list"
          data-stacking="list"
          style="--total-height: 1487px; --negative-offset: 0px; --negative-extra-offset: 0px;"
        >
          <li
            class="c-stacking_item 160"
            data-stacking="item"
            style="--position-top: 0px; --area-height: 1487px;"
          >
            <div class="c-stacking_area">
              <div
                class="c-stacking_trigger is-inview"
                data-stacking="trigger"
                data-scroll=""
                data-scroll-repeat=""
                data-scroll-call="triggerStackingItem"
                style="height: 291px;"
              ></div>
              <div class="c-stacking_element" data-stacking="element">
                <article class="c-tile-stacking">
                  <div class="o-container">
                    <div class="c-tile-stacking_inner || c-heading -h3">
                      <div class="c-tile-stacking_header">
                        <div
                          class="c-tile-stacking_header_inner"
                          data-stacking="header"
                        >
                          <p
                            class="c-tile-stacking_index || c-text -label"
                            data-scramble-text=""
                          >
                            S/001
                          </p>
                          <p class="c-tile-stacking_title || c-heading -h3">
                            Advisory
                          </p>
                        </div>
                      </div>
                      <div
                        class="c-tile-stacking_content is-inview"
                        data-scroll=""
                        data-scroll-call="scrambleText"
                        data-scramble-appear=""
                      >
                        <div class="c-tile-stacking_description || c-text -body">
                          <p>
                            Gain strategic insights from our fractional CTOs,
                            benefit from comprehensive technical reviews, and
                            achieve accelerated development with expert backend,
                            frontend, and DevOps solutions.
                          </p>
                        </div>

                        <div class="text-right-xs">
                          <a
                            class="c-button c-tile-stacking_cta -default"
                            href="/advisory"
                            aria-label="See our services"
                            data-scramble-hover=""
                            style=""
                          >
                            <span
                              class="c-button_label"
                              data-scramble-text=""
                              data-scramble-delay=".3"
                            >
                              See our services
                            </span>
                            <span class="c-button_icon">
                              <span class="c-icon">
                                <svg
                                  class="svg-arrow-right"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <use xlink:href="/static/images/sprite.svg#arrow-right"></use>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div class="c-tile-stacking_visual">
                        <div class="c-tile-stacking_visual_inner">
                          <div class="c-tile-stacking_visual_media">
                            <div
                              class="c-lottie-icon"
                              data-module-lottie-player="m11"
                              data-lottie-player-path="/media/service/advisory_hKBm80m.json"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 454 454"
                                width="454"
                                height="454"
                                preserveAspectRatio="xMidYMid meet"
                                style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                              >
                                <defs>
                                  <clipPath id="__lottie_element_17">
                                    <rect
                                      width="454"
                                      height="454"
                                      x="0"
                                      y="0"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <g clip-path="url(#__lottie_element_17)">
                                  <g
                                    transform="matrix(1,0,0,1,-485,-27)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <rect
                                      width="1424"
                                      height="508"
                                      fill="#ffffff"
                                    ></rect>
                                  </g>
                                  <g
                                    transform="matrix(1.9700000286102295,0,0,1.9700000286102295,226.50750732421875,356.5274963378906)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1.080680012702942,0,0,1.080680012702942,28.23963737487793,-33.375)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M0,-46.125 C25.45638656616211,-46.125 46.125,-25.45638656616211 46.125,0 C46.125,25.45638656616211 25.45638656616211,46.125 0,46.125 C-25.45638656616211,46.125 -46.125,25.45638656616211 -46.125,0 C-46.125,-25.45638656616211 -25.45638656616211,-46.125 0,-46.125z"
                                      ></path>
                                    </g>
                                    <g
                                      opacity="1"
                                      transform="matrix(1.080680012702942,0,0,1.080680012702942,26.475418090820312,-99.375)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M0,-46.125 C25.45638656616211,-46.125 46.125,-25.45638656616211 46.125,0 C46.125,25.45638656616211 25.45638656616211,46.125 0,46.125 C-25.45638656616211,46.125 -46.125,25.45638656616211 -46.125,0 C-46.125,-25.45638656616211 -25.45638656616211,-46.125 0,-46.125z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1.9700000286102295,0,0,1.9700000286102295,107.32250213623047,356.5274963378906)"
                                    opacity="1"
                                    style="mix-blend-mode: difference; display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1.080680012702942,0,0,1.080680012702942,27.38538360595703,-33.375)"
                                    >
                                      <path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M0,-46.125 C25.45638656616211,-46.125 46.125,-25.45638656616211 46.125,0 C46.125,25.45638656616211 25.45638656616211,46.125 0,46.125 C-25.45638656616211,46.125 -46.125,25.45638656616211 -46.125,0 C-46.125,-25.45638656616211 -25.45638656616211,-46.125 0,-46.125z"
                                      ></path>
                                    </g>
                                    <g
                                      opacity="1"
                                      transform="matrix(1.080680012702942,0,0,1.080680012702942,28.289575576782227,-99.375)"
                                    >
                                      <path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M0,-46.125 C25.45638656616211,-46.125 46.125,-25.45638656616211 46.125,0 C46.125,25.45638656616211 25.45638656616211,46.125 0,46.125 C-25.45638656616211,46.125 -46.125,25.45638656616211 -46.125,0 C-46.125,-25.45638656616211 -25.45638656616211,-46.125 0,-46.125z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </li>

          <li
            class="c-stacking_item 139"
            data-stacking="item"
            style="--position-top: 68px; --area-height: 1196px;"
          >
            <div class="c-stacking_area">
              <div
                class="c-stacking_trigger is-inview"
                data-stacking="trigger"
                data-scroll=""
                data-scroll-repeat=""
                data-scroll-call="triggerStackingItem"
                style="height: 291px;"
              ></div>
              <div class="c-stacking_element" data-stacking="element">
                <article class="c-tile-stacking">
                  <div class="o-container">
                    <div class="c-tile-stacking_inner || c-heading -h3">
                      <div class="c-tile-stacking_header">
                        <div
                          class="c-tile-stacking_header_inner"
                          data-stacking="header"
                        >
                          <p
                            class="c-tile-stacking_index || c-text -label"
                            data-scramble-text=""
                          >
                            S/002
                          </p>
                          <p class="c-tile-stacking_title || c-heading -h3">
                            Blockchain
                          </p>
                        </div>
                      </div>
                      <div
                        class="c-tile-stacking_content is-inview"
                        data-scroll=""
                        data-scroll-call="scrambleText"
                        data-scramble-appear=""
                      >
                        <div class="c-tile-stacking_description || c-text -body">
                          <p>
                            Delivering secure immutable data, smart contract
                            development, tokenomics, and zero-knowledge proof
                            technologies to optimize security, transparency, and
                            financial operations.&nbsp;₿
                          </p>
                        </div>

                        <div class="text-right-xs">
                          <a
                            class="c-button c-tile-stacking_cta -default"
                            href="/blockchain"
                            aria-label="See our services"
                            data-scramble-hover=""
                            style=""
                          >
                            <span
                              class="c-button_label"
                              data-scramble-text=""
                              data-scramble-delay=".3"
                            >
                              See our services
                            </span>
                            <span class="c-button_icon">
                              <span class="c-icon">
                                <svg
                                  class="svg-arrow-right"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <use xlink:href="/static/images/sprite.svg#arrow-right"></use>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div class="c-tile-stacking_visual">
                        <div class="c-tile-stacking_visual_inner">
                          <div class="c-tile-stacking_visual_media">
                            <div
                              class="c-lottie-icon"
                              data-module-lottie-player="m12"
                              data-lottie-player-path="/media/service/blockchain_KwrUPE9.json"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 454 454"
                                width="454"
                                height="454"
                                preserveAspectRatio="xMidYMid meet"
                                style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                              >
                                <defs>
                                  <clipPath id="__lottie_element_28">
                                    <rect
                                      width="454"
                                      height="454"
                                      x="0"
                                      y="0"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <g clip-path="url(#__lottie_element_28)">
                                  <g
                                    transform="matrix(1,0,0,1,-27,-27)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <rect
                                      width="508"
                                      height="508"
                                      fill="#ffffff"
                                    ></rect>
                                  </g>
                                  <g
                                    transform="matrix(-2.009999990463257,0,0,2.009999990463257,134.1962890625,228.1879119873047)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M-122.21429443359375,-1.069063663482666 C-122.20637512207031,-1.3586770296096802 -121.75347137451172,-2.3708934783935547 -121.20358276367188,-3.3279712200164795 C-121.20358276367188,-3.3279712200164795 -76.40791320800781,-81.294677734375 -76.40791320800781,-81.294677734375 C-75.85802459716797,-82.25175476074219 -74.5153579711914,-83.0288314819336 -73.41156005859375,-83.0288314819336 C-73.41156005859375,-83.0288314819336 -34.55514144897461,-83.0287857055664 -34.55514144897461,-83.0287857055664 C-33.45133972167969,-83.0287857055664 -32.55671310424805,-82.13258361816406 -32.558650970458984,-81.0287857055664 C-32.558650970458984,-81.0287857055664 -32.60758590698242,-53.15530014038086 -32.60758590698242,-53.15530014038086 C-32.60952377319336,-52.0515022277832 -33.052696228027344,-50.375457763671875 -33.596595764160156,-49.41496276855469 C-33.596595764160156,-49.41496276855469 -60.18666458129883,-2.4582083225250244 -60.18666458129883,-2.4582083225250244 C-60.73056411743164,-1.4977132081985474 -60.73139953613281,0.06245480850338936 -60.188533782958984,1.023532509803772 C-60.188533782958984,1.023532509803772 -33.59575653076172,48.10273742675781 -33.59575653076172,48.10273742675781 C-33.05289077758789,49.06381607055664 -32.61052322387695,50.740333557128906 -32.60854721069336,51.84413146972656 C-32.60854721069336,51.84413146972656 -32.558799743652344,79.65381622314453 -32.558799743652344,79.65381622314453 C-32.55682373046875,80.75761413574219 -33.451419830322266,81.65382385253906 -34.55522155761719,81.6538314819336 C-34.55522155761719,81.6538314819336 -73.72362518310547,81.6541519165039 -73.72362518310547,81.6541519165039 C-74.82742309570312,81.65415954589844 -76.16493225097656,80.87415313720703 -76.70846557617188,79.9134521484375 C-76.70846557617188,79.9134521484375 -121.24382019042969,1.1964104175567627 -121.24382019042969,1.1964104175567627 C-121.787353515625,0.23570866882801056 -122.22222137451172,-0.7794502377510071 -122.21429443359375,-1.069063663482666 C-122.21429443359375,-1.069063663482666 -122.21429443359375,-1.069063663482666 -122.21429443359375,-1.069063663482666z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(-2.009999990463257,0,0,2.009999990463257,134.1962890625,228.1879119873047)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M-32.71443557739258,-47.235660552978516 C-32.71443176269531,-48.33946228027344 -32.275394439697266,-50.0169563293457 -31.734657287597656,-50.97923278808594 C-31.734657287597656,-50.97923278808594 -15.089802742004395,-80.59982299804688 -15.089802742004395,-80.59982299804688 C-14.549065589904785,-81.56209564208984 -13.213828086853027,-82.34339141845703 -12.110028266906738,-82.34339141845703 C-12.110028266906738,-82.34339141845703 28.090726852416992,-82.34339141845703 28.090726852416992,-82.34339141845703 C29.19452667236328,-82.34339141845703 30.092016220092773,-81.44718933105469 30.093605041503906,-80.34339141845703 C30.093605041503906,-80.34339141845703 30.134685516357422,-51.78776550292969 30.134685516357422,-51.78776550292969 C30.136274337768555,-50.68396759033203 30.134796142578125,-48.89157485961914 30.131389617919922,-47.787776947021484 C30.131389617919922,-47.787776947021484 29.992542266845703,-2.8156425952911377 29.992542266845703,-2.8156425952911377 C29.9891357421875,-1.7118477821350098 29.988243103027344,0.08054596930742264 29.990550994873047,1.1843435764312744 C29.990550994873047,1.1843435764312744 30.086544036865234,47.07967758178711 30.086544036865234,47.07967758178711 C30.088851928710938,48.183475494384766 30.090726852416992,49.97587203979492 30.090726852416992,51.079673767089844 C30.090726852416992,51.079673767089844 30.090726852416992,80.33860778808594 30.090726852416992,80.33860778808594 C30.090726852416992,81.4424057006836 29.19452667236328,82.33860778808594 28.090726852416992,82.33860778808594 C28.090726852416992,82.33860778808594 -12.111117362976074,82.33860778808594 -12.111117362976074,82.33860778808594 C-13.214917182922363,82.33860778808594 -14.55010986328125,81.55728912353516 -15.090792655944824,80.59497833251953 C-15.090792655944824,80.59497833251953 -31.73485565185547,50.97185134887695 -31.73485565185547,50.97185134887695 C-32.27553939819336,50.009544372558594 -32.71453094482422,48.332027435302734 -32.71452713012695,47.22822570800781 C-32.71452713012695,47.22822570800781 -32.71443557739258,-47.235660552978516 -32.71443557739258,-47.235660552978516z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(-2.009999990463257,0,0,2.009999990463257,134.1962890625,228.1879119873047)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M29.80181884765625,-47.404991149902344 C29.80181884765625,-48.508792877197266 29.81055450439453,-50.3011474609375 29.821313858032227,-51.4048957824707 C29.821313858032227,-51.4048957824707 30.10281753540039,-80.28428649902344 30.10281753540039,-80.28428649902344 C30.113576889038086,-81.3880386352539 30.10474967956543,-82.29692077636719 30.083118438720703,-82.3125991821289 C30.083118438720703,-82.3125991821289 30.083118438720703,-82.3125991821289 30.083118438720703,-82.3125991821289 C30.06148910522461,-82.32827758789062 30.04524803161621,-81.4448013305664 30.046875,-80.34100341796875 C30.046875,-80.34100341796875 30.088973999023438,-51.782997131347656 30.088973999023438,-51.782997131347656 C30.090600967407227,-50.67919921875 30.090951919555664,-48.886802673339844 30.089757919311523,-47.78300094604492 C30.089757919311523,-47.78300094604492 30.04109001159668,-2.8159987926483154 30.04109001159668,-2.8159987926483154 C30.03989601135254,-1.7121994495391846 30.03901481628418,0.08020000904798508 30.039125442504883,1.184000015258789 C30.039125442504883,1.184000015258789 30.043725967407227,47.07699966430664 30.043725967407227,47.07699966430664 C30.04383659362793,48.18080139160156 30.043926239013672,49.97319793701172 30.043926239013672,51.07699966430664 C30.043926239013672,51.07699966430664 30.043926239013672,80.34100341796875 30.043926239013672,80.34100341796875 C30.043926239013672,81.4448013305664 30.06148910522461,82.35395050048828 30.083118438720703,82.36990356445312 C30.083118438720703,82.36990356445312 30.083118438720703,82.36990356445312 30.083118438720703,82.36990356445312 C30.10474967956543,82.38584899902344 30.113595962524414,81.50263977050781 30.10285758972168,80.39888763427734 C30.10285758972168,80.39888763427734 29.821273803710938,51.45172882080078 29.821273803710938,51.45172882080078 C29.810535430908203,50.34798049926758 29.80181884765625,48.555625915527344 29.80181884765625,47.45182418823242 C29.80181884765625,47.45182418823242 29.80181884765625,-47.404991149902344 29.80181884765625,-47.404991149902344z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    style="display: none;"
                                    transform="matrix(-2.009999990463257,0,0,2.009999990463257,134.1962890625,228.1879119873047)"
                                    opacity="1"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M-122.2135009765625,-1.0684999227523804 C-122.20549774169922,-1.3585237264633179 -121.75253295898438,-2.371074914932251 -121.20265197753906,-3.3281548023223877 C-121.20265197753906,-3.3281548023223877 -76.40734100341797,-81.29484558105469 -76.40734100341797,-81.29484558105469 C-75.85746002197266,-82.25192260742188 -74.5147933959961,-83.02899932861328 -73.41099548339844,-83.02899932861328 C-73.41099548339844,-83.02899932861328 -34.42599868774414,-83.02899932861328 -34.42599868774414,-83.02899932861328 C-33.32219696044922,-83.02899932861328 -32.42599868774414,-82.13279724121094 -32.42599868774414,-81.02899932861328 C-32.42599868774414,-81.02899932861328 -32.42599868774414,-53.15399932861328 -32.42599868774414,-53.15399932861328 C-32.42599868774414,-52.05019760131836 -32.86760711669922,-50.3741569519043 -33.41151428222656,-49.413665771484375 C-33.41151428222656,-49.413665771484375 -60.00248336791992,-2.4563333988189697 -60.00248336791992,-2.4563333988189697 C-60.546390533447266,-1.4958434104919434 -60.547210693359375,0.06430759280920029 -60.00431442260742,1.02536940574646 C-60.00431442260742,1.02536940574646 -33.40968322753906,48.10462951660156 -33.40968322753906,48.10462951660156 C-32.86678695678711,49.06569290161133 -32.42599868774414,50.7421989440918 -32.42599868774414,51.84600067138672 C-32.42599868774414,51.84600067138672 -32.42599868774414,79.65399932861328 -32.42599868774414,79.65399932861328 C-32.42599868774414,80.75779724121094 -33.32219696044922,81.65399932861328 -34.42599868774414,81.65399932861328 C-34.42599868774414,81.65399932861328 -73.7239990234375,81.65399932861328 -73.7239990234375,81.65399932861328 C-74.82779693603516,81.65399932861328 -76.1653060913086,80.87398529052734 -76.70883178710938,79.91327667236328 C-76.70883178710938,79.91327667236328 -121.2431640625,1.1977195739746094 -121.2431640625,1.1977195739746094 C-121.78668975830078,0.23701681196689606 -122.22149658203125,-0.7784761786460876 -122.2135009765625,-1.0684999227523804 C-122.2135009765625,-1.0684999227523804 -122.2135009765625,-1.0684999227523804 -122.2135009765625,-1.0684999227523804z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    style="display: none;"
                                    transform="matrix(-2.009999990463257,0,0,2.009999990463257,134.1962890625,228.1879119873047)"
                                    opacity="1"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M-32.402000427246094,-47.402000427246094 C-32.402000427246094,-48.505802154541016 -31.963027954101562,-50.18333053588867 -31.42237091064453,-51.145652770996094 C-31.42237091064453,-51.145652770996094 -14.875629425048828,-80.59735107421875 -14.875629425048828,-80.59735107421875 C-14.33497142791748,-81.5596694946289 -12.999798774719238,-82.34100341796875 -11.89599895477295,-82.34100341796875 C-11.89599895477295,-82.34100341796875 28.30900001525879,-82.34100341796875 28.30900001525879,-82.34100341796875 C29.412799835205078,-82.34100341796875 30.310293197631836,-81.4448013305664 30.311887741088867,-80.34100341796875 C30.311887741088867,-80.34100341796875 30.353113174438477,-51.782997131347656 30.353113174438477,-51.782997131347656 C30.354707717895508,-50.67919921875 30.35504913330078,-48.886802673339844 30.3538761138916,-47.78300094604492 C30.3538761138916,-47.78300094604492 30.30612564086914,-2.8159987926483154 30.30612564086914,-2.8159987926483154 C30.30495262145996,-1.7121994495391846 30.30409049987793,0.08020000904798508 30.304201126098633,1.184000015258789 C30.304201126098633,1.184000015258789 30.308799743652344,47.07699966430664 30.308799743652344,47.07699966430664 C30.308910369873047,48.18080139160156 30.30900001525879,49.97319793701172 30.30900001525879,51.07699966430664 C30.30900001525879,51.07699966430664 30.30900001525879,80.34100341796875 30.30900001525879,80.34100341796875 C30.30900001525879,81.4448013305664 29.412799835205078,82.34100341796875 28.30900001525879,82.34100341796875 C28.30900001525879,82.34100341796875 -11.89599895477295,82.34100341796875 -11.89599895477295,82.34100341796875 C-12.999798774719238,82.34100341796875 -14.33497142791748,81.5596694946289 -14.875629425048828,80.59735107421875 C-14.875629425048828,80.59735107421875 -31.42237091064453,51.145652770996094 -31.42237091064453,51.145652770996094 C-31.963027954101562,50.18333053588867 -32.402000427246094,48.505802154541016 -32.402000427246094,47.402000427246094 C-32.402000427246094,47.402000427246094 -32.402000427246094,-47.402000427246094 -32.402000427246094,-47.402000427246094z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </li>

          <li
            class="c-stacking_item 152"
            data-stacking="item"
            style="--position-top: 136px; --area-height: 905px;"
          >
            <div class="c-stacking_area">
              <div
                class="c-stacking_trigger is-inview"
                data-stacking="trigger"
                data-scroll=""
                data-scroll-repeat=""
                data-scroll-call="triggerStackingItem"
                style="height: 307px;"
              ></div>
              <div class="c-stacking_element" data-stacking="element">
                <article class="c-tile-stacking">
                  <div class="o-container">
                    <div class="c-tile-stacking_inner || c-heading -h3">
                      <div class="c-tile-stacking_header">
                        <div
                          class="c-tile-stacking_header_inner"
                          data-stacking="header"
                        >
                          <p
                            class="c-tile-stacking_index || c-text -label"
                            data-scramble-text=""
                          >
                            S/003
                          </p>
                          <p class="c-tile-stacking_title || c-heading -h3">
                            Product Development
                          </p>
                        </div>
                      </div>
                      <div
                        class="c-tile-stacking_content is-inview"
                        data-scroll=""
                        data-scroll-call="scrambleText"
                        data-scramble-appear=""
                      >
                        <div class="c-tile-stacking_description || c-text -body">
                          <p>
                            Bring market-ready products to life with our product
                            development services. Prototypes &amp; MVPs, SaaS,
                            web, and mobile applications, managed services from
                            planning and design to coding, testing, and ongoing
                            maintenance.
                          </p>
                        </div>

                        <div class="text-right-xs">
                          <a
                            class="c-button c-tile-stacking_cta -default"
                            href="/product-development"
                            aria-label="See our services"
                            data-scramble-hover=""
                            style=""
                          >
                            <span
                              class="c-button_label"
                              data-scramble-text=""
                              data-scramble-delay=".3"
                            >
                              See our services
                            </span>
                            <span class="c-button_icon">
                              <span class="c-icon">
                                <svg
                                  class="svg-arrow-right"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <use xlink:href="/static/images/sprite.svg#arrow-right"></use>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div class="c-tile-stacking_visual">
                        <div class="c-tile-stacking_visual_inner">
                          <div class="c-tile-stacking_visual_media">
                            <div
                              class="c-lottie-icon"
                              data-module-lottie-player="m13"
                              data-lottie-player-path="/media/service/product.json"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 454 454"
                                width="454"
                                height="454"
                                preserveAspectRatio="xMidYMid meet"
                                style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                              >
                                <defs>
                                  <clipPath id="__lottie_element_59">
                                    <rect
                                      width="454"
                                      height="454"
                                      x="0"
                                      y="0"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <g clip-path="url(#__lottie_element_59)">
                                  <g
                                    transform="matrix(1.5499999523162842,0,0,1.5499999523162842,194.5426483154297,191.7379913330078)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,97.57499694824219,22.75)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M3.7775943279266357,-88.64960479736328 C3.7775943279266357,-88.64960479736328 3.7738945484161377,88.6434326171875 3.7738945484161377,88.6434326171875 C3.7738945484161377,89.74543762207031 3.3141844272613525,91.62364959716797 2.5601131916046143,92.72982025146484 C2.5601131916046143,92.72982025146484 -3.062967538833618,103.85897064208984 -3.062967538833618,103.85897064208984 C-4.336052417755127,105.4944076538086 -4.713749885559082,104.23822021484375 -4.713749885559082,102.83122253417969 C-4.713749885559082,102.83122253417969 -4.653082847595215,-103.29644012451172 -4.653082847595215,-103.29644012451172 C-4.652606964111328,-104.9904556274414 -4.610232353210449,-105.98721313476562 -3.442113161087036,-104.45114135742188 C-3.442113161087036,-104.45114135742188 2.9241132736206055,-91.8934097290039 2.9241132736206055,-91.8934097290039 C3.5875420570373535,-91.03840637207031 3.761594295501709,-89.37660217285156 3.7775943279266357,-88.64960479736328z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1.5499999523162842,0,0,1.5499999523162842,147.6676483154297,191.7379913330078)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,97.57499694824219,22.75)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M5.542789936065674,-88.98844909667969 C5.542789936065674,-88.98844909667969 5.733650207519531,89.29376983642578 5.733650207519531,89.29376983642578 C5.733650207519531,90.39576721191406 5.45502233505249,91.8665542602539 4.521836757659912,92.62531280517578 C4.521836757659912,92.62531280517578 -5.007137775421143,103.62847900390625 -5.007137775421143,103.62847900390625 C-6.719067573547363,104.25479125976562 -7.066359043121338,103.07347869873047 -7.066359043121338,101.6664810180664 C-7.066359043121338,101.6664810180664 -7.125724792480469,-102.81819915771484 -7.125724792480469,-102.81819915771484 C-7.125248908996582,-104.51221466064453 -6.764996528625488,-105.43023681640625 -5.239633560180664,-103.9925765991211 C-5.239633560180664,-103.9925765991211 4.6893086433410645,-92.23225402832031 4.6893086433410645,-92.23225402832031 C5.531851291656494,-91.67544555664062 5.526790142059326,-89.71544647216797 5.542789936065674,-88.98844909667969z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1.5499999523162842,0,0,1.5499999523162842,100.66764831542969,191.7379913330078)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,97.57499694824219,22.75)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M8.155217170715332,-89.81060791015625 C8.155217170715332,-89.81060791015625 8.196520805358887,88.19830322265625 8.196520805358887,88.19830322265625 C8.196520805358887,89.30030822753906 7.9178924560546875,90.7720718383789 6.984707355499268,91.53083801269531 C6.984707355499268,91.53083801269531 -6.910656452178955,103.99054718017578 -6.910656452178955,103.99054718017578 C-8.63343334197998,104.6133041381836 -9.25500202178955,103.13141632080078 -9.25500202178955,101.72441864013672 C-9.25500202178955,101.72441864013672 -9.158506393432617,-101.9970932006836 -9.158506393432617,-101.9970932006836 C-9.15803050994873,-103.69110870361328 -8.444263458251953,-105.12003326416016 -6.3835272789001465,-103.42453002929688 C-6.3835272789001465,-103.42453002929688 6.478024959564209,-92.2612075805664 6.478024959564209,-92.2612075805664 C7.480982780456543,-91.84317016601562 8.139217376708984,-90.53761291503906 8.155217170715332,-89.81060791015625z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1.5499999523162842,0,0,1.5499999523162842,54.54264831542969,191.7379913330078)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,97.57499694824219,22.75)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M10.054055213928223,-89.53820037841797 C10.054055213928223,-89.53820037841797 10.14658260345459,88.8102035522461 10.14658260345459,88.8102035522461 C10.14658260345459,89.9122085571289 9.87484359741211,90.8682861328125 8.941658973693848,91.44891357421875 C8.941658973693848,91.44891357421875 -9.237648963928223,104.36299896240234 -9.237648963928223,104.36299896240234 C-10.960426330566406,104.98575592041016 -11.581978797912598,103.50387573242188 -11.581978797912598,102.09687042236328 C-11.581978797912598,102.09687042236328 -11.580709457397461,-101.69412994384766 -11.580709457397461,-101.69412994384766 C-11.577363967895508,-103.39102935791016 -10.82710075378418,-104.92190551757812 -8.62760066986084,-103.47880554199219 C-8.62760066986084,-103.47880554199219 8.376862525939941,-91.9887924194336 8.376862525939941,-91.9887924194336 C9.379820823669434,-91.57074737548828 10.038054466247559,-90.26520538330078 10.054055213928223,-89.53820037841797z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1.5499999523162842,0,0,1.5499999523162842,9.542648315429688,191.7379913330078)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,97.57499694824219,22.75)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M11.380266189575195,-89.22769927978516 C11.380266189575195,-89.22769927978516 11.396154403686523,88.42700958251953 11.396154403686523,88.42700958251953 C11.396154403686523,89.52901458740234 11.124415397644043,90.4841079711914 10.191230773925781,91.06474304199219 C10.191230773925781,91.06474304199219 -11.986515045166016,103.850830078125 -11.986515045166016,103.850830078125 C-13.7092924118042,104.47358703613281 -14.33086109161377,102.99170684814453 -14.33086109161377,101.58470153808594 C-14.33086109161377,101.58470153808594 -14.40881633758545,-101.80599212646484 -14.40881633758545,-101.80599212646484 C-14.408990859985352,-103.49266052246094 -13.659029006958008,-105.02450561523438 -11.453788757324219,-103.58588409423828 C-11.453788757324219,-103.58588409423828 9.703057289123535,-91.67731475830078 9.703057289123535,-91.67731475830078 C10.707776069641113,-91.25192260742188 11.364265441894531,-89.95469665527344 11.380266189575195,-89.22769927978516z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1.5499999523162842,0,0,1.5499999523162842,-32.33235168457031,191.7379913330078)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,97.57499694824219,22.75)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M11.141155242919922,-88.61644744873047 C11.141155242919922,-88.61644744873047 11.296316146850586,88.14533233642578 11.296316146850586,88.14533233642578 C11.296316146850586,89.24732971191406 11.02481460571289,90.20962524414062 10.090408325195312,90.79328155517578 C10.090408325195312,90.79328155517578 -17.248197555541992,104.02767181396484 -17.248197555541992,104.02767181396484 C-18.970975875854492,104.65042877197266 -19.59254264831543,103.16854858398438 -19.59254264831543,101.76155090332031 C-19.59254264831543,101.76155090332031 -19.73338508605957,-101.17664337158203 -19.73338508605957,-101.17664337158203 C-19.733558654785156,-102.86331176757812 -18.502500534057617,-104.79083251953125 -16.292139053344727,-103.35283660888672 C-16.292139053344727,-103.35283660888672 9.463788032531738,-91.07532501220703 9.463788032531738,-91.07532501220703 C10.468189239501953,-90.64642333984375 11.125155448913574,-89.34345245361328 11.141155242919922,-88.61644744873047z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </li>

          <li
            class="c-stacking_item 159"
            data-stacking="item"
            style="--position-top: 204px; --area-height: 598px;"
          >
            <div class="c-stacking_area">
              <div
                class="c-stacking_trigger is-inview"
                data-stacking="trigger"
                data-scroll=""
                data-scroll-repeat=""
                data-scroll-call="triggerStackingItem"
                style="height: 307px;"
              ></div>
              <div class="c-stacking_element" data-stacking="element">
                <article class="c-tile-stacking">
                  <div class="o-container">
                    <div class="c-tile-stacking_inner || c-heading -h3">
                      <div class="c-tile-stacking_header">
                        <div
                          class="c-tile-stacking_header_inner"
                          data-stacking="header"
                        >
                          <p
                            class="c-tile-stacking_index || c-text -label"
                            data-scramble-text=""
                          >
                            S/004
                          </p>
                          <p class="c-tile-stacking_title || c-heading -h3">
                            Enterprise Software
                          </p>
                        </div>
                      </div>
                      <div
                        class="c-tile-stacking_content is-inview"
                        data-scroll=""
                        data-scroll-call="scrambleText"
                        data-scramble-appear=""
                      >
                        <div class="c-tile-stacking_description || c-text -body">
                          <p>
                            Scale effectively with our enterprise software
                            solutions: streamline operations with customized
                            platforms, enhance productivity through advanced
                            integrations, and secure your infrastructure with a
                            robust support systems.
                          </p>
                        </div>

                        <div class="text-right-xs">
                          <a
                            class="c-button c-tile-stacking_cta -default"
                            href="/enterprise-software"
                            aria-label="See our services"
                            data-scramble-hover=""
                            style=""
                          >
                            <span
                              class="c-button_label"
                              data-scramble-text=""
                              data-scramble-delay=".3"
                            >
                              See our services
                            </span>
                            <span class="c-button_icon">
                              <span class="c-icon">
                                <svg
                                  class="svg-arrow-right"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <use xlink:href="/static/images/sprite.svg#arrow-right"></use>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div class="c-tile-stacking_visual">
                        <div class="c-tile-stacking_visual_inner">
                          <div class="c-tile-stacking_visual_media">
                            <div
                              class="c-lottie-icon"
                              data-module-lottie-player="m14"
                              data-lottie-player-path="/media/service/team_WRVVwRk.json"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 508 508"
                                width="508"
                                height="508"
                                preserveAspectRatio="xMidYMid meet"
                                style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                              >
                                <defs>
                                  <clipPath id="__lottie_element_6">
                                    <rect
                                      width="508"
                                      height="508"
                                      x="0"
                                      y="0"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <g clip-path="url(#__lottie_element_6)">
                                  <g
                                    transform="matrix(1,0,0,1,0,0)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <rect
                                      width="508"
                                      height="508"
                                      fill="#ffffff"
                                    ></rect>
                                  </g>
                                  <g
                                    transform="matrix(1.0049999952316284,0,0,1.0049999952316284,254.5,253.5)"
                                    opacity="1"
                                    style="mix-blend-mode: difference; display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,-0.5,0.5)"
                                    >
                                      <path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M0,-140.5 C77.59600067138672,-140.5 140.5,-77.59600067138672 140.5,0 C140.5,77.59600067138672 77.59600067138672,140.5 0,140.5 C-77.59600067138672,140.5 -140.5,77.59600067138672 -140.5,0 C-140.5,-77.59600067138672 -77.59600067138672,-140.5 0,-140.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(0.721248984336853,0.721248984336853,-0.721248984336853,0.721248984336853,240.25462341308594,321.34716796875)"
                                    opacity="1"
                                    style="mix-blend-mode: difference; display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,94.75,-94.5)"
                                    >
                                      <path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M0,-83 C45.807701110839844,-83 83,-45.807701110839844 83,0 C83,45.807701110839844 45.807701110839844,83 0,83 C-45.807701110839844,83 -83,45.807701110839844 -83,0 C-83,-45.807701110839844 -45.807701110839844,-83 0,-83z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </li>

          <li
            class="c-stacking_item 158 is-inview"
            data-stacking="item"
            data-scroll=""
            data-scroll-position="end,end"
            data-scroll-offset="0,0"
            data-scroll-event-progress="stackingProgress"
            style="--position-top: 272px; --area-height: 291px;"
          >
            <div class="c-stacking_area">
              <div
                class="c-stacking_trigger"
                data-stacking="trigger"
                data-scroll=""
                data-scroll-repeat=""
                data-scroll-call="triggerStackingItem"
                style="height: 291px;"
              ></div>
              <div class="c-stacking_element" data-stacking="element">
                <article class="c-tile-stacking">
                  <div class="o-container">
                    <div class="c-tile-stacking_inner || c-heading -h3">
                      <div class="c-tile-stacking_header">
                        <div
                          class="c-tile-stacking_header_inner"
                          data-stacking="header"
                        >
                          <p
                            class="c-tile-stacking_index || c-text -label"
                            data-scramble-text=""
                          >
                            S/005
                          </p>
                          <p class="c-tile-stacking_title || c-heading -h3">
                            Artificial Intelligence (AI)
                          </p>
                        </div>
                      </div>
                      <div
                        class="c-tile-stacking_content is-inview"
                        data-scroll=""
                        data-scroll-call="scrambleText"
                        data-scramble-appear=""
                      >
                        <div class="c-tile-stacking_description || c-text -body">
                          <p>
                            Enhance operations with AI, &nbsp;from strategy to
                            development, LLM ntegration, automated decision
                            systems, and OCR technology, tailored to optimize
                            performance and efficiency.
                          </p>
                        </div>

                        <div class="text-right-xs">
                          <a
                            class="c-button c-tile-stacking_cta -default"
                            href="/artificial-intelligence-ai"
                            aria-label="See our services"
                            data-scramble-hover=""
                            style=""
                          >
                            <span
                              class="c-button_label"
                              data-scramble-text=""
                              data-scramble-delay=".3"
                            >
                              See our services
                            </span>
                            <span class="c-button_icon">
                              <span class="c-icon">
                                <svg
                                  class="svg-arrow-right"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <use xlink:href="/static/images/sprite.svg#arrow-right"></use>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div class="c-tile-stacking_visual">
                        <div class="c-tile-stacking_visual_inner">
                          <div class="c-tile-stacking_visual_media">
                            <div
                              class="c-lottie-icon"
                              data-module-lottie-player="m15"
                              data-lottie-player-path="/media/service/ai.json"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 454 454"
                                width="454"
                                height="454"
                                preserveAspectRatio="xMidYMid meet"
                                style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                              >
                                <defs>
                                  <clipPath id="__lottie_element_48">
                                    <rect
                                      width="454"
                                      height="454"
                                      x="0"
                                      y="0"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <g clip-path="url(#__lottie_element_48)">
                                  <g
                                    transform="matrix(0.4000000059604645,0,0,0.22516483068466187,224.1060028076172,215.44476318359375)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(5.597670078277588,0,0,5.597670078277588,-195,0)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M-39.94300079345703,76.33699798583984 C-39.94300079345703,76.33699798583984 -39.94300079345703,-76.33699798583984 -39.94300079345703,-76.33699798583984 C-39.94300079345703,-78.31199645996094 -38.284000396728516,-79.88600158691406 -36.308998107910156,-79.80000305175781 C6.117000102996826,-77.89700317382812 39.94300079345703,-42.89799880981445 39.94300079345703,0 C39.94300079345703,42.89799880981445 6.117000102996826,77.89700317382812 -36.308998107910156,79.80000305175781 C-38.284000396728516,79.88600158691406 -39.94300079345703,78.31199645996094 -39.94300079345703,76.33699798583984z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(0.4000000059604645,0,0,0.35045722126960754,289.3370056152344,216.12928771972656)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(5.597670078277588,0,0,5.597670078277588,0,0)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M-23.881000518798828,-65.41999816894531 C-23.867000579833984,-66.37899780273438 -22.908000946044922,-67.06500244140625 -22.006999969482422,-66.72200012207031 C4.99399995803833,-56.590999603271484 24.225000381469727,-30.548999786376953 24.225000381469727,0 C24.225000381469727,30.548999786376953 4.99399995803833,56.57699966430664 -22.006999969482422,66.72200012207031 C-22.908000946044922,67.06500244140625 -23.881000518798828,66.37899780273438 -23.881000518798828,65.41999816894531 C-23.881000518798828,65.41999816894531 -24.225000381469727,0 -24.225000381469727,0 C-24.225000381469727,0 -23.881000518798828,-65.41999816894531 -23.881000518798828,-65.41999816894531z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(0.4000000059604645,0,0,0.3926994204521179,373.0530090332031,220.20542907714844)"
                                    opacity="1"
                                    style="display: block;"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(5.597670078277588,0,0,5.597670078277588,0,0)"
                                    >
                                      <path
                                        fill="rgb(0,0,0)"
                                        fill-opacity="1"
                                        d=" M-13.178000450134277,-54.5260009765625 C-13.178000450134277,-54.840999603271484 -12.805999755859375,-55.01300048828125 -12.57699966430664,-54.8129997253418 C3.1480000019073486,-41.749000549316406 13.178000450134277,-22.04599952697754 13.178000450134277,0.004000000189989805 C13.178000450134277,22.054000854492188 3.1480000019073486,41.75699996948242 -12.57699966430664,54.82099914550781 C-12.819999694824219,55.00699996948242 -13.178000450134277,54.834999084472656 -13.178000450134277,54.53499984741211 C-13.178000450134277,54.53499984741211 -13.178000450134277,0.004000000189989805 -13.178000450134277,0.004000000189989805 C-13.178000450134277,0.004000000189989805 -13.178000450134277,-54.5260009765625 -13.178000450134277,-54.5260009765625z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
