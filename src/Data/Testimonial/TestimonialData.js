import React, { useEffect } from 'react';
import backgImg from '../../Assets/bg.png';
import profile from '../../Assets/profile.png';
import { Link } from 'react-router-dom';
import { FaRegPenToSquare } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";

const TestimonialData = () => {
    useEffect(() => {
        document.title = "Data Testimoni | Casatech";
    }, []);
    return (
        <div>
            <div className = "container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style = {
                    {
                        backgroundImage: `url(${backgImg})`
                    }
                }>
                <h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]">Testimonial Data</h1></div>

                <div className = "bg-white p-[20px] rounded-[10px] mt-[20px]" >
                        <div className="flex justify-end mb-[20px]">
                            <Link to="/add-data-testimonial">
                                <div className = "flex justify-center gap-[5px] py-[5px] px-[10px] items-center border-solid border-2 border-blue-600 rounded-[100px] hover:bg-blue-600 hover:text-white" >
                                    <FiPlusCircle />
                                    <div>Add Data</div>
                                </div>
                            </Link>
                        </div>
                        <div div className = "relative overflow-x-auto border-solid border-[1px] border-black" >
                            <table className = "w-full text-sm text-left rtl:text-right" >
                                <thead className = "text-[15px] bg-blue-100 border-b-[1px] border-black" >
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            No
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Image
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Position
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
                                            1
                                        </td>
                                        <td className="px-6 py-4">
                                            <img className="w-[100px]" src={profile} />
                                        </td>
                                        <td className = "px-6 py-4" >
                                            Muhammad Khairul Kholqi
                                        </td>
                                        <td className = "px-6 py-4" >
                                            Manager
                                        </td>
                                        <td className = "px-6 py-4 w-[300px]" >
                                            Trusted IT Consultation
                                            for Business Growth,
                                            Partner with us to navigate the digital landscape
                                            and unlock your business 's full potential
                                        </td>
                                        <td className = "px-6 py-4" >
                                            <td className = "px-6 py-4 flex gap-[10px]" >
                                            <Link to="/edit-data-testimonial">
                                                <div className="icon-text text-[15px] flex gap-[5px] items-center text-blue-600 hover:underline">
                                                    <FaRegPenToSquare />
                                                    <p className="text-link">Edit</p>
                                                </div>
                                            </Link>
                                            <p>|</p>
                                            <div className = "icon-text cursor-pointer text-[15px] flex gap-[5px] items-center text-red-600 hover:underline" >
                                                <IoTrashOutline />
                                                <p className="text-link">Delete</p>
                                            </div>
                                        </td>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
        </div>
    )
}

export default TestimonialData;