import React from "react";
import '../Style/StyleCardDashboard.css';
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";

const DashboardCard = () => {
    return (
        <div className="container flex justify-center flex-wrap gap-[30px] mt-[30px]">
          <Link to="">
            <div className = "card bg-white rounded-[10px] flex justify-center items-center gap-[30px] py-[5px] px-[20px] w-[220px] h-[120px] shadow-md hover:scale-105">
              <div className = "bg-icon bg-[#BBF7D0] p-[10px] rounded-[50%] items-center" >
                <FaUsers className="icon text-[40px] text-[#16A34A]" />
              </div> 
              <div className="text-jml font-bold">
                 <p className="title-card text-[20px]">Teams</p>
                 <h1 className="jumlah text-[30px] ">45</h1>
              </div>
            </div>
          </Link> 

          <Link to="">
            <div className = "card bg-white rounded-[10px] flex justify-center items-center gap-[30px] py-[5px] px-[20px] w-[220px] h-[120px] shadow-md hover:scale-105">
              <div className = "bg-icon bg-[#FECACA] p-[10px] rounded-[50%] items-center" >
                <IoExtensionPuzzle className="icon text-[40px] text-[#DC2626]" />
              </div> 
              <div className="text-jml font-bold">
                 <p className="title-card text-[20px]">Clients</p>
                 <h1 className="jumlah text-[30px] ">67</h1>
              </div>
            </div>
          </Link> 

          <Link to="">
            <div className = "card bg-white rounded-[10px] flex justify-center items-center gap-[30px] py-[5px] px-[20px] w-[220px] h-[120px] shadow-md hover:scale-105">
              <div className = "bg-icon bg-[#BFDBFE] p-[10px] rounded-[50%] items-center" >
                <FaStar className="icon text-[40px] text-[#2563EB]" />
              </div> 
              <div className="text-jml font-bold">
                 <p className="title-card text-[20px]">Ratings</p>
                 <h1 className="jumlah text-[30px] ">4.8</h1>
              </div>
            </div>
          </Link> 

          <Link to="">
            <div className = "card bg-white rounded-[10px] flex justify-center items-center gap-[30px] py-[5px] px-[20px] w-[220px] h-[120px] shadow-md hover:scale-105">
              <div className = "bg-icon bg-[#FFCF96] p-[10px] rounded-[50%] items-center" >
                <IoHeart  className="icon text-[40px] text-[#FF8911]" />
              </div>
              <div className="text-jml font-bold">
                 <p className="title-card text-[20px]">Sponsors</p>
                 <h1 className="jumlah text-[30px] ">127</h1>
              </div>
            </div>
          </Link> 
        </div>
    )
}

export default DashboardCard;


