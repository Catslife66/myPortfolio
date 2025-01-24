import React, { useState } from "react";

const WorkExperience = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [showArrow, setShowArrow] = useState(false);

  const experiences = [
    {
      time: "May 2014 - Jul 2015",
      location: "Howard Johnson Hotel Haikou",
      position: "Marketing & Communication Supervisor",
      logo_url: "assets/images/howard johnsons.png",
    },
    {
      time: "Aug 2015 - Oct 2016",
      location: "HUALUXE Haikou Seaview",
      position: "Marketing & Communication Supervisor",
      logo_url: "assets/images/hualuxe_black_text.png",
    },
    {
      time: "Mar 2017 - Jun 2017",
      location: "LN Hotel Boutique Foshan Guangdong",
      position: "Marketing & Communication Supervisor",
      logo_url: "assets/images/ln.png",
    },
    {
      time: "Aug 2017 - Dec 2020",
      location: "China Southern Airlines Hotel Management Division",
      position: "Branding & Positioning Specialist",
      logo_url: "assets/images/southern_airlines_pearl_hotels_transparent.png",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-content-center align-items-center space-y-8 px-[4rem] py-[8rem]">
      <div className="text-5xl font-bold text-center space-y-4 py-[4rem]">
        <h2>5 Years Marketing in Hotel Industry</h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2">
        {experiences.map((exp, i) => (
          <div
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            key={i}
            className={`${
              hoverIndex == i ? "grow" : ""
            } relative shadow-[5px_5px_0px_rgba(0,0,0,1)] flex flex-col p-6 mx-auto text-center text-gray-900 bg-white border bg-overlay`}
          >
            <div className="rounded-full w-32 h-32 flex items-center px-1 ms-2 mt-4">
              <img
                className="w-full"
                src={exp.logo_url}
                alt={`logo of ${exp.location}`}
              />
            </div>

            <div
              className={`${
                hoverIndex == i && hoverIndex !== experiences.length - 1
                  ? "arrow"
                  : "hidden"
              } z-10 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full`}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m10 16 4-4-4-4"
                />
              </svg>
            </div>

            <div className="flex flex-col space-y-2 pt-[6rem]">
              <div className="flex flex-row text-left space-x-2">
                <div>
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m11.5 11.5 2.071 1.994M4 10h5m11 0h-1.5M12 7V4M7 7V4m10 3V4m-7 13H8v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L10 17Zm-5 3h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                    />
                  </svg>
                </div>
                <span>{exp.time}</span>
              </div>
              <div className="flex flex-row text-left space-x-2">
                <div>
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m11.5 11.5 2.071 1.994M4 10h5m11 0h-1.5M12 7V4M7 7V4m10 3V4m-7 13H8v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L10 17Zm-5 3h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                    />
                  </svg>
                </div>
                <span>{exp.location}</span>
              </div>
              <div className="flex flex-row text-left space-x-2">
                <div>
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>{exp.position}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
