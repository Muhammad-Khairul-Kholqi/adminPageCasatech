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

const EditDataCulture = () => {
    useEffect(() => {
        document.title = 'Edit Data Culture | Casatech';
    }, []);

    const { id } = useParams();
    const navigate = useNavigate();
    const [image, setImage] = useState('');
    const [tittle_culture, setTitle] = useState('');
    const [editorContent, setEditorContent] = useState('');

    const handleChange = (content) => {
        setEditorContent(content);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();

        if (!image || !tittle_culture.trim() || !editorContent.trim()) {
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
        formData.append('tittle_culture', tittle_culture);
        formData.append('description_culture', editorContent);

        try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(`${BaseUrl}culture/${id}`, formData, {
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
               navigate('/data-culture');
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
                    Edit Data Culture
                </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/data-culture" >
                        <p className="hover:underline">Data Culture</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Edit Data Culture</p>
                </div>
            </div>
            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                    <h1 className="text-center font-bold text-[20px] mb-[20px]">Edit Data Culture</h1>
                    <form onSubmit = {handleUpdate} >
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
                            <span for="tittle">Title:</span>
                            <br />
                            <input
                                className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]"
                                type="text"
                                id="tittle"
                                value={tittle_culture}
                                onChange={handleTitleChange}
                                autoComplete="off"
                        />
                        </div>
                        <div className="mt-[15px]">
                            <label htmlFor="desc">Description:</label>
                            <ReactQuill
                                id="desc"
                                className="mt-[15px]"
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

export default EditDataCulture;