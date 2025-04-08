import React from "react";

const projects = [
  {
    name: "NoteStack",
    description:
      "NoteStack is a secure and responsive full-stack note-taking application that allows users to manage their personal notes.It supports full CRUD operations with user authentication and a seamless user experience.",
      technologies: "MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS), Bootstrap, JavaScript, HTML, CSS.",
    github: "https://github.com/AbhishekKumar122/NoteStack",
    liveDemo: "https://www.loom.com/share/b08b709d29cd40889b81c851cbc903a7",
  },

  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website designed to showcase my skills, featured projects, and professional experience.It provides a clean, responsive, and user-friendly interface for recruiters and collaborators to explore my work.",
    technologies: "ReactJS, Tailwind CSS, JavaScript, HTML.",
    github: "https://github.com/yourusername/portfolio",
    liveDemo: "https://yourportfolio.com",
  },

  {
    name: "Newsmania",
    description:
      "Newsmania is a dynamic news application that curates the latest headlines and top stories across various categories.It fetches real-time news from external sources and offers a clean, responsive interface for seamless reading.",
    technologies: "ReactJS, Bootstrap, NewsAPI.",
    github: "https://github.com/AbhishekKumar122/my-NewsMania",
    liveDemo: "https://abhishekkumar122.github.io/my-NewsMania/",
  },
  {
    name: "TextUtils",
    description:
      "A simple text manipulation web app that allows users to perform various text-related operations like case conversion, word count, and more.",
    technologies: "ReactJS, Bootstrap, JavaScript, HTML, CSS.",
    github: "https://github.com/AbhishekKumar122/TextUtils.react",
    liveDemo: "https://abhishekkumar122.github.io/TextUtils.react",
  },
];

const Projects = () => {
  return (
    <>
      <div
        name="Work and Projects"
        style={{ backgroundColor: "#F0F0F0" }}
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      >
        <h2 className="font-semibold text-2xl md:text-3xl mb-5 mt-2 tracking-widest pb-8">
          WORK AND PROJECTS
        </h2>
        {/* Outer container for the cards */}
        <div className="bg-white shadow-md rounded-2xl p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-bold">Technologies:</span>{" "}
                  {project.technologies}
                </p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
    </>
  );
};

export default Projects;
