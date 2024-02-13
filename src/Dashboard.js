// Dashboard.js
import React from 'react';
import Ilustrasi from './Assets/ilustrasi.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

const Dashboard = () => {
  AOS.init();
  return (
    <>
    <div className="">
        <div div className = "bg-[#237CE2] mt-[30px] rounded-[20px]" data-aos = "flip-up" data-aos-duration = "1500" >
          <div className="flex justify-between flex-wrap py-[5px] px-[10%]">
            <div className = "block text-white mt-[20px]" >
              <h1 className="text-[40px] leading-10 font-bold">This is the <br /> Admin Page</h1>
              <p className="mt-[20px]">Access all configurations and customize <br />
                the app according to your preferences</p>
            </div>
            <div className="flex justify-center items-center">
              <img className="w-[300px]" src={Ilustrasi} alt="Deskripsi Gambar" draggable="false" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center flex-wrap gap-[10px] mt-[30px]">
          <Link to="">
            <div div className = "flex justify-center flex-wrap shadow-md gap-[20px] bg-white py-[20px] px-[35px] rounded-[10px] hover:scale-105" >
              <div className = "bg-[#BBF7D0] p-[17px] rounded-[50%] items-center" >
                <FaUsers className="text-[#16A34A] text-[40px]" />
              </div>
              <div className="block font-bold">
                <p className="text-[20px]">Teams</p>
                <h1 className="text-[30px]">45</h1>
              </div>
            </div> 
          </Link> 

          <Link to="">
            <div div className = "flex justify-center flex-wrap shadow-md gap-[20px] bg-white py-[20px] px-[35px] rounded-[10px] hover:scale-105" >
              <div div className = "bg-[#FECACA] p-[17px] rounded-[50%] items-center" >
                <IoExtensionPuzzle className="text-[#DC2626] text-[40px]" />
              </div>
              <div className="block font-bold">
                <p className="text-[20px]">Clients</p>
                <h1 className="text-[30px]">67</h1>
              </div>
            </div> 
          </Link> 

          <Link to="">
            <div div className = "flex justify-center flex-wrap shadow-md gap-[20px] bg-white py-[20px] px-[35px] rounded-[10px] hover:scale-105" >
              <div div className = "bg-[#BFDBFE] p-[17px] rounded-[50%] items-center" >
                <FaStar  className="text-[#2563EB] text-[40px]" />
              </div>
              <div className="block font-bold">
                <p className="text-[20px]">Ratings</p>
                <h1 className="text-[30px]">4.8</h1>
              </div>
            </div> 
          </Link> 

          <Link to="">
            <div className="flex justify-center flex-wrap shadow-md gap-[20px] bg-white py-[20px] px-[35px] rounded-[10px] hover:scale-105">
              <div div className = "bg-[#FFCF96] p-[17px] rounded-[50%] items-center" >
                <FaHeart  className="text-[#FF8911] text-[40px]" />
              </div>
              <div className="block font-bold">
                <p className="text-[20px]">Sponsors</p>
                <h1 className="text-[30px]">127</h1>
              </div>
            </div> 
          </Link> 
        </div>

        <hr className="mt-[30px] border-t-2 border-gray-300" />
        <p className="text-[18px] mt-[5px]">Made by <span className="text-[#624BFF]">Casatech</span></p>
    </div>
    </>
  );
};

export default Dashboard;
