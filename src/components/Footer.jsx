import React from 'react'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <><hr />
    <footer className='py-12'>
      <div classname='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div className='flex flex-col items-center justify-center'>
         <div className='flex space-x-4'>
           <FaLinkedin size={24}/>
           <FaFacebookSquare size={24}/>
           <FaSquareInstagram size={24}/>
           <FaGithubSquare size={24}/>
         </div>
         <div className='flex flex-col mt-8 pt-8 border-t border-gray-700 items-center'>
            <p>© Abhishek Kumar</p>
         </div>
        </div>
      </div>
    </footer>
    <div >footer</div>
    </>
    
  )
}

export default Footer