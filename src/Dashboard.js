// Dashboard.js
import React from 'react';
import './Style/StyleDashboard.css'
import Ilustrasi from './Assets/ilustrasi.png';
import DashboardCard from './Card/DashboardCard';

const Dashboard = () => {
  return (
    <>
    <div className="">
        <div className = "container bg-[#237CE2] mt-[30px] rounded-[20px] px-[10%] py-[10px]" >
          <div className="wrapper flex justify-between gap-[50px] flex-wrap">
            <div className = "text-title block text-white mt-[20px]" >
              <h1 className="title-header text-[40px] leading-10 font-bold">This is the <br /> Admin Page</h1>
              <p className="description mt-[20px]">Access all configurations and customize <br />
                the app according to your preferences</p>
            </div>
            <div className = "ilustrasi flex justify-center items-center" >
              <img className="w-[300px]" src={Ilustrasi} alt="Deskripsi Gambar" draggable="false" />
            </div>
          </div>
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
