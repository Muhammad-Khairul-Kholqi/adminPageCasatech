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
    // mengatur tittle agar berubah
    useEffect(() => {
        document.title = "Edit Data Admin | Casatech";
    }, []);

    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [data, setData] = useState(null);
    const [image, setImage] = useState('');
    const [fullname, setFullname] = useState('');
    const [place_date_birth, setBirth] = useState('');
    const [position, setPosition] = useState('');
    const [addres, setAddres] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/');
                } else {
                    const response = await axios.get(`${BaseUrl}users`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    const sortedData = response.data.data.sort((a, b) => b.id - a.id);
                    setData(sortedData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [navigate]);

    useEffect(() => {
        if (data) {
            const selectedData = data.find(item => item.id === parseInt(id));
            if (selectedData) {
                setImage(selectedData.image);
                setFullname(selectedData.fullname);
                setBirth(selectedData.place_date_birth);
                setPosition(selectedData.position);
                setAddres(selectedData.addres);
            }
        }
    }, [data, id]);

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        if (selectedImage && selectedImage.size > 5 * 1024 * 1024) {
            setError('Ukuran file melebihi 5 MB.');
            Swal.fire({
                title: 'Peringatan!',
                text: 'Ukuran file tidak boleh melebihi 5 MB.',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
            });
        } else {
            setImage(selectedImage);
            setError('');
        }
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
    
    // fungsi update data per id
    const handleUpdate = async (event) => {
         event.preventDefault();
        //  fungsi agar data di bawah ini harus di isi
        // jika tidak maka akan muncul alert peringatan
        if (!image ||
             !fullname.trim() ||
             !place_date_birth.trim() ||
             !position.trim() ||
             !addres.trim() 
             ) {
             Swal.fire({
                 title: 'Peringatan!',
                 text: 'Seluruh data harus diisi!',
                 icon: 'warning',
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

            // respon server jika berhasil atau gagal
            console.log('Response from server:', response.data);
             
            // respon berhasil update data
             Swal.fire({
                 title: 'Sukses!',
                 text: 'Berhasil edit Data Admin.',
                 icon: 'success',
                 showConfirmButton: false,
                 timer: 1000
             }).then(() => {
                 navigate('/data-admin');
             });
         } catch (error) {
            // respon server jika error update data
             console.error('Error updating data:', error);
            //  respon alert gagal update data
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
                        <p className="hover:underline">Data Admins</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Edit Data Admin</p>
                </div>
            </div>

            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                    <h1 className="text-center font-bold text-[20px] mb-[20px]">Edit Data Admin</h1>
                    <form onSubmit={handleUpdate}>
                        <div className="mt-[10px]">
                            <span htmlFor="image">Image:</span>
                            <br />
                            <div className="flex items-center gap-[10px]">
                                <p>Previous Image: </p>
                                <img
                                    className="w-[100px]"
                                    src={`https://casatech.id/compro-api${image}`}
                                />
                            </div>
                            <input 
                                id="image" 
                                className="mt-[10px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[3px] cursor-pointer" 
                                type="file"
                                onChange={handleImageChange}
                                required
                            />
                        </div>
                        <div>
                            <span htmlFor="name">FullName:</span>
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
                            <span htmlFor="position">Position:</span>
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
                            <span htmlFor="ttl">Birth:</span>
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
                            <span htmlFor="address">Address:</span>
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


