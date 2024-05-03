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
import BaseUrl from "../../Api/BaseUrl";

const AddDataPortfolio = () => {
    useEffect(() => {
         document.title = "Add Data Portfolio | Casatech";
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
                    const response = await axios.get(`${BaseUrl}portfolio`, {
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
     const [title, setTitle] = useState('');
     const [software_name, setSoftware] = useState('');
     const [amount, setAmount] = useState('');
     const [editorContent, setEditorContent] = useState('');
     const [error, setError] = useState('');

     const handleImageChange = (event) => {
         setImage(event.target.files[0]);
         setError('');
     };

     const handleTitleChange = (event) => {
         setTitle(event.target.value);
         setError('');
     };

     const handleSoftwareChange = (event) => {
         setSoftware(event.target.value);
         setError('');
     };

     const handleAmountChange = (event) => {
         setAmount(event.target.value);
         setError('');
     };

    const handleChange = (content) => {
        setEditorContent(content);
        setError('');
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!image || !title.trim() || !software_name.trim() || !editorContent.trim()) {
            Swal.fire({
                title: 'Error!',
                text: 'Image, Title, Software, Amount dan Description harus diisi!',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
            });
            return;
        }

        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', title);
        formData.append('software_name', software_name);
        formData.append('amount', amount);
        formData.append('description', editorContent);

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${BaseUrl}portfolio`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('API Response:', response.data);

            Swal.fire({
                icon: 'success',
                title: 'Sukses!',
                text: 'Berhasil menambah data Portfolio',
                showConfirmButton: false,
                timer: 1000,
            }).then(() => {
                navigate('/data-portfolio');
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
                    Add Data Portfolio
                </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/data-portfolio" >
                        <p className="hover:underline">Data Portfolio</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Add Data Portfolio</p>
                </div>
            </div>
            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                    <h1 className="text-center font-bold text-[20px] mb-[20px]">Add Data Portfolio</h1>
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
                            <label htmlFor="title">Title:</label>
                            <br />
                            <input
                                className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]"
                                type="text"
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                                autoComplete="off"
                            />
                        </div>
                        <div className = "mt-[15px]" >
                            <span htmlFor="software">Software Name:</span>
                            <br />
                            <input 
                                className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                                type="text" 
                                id="software" 
                                value={software_name}
                                onChange={handleSoftwareChange}
                                autoComplete="off"
                            />
                        </div>
                        <div className = "mt-[15px]" >
                            <span htmlFor="amount">Amount:</span>
                            <br />
                            <input 
                                className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                                type="number" 
                                id="amount"
                                value={amount}
                                onChange={handleAmountChange}
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

export default AddDataPortfolio;