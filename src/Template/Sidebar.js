import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { AiFillDatabase } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import Logo from '../Assets/logo.png';

const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    <div className="bg-red-500 z-10 w-screen">
        <h1>tessss</h1>
    </div>
    <div className = "bg-white text-black w-[270px] p-4 h-screen fixed top-0 left-0 overflow-y-auto shadow-lg shadow-black z-20" >
      <div className="flex justify-center mb-8 mt-[20px]">
        <img className="w-[150px]" src={Logo} alt="My Image" />
      </div>
      <ul>  
        <li className = "text-black mb-2 mt-[70px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75">
            <Link to="/">
                <div className="flex items-center mx-[10px]">
                    <MdDashboard className="mr-2 text-[25px]" />
                    <p className="text-[17px] font-bold">Dashboard</p>
                </div>
            </Link>
        </li>
        <li className = "text-[#000] mb-2" >
            <button button type = "button" className = "flex items-center w-full p-[10px] font-normal transition duration-75 rounded-lg group hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" onClick = { toggleDropdown}>
                <AiFillDatabase className="mr-2 text-[25px]" />
                <span className="flex-1 text-left whitespace-nowrap text-[17px] font-bold" sidebar-toggle-item>Company data</span>
                <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </button>
            {/* dropdown */}
            <ul id="dropdown-example" className={`py-2 space-y-2 ${isDropdownOpen ? '' : 'hidden'}`}>
            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                <Link to="/company-data/integrated-data">
                    <div className = "flex items-center mx-[10px]" >
                        <FaRegCircle className="mr-2 text-[15px]" />
                        <p className="text-[15px] font-bold">Integrated Data</p>
                    </div>
                </Link>
            </li>
            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                <Link>
                    <div className = "flex items-center mx-[10px]" >
                        <FaRegCircle className="mr-2 text-[15px]" />
                        <p className="text-[15px] font-bold">Data about us</p>
                    </div>
                </Link>
            </li>
            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                <Link>
                    <div className = "flex items-center mx-[10px]" >
                        <FaRegCircle className="mr-2 text-[15px]" />
                        <p className="text-[15px] font-bold">Data history</p>
                    </div>
                </Link>
            </li>
            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                <Link>
                    <div className = "flex items-center mx-[10px]" >
                        <FaRegCircle className="mr-2 text-[15px]" />
                        <p className="text-[15px] font-bold">Data profile</p>
                    </div>
                </Link>
            </li>
            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                <Link>
                    <div className = "flex items-center mx-[10px]" >
                        <FaRegCircle className="mr-2 text-[15px]" />
                        <p className="text-[15px] font-bold">Vision & mision</p>
                    </div>
                </Link>
            </li>
            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                <Link>
                    <div className = "flex items-center mx-[10px]" >
                        <FaRegCircle className="mr-2 text-[15px]" />
                        <p className="text-[15px] font-bold">Data culture</p>
                    </div>
                </Link>
            </li>
            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                <Link>
                    <div className = "flex items-center mx-[10px]" >
                        <FaRegCircle className="mr-2 text-[15px]" />
                        <p className="text-[15px] font-bold">Sponsors</p>
                    </div>
                </Link>
            </li>
            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                <Link>
                    <div className = "flex items-center mx-[10px]" >
                        <FaRegCircle className="mr-2 text-[15px]" />
                        <p className="text-[15px] font-bold">Contact catalog</p>
                    </div>
                </Link>
            </li>
          </ul>
        </li>
        <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75">
            <Link to="">
                <div className="flex items-center mx-[10px]">
                    <MdDashboard className="mr-2 text-[25px]" />
                    <p className="text-[17px] font-bold">testing</p>
                </div>
            </Link>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
