import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';
import { IoMenuSharp } from "react-icons/io5";
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
         <div className = "bg-white shadow-lg shadow-gray-400 h-screen w-[190px] overflow-auto px-[15px] fixed" >
            <div className = "flex justify-between mt-[20px]" >
                <img className="w-[100px]" src={Logo} alt="Deskripsi Gambar" draggable="false" />
                <div className='bg-blue-600 p-[2px] rounded-lg hover:bg-blue-700'>
                    <IoMenuSharp className="text-[18px] cursor-pointer text-white mt-[1px]"/>
                </div>
            </div>
            <hr className="mt-[30px] border-t-2 border-gray-200" />
            <div>
               <ul>
                    <li className = "text-black mb-2 mt-[30px] hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="flex items-center mx-[10px]">
                                <MdDashboard className="mr-2 text-[18px]" />
                                <p className="text-[13px]">Dashboard</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="flex items-center mx-[10px]">
                                <AiFillDatabase className="mr-2 text-[18px]" />
                                <p className="text-[13px]">Company Data</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="flex items-center mx-[10px]">
                                <IoMdHelpCircle  className="mr-2 text-[18px]" />
                                <p className="text-[13px]">Data Solutions</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="flex items-center mx-[10px]">
                                <FaLightbulb  className="mr-2 text-[18px]" />
                                <p className="text-[13px]">Data Innovation</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="flex items-center mx-[10px]">
                                <AiFillMessage className="mr-2 text-[18px]" />
                                <p className="text-[13px]">Testimonial Data</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="flex items-center mx-[10px]">
                                <IoIosCamera className="mr-2 text-[18px]" />
                                <p className="text-[13px]">Data Blog</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="flex items-center mx-[10px]">
                                <AiFillPicture className="mr-2 text-[18px]" />
                                <p className="text-[13px]">Portfolio Data</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="flex items-center mx-[10px]">
                                <FaUsers className="mr-2 text-[18px]" />
                                <p className="text-[13px]">Data Teams</p>
                            </div>
                        </Link>
                    </li>
                    <li className = "text-black mb-2 hover:bg-[#1762EF] py-[10px] rounded-[10px] hover:text-white transition duration-75" >
                         <Link to="/">
                            <div className="flex items-center mx-[10px]">
                                <IoIosSettings className="mr-2 text-[18px]" />
                                <p className="text-[13px]">Services Data</p>
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