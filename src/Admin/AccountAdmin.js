import React, { useEffect } from 'react';
import profile from "../Assets/profile.png"
import backgImg from "../Assets/bg.png"
import '../Style/StyleAccountAdmin.css';

const AccountAdmin = () => {
    useEffect(() => {
        document.title = "Account Admin | Casatech";
    }, []);

    return (
        <div>
            <div className = "container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style = {
                    {
                        backgroundImage: `url(${backgImg})`
                    }
                }>
                <h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]">Data Blog</h1>
            </div>

            <div className="bg-white p-[30px] mt-[30px] rounded-[10px]">
                <div className='flex justify-center mb-[20px]'>
                    <img src={profile} className="w-[150px] rounded-[5px]" alt="Profile" />
                </div>
                <div className="text-center flex justify-center gap-[20px] flex-wrap">
                    {/* fullname */}
                    <div className="border border-1 px-[10px] py-[5px] cursor-pointer hover:border-blue-600">
                        <p>khairul kholqi</p>
                    </div>

                    {/* birth */}
                    <div className="border border-1 px-[10px] py-[5px] cursor-pointer hover:border-blue-600">
                        <p>31 oktober 2006</p>
                    </div>

                    {/* position */}
                    <div className="border border-1 px-[10px] py-[5px] cursor-pointer hover:border-blue-600">
                        <p>bebas</p>
                    </div>

                    {/* address */}
                    <div className="border border-1 px-[10px] py-[5px] cursor-pointer hover:border-blue-600">
                        <p>cicurug</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountAdmin;
