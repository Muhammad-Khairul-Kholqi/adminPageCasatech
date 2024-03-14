import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import backgImg from '../Assets/bg.png';
import { FaRegPenToSquare } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";

const DataAdmin = () => {
    useEffect(() => {
        document.title = "Data Admin | Casatech";
    }, []);

    return(
        <div>
            <div className = "container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style = {
                    {
                        backgroundImage: `url(${backgImg})`
                    }
                }>
                <h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]">Data Admin</h1>
            </div>

            <div className = "bg-white p-[20px] rounded-[10px] mt-[20px]" >
                        
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
                                    Full Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Position
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Place date of birth
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
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
                                    nanana.jpg
                                </td>
                                <td className="px-6 py-4">
                                    Khairul
                                </td>
                                <td className="px-6 py-4">
                                    Bebas
                                </td>
                                <td className="px-6 py-4">
                                    India, 12-31-41
                                </td>    
                                <td className="px-6 py-4">
                                    Pakistan
                                </td>    
                                <td className="px-6 py-4 flex gap-[10px]">
                                    <Link to="/edit-data-admin">
                                        <div className="icon-text text-[15px] flex gap-[5px] items-center text-blue-600 hover:underline">
                                            <FaRegPenToSquare />
                                            <p className="text-link">Edit</p>
                                        </div>
                                    </Link>
                                    <p>|</p>
                                    <button
                                            className="flex gap-[5px] items-center text-red-600 hover:underline">
                                            <IoTrashOutline />
                                            <p>Delete</p>
                                    </button>
                                </td>  
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DataAdmin