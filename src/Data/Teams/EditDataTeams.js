import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import backgImg from '../../Assets/bg.png';

// api
import BaseUrl from "../../Api/BaseUrl";

const EditDataTeams = () => {
    useEffect(() => {
        document.title = 'Edit Data Team | Casatech';
    }, []);

    const { id } = useParams();
    const navigate = useNavigate();
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');

     const handleImageChange = (event) => {
         setImage(event.target.files[0]);
     };

     const handleNameChange = (event) => {
         setName(event.target.value);
     };

     const handlePositionChange = (event) => {
         setPosition(event.target.value);
     };

     const handleUpdate = async (event) => {
         event.preventDefault();

         if (!image || !name.trim() || !position.trim()) {
             Swal.fire({
                 title: 'Error!',
                 text: 'Image, Name dan Position harus diisi!',
                 icon: 'error',
                 confirmButtonColor: '#3085d6',
                 confirmButtonText: 'OK',
             });
             return;
         }

        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);
        formData.append('position', position);

         try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(`${BaseUrl}team/${id}`, formData, {
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
                 navigate('/data-teams');
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


    return (
        <div>
            <div
                className="container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style={{ backgroundImage: `url(${backgImg})` }}>
                <h1 className = "title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]" >
                    Edit Data Teams
                </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/data-teams" >
                        <p className="hover:underline">Data Teams</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Edit Data Teams</p>
                </div>
            </div>
            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                    <h1 className="text-center font-bold text-[20px] mb-[20px]">Edit Data Teams</h1>
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
                            <span for="name">Name:</span>
                            <br />
                            <input 
                                className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                                type="text" 
                                id="name" 
                                value={name}
                                onChange={handleNameChange}
                                autoComplete="off"
                            />
                        </div>
                        <div className="mt-[15px]">
                            <span for="position">Position:</span>
                            <br />
                            <input 
                                className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                                type="text" 
                                id="position" 
                                value={position}
                                onChange={handlePositionChange}
                                autoComplete="off"
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

export default EditDataTeams;