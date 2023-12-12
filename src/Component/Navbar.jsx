import React, {useState} from "react";
import { FaPinterest, FaUserGroup, FaYoutube } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { BiLogoInstagram , BiLogoPinterest} from 'react-icons/bi';



const Navbar = () => {
  const [nav,setNav] = useState(false)
  const [logo ,setLogo] = useState(false)
  const handleNav = ()=>{
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div >
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Views</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
      <CiSearch className="mr-2" size={20} /> 
        <FaUserGroup size={20} />
      </div>

  {/*Hamburger*/}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <MdClose className="text-black" size={20} /> : <CiMenuBurger size={20} /> }
        
      </div>
    
    {/*Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col" : 'absolute left-[-100%]  ' }>
        <ul>
          <h1>BEACHES.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">Views</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-5">
            <FaTwitter className="icon" />
            <FaLinkedin className="icon" />
            <IoLogoWhatsapp className="icon" />
            <BiLogoInstagram className='icon'/>
            <BiLogoPinterest className='icon' />
           
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
