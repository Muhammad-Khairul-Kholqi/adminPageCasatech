// Dashboard.js
import React, { useEffect } from 'react';
import './Style/Dashboard/StyleDashboard.css';
import background from "./Assets/bg.png"
import DashboardCard from './Card/DashboardCard';
import profile from './Assets/profile.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
   useEffect(() => {
       document.title = "Dashboard | Casatech";
   }, []);

  AOS.init();
  return (
    <>
    <div className="">
        <div className = "container bg-cover bg-center mt-[20px] rounded-[10px] px-[10%] py-[30px] text-center text-white"
        style = {
          {
            backgroundImage: `url(${background})`
          }
        } data-aos="flip-down" data-aos-duration="1300">
          <h1 className = "title-header text-[40px] leading-10 font-bold" > This is the <br /> Admin Page </h1>
          <p className="description mt-[20px] text-[18px]">
            Access all configurations and customize the app according to your preferences
          </p>
        </div>

        <div className="overflow-hidden bg-white p-[20px] mt-[20px] rounded-[10px]" >
            <marquee className="text-[20px] text-blue-600 animate-marquee delay-5000">
            PT. Catur Sangkara Tekhnologi, 
            Jl Baranangsiang III Blok I No.7.
            </marquee>
        </div>

        <div>
          <DashboardCard />
        </div>
        <hr className="mt-[30px] border-t-2 border-gray-300" />
        <p className="text-[18px] mt-[5px]">Made by <span className="text-[#624BFF]">Casatech</span></p>
    </div>
    </>
  );
};

export default Dashboard;
