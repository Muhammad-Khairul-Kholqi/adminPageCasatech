import React, { useEffect } from 'react';
import backgImg from '../../Assets/bg.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import '../../Style/Company/StylePreviewCompany.css';
import { FaRegPenToSquare } from "react-icons/fa6";
import TablePreview from './TablePreview';

const PreviewData = () => {
    useEffect(() => {
        document.title = "Integrated Data Preview | Casatech";
    }, []);
    return(
        <div>
            <div className = "container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px] text-center"
                style = {
                    {
                        backgroundImage: `url(${backgImg})`
                    }
                }>
                <h1 className="title-preview title item-center text-white text-[40px] font-bold px-[20px]">Complete Company Data </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/company-data" >
                        <p className="hover:underline">Company Data</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Preview Company Data</p>
                </div>
            </div>

            <div className = "bg-white p-[20px] rounded-[10px] mt-[20px]" >
                <div className="flex justify-end">
                    <Link to="/edit-data-company">
                        <div className = "icon-text flex gap-[5px] items-center text-blue-600 bg-[#DCE6F5] hover:bg-blue-200 px-[10px] rounded-[3px] w-[70px] py-[5px]" >
                            <FaRegPenToSquare />
                            <p className="text-link">Edit</p>
                        </div>
                    </Link>
                </div>

                <div>
                    <TablePreview />
                </div>
            </div>
        </div>
    )
}

export default PreviewData;