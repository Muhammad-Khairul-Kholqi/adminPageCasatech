import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BaseUrl from './Api/BaseUrl';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Registrasi = () => {
    useEffect(() => {
        document.title = "Registrasi Admin | Casatech";
    }, []);

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [place_date_birth, setBirth] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [addres, setAddres] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
         setUsername(event.target.value);
         setError('');
     };

     const handlePasswordChange = (event) => {
         setPassword(event.target.value);
         setError('');
     };

     const handleFullnameChange = (event) => {
         setFullname(event.target.value);
         setError('');
     };

     const handleBirthChange = (event) => {
         setBirth(event.target.value);
         setError('');
     };

     const handlePositionChange = (event) => {
         setPosition(event.target.value);
         setError('');
     };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
        setError('');
    };

    const handleAddresChange = (event) => {
         setAddres(event.target.value);
         setError('');
     };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!image || 
            !username.trim() || 
            !password.trim() || 
            !fullname.trim() ||
            !place_date_birth.trim() ||
            !position.trim() ||
            !addres.trim()) {
            Swal.fire({
                title: 'Error!',
                text: 'Seluruh data harus diisi!',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
            });
            return;
        }


        const formData = new FormData();
        formData.append('image', image);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('fullname', fullname);
        formData.append('place_date_birth', place_date_birth);
        formData.append('position', position);
        formData.append('addres', addres);

        try {
            const response = await axios.post(`${BaseUrl}auth/register`, formData);

            console.log('API Response:', response.data);

            Swal.fire({
                icon: 'success',
                title: 'Sukses!',
                text: 'Berhasil menambah data Testimoni',
                showConfirmButton: false,
                timer: 1000,
            }).then(() => {
                navigate('/');
            });
        } catch (error) {
            console.error('Error creating data:', error);

            Swal.fire({
                title: 'Error!',
                text: 'Terjadi kesalahan saat membuat data. Silakan coba lagi.',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div>
            <div className="bg-gray-200 bg-cover pt-[70px] pr-[50px] pl-[50px] pb-[100px]">
                <p className="text-[30px] font-bold text-blue-600">Create Account Admin</p>
                <p className="font-bold text-gray-600">Enter your personal data and password</p>
            </div>

            <div className="px-[10px] py-[30px] flex justify-center mt-[-100px]">
                <div className="bg-white shadow rounded-[5px] p-[15px]">
                    <form onSubmit={handleFormSubmit}>
                        <div className="flex gap-[10px]">

                            <div>
                                <div>
                                    <label htmlFor="fullname">Fullname: </label>
                                    <input 
                                        id="fullname"
                                        type="text"
                                        autoComplete="off"
                                        className="border rounded-[3px] mt-[10px] w-full pl-[5px] px-[5px]"
                                        onChange={handleFullnameChange}
                                    />
                                </div>

                                <div className="mt-[15px]">
                                    <label htmlFor="pdb">Place date of birth: </label>
                                    <input 
                                        id="pdb"
                                        type="date"
                                        autoComplete="off"
                                        className="border rounded-[3px] mt-[10px] w-full pl-[5px] px-[5px]"
                                        onChange={handleBirthChange}
                                    />
                                </div>

                                <div className="mt-[15px]">
                                    <label htmlFor="position">Position: </label>
                                    <input 
                                        id="position"
                                        type="text"
                                        autoComplete="off"
                                        className="border rounded-[3px] mt-[10px] w-full pl-[5px] px-[5px]"
                                        onChange={handlePositionChange}
                                    />
                                </div>

                                <div className="mt-[15px]">
                                    <label htmlFor="address">Address: </label>
                                    <input 
                                        id="address"
                                        type="text"
                                        autoComplete="off"
                                        className="border rounded-[3px] mt-[10px] w-full pl-[5px] px-[5px]"
                                        onChange={handleAddresChange}
                                    />
                                </div>

                                <div className="mt-[15px]">
                                    <label htmlFor="image">Image: </label>
                                    <input
                                        className="border rounded-[3px] mt-[10px] w-full"
                                        type="file"
                                        id="image"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label htmlFor="username">Username: </label>
                                    <input 
                                        id="username"
                                        type="text"
                                        autoComplete="off"
                                        className="border rounded-[3px] mt-[10px] w-full pl-[5px] px-[5px]"
                                        onChange={handleUsernameChange}
                                    />
                                </div>

                                <div className="mt-[15px]">
                                    <label htmlFor="password">Password: </label>
                                    <div className="relative">
                                        <input 
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            autoComplete="off"
                                            className="border rounded-[3px] mt-[10px] w-full pl-[5px] px-[5px]"
                                            onChange={handlePasswordChange}

                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 flex items-center px-2"
                                            onClick={togglePasswordVisibility}>

                                            {showPassword ? (
                                                <HiEyeOff className="w-[15px] text-black mt-[10px]" />
                                            ) : (
                                                <HiEye className="w-[15px] text-black mt-[10px]" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button 
                            className="w-full bg-blue-600 py-[5px] text-white hover:bg-blue-700 mt-[20px] rounded-[3px]"
                            type="submit">
                            Registrasi
                        </button>
                    </form>
                    <Link to='/'>
                        <p className="flex justify-end text-blue-600 mt-[10px] mr-[5px] text-[14px] hover:underline">Back to Sign In?</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Registrasi;
