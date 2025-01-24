export default function Projects() {
  const contents = [
    {
      img: "assets/images/statue.png",
      title: "Neque porro quisquam est",
      skillsets: ["react", "django", "api"],
      intro:
        "Neque porro quisquam est Neque porro quisquam est Neque porro quisquam est Neque porro quisquam est",
      link: "Neque porro quisquam est",
    },
    {
      img: "assets/images/statue.png",
      title: "Neque porro quisquam est",
      skillsets: ["react", "django", "api"],
      intro:
        "Neque porro quisquam est Neque porro quisquam est Neque porro quisquam est Neque porro quisquam est",
      link: "Neque porro quisquam est",
    },
    {
      img: "assets/images/statue.png",
      title: "Neque porro quisquam est",
      skillsets: ["react", "django", "api"],
      intro:
        "Neque porro quisquam est Neque porro quisquam est Neque porro quisquam est Neque porro quisquam est",
      link: "Neque porro quisquam est",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col justify-content-center align-items-center space-y-8">
      <h2 className="text-4xl text-center">My Projects</h2>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
        optio.
      </p>
      <div className="px-[8rem] space-y-4">
        {contents.map((content, i) => (
          <div key={i} className="flex flex-row justify-between align-center">
            <div className={`shadow-[5px_5px_0px_rgba(0,0,0,1)] w-80`}>
              <img src={content.img} alt="" className="w-full" />
            </div>
            <div className="ms-[8rem] flex flex-col align-center justify-center space-y-8">
              <h3 className="text-3xl font-bold">{content.title}</h3>
              <p>{content.intro}</p>
              <div className="space-x-4">
                {content.skillsets.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 border rounded-full text-center bg-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div>
                <a
                  className="p-2 border shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:cursor-pointer"
                  href={content.link}
                >
                  View in github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
