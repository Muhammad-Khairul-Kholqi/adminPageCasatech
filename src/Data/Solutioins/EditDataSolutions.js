import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import Swal from 'sweetalert2';
import 'react-quill/dist/quill.snow.css';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import backgImg from '../../Assets/bg.png';

const EditDataSolutions = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Edit Data Solutions | Casatech';
        axios.get(`http://localhost:4000/solution/${id}`)
            .then(response => {
                const { title, description } = response.data;
                setTitle(title);
                setEditorContent(description);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const [editorContent, setEditorContent] = useState('');
    const [title, setTitle] = useState('');

    const handleChange = (content) => {
        setEditorContent(content);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ color: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
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

    const handleUpdate = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.patch(`http://localhost:4000/solution/${id}`, {
                title: title,
                description: editorContent,
            });

            console.log('Response from server:', response.data);
            Swal.fire({
                title: 'Sukses!',
                text: 'Data berhasil diupdate.',
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

    return (
        <div>
            <div
                className="container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style={{ backgroundImage: `url(${backgImg})` }}>
                <h1 className = "title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]" >
                    Edit Data Solutions
                </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/data-solutions" >
                        <p className="hover:underline">Data Solutions</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Edit Data Solutions</p>
                </div>
            </div>
            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                <h1 className="text-center font-bold text-[20px] mb-[20px]">Edit Data Solutioins</h1>
                <form onSubmit={handleUpdate}>
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
                    <button className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]" type="submit">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditDataSolutions;
