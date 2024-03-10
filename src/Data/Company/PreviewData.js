import React, { useEffect, useState } from "react";
import axios from "axios";
import backgImg from '../../Assets/bg.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import '../../Style/Company/StylePreviewCompany.css';
import { FaRegPenToSquare } from "react-icons/fa6";
import TablePreview from './TablePreview';

// api
import BaseUrl from "../../Api/BaseUrl";

const PreviewData = () => {
    useEffect(() => {
        document.title = "Integrated Data Preview | Casatech";
    }, []);

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}company`);
                const sortedData = response.data.data.sort((a, b) => b.id - a.id);

                setData(sortedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return(
        <div>
            <div className = "container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px] text-center"
                style = {
                    {
                        backgroundImage: `url(${backgImg})`
                    }
                }>
                <h1 className="title-preview title item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]">Complete Company Data </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/company-data" >
                        <p className="hover:underline">Company Data</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Preview Company Data</p>
                </div>
            </div>

            <div className = "bg-white p-[20px] rounded-[10px] mt-[20px]" >
                {data && data.map((item) => (
                    <div className="flex justify-end" key={item.id}>
                        <Link to={`/edit-data-company/${item.id}`}>
                            <div className = "icon-text flex gap-[5px] items-center text-blue-600 bg-[#DCE6F5] hover:bg-blue-200 px-[10px] rounded-[3px] w-[70px] py-[5px]" >
                                <FaRegPenToSquare />
                                <p className="text-link">Edit</p>
                            </div>
                        </Link>
                    </div>
                ))}

                <div>
                    <TablePreview />
                </div>
            </div>
        </div>
    )
}

export default PreviewData;