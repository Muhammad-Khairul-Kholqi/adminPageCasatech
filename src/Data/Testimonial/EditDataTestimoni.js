import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import Swal from 'sweetalert2';
import 'react-quill/dist/quill.snow.css';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import backgImg from '../../Assets/bg.png';

// api
import BaseUrl from "../../Api/BaseUrl";

const EditDataTestimoni = () => {
    useEffect(() => {
        document.title = 'Edit Data Testimoni | Casatech';
    }, []);

    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/');
                } else {
                    const response = await axios.get(`${BaseUrl}testimoni`, {
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

    const { id } = useParams();
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [editorContent, setEditorContent] = useState('');

    useEffect(() => {
        if (data) {
            const selectedData = data.find(item => item.id === parseInt(id));
            if (selectedData) {
                setImage(selectedData.image);
                setName(selectedData.name);
                setPosition(selectedData.position);
                setEditorContent(selectedData.description);
            }
        }
    }, [data, id]);

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

    const handleChange = (content) => {
        setEditorContent(content);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePositionChange = (event) => {
        setPosition(event.target.value);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();

        if (!image || !name.trim() || !position.trim() || !editorContent.trim()) {
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
        formData.append('name', name);
        formData.append('position', position);
        formData.append('description', editorContent);

        try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(`${BaseUrl}testimoni/${id}`, formData, {
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
                navigate('/testimonial-data');
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

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{
                color: []
            }],
            [{
                list: 'ordered'
            }, {
                list: 'bullet'
            }],
            ['link'],
        ],
        clipboard: {
            matchVisual: false,
        },
    };

    const formats = [
        'bold',
        'italic',
        'underline',
        'color',
        'list',
        'bullet',
        'link',
    ];

    return (
        <div>
            <div
                className="container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style={{ backgroundImage: `url(${backgImg})` }}>
                <h1 className = "title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]" >
                    Edit Data Testimoni
                </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/testimonial-data" >
                        <p className="hover:underline">Data Testimonial</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Edit Data Testimonial</p>
                </div>
            </div>
            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                    <h1 className="text-center font-bold text-[20px] mb-[20px]">Edit Data Testimonial</h1>
                    <form onSubmit={handleUpdate}>
                        <div className="mt-[10px]">
                            <span htmlFor="image">Image:</span>
                            <br />
                            <div className="flex items-center gap-[10px]">
                                <p>Previous Image: </p>
                                <img
                                    className="w-[100px]"
                                    src={`http://localhost:4000/${image}`}
                                />
                            </div>
                            <input 
                                id="image" 
                                className="mt-[10px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[3px] cursor-pointer" 
                                type="file" 
                                onChange={handleImageChange}
                            />
                        </div>
                        <div>
                            <span htmlFor="name">Name:</span>
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
                        <div className = "mt-[15px]" >
                            <span htmlFor="position">Position:</span>
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
                        <div className = "mt-[15px]" >
                            <span htmlFor="desc">Description:</span>
                            <ReactQuill id="desc" className="mt-[15px]"
                                value={editorContent}
                                onChange={handleChange}
                                modules={modules}
                                formats={formats}
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

export default EditDataTestimoni;