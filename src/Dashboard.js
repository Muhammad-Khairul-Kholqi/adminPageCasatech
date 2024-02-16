// Dashboard.js
import React from 'react';
import './Style/StyleDashboard.css'
import background from "./Assets/bg.png"
import singleLogo from "./Assets/single-logo.png"
import Ilustrasi from './Assets/ilustrasi.png';
import DashboardCard from './Card/DashboardCard';
import profile from './Assets/profile.png'

const Dashboard = () => {
  return (
    <>
    <div className="">
        <div className = "container bg-cover bg-center mt-[30px] rounded-[20px] px-[10%] py-[10px]"
        style = {
          {
            backgroundImage: `url(${background})`
          }
        }>
          <div className="wrapper flex justify-between items-center flex-wrap px-[5%]">
            <div className = "text-title block text-white" >
              <h1 className="title-header text-[40px] leading-10 font-bold">This is the <br /> Admin Page</h1>
              <p className="description mt-[20px]">Access all configurations and customize <br />
                the app according to your preferences</p>
            </div>
            <div className = "ilustrasi flex justify-center items-center" >
              <img className="w-[160px]" src={singleLogo} alt="Deskripsi Gambar" draggable="false" />
            </div>
          </div>
        </div>

        <div>
          <DashboardCard />
        </div>

          <div className = "bg-white p-[20px] rounded-md mt-[30px]" >
              <h1 className="text-center text-[30px] mb-[10px] mt-[-10px]">Our Teams</h1>
              <div className = "relative overflow-x-auto border-solid border-2 border-greyy-300 sm:rounded-lg" >
                <table className="w-full text-sm text-left rtl:text-righ">
                    <thead className = "bg-[#F0F3FF]" >
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Position
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="px-6 py-4">
                                1
                            </td>
                            <td className="px-6 py-4">
                                Muhammad Khairul Kholqi
                            </td>
                            <td className="px-6 py-4">
                                Manager
                            </td>
                            <td className="px-6 py-4">
                                <img className="w-[50px]" src={profile} />
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td className="px-6 py-4">
                                2
                            </td>
                            <td className="px-6 py-4">
                                Alfar Ramazhan
                            </td>
                            <td className="px-6 py-4">
                                Backend Developer
                            </td>
                            <td className="px-6 py-4">
                                <img className="w-[50px]" src={profile} />
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <td className="px-6 py-4">
                                3
                            </td>
                            <td className="px-6 py-4">
                                Giblar
                            </td>
                            <td className="px-6 py-4">
                                Frontend Developer
                            </td>
                            <td className="px-6 py-4">
                                <img className="w-[50px]" src={profile} />
                            </td>
                        </tr>
                    </tbody>
                </table>
              </div>
          </div>

        <hr className="mt-[30px] border-t-2 border-gray-300" />
        <p className="text-[18px] mt-[5px]">Made by <span className="text-[#624BFF]">Casatech</span></p>
    </div>
    </>
  );
};

export default Dashboard;
