import React from "react";
import backgImg from '../../Assets/bg.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import '../../Style/StylePreviewCompany.css';
import profile from '../../Assets/profile.png';
import { FaRegPenToSquare } from "react-icons/fa6";

const PreviewData = () => {
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
                    <Link>
                        <div className = "icon-text flex gap-[5px] items-center text-blue-600 bg-[#DCE6F5] hover:bg-blue-200 px-[10px] rounded-[3px] w-[70px] py-[5px]" >
                            <FaRegPenToSquare />
                            <p className="text-link">Edit</p>
                        </div>
                    </Link>
                </div>
                <div className="mt-[20px]">
                    <div class="relative overflow-x-auto shadow-md rounded-[5px]">
                        <table class="w-full text-sm text-left rtl:text-right">
                            <thead class="text-[15px] bg-blue-100">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Company Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-[13px]">
                                    <td class="px-6 py-4">
                                        PT.Catur Sangkara Tekhnologi
                                    </td>
                                    <td class="px-6 py-4">
                                        <img className="w-[100px]" src={profile} />
                                    </td>
                                    <td class = "px-6 py-4 w-[300px]" >
                                        Deep Understanding,
                                        Inspirational Solutions
                                    </td>
                                    <td class = "px-6 py-4 w-[300px]" >
                                        Trusted IT Consultation
                                        for Business Growth,
                                        Partner with us to navigate the digital landscape
                                        and unlock your business 's full potential
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewData;