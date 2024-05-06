import React, { useState, useEffect } from 'react';
import AbstrackLogin from "./Assets/bg-login.jpeg";
import Logo from "./Assets/logo-icon.png";
import { Link } from "react-router-dom";
import axios from 'axios';
import BaseUrl from './Api/BaseUrl';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Style/StyleSignin.css';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const Login = () => {
    useEffect(() => {
            document.title = "Sign In Admin | Casatech";
        }, []);

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const [showPassword, setShowPassword] = useState(false);
        const navigate = useNavigate();

        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };

        const handleLogin = async (e) => {
            e.preventDefault();

            // Validasi input
            if (!username || !password) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Username dan Password harus di isi!',
                });
            }

            try {
                const response = await axios.post(`${BaseUrl}auth/login`, { username, password });
                const { token } = response.data; 

                // Simpan token di local storage
                localStorage.setItem('token', token);

                // Simpan username di local storage
                localStorage.setItem('username', username);

                // Redirect ke halaman dashboard-admin setelah login berhasil
                navigate('/dashboard-admin');

                // Tampilkan pesan sukses
                Swal.fire({
                    icon: 'success',
                    title: 'Suksess!',
                    text: 'Login berhasil',
                    showConfirmButton: false,
                    timer: 1500
                });
            } catch (error) {
                console.error('Login error:', error.response.data.message);

                // Tampilkan pesan kesalahan
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Username atau Password Salah!',
                });
            }
        };
    return (
        <div className="bg-[#ededed]">
            <div className="h-screen flex justify-center items-center">
                <div className="img-form flex justify-center px-[20px]">
                    <img 
                        className="abstrack-bg w-[300px] rounded-l-[10px]"
                        src={AbstrackLogin}
                    />

                    <div className="form-login bg-white p-[30px] border shadow rounded-r-[10px]">
                        <div className="flex items-center flex-wrap justify-end gap-[5px]">
                            <p className="text-[12px] font-bold text-gray-600">Casatech</p>
                            <img 
                                className="w-[20px] grayscale" 
                                src={Logo}
                            />
                        </div>

                         <div className="border rounded-[3px] w-[130px] py-[3px] text-center border-gray-600 mt-[50px]">
                            <p className="font-bold text-[12px] text-gray-600">Welcome back admin</p>
                         </div>

                        <h1 className="tittle-login text-[17px] font-bold mt-[10px] font-Bellefair">
                            Login to access your <br /> Dashboard and Settings.
                        </h1>

                        <form className="mt-[30px]" onSubmit={handleLogin}>
                            <input
                                placeholder="Username.."
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="type-input px-[5px] w-full border block rounded-[3px]"
                                autoComplete="off"
                            />

                            <div className="relative">
                                <input
                                    placeholder="Password.."
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="type-input px-[5px] w-full border block rounded-[3px] mt-[10px]"
                                    autoComplete="off"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center px-2"
                                    onClick={togglePasswordVisibility}>
                                    {showPassword ? (
                                        <HiEyeOff className="w-[12px] text-gray-600 mt-[2px]" />
                                    ) : (
                                        <HiEye className="w-[12px] text-gray-600 mt-[2px]" />
                                    )}
                                </button>
                            </div>

                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-[3px] mt-[20px] block">
                                SignIn
                            </button>

                            <div className="flex flex-wrap justify-center gap-[5px] text-[12px] mt-[10px]">
                                <p>Don't have an account yet?</p>
                                <Link 
                                    to="/registrasi" 
                                    className="text-blue-600 hover:underline">
                                        <span>Registration</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;