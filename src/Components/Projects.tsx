import { useState, useEffect } from "react";
import github from "../assets/github.png";
import QR from "../assets/qr.png";
import task from "../assets/TASK.png";
import AI from "../assets/image.png";
import Car from "../assets/Car_Maintenance_Tracker .png";

const projectsData = [
  {
    title: "QR Code",
    description: "Convert links and text into QR Code",
    imageUrl: QR,
    projectUrl: "https://qr-code-fainal.vercel.app/",
    githubUrl: "https://github.com/q1p1/QR_code-fainal",
  },
  {
    title: "Task",
    description: "To save tasks and write new tasks",
    imageUrl: task,
    projectUrl: "https://todo-final-u9ro.vercel.app/",
    githubUrl: "https://github.com/q1p1/todo-final",
  },
  {
    title: "Ai Chatbot",
    description:
      "An artificial intelligence bot that is considered a personal assistant",
    imageUrl: AI,
    projectUrl: "https://ai-beige-kappa.vercel.app/",
    githubUrl: "https://github.com/q1p1/AI",
  },
  {
    title: "Car Maintenance Tracker ",
    description:
      "Car Maintenance Tracker is an application that allows users to easily track and maintain their branch. The application aims to help car owners organize vehicle expansion plans, and keep a complete record of each strategy that includes the date, cost, and type of maintenance. The application also allows adding new, modifying, and deleting vehicle data when needed.hicle maintenance tracker",
    imageUrl: Car,
    projectUrl: "https://vehicle-maintenance-tracker.vercel.app/",
    githubUrl: "https://github.com/q1p1/vehicle-maintenance-tracker",
  },
];

function DotLoader() {
  return (
    <div className="flex justify-center items-center h-screen space-x-2">
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
    </div>
  );
}

function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <DotLoader />;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-20 text-center text-white"></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-blue-800 rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-300 hover:shadow-2xl"
          >
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
              />
            </a>
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center"
            >
              <img
                src={github}
                className="w-6 h-6 object-cover rounded-md mr-2"
                alt="GitHub"
              />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
