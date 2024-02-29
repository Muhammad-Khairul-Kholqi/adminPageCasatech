import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import backgImg from '../../Assets/bg.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const AddDataBlog = () => {
    useEffect(() => {
        document.title = "Add Data Blog | Casatech";
    }, []);

    const [editorContent, setEditorContent] = useState('');

    const handleChange = (content) => {
        setEditorContent(content);
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
    return(
        <div>
            <div
                className="container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style={{ backgroundImage: `url(${backgImg})` }}>
                <h1 className = "title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]" >
                    Add Data Blog
                </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/data-blog" >
                        <p className="hover:underline">Data Blog</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Add Data Blog</p>
                </div>
            </div>

            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                    <h1 className="text-center font-bold text-[20px] mb-[20px]">Add Data Blog</h1>
                    <form>
                        <div className="mt-[10px]">
                            <span for="image">Image:</span>
                            <br />
                            <input id="image" className="mt-[10px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[3px] cursor-pointer" type="file" />
                        </div>
                        <div>
                            <span for="title">Title:</span>
                            <br />
                            <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="text" id="title" />
                        </div>
                        <div className = "mt-[15px]" >
                            <span for="desc">Description:</span>
                            <ReactQuill id="desc" className="mt-[15px]"
                                value={editorContent}
                                onChange={handleChange}
                                modules={modules}
                                formats={formats}
                            />
                        </div>
                        <div className = "mt-[15px]">
                            <span>Category Name:</span>
                            <select className = "w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]">
                                <option selected disabled hidden>Choose</option>
                                <option>Nama Category</option>
                                <option>Nama Category</option>
                                <option>Nama Category</option>
                            </select>
                        </div>
                        <button className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]">Submit</button>
                    </form>
            </div>
        </div>
    )
}

export default AddDataBlog;