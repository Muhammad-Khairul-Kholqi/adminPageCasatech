import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BaseUrl from './Api/BaseUrl';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ilustrasiLogin from './Assets/ilustrasi-login.png';
import Logo from './Assets/logo.png';
import './Style/StyleSignin.css';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { Link } from 'react-router-dom';

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
        <div className="content-login flex justify-between py-[20px] px-[10%] gap-[30px] flex-wrap mt-[100px]">
            <div className="ilustrasi w-[400px]">
                <img src={ilustrasiLogin} alt="Illustration" draggable="false" />
            </div>

            <div className="flex flex-col items-center justify-center">
                <img className="w-[100px] mb-2" src={Logo} alt="Logo" />
                <div className="flex items-center mt-[30px]">
                    <div className="garis h-[1px] bg-gray-400 w-[80px] mt-[5px]"></div>
                    <p className="mx-2 text-gray-500">Login Admin</p>
                    <div className="garis h-[1px] bg-gray-400 w-[80px] mt-[5px]"></div>
                </div>
                <form className="mt-5" onSubmit={handleLogin}>
                    <input
                        placeholder="Username.."
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="type-input block border-solid border-2 border-gray-400 px-4 w-[300px] rounded-[3px] h-[30px] mb-4"
                        autoComplete="off"
                    />
                    <div className="relative">
                        <input
                            placeholder="Password.."
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="type-input block border-solid border-2 border-gray-400 px-4 w-[300px] rounded-[3px] h-[30px] mb-4"
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
                <p className="for-signup mt-[20px]">
                    Don't have an account yet?
                    <Link to="/registrasi" className="text-blue-600 ml-1 hover:underline">
                        <span>Registrasi</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
