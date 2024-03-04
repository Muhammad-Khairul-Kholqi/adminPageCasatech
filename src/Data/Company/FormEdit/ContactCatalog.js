import React, { useState } from 'react';
import ReactQuill from 'react-quill';

const ContactCatalog = () => {
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
        <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
            <h1 className="text-center font-bold text-[20px] mb-[20px]">Contact Catalog</h1>
            <form>
                <div className="mt-[15px]">
                    <span for="wa">No Whatsapp:</span>
                    <br />
                    <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="text" id="wa" />
                </div>

                <div className="mt-[15px]">
                    <span for="telephone">No Telephone:</span>
                    <br />
                    <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="text" id="telephone" />
                </div>

                <div className="mt-[15px]">
                    <span for="email">Email:</span>
                    <br />
                    <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="text" id="email" />
                </div>

                <div className="mt-[15px]">
                    <span for="linkedin">Link Linkedin:</span>
                    <br />
                    <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="text" id="linkedin" />
                </div>

                <div className="mt-[15px]">
                    <span for="ig">Link Instagram:</span>
                    <br />
                    <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="text" id="ig" />
                </div>

                <div className="mt-[15px]">
                    <span for="yt">Link Youtube:</span>
                    <br />
                    <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="text" id="yt" />
                </div>

                <div className="mt-[15px]">
                    <span for="tele">Link Telegram:</span>
                    <br />
                    <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="text" id="tele" />
                </div>

                <div className="mt-[15px]">
                    <span for="map">Link Map:</span>
                    <br />
                    <input className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" type="text" id="map" />
                </div>

                <div className = "mt-[15px]" >
                    <span for="address">Address:</span>
                    <ReactQuill id="address" className="mt-[15px]"
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

export default ContactCatalog;