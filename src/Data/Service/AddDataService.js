import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import backgImg from '../../Assets/bg.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

// api
import BaseUrl from '../../Api/BaseUrl';

const AddDataService = () => {
    useEffect(() => {
         document.title = "Add Data Service | Casatech";
     }, []);

    const [data, setData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/');
                } else {
                    const response = await axios.get(`${BaseUrl}service`, {
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

    const [image, setImage] = useState('');
    const [tittle, setTitle] = useState('');
    const [editorContent, setEditorContent] = useState('');
    const [error, setError] = useState('');

     const handleChange = (content) => {
         setEditorContent(content);
         setError('');
     };

     const handleTitleChange = (event) => {
         setTitle(event.target.value);
         setError('');
     };

     const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        if (selectedImage && selectedImage.size > 5 * 1024 * 1024) {
            setError('File size exceeds 5 MB.');
            Swal.fire({
                title: 'Error!',
                text: 'Ukuran file tidak boleh melebihi 5 MB.',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
            });
        } else {
            setImage(selectedImage);
            setError('');
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!image || !tittle.trim() || !editorContent.trim()) {
            Swal.fire({
                title: 'Error!',
                text: 'Image, Title dan Description harus diisi!',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
            });
            return;
        }

        const formData = new FormData();
        formData.append('image', image);
        formData.append('tittle', tittle);
        formData.append('description', editorContent);

        try {
            const token = localStorage.getItem('token')
            const response = await axios.post(`${BaseUrl}service`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('API Response:', response.data);

            Swal.fire({
                icon: 'success',
                title: 'Sukses!',
                text: 'Berhasil menambah data Service',
                showConfirmButton: false,
                timer: 1000,
            }).then(() => {
                navigate('/data-services');
            });
        } catch (error) {
            console.error('Error creating data:', error);

            Swal.fire({
                title: 'Error!',
                text: 'Terjadi kesalahan saat menambahkan data. Silakan coba lagi.',
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
                    Add Data Service
                </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/data-services" >
                        <p className="hover:underline">Data Services</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Add Data Service</p>
                </div>
            </div>
            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                    <h1 className="text-center font-bold text-[20px] mb-[20px]">Add Data Service</h1>
                    <form onSubmit={handleFormSubmit}>
                    <div className="mt-[10px]">
                        <label htmlFor="image">Image:</label>
                        <br />
                        <input
                            id="image"
                            className="mt-[10px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[3px] cursor-pointer"
                            type="file"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="tittle">Title:</label>
                        <br />
                        <input
                            className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]"
                            type="text"
                            id="tittle"
                            value={tittle}
                            onChange={handleTitleChange}
                            autoComplete="off"
                        />
                    </div>
                    <div className="mt-[15px]">
                        <label htmlFor="description">Description:</label>
                        <ReactQuill
                            id="description"
                            className="mt-[15px]"
                            value={editorContent}
                            onChange={handleChange}
                            modules={{
                                toolbar: [
                                    ['bold', 'italic', 'underline'],
                                    [{ color: [] }],
                                    [{ list: 'ordered' }, { list: 'bullet' }],
                                    ['link'],
                                ],
                                clipboard: {
                                    matchVisual: false,
                                },
                            }}
                            formats={[
                                'bold',
                                'italic',
                                'underline',
                                'color',
                                'list',
                                'bullet',
                                'link',
                            ]}
                            required
                        />
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                    <button type="submit" className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddDataService;