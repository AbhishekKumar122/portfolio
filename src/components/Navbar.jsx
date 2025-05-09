import React, { useState } from 'react';
import pic from "../../public/devicon.jpg";
import { RiMenuFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

import { Link } from 'react-scroll';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Work and Projects" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div  style={{ backgroundColor: "#F0F0F0" }} className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">
          <img src={pic} className="h-14 w-14 rounded-full" alt="" />
          <h1 className="font-semibold text-xl cursor-pointer tracking-wider">
            <span className="text-purple-600">Abhishek</span> Kumar
            <p className="text-sm">Software Developer</p>
          </h1>
        </div>
        <div>
          {/* Desktop Navbar */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li className="hover:scale-110 duration-200 cursor-pointer tracking-wider" key={id}>
              <Link
               to={text}
               smooth={true}
               activeClass='active'
               duration={500}
               offset={-70}
              >{text}</Link></li>
            ))}
          </ul>
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <RxCross1 size={24} /> : <RiMenuFill size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div style={{ backgroundColor: "#F0F0F0" }}>
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-6">
            {navItems.map(({ id, text }) => (
              <li className="hover:scale-105 duration-200 cursor-pointer font-semibold tracking-wider text-2xl" key={id}>
                <Link
              onClick={() => setMenu(!menu)}
               to={text}
               smooth={true}
               activeClass='active'
               duration={500}
               offset={-70}
              >{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
