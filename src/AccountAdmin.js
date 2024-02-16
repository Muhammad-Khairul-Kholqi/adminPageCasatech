import React from "react";
import profile from "./Assets/profile.png"
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { TbMilitaryRank } from "react-icons/tb";

const AccountAdmin = () => {
    return (
        <div className="bg-white rounded-[20px] mt-[30px] p-[30px]">
            <div className="bg-[#2D50C5] h-[200px] rounded-[10px]"></div>
            <div className="flex justify-between px-[5%] gap-[50px] flex-wrap ">
                <div className = "bg-white shadow-md text-center py-[20px] px-[30px] rounded-[5px] mt-[-60px] flex flex-col items-center mb-[20px]" >
                    <img className="w-[120px] rounded-[50%] mt-[-60px]" src={profile} />
                    <p className="font-bold mt-[10px]">Alfar Ramazhan</p>
                    <p className="text-gray-500 mt-[5px]">Backend Developer</p>
                    <p className="mt-[30px] border-solid border-2 border-gray-600 px-[30px] py-[7px] rounded-[5px]">Bogor, 56-januari-1998</p>
                    <p className="mt-[20px] border-solid border-2 border-gray-600 px-[30px] py-[7px] rounded-[5px] mb-[20px]">Bogor, Jawa Barat, Indonesia</p>
                </div>

                <div className = "bg-white shadow py-[20px] px-[30px] rounded-[5px] mt-[-60px]" >
                    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                        <ul class="flex flex-wrap -mb-px">
                            <li class="me-2">
                                <a href="#image" data-bs-toggle="tab" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Image</a>
                            </li>
                            <li class="me-2">
                                <a href="#name" data-bs-toggle="tab" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Name</a>
                            </li>
                            <li class="me-2">
                                <a href="#" data-bs-toggle="tab" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
                            </li>
                            <li class="me-2">
                                <a href="#" data-bs-toggle="tab" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
                            </li>
                        </ul>
                    </div>

                    <div id="image">
                        <p>haiiii</p>
                    </div>

                    <div id = "name" >
                        <p>haiiii</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AccountAdmin;