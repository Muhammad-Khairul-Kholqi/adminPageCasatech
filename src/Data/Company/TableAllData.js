import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import BaseUrl from "../../Api/BaseUrl";
import Swal from 'sweetalert2';

const TableAllData = () => {
   const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const responseAllDataCompany = await axios.get(`${BaseUrl}company`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const sortedData = responseAllDataCompany.data.data.sort((a, b) => b.id - a.id);

                setData(sortedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return(
        <div>
            <div className="mt-[20px]">
                    <h1 className="mb-[20px] text-[20px] italic">Data Integrated_</h1>
                    <div className = "relative overflow-x-auto border-solid border-[1px] border-black" >
                        <table className = "w-full text-sm text-left rtl:text-right" >
                            <thead className="text-[15px] bg-blue-100 border-b-[1px] border-black">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Company Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
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
                    <h1 className="mb-[20px] text-[20px] italic">Data About_</h1>
                    <div className="relative overflow-x-auto border-solid border-[1px] border-black">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-[15px] bg-blue-100 border-b-[1px] border-black">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Vision
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Mision
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
                    <h1 className="mb-[20px] text-[20px] italic">Data Sponsorship_</h1>
                    <div className="relative overflow-x-auto border-solid border-[1px] border-black">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-[15px] bg-blue-100 border-b-[1px] border-black">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Amount Clients
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Amount Sponsors
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Average Ratings
                                    </th> 
                                    <th scope="col" className="px-6 py-3">
                                        Image Client
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
                                        <td className = "px-6 py-4 w-[300px]" >
                                            {item.image_client}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-[20px]">
                    <h1 className="mb-[20px] text-[20px] italic">Contact Catalog_</h1>
                    <div className="relative overflow-x-auto border-solid border-[1px] border-black">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-[15px] bg-blue-100 border-b-[1px] border-black">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        No Whatsapp
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        No Telephone
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Link Linkedin
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Link Instagram
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Link Youtube
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Link Telegram
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Link Map
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item) => (
                                    <tr key={item.id} className="text-[13px]">
                                        <td className="px-6 py-4">
                                            {item.no_wa}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.no_telephone}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.email}
                                        </td>
                                        <td className = "px-6 py-4" >
                                            {item.addres}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href={item.link_linkedin} className="text-blue-600 hover:underline">{item.link_linkedin}</a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href={item.link_ig} className="text-blue-600 hover:underline">{item.link_ig}</a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href={item.link_youtube} className="text-blue-600 hover:underline">{item.link_youtube}</a>
                                        </td>
                                        <td className = "px-6 py-4" >
                                        <a href={item.link_telegram} className="text-blue-600 hover:underline">{item.link_telegram}</a>
                                        </td>
                                        <td className = "px-6 py-4" >
                                        <a href={item.link_map} className="text-blue-600 hover:underline">{item.link_map}</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default TableAllData;
