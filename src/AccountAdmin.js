import React from "react";
import profile from "./Assets/profile.png"
import background from "./Assets/bg.png"
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { TbMilitaryRank } from "react-icons/tb";

const AccountAdmin = () => {
    return (
        <div className="bg-white rounded-[20px] mt-[30px] p-[30px]">
            <div className = " bg-cover bg-center h-[200px] rounded-[10px] text-center"
            style = {
                {
                    backgroundImage: `url(${background})`
                }
            } >
                <h1 className="text-white text-[40px] font-bold py-[20px]">Account Admin</h1>
            </div>
            <div className="flex justify-center gap-[300px] px-[5%] gap-[50px] flex-wrap ">
                <div className = "bg-white shadow-md text-center py-[20px] px-[30px] rounded-[5px] mt-[-60px] flex flex-col items-center mb-[20px]" >
                    <img className="w-[100px] rounded-[50%] mt-[-60px]" src={profile} />
                    <p className="font-bold mt-[10px]">Alfar Ramazhan</p>
                    <p className="text-gray-500 mt-[5px]">Backend Developer</p>
                    <p className="mt-[30px] border-solid border-2 border-gray-600 px-[30px] py-[7px] rounded-[5px]">Bogor, 56-januari-1998</p>
                    <p className="mt-[20px] border-solid border-2 border-gray-600 px-[30px] py-[7px] rounded-[5px] mb-[20px]">Bogor, Jawa Barat, Indonesia</p>
                </div>
                <div className = "bg-white shadow-md mt-[-60px]" >
                   <h1>Edit personal data</h1>
                </div>
            </div>
        </div>

    )
}

export default AccountAdmin;