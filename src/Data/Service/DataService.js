import React, { useEffect } from 'react';
import backgImg from '../../Assets/bg.png';
import profile from '../../Assets/profile.png';
import { Link } from 'react-router-dom';
import { FaRegPenToSquare } from "react-icons/fa6";

const DataService = () => {
    useEffect(() => {
        document.title = "Data Services | Casatech";
    }, []);
    return (
        <div>
            <div className = "container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style = {
                    {
                        backgroundImage: `url(${backgImg})`
                    }
                }>
                <h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px]">Data Services</h1></div>

                <div className = "bg-white p-[20px] rounded-[10px] mt-[20px]" >
                        <div div className = "relative overflow-x-auto border-solid border-2 border-black rounded-[10px]" >
                            <table className = "w-full text-sm text-left rtl:text-right" >
                                <thead className = "text-[15px] bg-blue-100 border-b-2 border-black" >
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Image
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Description
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-[13px]">
                                        <td className="px-6 py-4">
                                            <img className="w-[100px]" src={profile} />
                                        </td>
                                        <td className = "px-6 py-4 w-[300px]" >
                                            Deep Understanding,
                                            Inspirational Solutions
                                        </td>
                                        <td className = "px-6 py-4 w-[300px]" >
                                            Trusted IT Consultation
                                            for Business Growth,
                                            Partner with us to navigate the digital landscape
                                            and unlock your business 's full potential
                                        </td>
                                        <td className = "px-6 py-4" >
                                            <Link to="/edit-data-services">
                                                <div className="icon-text text-[15px] flex gap-[5px] items-center text-blue-600 hover:underline">
                                                    <FaRegPenToSquare />
                                                    <p className="text-link">Edit</p>
                                                </div>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
        </div>
    )
}

export default DataService;