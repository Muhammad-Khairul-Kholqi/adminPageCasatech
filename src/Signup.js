import React, { useEffect } from 'react';
import Logo from './Assets/logo.png';
import { Link } from 'react-router-dom';
import './Style/StyleSignup.css';

const Signup = () => {
    useEffect(() => {
        document.title = "SignUp Admin | Casatech";
    }, []);
    return (
        <div className="bg-white p-[20px] min-h-screen flex items-center justify-center">
            <div className = "bg-[#ECEDF2] p-[30px] rounded-[10px]" >
                <div className = "flex flex-col items-center justify-center" >
                    <img className="w-[100px] mb-2" src={Logo} />
                </div>
                <div className="text-center">
                    <h1 className = "title-signup text-[30px] font-bold text-gray-500" >
                        Sign Up Admin
                    </h1>
                    <div>
                        <p className="desc mx-2 mt-[10px] text-[14px] text-gray-500">Create a Username and Password</p>
                    </div>
                </div>
                <form className = "mt-5 flex flex-col items-center justify-center" >
                    <input placeholder="Username.." type="text" className="input-signup type-input block border-solid border-2 border-black px-4 w-[300px] rounded-[3px] h-[30px] mb-4" />
                    <input placeholder="Password.." type="password" className="input-signup type-input block border-solid border-2 border-black px-4 w-[300px] rounded-[3px] h-[30px] mb-4" />
                    <button className="button-signup w-[300px] rounded-[3px] h-[30px] bg-blue-600 hover:bg-blue-700 text-white">Sign Up</button>
                </form>
                <Link to='/signin'>
                    <p className="flex justify-end text-blue-600 mt-[10px] mr-[5px] text-[14px] hover:underline">Back to Sign In?</p>
                </Link>
            </div>
        </div>
    )
}

export default Signup;