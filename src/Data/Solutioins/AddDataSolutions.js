// import React, { useState, useEffect } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
// import backgImg from '../../Assets/bg.png';

// // api
// import BaseUrl from '../../Api/BaseUrl';

// const AddDataSolutions = () => {
//     useEffect(() => {
//         document.title = "Add Data Solution | Casatech";
//     }, []);

//     const navigate = useNavigate();
//     const [data, setData] = useState(null);
//     const [image, setImage] = useState('');
//     const [title, setTitle] = useState('');
//     const [editorContent, setEditorContent] = useState('');
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 if (!token) {
//                     navigate('/');
//                 } else {
//                     const response = await axios.get(`${BaseUrl}solution`, {
//                         headers: {
//                             Authorization: `Bearer ${token}`
//                         }
//                     });
//                     const sortedData = response.data.data.sort((a, b) => b.id - a.id);

//                     setData(sortedData);
//                 }
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, [navigate]);

//     const handleTitleChange = (event) => {
//         setTitle(event.target.value);
//         setError('');
//     };

//     const handleChange = (content) => {
//         setEditorContent(content);
//         setError('');
//     };

//     const handleImageChange = (event) => {
//         const selectedImage = event.target.files[0];
//         if (selectedImage && selectedImage.size > 5 * 1024 * 1024) {
//             setError('Ukuran file melebihi 5 MB.');
//             Swal.fire({
//                 title: 'Peringatan!',
//                 text: 'Ukuran file tidak boleh melebihi 5 MB.',
//                 icon: 'warning',
//                 confirmButtonColor: '#3085d6',
//                 confirmButtonText: 'OK',
//             });
//         } else {
//             setImage(selectedImage);
//             setError('');
//         }
//     };


//     const handleFormSubmit = async (event) => {
//         event.preventDefault();

//         if (!image || !title.trim() || !editorContent.trim()) {
//              Swal.fire({
//                 title: 'Peringatan!',
//                 text: 'Image, Title dan Description harus diisi!',
//                 icon: 'warning',
//                 confirmButtonColor: '#3085d6',
//                 confirmButtonText: 'OK',
//             });
//             return;
//         }

//         try {
//             const token = localStorage.getItem('token');
//             const response = await axios.post(
//                 `${BaseUrl}solution`,
//                 {
//                     title: title,
//                     description: editorContent,
//                 },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             console.log('API Response:', response.data);

//             Swal.fire({
//                 icon: 'success',
//                 title: 'Sukses!',
//                 text: 'Berhasil menambah Data Solution',
//                 showConfirmButton: false,
//                 timer: 1000,
//             }).then(() => {
//                 navigate('/data-solutions');
//             });
//         } catch (error) {
//             console.error('Error creating data:', error);

//             Swal.fire({
//                 title: 'Error!',
//                 text: 'Terjadi kesalahan saat menambahkan data. Silakan coba lagi.',
//                 icon: 'error',
//                 confirmButtonColor: '#3085d6',
//                 confirmButtonText: 'OK',
//             });
//         }
//     };

//     return (
//         <div>
//             <div
//                 className="container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
//                 style={{ backgroundImage: `url(${backgImg})` }}
//             >
//                 <h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]">
//                     Add Data Solutions
//                 </h1>
//                 <div className="link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]">
//                     <Link to="/data-solutions">
//                         <p className="hover:underline">Data Solutions</p>
//                     </Link>
//                     <MdOutlineKeyboardArrowRight className="mt-[3px]" />
//                     <p className="text-blue-600">Add Data Solution</p>
//                 </div>
//             </div>

//             <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
//                 <h1 className="text-center font-bold text-[20px] mb-[20px]">Add Data Solution</h1>
//                 <form onSubmit={handleFormSubmit}>
//                     <div className="mt-[10px]">
//                         <label htmlFor="image">Image:</label>
//                         <br />
//                         <input
//                             id="image"
//                             className="mt-[10px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[3px] cursor-pointer"
//                             type="file"
//                             onChange={handleImageChange}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="title">Title:</label>
//                         <br />
//                         <input
//                             className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]"
//                             type="text"
//                             id="title"
//                             value={title}
//                             onChange={handleTitleChange}
//                             autoComplete="off"
//                         />
//                     </div>
//                     <div className="mt-[15px]">
//                         <label htmlFor="desc">Description:</label>
//                         <ReactQuill
//                             id="desc"
//                             className="mt-[15px]"
//                             value={editorContent}
//                             onChange={handleChange}
//                             modules={{
//                                 toolbar: [
//                                     ['bold', 'italic', 'underline'],
//                                     [{ list: 'ordered' }, { list: 'bullet' }],
//                                     ['link'],
//                                 ],
//                                 clipboard: {
//                                     matchVisual: false,
//                                 },
//                             }}
//                             formats={[
//                                 'bold',
//                                 'italic',
//                                 'underline',
//                                 'list',
//                                 'bullet',
//                                 'link',
//                             ]}
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]"
//                     >
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddDataSolutions;











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
import BaseUrl from '../../Api/BaseUrl';

const AddDataSolutions = () => {
    useEffect(() => {
         document.title = "Add Data Solution | Casatech";
     }, []);

    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [editorContent, setEditorContent] = useState('');
    const [error, setError] = useState('');

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

     const handleChange = (content) => {
         setEditorContent(content);
         setError('');
     };

     const handleTitleChange = (event) => {
         setTitle(event.target.value);
         setError('');
     };

     const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        if (selectedImage && selectedImage.size > 5 * 1024 * 1024) {
            setError('Ukuran file melebihi 5 MB.');
            Swal.fire({
                title: 'Peringatan!',
                text: 'Ukuran file tidak boleh melebihi 5 MB.',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
            });
        } else {
            setImage(selectedImage);
            setError('');
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!image || !title.trim() || !editorContent.trim()) {
            Swal.fire({
                title: 'Peringatan!',
                text: 'Image, Title dan Description harus diisi!',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
            });
            return;
        }

        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', title);
        formData.append('description', editorContent);

        try {
            const token = localStorage.getItem('token')
            const response = await axios.post(`${BaseUrl}solution`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('API Response:', response.data);

            Swal.fire({
                icon: 'success',
                title: 'Sukses!',
                text: 'Berhasil menambah data Solution',
                showConfirmButton: false,
                timer: 1000,
            }).then(() => {
                navigate('/data-solutions');
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
                    Add Data Solution
                </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/data-olutions" >
                        <p className="hover:underline">Data Solutions</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Add Data Solution</p>
                </div>
            </div>
            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                    <h1 className="text-center font-bold text-[20px] mb-[20px]">Add Data Solution</h1>
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
                        <label htmlFor="tittle">Title:</label>
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
                    </div>
                    <button type="submit" className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddDataSolutions;