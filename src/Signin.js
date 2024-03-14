import React, { useEffect, useState } from 'react';
import Logo from './Assets/logo.png';
import { Link } from 'react-router-dom';
import './Style/StyleSignin.css';
import ilustrasiLogin from './Assets/ilustrasi-login.png';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const Signin = () => {
     useEffect(() => {
         document.title = "SignIn Admin | Casatech";
     }, []);

     const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(
        <div className="content-login flex justify-between py-[20px] px-[10%] gap-[30px] flex-wrap mt-[100px]">
            <div className = "ilustrasi w-[400px]" >
                <img src={ilustrasiLogin} />
            </div>

            <div className="flex flex-col items-center justify-center">
                <img className="w-[100px] mb-2" src={Logo} alt="Logo" />
                <div className="flex items-center mt-[30px]">
                    <div className="garis h-[1px] bg-gray-400 w-[80px] mt-[5px]"></div>
                    <p className="mx-2 text-gray-500">Login Admin</p>
                    <div className="garis h-[1px] bg-gray-400 w-[80px] mt-[5px]"></div>
                </div>
                <form className="mt-5">
                    <input 
                        placeholder="Username.." 
                        type="text" 
                        className="type-input block border-solid border-2 border-gray-400 px-4 w-[300px] rounded-[3px] h-[30px] mb-4" 
                        required
                        autoComplete="off"
                    />
                    <div className="relative">
                        <input 
                            placeholder="Password.." 
                            type={showPassword ? "text" : "password"}
                            className="type-input block border-solid border-2 border-gray-400 px-4 w-[300px] rounded-[3px] h-[30px] mb-4" 
                            required
                            autoComplete="off"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-2"
                            onClick={togglePasswordVisibility}>

                            {showPassword ? (
                                <HiEyeOff className="w-[15px] text-black mt-[2px]" />
                            ) : (
                                <HiEye className="w-[15px] text-black mt-[2px]" />
                            )}
                        </button>
                    </div>
                    <button className="button w-[300px] rounded-[3px] h-[30px] bg-blue-600 hover:bg-blue-700 text-white">Sign In</button>
                </form>
                <p className = "for-signup mt-[20px]" >
                    Don't have an account yet?
                    <Link 
                    to = "/registrasi"
                    className = "text-blue-600 ml-1 hover:underline" >
                        <span>Registrasi</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}  

export default Signin;