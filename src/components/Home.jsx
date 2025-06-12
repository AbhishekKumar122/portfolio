import React from "react";
import pic from "../../public/devicon.jpg";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaGithubSquare,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
        style={{ backgroundColor: "#F0F0F0" }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Text and Introduction */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
            <span className="text-sm md:text-lg text-gray-700">
              Welcome to My Feed
            </span>
            <div className="flex space-x-1 text-xl md:text-4xl whitespace-nowrap">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-purple-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-sm md:text-md text-justify text-gray-600">
              A passionate software developer with a keen eye for
              problem-solving and a strong foundation in Java and modern web
              technologies. Eager to contribute, learn, and grow in a dynamic,
              innovative environment.
            </p>

            {/* Social media links and resume button */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0">
              <div className="space-y-2">
                <button className="mt-4 mb-2 px-5 py-3 rounded-full bg-purple-500 text-white hover:bg-purple-600">
                 <a href="/Abhishek_Kumar22.pdf" download="Abhishek_Kumar_Resume.pdf" className="text-white">
                  Download Resume</a>
                  
                </button>
                <div className=" text-purple-600 flex justify-center space-x-5 cursor-pointer text-2xl">
                  <a
                    href="https://www.linkedin.com/in/abhishek-kumar-7a3611283"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61553170470185"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                  <a
                    href="https://www.instagram.com/abhishek.kumar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://leetcode.com/u/Abhishekkumar1222/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiLeetcode />
                  </a>
                  <a
                    href="https://github.com/AbhishekKumar122"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubSquare />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] mx-auto"
              alt="Abhishek Kumar"
            />
          </div>
        </div>
      </div>
      <hr className="my-10" />
    </>
  );
}

export default Home;
