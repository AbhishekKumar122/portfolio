import React from "react";

export default function About() {
  return (
    <>
      <div
        name="About"
        style={{ backgroundColor: "#F0F0F0" }}
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 mb-10"
      >
        <h1 className="font-semibold text-2xl md:text-3xl mb-5 mt-2 tracking-widest pb-8">
          ABOUT ME
        </h1>
        <div className="bg-white px-7 py-7 rounded-2xl">
          <h3 className="text-xl font-medium">Who Am I?</h3>
          <p className="mt-2 text-sm md:text-base text-justify">
            Hi, I’m <span className="font-semibold">Abhishek Kumar</span>, an
            aspiring software developer with a passion for building meaningful
            digital experiences. I thrive on solving real-world problems through
            clean, efficient, and scalable code. My journey so far has shaped me
            into a curious learner who’s always eager to embrace new challenges
            and technologies.
          </p>
          <br />
          <h3 className="text-xl font-medium">What I Do</h3>

          <span className="text-purple-600 text-md font-semibold">
            Frontend Development:
          </span>
          <p className="text-sm md:text-base text-justify mt-1">
            I build responsive, accessible, and visually engaging user
            interfaces using HTML, CSS, JavaScript, ReactJS, and Bootstrap. I
            aim to create intuitive experiences that users enjoy.
          </p>
          <br />
          <span className="text-purple-600 text-md font-semibold">
            Backend Development:
          </span>
          <p className="text-sm md:text-base text-justify mt-1">
            I develop robust backend systems using{" "}
            <strong>Java (Spring Boot)</strong> and{" "}
            <strong>JavaScript (Node.js & Express)</strong>. I’m confident
            working with REST APIs, databases, and scalable backend
            architectures tailored to real-world applications.
          </p>
          <br />
          <span className="text-purple-600 text-md font-semibold">
            Problem Solving:
          </span>
          <p className="text-sm md:text-base text-justify mt-1">
            I enjoy dissecting problems and optimizing solutions using
            algorithms and data structures. It’s not just about writing
            code—it’s about making systems better and smarter.
          </p>

          <br />
          <h3 className="text-xl font-medium">My Vision</h3>
          <p className="mt-2 text-sm md:text-base text-justify">
            I aim to become a versatile developer who builds scalable solutions
            and contributes to impactful, real-world products while growing
            through collaboration and continuous learning.
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}
