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

const EditDataSolutions = () => {
    useEffect(() => {
        document.title = 'Edit Data Solution | Casatech';
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
                    const response = await axios.get(`${BaseUrl}solution`, {
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
    const [title, setTitle] = useState('');
    const [editorContent, setEditorContent] = useState('');

    useEffect(() => {
        if (data) {
            const selectedData = data.find(item => item.id === parseInt(id));
            if (selectedData) {
                setTitle(selectedData.title);
                setEditorContent(selectedData.description);
            }
        }
    }, [data, id]);

    const handleChange = (content) => {
        setEditorContent(content);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();

        if (!title.trim() || !editorContent.trim()) {
            Swal.fire({
                title: 'Peringatan!',
                text: 'Judul dan Deskripsi harus diisi!',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
            });
            return;
        }

        const dataToUpdate = {
            title: title,
            description: editorContent
        };

        try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(`${BaseUrl}solution/${id}`, dataToUpdate, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            console.log('Response from server:', response.data);

            Swal.fire({
                title: 'Sukses!',
                text: 'Berhasil update data Solution.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
                navigate('/data-solutions');
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
                    Edit Data Solution
                </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/data-solutions" >
                        <p className="hover:underline">Data Solutions</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Edit Data Solution</p>
                </div>
            </div>
            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                    <h1 className="text-center font-bold text-[20px] mb-[20px]">Edit Data Solution</h1>
                    <form onSubmit = {handleUpdate} >
                        <div>
                            <span htmlFor="tittle">Title:</span>
                            <br />
                            <input
                                className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]"
                                type="text"
                                id="tittle"
                                value={title}
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

export default EditDataSolutions;