import React from "react";

const skills = [
  { id: 1, logo: "/html.png", name: "HTML" },
  { id: 2, logo: "/css.png", name: "CSS" },
  { id: 3, logo: "/javascript.png", name: "JavaScript" },
  { id: 4, logo: "/java.png", name: "Java" },
  { id: 5, logo: "/tailwind.png", name: "Tailwind" },
  { id: 6, logo: "/Bootstrap.png", name: "Bootstrap" },
  { id: 7, logo: "/reactjs.png", name: "ReactJS" },
  { id: 8, logo: "/nodejs.png", name: "Node JS" },
  { id: 9, logo: "/expressjs.png", name: "Express Js" },
  { id: 10, logo: "/springboot.png", name: "Spring Boot" },
  { id: 11, logo: "/mongodb.png", name: "Mongo DB" },
  { id: 12, logo: "/mysql.png", name: "MySQL" },
  { id: 13, logo: "/vscode.png", name: "VSCode" },
  { id: 14, logo: "/Git.png", name: "Git" },
  { id: 15, logo: "/github.png", name: "GitHub" },
];

export default function Skills() {
  return (
    <>
    <div name="Skills" style={{ backgroundColor: "#F0F0F0" }} className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 mb-10">
      <h2 className="font-semibold text-2xl md:text-3xl mb-5 mt-2 tracking-widest pb-8">SKILLS</h2>
      <div className="bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-7 rounded-2xl">
        {skills.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-md p-4 text-center transform hover:scale-105 transition duration-300">
            <img src={item.logo} alt={item.name} className="w-12 h-12 mx-auto mb-2" />
            <p className="text-md">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
    <hr />
    </>
  );
}
