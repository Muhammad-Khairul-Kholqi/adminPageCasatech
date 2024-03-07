import React, { useEffect, useState } from "react";
import axios from "axios";
import backgImg from '../../Assets/bg.png';
import '../../Style/Company/StyleCompany.css';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";

const CompanyData = () => {
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
                            <Link to='/preview-data-company'>
                                <div className="icon-text flex gap-[5px] items-center text-blue-600 bg-[#DCE6F5] hover:bg-blue-200 px-[10px] rounded-[3px] w-[110px] py-[5px]">
                                    <FaEye className="mt-[3px]" />
                                    <p className="text-link">See more</p>
                                </div>
                            </Link>
                        </div>
                    ))}

                    <div className="mt-[20px]">
                        <div class = "relative overflow-x-auto border-solid border-[1px] border-black" >
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
                                {data && data.map((item) => (
                                    <tr key={item.id} className="text-[13px]">
                                        <td className="px-6 py-4">
                                            {item.company_name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.image_company}
                                        </td>
                                        <td className = "px-6 py-4 w-[300px]" >
                                            {item.tittle_company}
                                        </td>
                                        <td className = "px-6 py-4 w-[300px]" >
                                            {item.description_company}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-[20px]">
                        <div class = "relative overflow-x-auto border-solid border-[1px] border-black" >
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
                                {data && data.map((item) => (
                                    <tr key={item.id} className="text-[13px]">
                                        <td className="px-6 py-4">
                                            {item.visi}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.misi}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-[20px]">
                        <div class="relative overflow-x-auto border-solid border-[1px] border-black">
                            <table class="w-full text-sm text-left rtl:text-right">
                                <thead class="text-[15px] bg-blue-100 border-b-[1px] border-black">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Image
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data && data.map((item) => (
                                    <tr key={item.id} className="text-[13px]">
                                        <td className="px-6 py-4">
                                            {item.image_about}
                                        </td>
                                        <td className = "px-6 py-4 w-[300px]" >
                                            {item.description_about}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-[20px]">
                        <div class="relative overflow-x-auto border-solid border-[1px] border-black">
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
                                {data && data.map((item) => (
                                    <tr key={item.id} className="text-[13px]">
                                        <td className="px-6 py-4">
                                            {item.client}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.sponsor}
                                        </td>
                                        <td className = "px-6 py-4 w-[300px]" >
                                            {item.rating}
                                        </td>
                                    </tr>
                                ))}
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