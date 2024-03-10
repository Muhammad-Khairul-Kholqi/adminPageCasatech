import React, { useState, useEffect } from "react";
import '../Style/Dashboard/StyleCardDashboard.css';
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoExtensionPuzzle } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import axios from 'axios';

// api
import BaseUrl from "../Api/BaseUrl";

const DashboardCard = () => {
     const [dataTeam, setDataTeam] = useState(null);
     const [threeData, setThreeData] = useState(null);

     useEffect(() => {
       const fetchData = async () => {
         try {
          const responseTeam = await axios.get(`${BaseUrl}team`);
          const responseClientRatingSponsor = await axios.get(`${BaseUrl}company`);

          const sortedDataTeam = responseTeam.data.data.sort((a, b) => b.id - a.id);
          const sortedData = responseClientRatingSponsor.data.data.sort((a, b) => b.id - a.id);

          setDataTeam(sortedDataTeam);
          setThreeData(sortedData);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
       };

       fetchData();
     }, []);

    return (
        <div className="container flex justify-center flex-wrap gap-[30px] mt-[30px]">
          <Link to = "/data-teams" >
            <div className = "card bg-white rounded-[10px] flex justify-center items-center gap-[30px] py-[5px] px-[20px] w-[220px] h-[120px] shadow-md hover:scale-105">
              <div className = "bg-icon bg-[#BBF7D0] p-[10px] rounded-[50%] items-center" >
                <FaUsers className="icon text-[40px] text-[#16A34A]" />
              </div> 
              <div className="text-jml font-bold">
                 <p className="title-card text-[20px]">Teams</p>
                 <h1 className="jumlah text-[30px] ">{dataTeam ? `${dataTeam.length}` : 0}</h1>
              </div>
            </div>
          </Link> 

          <Link to = "/company-data" >
            <div className = "card bg-white rounded-[10px] flex justify-center items-center gap-[30px] py-[5px] px-[20px] w-[220px] h-[120px] shadow-md hover:scale-105">
              <div className = "bg-icon bg-[#FECACA] p-[10px] rounded-[50%] items-center" >
                <IoExtensionPuzzle className="icon text-[40px] text-[#DC2626]" />
              </div> 
              {threeData && threeData.map((item) => (
                <div key={item.id} className="text-jml font-bold">
                  <p className="title-card text-[20px]">Clients</p>
                  <h1 className="jumlah text-[30px] ">{item.client}</h1>
                </div>
              ))}
            </div>
          </Link> 

          <Link to="/company-data">
            <div className = "card bg-white rounded-[10px] flex justify-center items-center gap-[30px] py-[5px] px-[20px] w-[220px] h-[120px] shadow-md hover:scale-105">
              <div className = "bg-icon bg-[#BFDBFE] p-[10px] rounded-[50%] items-center" >
                <FaStar className="icon text-[40px] text-[#2563EB]" />
              </div> 
              {threeData && threeData.map((item) => (
                <div key={item.id} className="text-jml font-bold">
                  <p className="title-card text-[20px]">Ratings</p>
                  <h1 className="jumlah text-[30px] ">{item.rating}</h1>
                </div>
              ))}
            </div>
          </Link> 

          <Link to="/company-data">
            <div className = "card bg-white rounded-[10px] flex justify-center items-center gap-[30px] py-[5px] px-[20px] w-[220px] h-[120px] shadow-md hover:scale-105">
              <div className = "bg-icon bg-[#FFCF96] p-[10px] rounded-[50%] items-center" >
                <IoHeart  className="icon text-[40px] text-[#FF8911]" />
              </div>
              {threeData && threeData.map((item) => (
                <div key={item.id} className="text-jml font-bold">
                  <p className="title-card text-[20px]">Sponsors</p>
                  <h1 className="jumlah text-[30px] ">{item.sponsor}</h1>
                </div>
              ))}
            </div>
          </Link> 
        </div>
    )
}

export default DashboardCard;


