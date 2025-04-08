import React from "react";
import { useForm } from "react-hook-form"
import { MdEmail } from "react-icons/md";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

import axios from "axios";
import toast from "react-hot-toast";


function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message
    }
    try{
        await axios.post("https://getform.io/f/ayvvdmwb", userInfo);
         toast.success("Your message has been sent");
         reset();
    }catch(error){
        console.log(error);
        toast.error("Something went wrong");
    }
  }
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      >
        <h2 className="font-semibold text-2xl md:text-3xl mt-2 tracking-widest pb-4">
          CONTACT
        </h2>
        <span>Kindly fill out the form below to get in touch</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/ayvvdmwb"
            // method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                  {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
              />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                 {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
                {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Type your message here"
              />
                {errors.message && <span>This field is required</span>}
            </div>
            <button className="mt-2 px-5 py-3 bg-purple-500 text-white rounded-full">
              Send
            </button>
          </form>
        </div>
        <footer className="py-12">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/abhishek-kumar-7a3611283"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61553170470185"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare size={24} />
              </a>

              <a
                href="https://www.instagram.com/abhishek.kumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://github.com/AbhishekKumar122"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare size={24} />
              </a>
              <a
                href="mailto:abhihariyale22@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail className="pb-1" size={30} />
              </a>
            </div>
            <div className="flex flex-col mt-5 pt-6  w-full h-full border-t border-gray-700 items-center">
              <p>© Abhishek Kumar</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Contact;
