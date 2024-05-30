import React, { useState } from "react";
import logo from './logo1.png';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="min-h-10 mobile:min-h-10 tablets:min-h-10 laptop:min-h-18 p-3 flex shadow-lg">
        <div className="w-[90%] laptop:w-[30%] laptop:h-14">
          <img className="h-full w-[40%] 
            mobile:h-full mobile:w-[30%] 
            tablets:h-full tablets:w-[20%] 
            laptop:h-full laptop:w-[40%]" 
            src={logo} alt="logo" />
        </div>
        <div className="min-w-[10%] laptop:w-[60%] laptop:h-14 flex items-center justify-end">
          <button className="bg-green-600 laptop:hidden" onClick={toggleMenuOpen}>
            <i className="fa-solid fa-bars text-3xl text-black"></i>
          </button>
          <div className={`w-200 h-200 bg-white z-50 flex flex-col items-center justify-center space-y-4 transform ${menuOpen ? 'translate-x-50' : 'translate-x-full'} transition-transform duration-300 laptop:hidden`}>
            <NavLink to="/Home" className={({ isActive }) => isActive ? "text-orange-500" : "text-black"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-500" : "text-black"}>About</NavLink>
            <NavLink to="/Courses" className={({ isActive }) => isActive ? "text-orange-500" : "text-black"}>Courses</NavLink>
            <NavLink to="/Contact" className={({ isActive }) => isActive ? "text-orange-500" : "text-black"}>Contact</NavLink>
            <NavLink to="/contact2" className={({ isActive }) => isActive ? "text-orange-500" : "text-black"}>Contact2</NavLink>
            <a href="#"><button className="px-4 py-2 outline-none rounded-full text-white font-medium bg-orange-400">Enroll Now</button></a>
          </div>
          <div className="hidden laptop:flex laptop:justify-between laptop:items-center laptop:h-full laptop:w-full laptop:px-14 font-medium text-lg">
            <NavLink to="/Home" className={({ isActive }) => isActive ? "text-orange-500" : "text-black"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-500" : "text-black"}>About</NavLink>
            <NavLink to="/Courses" className={({ isActive }) => isActive ? "text-orange-500" : "text-black"}>Courses</NavLink>
            <NavLink to="/Contact" className={({ isActive }) => isActive ? "text-orange-500" : "text-black"}>Contact</NavLink>
            <NavLink to="/contact2" className={({ isActive }) => isActive ? "text-orange-500" : "text-black"}>Contact2</NavLink>
            <a href="#"><button className="px-4 py-2 outline-none rounded-full text-white font-medium bg-orange-400">Enroll Now</button></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
