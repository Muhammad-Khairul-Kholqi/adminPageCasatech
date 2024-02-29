import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgImg from '../../Assets/bg.png';
import { FaFolderOpen } from "react-icons/fa";
import '../../Style/Blog/StyleCategoryBlog.css'

const CategoryBlog = () => {
    useEffect(() => {
        document.title = "Category Blog | Casatech";
    }, []);
    return(
        <div>
            <div className = "container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style = {
                    {
                        backgroundImage: `url(${backgImg})`
                    }
                }>
                <h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]"> Category Blog </h1></div>

                <div div className = "bg-white p-[20px] rounded-[10px] mt-[20px]" >
                    <h1 className="title-desc-blog text-center text-[30px] italic mb-[20px]">This is the category name of the blog</h1>
                    <div className="flex flex-wrap justify-center gap-[20px] p-[20px]">
                        <Link to="/data-blog">
                            <div className="flex flex-col items-center p-[20px] bg-white shadow-md rounded-[5px] text-center hover:scale-105">
                                <FaFolderOpen className="text-blue-600 text-[35px]" />
                                <p className="text-[18px] mt-[15px] text-blue-900">Judul Category</p>
                            </div>
                        </Link>

                        <Link to="/data-blog">
                            <div className="flex flex-col items-center p-[20px] bg-white shadow-md rounded-[5px] text-center hover:scale-105">
                                <FaFolderOpen className="text-blue-600 text-[35px]" />
                                <p className="text-[18px] mt-[15px] text-blue-900">Judul Category</p>
                            </div>
                        </Link>

                        <Link to="/data-blog">
                            <div className="flex flex-col items-center p-[20px] bg-white shadow-md rounded-[5px] text-center hover:scale-105">
                                <FaFolderOpen className="text-blue-600 text-[35px]" />
                                <p className="text-[18px] mt-[15px] text-blue-900">Judul Category</p>
                            </div>
                        </Link>

                        <Link to="/data-blog">
                            <div className="flex flex-col items-center p-[20px] bg-white shadow-md rounded-[5px] text-center hover:scale-105">
                                <FaFolderOpen className="text-blue-600 text-[35px]" />
                                <p className="text-[18px] mt-[15px] text-blue-900">Judul Category</p>
                            </div>
                        </Link>

                        <Link to="/data-blog">
                            <div className="flex flex-col items-center p-[20px] bg-white shadow-md rounded-[5px] text-center hover:scale-105">
                                <FaFolderOpen className="text-blue-600 text-[35px]" />
                                <p className="text-[18px] mt-[15px] text-blue-900">Judul Category</p>
                            </div>
                        </Link>

                    </div>
                </div>
        </div>
    )
}

export default CategoryBlog;