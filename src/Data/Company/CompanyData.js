import React, { useEffect } from 'react';
import backgImg from '../../Assets/bg.png';
import '../../Style/Company/StyleCompany.css';
import { Link } from 'react-router-dom';
import profile from '../../Assets/profile.png';
import { FaEye } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";

const CompanyData = () => {
    useEffect(() => {
        document.title = "Integrated Data | Casatech";
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
                    <div className="flex gap-[10px] justify-end">
                        <Link to="/edit-data-company">
                            <div className="icon-text flex gap-[5px] items-center text-blue-600 bg-[#DCE6F5] hover:bg-blue-200 px-[10px] rounded-[3px] w-[70px] py-[5px]">
                                <FaRegPenToSquare />
                                <p className="text-link">Edit</p>
                            </div>
                        </Link>
                        <Link to='/preview-data-company'>
                            <div className="icon-text flex gap-[5px] items-center text-blue-600 bg-[#DCE6F5] hover:bg-blue-200 px-[10px] rounded-[3px] w-[110px] py-[5px]">
                                <FaEye className="mt-[3px]" />
                                <p className="text-link">See more</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-[20px]">
                        <div class = "relative overflow-x-auto border-solid border-[1px] border-black rounded-[10px]" >
                            <table class = "w-full text-sm text-left rtl:text-right" >
                                <thead class = "text-[15px] bg-blue-100 border-b-[1px] border-black" >
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

                    <div className="mt-[20px]">
                        <div class = "relative overflow-x-auto border-solid border-[1px] border-black rounded-[10px]" >
                            <table class="w-full text-sm text-left rtl:text-right">
                                <thead class="text-[15px] bg-blue-100 border-b-[1px] border-black">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Vision
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Mision
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-[13px]">
                                        <td class="px-6 py-4">
                                            Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit.Excepturi provident, cum
                                            ratione itaque doloribus blanditiis obcae
                                            cati saepe molestias debitis dolor dicta
                                            earum ? Praesentium
                                        </td>
                                        <td class="px-6 py-4">
                                            Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit.Excepturi provident, cum
                                            ratione itaque doloribus blanditiis obcae
                                            cati saepe molestias debitis dolor dicta
                                            earum ? Praesentium
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-[20px]">
                        <div class="relative overflow-x-auto border-solid border-[1px] border-black rounded-[10px]">
                            <table class="w-full text-sm text-left rtl:text-right">
                                <thead class="text-[15px] bg-blue-100 border-b-[1px] border-black">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            About Title
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Image
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-[13px]">
                                        <td class="px-6 py-4">
                                            About Us
                                        </td>
                                        <td class="px-6 py-4">
                                            <img className="w-[100px]" src={profile} />
                                        </td>
                                        <td class = "px-6 py-4 w-[300px]" >
                                            Lorem ipsum dolor sit amet consectetur adipisi
                                            Excepturi provident, cum ratione itaque dolorib
                                            ditiis obcaecati saepe molestias debitis dolor di
                                            m ? Praesentium aliquid
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-[20px]">
                        <div class="relative overflow-x-auto border-solid border-[1px] border-black rounded-[10px]">
                            <table class="w-full text-sm text-left rtl:text-right">
                                <thead class="text-[15px] bg-blue-100 border-b-[1px] border-black">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Amount Clients
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Amount Sponsors
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Average Ratings
                                        </th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-[13px]">
                                        <td class="px-6 py-4">
                                            350
                                        </td>
                                        <td class="px-6 py-4">
                                            200
                                        </td>
                                        <td class = "px-6 py-4 w-[300px]" >
                                           4.8
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyData;