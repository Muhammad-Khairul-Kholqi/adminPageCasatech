import React, { useEffect } from 'react';
import profile from "./Assets/profile.png"
import background from "./Assets/bg.png"
import './Style/StyleAccountAdmin.css';
import { FaPenToSquare } from "react-icons/fa6";

const AccountAdmin = () => {
     useEffect(() => {
         document.title = "Account Admin | Casatech";
     }, []);
    return (
        <div className = "account-container bg-white rounded-[20px] mt-[30px] p-[30px]" >
            <div className = "back-img bg-cover bg-center h-[200px] rounded-[10px] text-center"
            style = {
                {
                    backgroundImage: `url(${background})`
                }
            } >
                <h1 className="title-account text-white text-[40px] font-bold py-[20px] font-roboto-slab tracking-[2px]">Account Admin</h1>
            </div>
            <div className="account-left flex justify-center gap-[50px] px-[5%] gap-[50px] flex-wrap ">
                <div className = "child-left bg-white shadow-md text-center py-[20px] px-[30px] rounded-[5px] mt-[-60px] flex flex-col items-center mb-[20px]" >
                    <img className="profile w-[100px] rounded-[50%] mt-[-60px]" src={profile} />
                    <p className="teks-name font-bold mt-[10px] w-[200px]">Alfar Ramazhan</p>
                    <p className="teks-poition text-gray-500 mt-[5px]">Backend Developer</p>
                    <p className="teks-birht mt-[30px] border-solid border-2 border-gray-600 px-[30px] py-[7px] rounded-[5px]">Bogor, 56-januari-1998</p>
                    <p className="teks-address mt-[20px] border-solid border-2 border-gray-600 px-[30px] py-[7px] rounded-[5px] mb-[20px] w-[300px]">Bogor, Jawa Barat, Indonesia</p>
                </div>
                <div className = "account-right bg-white shadow-md mt-[-60px] rounded-[5px] py-[20px] px-[30px] flex flex-col items-center" >
                    <div className="flex items-center gap-[10px] text-center">
                        <FaPenToSquare />
                        <h1 className="title-edit text-[20px]">Edit Personal Data</h1>
                    </div>
                    <form className="flex flex-col items-center w-full max-w-md"> 
                        <input className="mt-[30px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[5px] cursor-pointer" type="file" />
                        <input className="input-account text-black block w-full border-2 border-gray-600 rounded-[5px] p-[5px]" type="text" placeholder="Fullname.." />
                        <input className="input-account text-black block mt-[20px] w-full border-2 border-gray-600 rounded-[5px] p-[5px]" type="text" placeholder="Position.." />
                        <input className="input-account text-black block mt-[20px] w-full border-2 border-gray-600 rounded-[5px] p-[5px]" type="text" placeholder="Place and date of birth.." />
                        <input className="input-account text-black block mt-[20px] w-full border-2 border-gray-600 rounded-[5px] p-[5px]" type="text" placeholder="Address.." />
                        <button className="bg-blue-600 mt-[20px] text-white hover:bg-blue-700 px-[10px] py-[5px] rounded-[5px]">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AccountAdmin;