import React, { useEffect, useState } from "react";
import axios from "axios";
import './Style/Dashboard/StyleDashboard.css';
import background from "./Assets/bg.png"
import DashboardCard from './Card/DashboardCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
   useEffect(() => {
       document.title = "Dashboard | Casatech";
   }, []);

  AOS.init();

  useEffect(() => {
        document.title = "Integrated Data | Casatech";
    }, []);

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/company");
                const sortedData = response.data.data.sort((a, b) => b.id - a.id);

                setData(sortedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

  return (
    <>
    <div className="">
        <div className = "container bg-cover bg-center mt-[20px] rounded-[10px] px-[10%] py-[30px] text-center text-white"
        style = {
          {
            backgroundImage: `url(${background})`
          }
        } data-aos="flip-down" data-aos-duration="1300">
          <h1 className = "title-header text-[40px] leading-10 font-bold font-roboto-slab tracking-[2px]" > This is the <br /> Admin Page </h1>
          <p className="description mt-[20px] text-[18px] font-inter">
            Access all configurations and customize the app according to your preferences
          </p>
        </div>

        <div className="overflow-hidden bg-white p-[20px] mt-[20px] rounded-[10px]" >
          {data && data.map((item) => (
              <marquee key={item.id} className="text-[20px] text-blue-600 animate-marquee delay-5000">
                {item.company_name}, {item.addres}
              </marquee>
          ))}
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
