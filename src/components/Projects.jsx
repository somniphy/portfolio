import sisterImage from "../assets/sister.png";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "SISTER: Student Information System",
      image: sisterImage,
      description:
        "This was my first full-stack project. It was our project for the web development course.",
      tags: ["PHP", "Bootstrap", "jQuery"],
    },
    // {
    //   id: 2,
    //   name: "Project 2",
    //   image: sisterImage,
    //   description: "This is project 2.",
    //   tags: ["HTML", "CSS", "JavaScript"], // Added tags for consistency
    // },
    // {
    //   id: 3,
    //   name: "Project 3",
    //   image: sisterImage,
    //   description: "This is project 3.",
    //   tags: ["React", "Tailwind CSS"], // Added tags for consistency
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900 p-6 rounded-lg shadow-md dark:bg-zinc-50"
            >
              <h3 className="text-xl font-semibold text-white dark:text-zinc-950">
                {project.name}
              </h3>
              <img
                src={project.image}
                alt={`${project.name} Image`}
                className="rounded-lg mt-2"
              />
              <p className="mt-4text-white text-white dark:text-zinc-950">
                {project.description}
              </p>
              <div className="flex flex-wrap mt-2">
                {project.tags &&
                  project.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-300 rounded-md p-1 m-1 text-sm text-white dark:text-zinc-950 dark:border-gray-600"
                    >
                      {tag}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
