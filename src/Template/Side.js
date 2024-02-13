import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';
import { IoClose } from "react-icons/io5";
import { MdDashboard } from 'react-icons/md';
import { AiFillDatabase } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";

const Side = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
        <div div className = "bg-white shadow-lg shadow-gray-400 h-screen w-[230px] overflow-auto px-[15px] fixed" >
            <div div className = "flex justify-between mt-[20px]" >
                <img className="w-[120px]" src={Logo} alt="Deskripsi Gambar" draggable="false" />
                <div className='bg-blue-600 p-[2px] rounded-lg hover:bg-blue-700'>
                    <IoClose className="text-[20px] cursor-pointer text-white mt-[1px]"/>
                </div>
            </div>
            <div>
               <ul>
                    <li li className = "text-black mb-2 mt-[70px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="flex items-center mx-[10px]">
                                <MdDashboard className="mr-2 text-[20px]" />
                                <p className="text-[15px]">Dashboard</p>
                            </div>
                        </Link>
                    </li>
                    <li className="text-[#000] mb-2">
                        <button button type = "button" className = "flex items-center w-full p-[10px] font-normal transition duration-75 rounded-lg group hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" onClick = { toggleDropdown}>
                            <AiFillDatabase className="mr-2 text-[20px]" />
                            <span className="flex-1 text-left whitespace-nowrap text-[15px]" sidebar-toggle-item>Company data</span>
                            <svg sidebar-toggle-item className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        {/* dropdown */}
                        <ul id="dropdown-example" className={`py-2 space-y-2 ${isDropdownOpen ? '' : 'hidden'}`}>
                            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                                <Link to="/company-data/integrated-data">
                                    <div className = "flex items-center mx-[10px]" >
                                        <FaRegCircle className="mr-2 text-[12px]" />
                                        <p className="text-[15px]">Integrated Data</p>
                                    </div>
                                </Link>
                            </li>
                            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                                <Link>
                                    <div className = "flex items-center mx-[10px]" >
                                        <FaRegCircle className="mr-2 text-[12px]" />
                                        <p className="text-[15px]">Data about us</p>
                                    </div>
                                </Link>
                            </li>
                            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                                <Link>
                                    <div className = "flex items-center mx-[10px]" >
                                        <FaRegCircle className="mr-2 text-[12px]" />
                                        <p className="text-[15px]">Data history</p>
                                    </div>
                                </Link>
                            </li>
                            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                                <Link>
                                    <div className = "flex items-center mx-[10px]" >
                                        <FaRegCircle className="mr-2 text-[12px]" />
                                        <p className="text-[15px]">Data profile</p>
                                    </div>
                                </Link>
                            </li>
                            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                                <Link>
                                    <div className = "flex items-center mx-[10px]" >
                                        <FaRegCircle className="mr-2 text-[12px]" />
                                        <p className="text-[15px]">Vision & mision</p>
                                    </div>
                                </Link>
                            </li>
                            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                                <Link>
                                    <div className = "flex items-center mx-[10px]" >
                                        <FaRegCircle className="mr-2 text-[12px]" />
                                        <p className="text-[15px]">Data culture</p>
                                    </div>
                                </Link>
                            </li>
                            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                                <Link>
                                    <div className = "flex items-center mx-[10px]" >
                                        <FaRegCircle className="mr-2 text-[12px]" />
                                        <p className="text-[15px]">Sponsors</p>
                                    </div>
                                </Link>
                            </li>
                            <li className = "ml-[20px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                                <Link>
                                    <div className = "flex items-center mx-[10px]" >
                                        <FaRegCircle className="mr-2 text-[12px]" />
                                        <p className="text-[15px]">Contact catalog</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
               </ul> 
            </div>
        </div>
        </>
    )
}

export default Side;