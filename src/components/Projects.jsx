import { useState } from "react";
import { TextEffect } from "./TextEffect";
function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const projects = [
    {
      id: 1,
      title: "Item 1",
      image: "https://via.placeholder.com/150",
      description: "Description for Item 1",
    },
    {
      id: 2,
      title: "Item 2",
      image: "https://via.placeholder.com/150",
      description: "Description for Item 2",
    },
    {
      id: 3,
      title: "Item 3",
      image: "https://via.placeholder.com/150",
      description: "Description for Item 3",
    },
    {
      id: 4,
      title: "Item 4",
      image: "https://via.placeholder.com/150",
      description: "Description for Item 4",
    },
    {
      id: 5,
      title: "Item 5",
      image: "https://via.placeholder.com/150",
      description: "Description for Item 5",
    },
    {
      id: 6,
      title: "Item 6",
      image: "https://via.placeholder.com/150",
      description: "Description for Item 6",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject({});
  };

  const handleMouseMove = (e, projectId) => {
    if (hoveredCard !== projectId) return;

    const rect = e.target.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = (projectId) => {
    setHoveredCard(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="w-full mt-8 md:mt-0">
      <div className="overflow-hidden rounded-xl">
        <div className="pb-0 p-4 text-center md:text-lg text-sm md:text-left text-gray-50 relative bg-zinc-900">
        <TextEffect text={"My Projects"} />
        </div>
        <div className="bg-zinc-900 p-4 relative z-10 rounded-b-xl grid md:auto-rows-[192px] auto-rows-[91px] grid-cols-2 md:grid-cols-3 gap-2 text-gray-50">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`row-span-1 relative rounded-xl border-2 border-zinc-800/10 
              bg-zinc-800 p-4 cursor-pointer transition-transform duration-300 ${
                project.id === 1 || project.id === 4 || project.id === 5
                  ? "col-span-2"
                  : ""
              }`}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => openModal(project)}
            >
              {/* Spotlight effect */}
              {hoveredCard === project.id && (
                <div
                  className="pointer-events-none absolute inset-0 opacity-100 transition duration-300"
                  style={{
                    background: `radial-gradient(240px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 60%)`,
                  }}
                />
              )}
              {project.title}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-zinc-900 bg-opacity-50">
          <div className="bg-zinc-900 text-white p-6 rounded-lg max-w-lg w-full relative">
            <button
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-100"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-sm font-bold mb-4 text-gray-50">
              {selectedProject.title}
            </h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-auto mb-4 rounded"
            />
            <p className="text-sm text-gray-400">
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
