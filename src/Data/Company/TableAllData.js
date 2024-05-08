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

    // mengatur jika kata lebih dari 7 maka tidak di tampilkan
    const truncateContainer = (container, wordLimit) => {
    const words = container.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        } else {
            return container;
        }
    };

    return(
        <div>
            <div className="mt-[20px]">
                    <h1 className="mb-[20px] text-[20px] font-lato">Data Integrated</h1>
                    <div className = "relative overflow-x-auto" >
                        <table className="table-striped w-full text-sm text-left rtl:text-right">
                            <thead className = "text-[15px] bg-indigo-50" >
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
                                        <td className="py-4 px-2">
                                            <img  
                                                className="w-[100px]"      
                                                src={`https://casatech.id/compro-api${item.image_company}`} 
                                            />
                                        </td>
                                        <td className = "px-6 py-4 w-[300px]" >
                                            {item.tittle_company}
                                        </td>
                                        <td className="px-6 py-4 w-[300px] text-[10px]">
                                            <div dangerouslySetInnerHTML={{ __html: truncateContainer(item.description_company, 7) }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <hr />
                    </div>
                </div>

                <div className="mt-[20px]">
                    <h1 className="mb-[20px] text-[20px] font-lato">Data About Us</h1>
                    <div className = "relative overflow-x-auto" >
                        <table className="table-striped w-full text-sm text-left rtl:text-right">
                            <thead className = "text-[15px] bg-indigo-50" >
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
                                        <td className="py-4 px-2">
                                            <img  
                                                className="w-[100px]"      
                                                src={`https://casatech.id/compro-api${item.image_about}`}
                                            />
                                        </td>
                                        <td className="px-6 py-4 w-[300px] text-[10px]">
                                            <div dangerouslySetInnerHTML={{ __html: truncateContainer(item.description_about, 7) }} />
                                        </td>
                                        <td className="px-6 py-4 w-[300px] text-[10px]">
                                            <div dangerouslySetInnerHTML={{ __html: truncateContainer(item.visi, 7) }} />
                                        </td>
                                        <td className="px-6 py-4 w-[300px] text-[10px]">
                                            <div dangerouslySetInnerHTML={{ __html: truncateContainer(item.misi, 7) }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <hr />
                    </div>
                </div>

                <div className="mt-[20px]">
                    <h1 className="mb-[20px] text-[20px] font-lato">Data Sponsorship</h1>
                    <div className = "relative overflow-x-auto" >
                        <table className="table-striped w-full text-sm text-left rtl:text-right">
                            <thead className = "text-[15px] bg-indigo-50" >
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
                                        <td className="py-4 px-2">
                                            <img  
                                                className="w-[100px]"      
                                                src={`https://casatech.id/compro-api${item.image_client}`} 
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <hr />
                    </div>
                </div>

                <div className="mt-[20px]">
                    <h1 className="mb-[20px] text-[20px] font-lato">Contact Catalog</h1>
                    <div className = "relative overflow-x-auto" >
                        <table className="table-striped w-full text-sm text-left rtl:text-right">
                            <thead className = "text-[15px] bg-indigo-50" >
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        No Whatsapp
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        No Telephone
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Instagram Name
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
                                            {item.instagram}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.email}
                                        </td>
                                        <td className = "px-6 py-4" >
                                            {item.addres}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a target="_blank" href={item.linkedin} className="text-blue-600 hover:underline">{item.linkedin}</a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a target="_blank" href={item.youtube} className="text-blue-600 hover:underline">{item.youtube}</a>
                                        </td>
                                        <td className = "px-6 py-4" >
                                        <a target="_blank" href={item.telegram} className="text-blue-600 hover:underline">{item.telegram}</a>
                                        </td>
                                        <td className = "px-6 py-4" >
                                        <a target="_blank" href={item.map} className="text-blue-600 hover:underline">{item.map}</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <hr />
                    </div>
                </div>
        </div>
    )
}

export default TableAllData;
