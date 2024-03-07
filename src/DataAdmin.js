import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import backgImg from './Assets/bg.png';
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
        </div>
    )
}

export default DataAdmin