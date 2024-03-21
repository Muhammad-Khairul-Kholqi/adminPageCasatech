import React, { useEffect, useState } from "react";
import axios from "axios";
import backgImg from '../../Assets/bg.png';
import '../../Style/Company/StyleCompany.css';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import TableAllData from "./TableAllData";
import Swal from 'sweetalert2';

// api
import BaseUrl from "../../Api/BaseUrl";

const CompanyData = () => {
    useEffect(() => {
        document.title = "Integrated Data | Casatech";
    }, []);

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const responseDataCompany = await axios.get(`${BaseUrl}company`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const sortedData = responseDataCompany.data.data.sort((a, b) => b.id - a.id);

                setData(sortedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div>
                <div className = "container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style = {
                    {
                        backgroundImage: `url(${backgImg})`
                    }
                }>
                <h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]"> Company Data </h1></div>

                <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                    {data && data.map((item) => (
                        <div className="flex gap-[10px] justify-end" key={item.id}>
                            <Link to={`/edit-data-company/${item.id}`}>
                                <div className = "icon-text flex gap-[5px] items-center text-blue-600 bg-[#DCE6F5] hover:bg-blue-200 px-[10px] rounded-[3px] w-[70px] py-[5px]" >
                                    <FaRegPenToSquare />
                                    <p className="text-link">Edit</p>
                                </div>
                            </Link>
                        </div>
                    ))}

                    <TableAllData />
                </div>
            </div>
        </>
    )
}

export default CompanyData;