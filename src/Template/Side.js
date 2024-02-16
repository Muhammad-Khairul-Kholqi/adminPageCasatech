import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';
import '../Style/StyleSidebar.css';
import { MdDashboard } from 'react-icons/md';
import { AiFillDatabase } from "react-icons/ai";
import { IoMdHelpCircle } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { AiFillPicture } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoIosCamera } from "react-icons/io";

const Side = () => {
    return (
        <>
        <div className = "sidebar bg-white shadow-lg shadow-gray-400 h-screen w-[190px] overflow-auto px-[15px] fixed" id="sidebar">
            <div className = "flex justify-center mt-[20px]" >
                <img className="logo-company w-[100px]" src={Logo} alt="Deskripsi Gambar" draggable="false" />
            </div>
            <hr className="mt-[30px] border-t-2 border-gray-200" />
            <div className="sidebar-menus">
               <ul>
                    <li className = "text-black mb-2 mt-[30px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <MdDashboard className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px]">Dashboard</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <AiFillDatabase className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px]">Company Data</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <IoMdHelpCircle  className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px]">Data Solutions</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <FaLightbulb  className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px]">Data Innovation</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <AiFillMessage className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px]">Testimonial Data</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <IoIosCamera className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px]">Data Blog</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <AiFillPicture className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px]">Portfolio Data</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <FaUsers className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px]">Data Teams</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <IoIosSettings className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px]">Services Data</p>
                            </div>
                        </Link>
                    </li>
               </ul> 
            </div>
        </div>
        </>
    );
};

export default Side;