import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '.././Assets/logo.png';
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
import { FaBuildingFlag } from "react-icons/fa6";

const Side = () => {
    const location = useLocation();
    return (
        <>
        <div className = "sidebar bg-white shadow-lg shadow-gray-400 h-screen w-[190px] overflow-auto px-[15px] fixed" id="sidebar">
            <div className = "flex justify-center mt-[20px]" >
                <img className="logo-company w-[100px]" src={Logo} alt="Deskripsi Gambar" draggable="false" />
            </div>
            <hr className="mt-[20px] border-t-2 border-gray-200" />
            <div className="sidebar-menus">
               <ul>
                    <li className={`text-black hover:bg-[#1762EF] hover:text-white mb-2 mt-[10px] py-[10px] rounded-[10px] transition duration-75 ${location.pathname === '/dashboard-admin' ? 'bg-[#1762EF] text-white' : ''}`}>
                         <Link to="/dashboard-admin">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <MdDashboard className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px] font-helvetica">Dashboard</p>
                            </div>
                        </Link>
                    </li>
                    <li className={`text-black hover:bg-[#1762EF] hover:text-white mb-2 mt-[10px] py-[10px] rounded-[10px] transition duration-75 ${location.pathname === '/company-data' ? 'bg-[#1762EF] text-white' : ''}`}>
                         <Link to="/company-data">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <AiFillDatabase className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px] font-helvetica">Company </p>
                            </div>
                        </Link>
                    </li>
                    
                    <li className={`text-black hover:bg-[#1762EF] hover:text-white mb-2 mt-[10px] py-[10px] rounded-[10px] transition duration-75 ${location.pathname === '/data-solutions' ? 'bg-[#1762EF] text-white' : ''}`}>
                         <Link to="/data-solutions">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <IoMdHelpCircle  className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px] font-helvetica"> Solutions</p>
                            </div>
                        </Link>
                    </li>
                    <li className={`text-black hover:bg-[#1762EF] hover:text-white mb-2 mt-[10px] py-[10px] rounded-[10px] transition duration-75 ${location.pathname === '/data-innovation' ? 'bg-[#1762EF] text-white' : ''}`}>
                         <Link to="/data-innovation">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <FaLightbulb  className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px] font-helvetica"> Innovation</p>
                            </div>
                        </Link>
                    </li>
                    <li className={`text-black hover:bg-[#1762EF] hover:text-white mb-2 mt-[10px] py-[10px] rounded-[10px] transition duration-75 ${location.pathname === '/testimonial-data' ? 'bg-[#1762EF] text-white' : ''}`}>
                         <Link to = "/testimonial-data" >
                            <div className="icon-teks flex items-center mx-[10px]">
                                <AiFillMessage className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px] font-helvetica">Testimonial </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`text-black hover:bg-[#1762EF] hover:text-white mb-2 mt-[10px] py-[10px] rounded-[10px] transition duration-75 ${location.pathname === '/data-blog' ? 'bg-[#1762EF] text-white' : ''}`}>
                         <Link to="/data-blog">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <IoIosCamera className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px] font-helvetica"> Blog</p>
                            </div>
                        </Link>
                    </li>
                    <li className={`text-black hover:bg-[#1762EF] hover:text-white mb-2 mt-[10px] py-[10px] rounded-[10px] transition duration-75 ${location.pathname === '/data-culture' ? 'bg-[#1762EF] text-white' : ''}`}>
                         <Link to="/data-culture">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <FaBuildingFlag className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px] font-helvetica">Culture</p>
                            </div>
                        </Link>
                    </li>
                    <li className={`text-black hover:bg-[#1762EF] hover:text-white mb-2 mt-[10px] py-[10px] rounded-[10px] transition duration-75 ${location.pathname === '/data-portfolio' ? 'bg-[#1762EF] text-white' : ''}`}>
                         <Link to = "/data-portfolio" >
                            <div className="icon-teks flex items-center mx-[10px]">
                                <AiFillPicture className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px] font-helvetica">Portfolio </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`text-black hover:bg-[#1762EF] hover:text-white mb-2 mt-[10px] py-[10px] rounded-[10px] transition duration-75 ${location.pathname === '/data-teams' ? 'bg-[#1762EF] text-white' : ''}`}>
                         <Link to="/data-teams">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <FaUsers className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px] font-helvetica"> Teams</p>
                            </div>
                        </Link>
                    </li>
                    <li className={`text-black hover:bg-[#1762EF] hover:text-white mb-2 mt-[10px] py-[10px] rounded-[10px] transition duration-75 ${location.pathname === '/data-services' ? 'bg-[#1762EF] text-white' : ''}`}>
                         <Link to="/data-services">
                            <div className="icon-teks flex items-center mx-[10px]">
                                <IoIosSettings className="icon-link mr-2 text-[18px]" />
                                <p className="menu-link text-[13px] font-helvetica">Services </p>
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