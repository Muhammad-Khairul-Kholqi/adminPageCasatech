import React, { useState } from 'react';
import ReactQuill from 'react-quill';

const Integrated = () => {
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

    return (
        <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                <h1 className="text-center font-bold text-[20px] mb-[20px]">Integragted Data</h1>
                <form>
                    <div>
                        <span for="name">Company Name:</span>
                        <br />
                        <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="text" id="name" />
                    </div>
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
                    <button className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]">Save Changes</button>
                </form>
        </div>
    )
}

export default Integrated;