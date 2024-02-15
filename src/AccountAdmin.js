import React from "react";
import profile from "./Assets/profile.png"
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { TbMilitaryRank } from "react-icons/tb";

const AccountAdmin = () => {
    return (
        <div className="bg-white rounded-[20px] mt-[30px]">
            <div className="flex justify-between py-[40px] px-[10%]">
                <div className = "block bg-[#F0F3FF] p-[40px] rounded-[20px]" >
                    <div className="w-[170px]">
                        <img src={profile} className="rounded-[10px] flex" />
                    </div>
                    <div className="blok">
                        <div className = "flex gap-[5px] items-center border-solid border-2 border-black bg-white px-[10px] rounded-[4px] mt-[20px] shadow-md" >
                            <MdDriveFileRenameOutline />
                            <p className="mb-[2px]">Muhammad Alfar Ramazhan</p>
                        </div>

                        <div className = "flex gap-[5px] items-center border-solid border-2 border-black bg-white px-[10px] rounded-[4px] mt-[20px] shadow-md" >
                            <MdOutlineDateRange />
                            <p className="mb-[2px]">Bogor, 56-januari-1998</p>
                        </div>

                        <div className = "flex gap-[5px] items-center border-solid border-2 border-black bg-white px-[10px] rounded-[4px] mt-[20px] shadow-md" >
                            <FaRegAddressCard />
                            <p className="mb-[2px]">Bogor, Jawa Barat, Indonesia</p>
                        </div>

                        <div className = "flex gap-[5px] items-center border-solid border-2 border-black bg-white px-[10px] rounded-[4px] mt-[20px] shadow-md" >
                            <TbMilitaryRank />
                            <p className="mb-[2px]">Backend Defelopper</p>
                        </div>
                    </div>
                </div>

                <div>
                    <form form className = "bg-[#F0F3FF] p-[40px] block rounded-[20px]" >
                        <div className="" >
                            <input type="file" />
                        </div>
                        <div className = "" >
                            <input type="text" placeholder="Fullname.." className="w-[300px] px-[10px] py-[7px] rounded-[5px] mt-[20px]" />
                        </div>
                        <div className = "" >
                            <input type="text" placeholder="Place and date of birth.." className="w-[300px] px-[10px] py-[7px] rounded-[5px] mt-[20px]" />
                        </div>
                        <div className = "" >
                            <input type="text" placeholder="Address.." className="w-[300px] px-[10px] py-[7px] rounded-[5px] mt-[20px]" />
                        </div>
                        <div className = "" >
                            <input type="text" placeholder="Position.." className="w-[300px] px-[10px] py-[7px] rounded-[5px] mt-[20px]" />
                        </div>
                        <div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white w-[300px] px-[10px] py-[7px] rounded-[5px] mt-[20px]">Submit changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AccountAdmin;