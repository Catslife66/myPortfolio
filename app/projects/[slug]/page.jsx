import Link from "next/link";
import Image from "next/image";

import { projectsContent } from "@/app/data/projectsContent";
import { notFound } from "next/navigation";

export function ProblemSvg() {
  return (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M12 17a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.815 9H16.5a2 2 0 1 0-1.03-3.707A1.87 1.87 0 0 0 15.5 5 1.992 1.992 0 0 0 12 3.69 1.992 1.992 0 0 0 8.5 5c.002.098.012.196.03.293A2 2 0 1 0 7.5 9h3.388m2.927-.985v3.604M10.228 9v2.574M15 16h.01M9 16h.01m11.962-4.426a1.805 1.805 0 0 1-1.74 1.326 1.893 1.893 0 0 1-1.811-1.326 1.9 1.9 0 0 1-3.621 0 1.8 1.8 0 0 1-1.749 1.326 1.98 1.98 0 0 1-1.87-1.326A1.763 1.763 0 0 1 8.46 12.9a2.035 2.035 0 0 1-1.905-1.326A1.9 1.9 0 0 1 4.74 12.9 1.805 1.805 0 0 1 3 11.574V12a9 9 0 0 0 18 0l-.028-.426Z"
      />
    </svg>
  );
}

export function OpportunitySvg() {
  return (
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
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 13c0 2.038-2.239 4.5-5 4.5S7 15.038 7 13c0 1.444 10 1.444 10 0Z"
      />
      <path
        fill="currentColor"
        d="m9 6.811.618 1.253 1.382.2-1 .975.236 1.377L9 9.966l-1.236.65L8 9.239l-1-.975 1.382-.2L9 6.811Zm6 0 .618 1.253 1.382.2-1 .975.236 1.377L15 9.966l-1.236.65L14 9.239l-1-.975 1.382-.2L15 6.811Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 6.811.618 1.253 1.382.2-1 .975.236 1.377L9 9.966l-1.236.65L8 9.239l-1-.975 1.382-.2L9 6.811Zm6 0 .618 1.253 1.382.2-1 .975.236 1.377L15 9.966l-1.236.65L14 9.239l-1-.975 1.382-.2L15 6.811Z"
      />
    </svg>
  );
}

export function ContribSvg() {
  return (
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
        d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"
      />
    </svg>
  );
}

export function DesignSvg() {
  return (
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
        d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"
      />
    </svg>
  );
}

export function ReflectSvg() {
  return (
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
        d="M12 5.464V3.099m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C19 17.4 19 18 18.462 18H5.538C5 18 5 17.4 5 16.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.464ZM6 5 5 4M4 9H3m15-4 1-1m1 5h1M8.54 18a3.48 3.48 0 0 0 6.92 0H8.54Z"
      />
    </svg>
  );
}

export default function ProjectDetail({ params }) {
  const project = projectsContent.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="w-full py-[8rem] grid grid-cols-12">
      <div className="col-span-10 col-start-2">
        <div className="flex flex-col space-y-8">
          <h2 className="text-6xl font-bold text-shade">{project.name}</h2>
          <div className="w-full grid grid-cols-5 gap-4 text-sm text-gray-500 py-4 md:py-8">
            <div className="col">
              <h4 className="text-sm font-bold text-shade border-l-2 border-shade px-2 mb-4">
                Tags
              </h4>
              <div className="flex flex-col">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 mb-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="col">
              <h4 className="text-sm font-bold text-shade border-l-2 border-shade px-2 mb-4">
                Year
              </h4>
              <div className="px-2">{project.year}</div>
            </div>
            <div className="col">
              <h4 className="text-sm font-bold text-shade border-l-2 border-shade px-2 mb-4">
                Location
              </h4>
              <div className="px-2">{project.location}</div>
            </div>
            <div className="col">
              <h4 className="text-sm font-bold text-shade border-l-2 border-shade px-2 mb-4">
                Role
              </h4>
              <div className="px-2">{project.role}</div>
            </div>
            <div className="col">
              <h4 className="text-sm font-bold text-shade border-l-2 border-shade px-2 mb-4">
                Overview
              </h4>
              <div className="px-2">{project.description}</div>
            </div>
          </div>
        </div>

        <div className="w-full h-96 relative my-4">
          <Image
            src={project.mainImg.src}
            fill={true}
            priority={true}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={project.mainImg.alt}
          />
        </div>
        {/* overview */}
        {project.overview?.length > 0 && (
          <div className="text-2xl text-shade font-semibold py-4 md:py-8">
            {project.overview}
          </div>
        )}

        <div className="flex flex-col py-8 space-y-4 md:space-y-8">
          {/* problems */}
          {project.problems?.length > 0 && (
            <div>
              <h3 className="font-bold flex flex-row mb-2">
                <ProblemSvg />
                <span className="px-4">Problems</span>
              </h3>
              <ul className="ps-4">
                {project.problems.map((item, id) => (
                  <li key={id} className="list-disc font-light text-lg ms-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* opportunities */}
          {project.opportunities?.length > 0 && (
            <div>
              <h3 className="font-bold flex flex-row mb-2">
                <OpportunitySvg />
                <span className="px-4">Opportunities</span>
              </h3>
              <ul className="ps-4">
                {project.opportunities.map((item, id) => (
                  <li key={id} className="list-disc font-light text-lg ms-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* contributions */}
          {project.contributions?.length > 0 && (
            <div>
              <h3 className="font-bold flex flex-row mb-2">
                <ContribSvg />
                <span className="px-4">Contributions</span>
              </h3>
              <ul className="ps-4">
                {project.contributions.map((item, idx) =>
                  item.title ? (
                    <li
                      key={idx}
                      className="list-disc font-light text-lg ms-2 mb-2"
                    >
                      {item.title}
                      <ul className="ps-4">
                        {item.txt.map((t, i) => (
                          <li key={i} className="list-disc text-base ms-2">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={idx} className="list-disc font-light text-lg ms-2">
                      {item.txt}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* designConcept */}
          {project.designConcept?.length > 0 && (
            <div>
              <h3 className="font-bold flex flex-row mb-2">
                <DesignSvg />
                <span className="px-4">Design Concept</span>
              </h3>
              <ul className="ps-4">
                {project.designConcept.map((item, id) => (
                  <li key={id} className="list-disc font-light text-lg ms-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* reflection */}
          {project.reflection?.length > 0 && (
            <div>
              <h3 className="font-bold flex flex-row mb-2">
                <ReflectSvg />
                <span className="px-4">Reflection</span>
              </h3>
              <div className="ps-4">{project.reflection}</div>
            </div>
          )}
        </div>

        {project.githubLink != "" && (
          <div className="flex mt-4 py-4 justify-center items-center md:py-8">
            <Link
              href={"/"}
              className="border border-shade-2 rounded-lg px-4 py-2 flex flex-row hover:underline hover:bg-light"
            >
              View source code
              <svg
                className="w-6 h-6 ms-2 text-gray-800 dark:text-white"
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
                  d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

/*
<div>
            <h3 className="font-bold flex flex-row">
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
                  d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="px-4">Key Features</span>
            </h3>
            <p className="font-light text-lg">
              ✨ Scroll-based animation powered by GSAP for smooth and immersive
              transitions 🎯 Simple structure for easy navigation: Header, Hero,
              Intro, Experience, Skills, Projects, Footer 📱 Responsive design
              that adapts beautifully across devices ⚙️ Optimized for
              performance and deployed with Vercel 🌐 SEO-friendly structure
              using Next.js App Router
            </p>
          </div>
          <div>
            <h3 className="font-bold flex flex-row">
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
                  d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="px-4">Key Features</span>
            </h3>
            <p className="font-light text-lg">
              ✨ Scroll-based animation powered by GSAP for smooth and immersive
              transitions 🎯 Simple structure for easy navigation: Header, Hero,
              Intro, Experience, Skills, Projects, Footer 📱 Responsive design
              that adapts beautifully across devices ⚙️ Optimized for
              performance and deployed with Vercel 🌐 SEO-friendly structure
              using Next.js App Router
            </p>
          </div>
          <div>
            <h3 className="font-bold flex flex-row">
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
                  d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="px-4">Key Features</span>
            </h3>
            <p className="font-light text-lg">
              ✨ Scroll-based animation powered by GSAP for smooth and immersive
              transitions 🎯 Simple structure for easy navigation: Header, Hero,
              Intro, Experience, Skills, Projects, Footer 📱 Responsive design
              that adapts beautifully across devices ⚙️ Optimized for
              performance and deployed with Vercel 🌐 SEO-friendly structure
              using Next.js App Router
            </p>
          </div>
*/
