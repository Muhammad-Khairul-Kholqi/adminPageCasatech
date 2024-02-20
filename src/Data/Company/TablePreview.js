import React from "react";
import profile from '../../Assets/profile.png';

const TablePreview = () => {
    return(
        <div>
            <div className="mt-[20px]">
                    <h1 className="mb-[20px] text-[20px] italic">Data Integrated_</h1>
                    <div className = "relative overflow-x-auto border-solid border-2 border-black rounded-[10px]" >
                        <table className = "w-full text-sm text-left rtl:text-right" >
                            <thead className="text-[15px] bg-blue-100 border-b-2 border-black">
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
                                <tr className="text-[13px]">
                                    <td className="px-6 py-4">
                                        PT.Catur Sangkara Tekhnologi
                                    </td>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-[20px]">
                    <h1 className="mb-[20px] text-[20px] italic">Vision & Mision_</h1>
                    <div className="relative overflow-x-auto border-solid border-2 border-black rounded-[10px]">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-[15px] bg-blue-100 border-b-2 border-black">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Vision
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Mision
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-[13px]">
                                    <td className="px-6 py-4">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.Excepturi provident, cum
                                        ratione itaque doloribus blanditiis obcae
                                        cati saepe molestias debitis dolor dicta
                                        earum ? Praesentium
                                    </td>
                                    <td className="px-6 py-4">
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
                    <h1 className="mb-[20px] text-[20px] italic">Data About_</h1>
                    <div className="relative overflow-x-auto border-solid border-2 border-black rounded-[10px]">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-[15px] bg-blue-100 border-b-2 border-black">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        About Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-[13px]">
                                    <td className="px-6 py-4">
                                        About Us
                                    </td>
                                    <td className="px-6 py-4">
                                        <img className="w-[100px]" src={profile} />
                                    </td>
                                    <td className = "px-6 py-4 w-[300px]" >
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
                    <h1 className="mb-[20px] text-[20px] italic">Data Sponsorship_</h1>
                    <div className="relative overflow-x-auto border-solid border-2 border-black rounded-[10px]">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-[15px] bg-blue-100 border-b-2 border-black">
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-[13px]">
                                    <td className="px-6 py-4">
                                        350
                                    </td>
                                    <td className="px-6 py-4">
                                        200
                                    </td>
                                    <td className = "px-6 py-4 w-[300px]" >
                                        4.8
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-[20px]">
                    <h1 className="mb-[20px] text-[20px] italic">Data Culture_</h1>
                    <div className="relative overflow-x-auto border-solid border-2 border-black rounded-[10px]">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-[15px] bg-blue-100 border-b-2 border-black">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Culture Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Icon
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-[13px]">
                                    <td className="px-6 py-4">
                                        <img className="w-[100px]" src={profile} />
                                    </td>
                                    <td className="px-6 py-4">
                                        Friendly
                                    </td>
                                    <td className="px-6 py-4">
                                        <img className="w-[100px]" src={profile} />
                                    </td>
                                    <td className = "px-6 py-4 w-[300px]" >
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
                    <h1 className="mb-[20px] text-[20px] italic">Contact Catalog_</h1>
                    <div className="relative overflow-x-auto border-solid border-2 border-black rounded-[10px]">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-[15px] bg-blue-100 border-b-2 border-black">
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
                                <tr className="text-[13px]">
                                    <td className="px-6 py-4">
                                        08673583982763
                                    </td>
                                    <td className="px-6 py-4">
                                        08937373393730
                                    </td>
                                    <td className="px-6 py-4">
                                        catursangkaratekhnologi@gmail.com
                                    </td>
                                    <td className = "px-6 py-4" >
                                       Jl Baranangsiang III Blok I No .7 Bogor Jawa Barat Indonesia
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="http: //localhost:3000/preview-data-company" className="text-blue-600 hover:underline">http: //localhost:3000/preview-data-company</a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="http: //localhost:3000/preview-data-company" className="text-blue-600 hover:underline">http: //localhost:3000/preview-data-company</a>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="http: //localhost:3000/preview-data-company" className="text-blue-600 hover:underline">http: //localhost:3000/preview-data-company</a>
                                    </td>
                                    <td className = "px-6 py-4" >
                                       <a href="http: //localhost:3000/preview-data-company" className="text-blue-600 hover:underline">http: //localhost:3000/preview-data-company</a>
                                    </td>
                                    <td className = "px-6 py-4" >
                                       <a href="http: //localhost:3000/preview-data-company" className="text-blue-600 hover:underline">http: //localhost:3000/preview-data-company</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default TablePreview;