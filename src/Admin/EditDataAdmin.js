import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'react-quill/dist/quill.snow.css';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import backgImg from '../Assets/bg.png';

// API
import BaseUrl from '../Api/BaseUrl';

const EditDataAdmin = () => {
    useEffect(() => {
        document.title = "Edit Data Admin | Casatech";
    }, []);

    const { id } = useParams();
    const navigate = useNavigate();

    const [fullname, setFullname] = useState('');
    const [place_date_birth, setBirth] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [addres, setAddres] = useState('');

    const handleImageChange = (event) => {
         setImage(event.target.files[0]);
     };

     const handleFullnameChange = (event) => {
         setFullname(event.target.value);
     };

     const handleBirhtChange = (event) => {
         setBirth(event.target.value);
     };

     const handlePositionChange = (event) => {
         setPosition(event.target.value);
     };

     const handleAddresChange = (event) => {
         setAddres(event.target.value);
     };

     const handleUpdate = async (event) => {
         event.preventDefault();

         if (!image ||
             !fullname.trim() ||
             !place_date_birth.trim() ||
             !position.trim() ||
             !addres.trim() 
             ) {
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
        formData.append('fullname', fullname);
        formData.append('place_date_birth', place_date_birth);
        formData.append('position', position);
        formData.append('addres', addres);

         try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(`${BaseUrl}users/${id}`, formData, {
                 headers: {
                      Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                 }

            });

             console.log('Response from server:', response.data);
             
             Swal.fire({
                 title: 'Sukses!',
                 text: 'Data berhasil diupdate.',
                 icon: 'success',
                 showConfirmButton: false,
                 timer: 1000
             }).then(() => {
                 navigate('/data-admin');
             });
         } catch (error) {
             console.error('Error updating data:', error);

             Swal.fire({
                 title: 'Error!',
                 text: 'Terjadi kesalahan saat mengupdate data. Silakan coba lagi.',
                 icon: 'error',
                 confirmButtonColor: '#3085d6',
                 confirmButtonText: 'OK',
             });
         }
     };
    
    return(
        <div>
            <div
                className="container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style={{ backgroundImage: `url(${backgImg})` }}>
                <h1 className = "title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]" >
                    Edit Data Admin
                </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/data-admin" >
                        <p className="hover:underline">Data Admin</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Edit Data Admin</p>
                </div>
            </div>

            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                    <h1 className="text-center font-bold text-[20px] mb-[20px]">Edit Data Admin</h1>
                    <form onSubmit={handleUpdate}>
                        <div className="mt-[10px]">
                            <span for="image">Image:</span>
                            <br />
                            <input 
                                id="image" 
                                className="mt-[10px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[3px] cursor-pointer" 
                                type="file"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div>
                            <span for="name">FullName:</span>
                            <br />
                            <input
                                className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]"
                                type="text"
                                id="name"
                                autoComplete="off"
                                value={fullname}
                                onChange={handleFullnameChange}
                        />
                        </div>
                        <div className = "mt-[15px]" >
                            <span for="position">Position:</span>
                            <br />
                            <input 
                                className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                                type="text" 
                                id="position"
                                autoComplete="off"
                                value={position}
                                onChange={handlePositionChange}
                            />
                        </div>
                        <div className = "mt-[15px]" >
                            <span for="ttl">Birth:</span>
                            <br />
                            <input 
                                className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                                type="date" 
                                id="ttl"
                                autoComplete="off"
                                value={place_date_birth}
                                onChange={handleBirhtChange}
                            />
                        </div>
                        <div className = "mt-[15px]" >
                            <span for="address">Address:</span>
                            <br />
                            <input 
                                className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                                type="text" 
                                id="address"
                                autoComplete="off"
                                value={addres}
                                onChange={handleAddresChange}
                            />
                        </div>
                        <button className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]" type="submit">
                            Save Changes
                        </button>
                    </form>
            </div>
        </div>
    )
}

export default EditDataAdmin;


