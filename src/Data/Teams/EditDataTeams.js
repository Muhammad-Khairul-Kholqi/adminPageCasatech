import React, { useEffect } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import backgImg from '../../Assets/bg.png';

const EditDataTeams = () => {
     useEffect(() => {
         document.title = "Edit Data Teams | Casatech";
     }, []);

    return (
        <div>
            <div
                className="container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style={{ backgroundImage: `url(${backgImg})` }}>
                <h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px]">
                    Edit Data Teams
                </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/data-teams" >
                        <p className="hover:underline">Data Teams</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Edit Data Teams</p>
                </div>
            </div>
            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                    <h1 className="text-center font-bold text-[20px] mb-[20px]">Edit Data Teams</h1>
                    <form>
                        <div className="mt-[10px]">
                            <span for="image">Image:</span>
                            <br />
                            <input id="image" className="mt-[10px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[3px] cursor-pointer" type="file" />
                        </div>
                        <div>
                            <span for="name">Name:</span>
                            <br />
                            <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="text" id="name" />
                        </div>
                        <div className="mt-[15px]">
                            <span for="position">Position:</span>
                            <br />
                            <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="text" id="position" />
                        </div>
                        <button className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]">Save Changes</button>
                    </form>
            </div>
        </div>
    )
}

export default EditDataTeams;