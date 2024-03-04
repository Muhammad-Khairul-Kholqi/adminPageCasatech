import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import backgImg from '../../Assets/bg.png';

const AddDataSolutions = () => {
    // untuk title
    useEffect(() => {
        document.title = 'Add Data Solutions | Casatech';
    }, []);

    // untuk konsum api
    // untuk sweet alert
    // CREATE Data
    const [title, setTitle] = useState('');
    const navigate = useNavigate();
    const handleChange = (content) => {
        setEditorContent(content);
    };
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/solution', {
                title: title,
                description: editorContent,
            });

            console.log('API Response:', response.data);

            Swal.fire({
                icon: 'Sukses!',
                title: 'Berhasil menambah data Solutions',
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
                navigate('/data-solutions');
            });
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    
    // untuk teks editor
    const [editorContent, setEditorContent] = useState('');
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
                <h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]">
                    Add Data Solutions
                </h1>
                <div className="link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]">
                    <Link to="/data-solutions">
                        <p className="hover:underline">Data Solutions</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Add Data Solutions</p>
                </div>
            </div>

            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                <h1 className="text-center font-bold text-[20px] mb-[20px]">Add Data Solutions</h1>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <br />
                        <input
                            className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]"
                            type="text"
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
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
                    <button type="submit" className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddDataSolutions;