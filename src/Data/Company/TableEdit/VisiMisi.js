import React, { useState } from 'react';
import ReactQuill from 'react-quill';
const VisiMisi = () => {
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
                <h1 className="text-center font-bold text-[20px] mb-[20px]">Vision & Mision</h1>
                <form>
                    <div className = "mt-[15px]" >
                        <span for="desc">Vision:</span>
                        <br />
                        <ReactQuill id="desc" className="mt-[15px]"
                            value={editorContent}
                            onChange={handleChange}
                            modules={modules}
                            formats={formats}
                        />
                    </div>
                    <div className = "mt-[15px]" >
                        <span for="desc">Mision:</span>
                        <br />
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

export default VisiMisi;