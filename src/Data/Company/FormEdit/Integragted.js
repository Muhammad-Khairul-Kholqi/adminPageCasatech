import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import Swal from 'sweetalert2';
import 'react-quill/dist/quill.snow.css';

const Integrated = () => {
    const { id } = useParams();
    const navigate = useNavigate();

     useEffect(() => {
        axios.get(`http://localhost:4000/company/${id}`)
            .then(response => {
                const {
                    company_name,
                    image_company,
                    tittle_company,
                    description
                } = response.data;
                setCompanyName(company_name);
                setImage(image_company);
                setTitle(tittle_company)
                setEditorContent(description);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const [company_name, setCompanyName] = useState('');
    const [image_company, setImage] = useState('');
    const [tittle_company, setTitle] = useState('');
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

    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value);
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

    const handleUpdate = async (event) => {
        event.preventDefault();

        if (!image_company || !company_name.trim() || !tittle_company.trim() || !editorContent.trim()) {
            Swal.fire({
                title: 'Error!',
                text: 'Semua data harus diisi!',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
            });
            return;
        }

        const formData = new FormData();
        formData.append('company_name', company_name);
        formData.append('image_company', image_company);
        formData.append('tittle_company', tittle_company);
        formData.append('description', editorContent);

        try {
            const response = await axios.patch(`http://localhost:4000/company/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Response from server:', response.data);
            Swal.fire({
                title: 'Sukses!',
                text: 'Data berhasil diupdate.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
                navigate('/preview-data-company');
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
        <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
            <h1 className="text-center font-bold text-[20px] mb-[20px]">Integragted Data</h1>
                <form onSubmit = {handleUpdate} >
                    <div>
                        <span for="name">Company Name:</span>
                        <br />
                        <input 
                            className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                            type="text" 
                            id="name" 
                            value={company_name}
                            onChange={handleCompanyNameChange}
                            autoComplete="off"
                            />
                    </div>
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
                            value={tittle_company}
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
                        {/* <button className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]" type="submit">
                            Save Changes
                        </button> */}
                </form>
        </div>
    )
}

export default Integrated;















// import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import BaseUrl from '../../../Api/BaseUrl';

// const Integrated = () => {
//     const { id } = useParams();
//     const [company_name, setCompanyName] = useState('');
//     const [image_company, setImageCompany] = useState(null);
//     const [tittle_company, setTittleCompany] = useState('');
//     const [editorContent, setEditorContent] = useState('');

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`${BaseUrl}company/${id}`);
//             const data = response.data;
//             setCompanyName(data.company_name);
//             setTittleCompany(data.tittle_company);
//             setEditorContent(data.description_about);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const handleChange = (content) => {
//         setEditorContent(content);
//     };

//     const handleCompanyNameChange = (event) => {
//         setCompanyName(event.target.value);
//     };

//     const handleTittleCompanyChange = (event) => {
//         setTittleCompany(event.target.value);
//     };

//     const handleImageChange = (event) => {
//         setImageCompany(event.target.files[0]);
//     };

//     const handleUpdate = async (event) => {
//         event.preventDefault();

//         const formData = new FormData();
//         formData.append('company_name', company_name);
//         formData.append('tittle_company', tittle_company);
//         formData.append('description_about', editorContent);

//         if (image_company) {
//             formData.append('image_company', image_company);
//         }

//         try {
//             const token = localStorage.getItem('token');
//             const response = await axios.patch(`${BaseUrl}company/${id}`, formData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });

//             console.log('Response from server:', response.data);

//             Swal.fire({
//                 title: 'Success!',
//                 text: 'Data successfully updated.',
//                 icon: 'success',
//                 showConfirmButton: false,
//                 timer: 1000
//             });
//         } catch (error) {
//             console.error('Error updating data:', error);

//             Swal.fire({
//                 title: 'Error!',
//                 text: 'Failed to update data. Please try again.',
//                 icon: 'error',
//                 confirmButtonColor: '#3085d6',
//                 confirmButtonText: 'OK',
//             });
//         }
//     };

//     const modules = {
//         toolbar: [
//             ['bold', 'italic', 'underline'],
//             [{ color: [] }],
//             [{ list: 'ordered' }, { list: 'bullet' }],
//             ['link'],
//         ],
//         clipboard: {
//             matchVisual: false,
//         },
//     };

//     const formats = [
//         'bold',
//         'italic',
//         'underline',
//         'color',
//         'list',
//         'bullet',
//         'link',
//     ];

//     return (
//         <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
//             <h1 className="text-center font-bold text-[20px] mb-[20px]">Integrated Data</h1>
//             <form onSubmit={handleUpdate}>
//                 <div>
//                     <span htmlFor="name">Company Name:</span>
//                     <br />
//                     <input
//                         className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]"
//                         type="text"
//                         id="name"
//                         value={company_name}
//                         onChange={handleCompanyNameChange}
//                         autoComplete="off"
//                     />
//                 </div>
//                 <div className="mt-[10px]">
//                     <span htmlFor="image">Image:</span>
//                     <br />
//                     <input
//                         id="image"
//                         className="mt-[10px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[3px] cursor-pointer"
//                         type="file"
//                         onChange={handleImageChange}
//                     />
//                 </div>
//                 <div>
//                     <span htmlFor="tittle">Title:</span>
//                     <br />
//                     <input
//                         className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]"
//                         type="text"
//                         id="tittle"
//                         value={tittle_company}
//                         onChange={handleTittleCompanyChange}
//                         autoComplete="off"
//                     />
//                 </div>
//                 <div className="mt-[15px]">
//                     <label htmlFor="desc">Description:</label>
//                     <ReactQuill
//                         id="desc"
//                         className="mt-[15px]"
//                         value={editorContent}
//                         onChange={handleChange}
//                         modules={modules}
//                         formats={formats}
//                     />
//                 </div>
//                 <button className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]" type="submit">
//                     Save Changes
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Integrated;





// import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import BaseUrl from '../../../Api/BaseUrl';

// const Integrated = () => {
//     const { id } = useParams();
//     const [companyData, setCompanyData] = useState({
//         company_name: '',
//         image_company: null,
//         tittle_company: '',
//         description_about: ''
//     });

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`${BaseUrl}company/${id}`);
//             const data = response.data;
//             setCompanyData({
//                 company_name: data.company_name,
//                 tittle_company: data.tittle_company,
//                 description_about: data.description_about
//             });
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const handleChange = (key, value) => {
//         setCompanyData(prevData => ({
//             ...prevData,
//             [key]: value
//         }));
//     };

//     const handleImageChange = (event) => {
//         setCompanyData(prevData => ({
//             ...prevData,
//             image_company: event.target.files[0]
//         }));
//     };

//     const handleUpdate = async (event) => {
//         event.preventDefault();

//         const formData = new FormData();
//         formData.append('company_name', companyData.company_name);
//         formData.append('tittle_company', companyData.tittle_company);
//         formData.append('description_about', companyData.description_about);

//         if (companyData.image_company) {
//             formData.append('image_company', companyData.image_company);
//         }

//         try {
//             const token = localStorage.getItem('token');
//             const response = await axios.patch(`${BaseUrl}company/${id}`, formData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });

//             console.log('Response from server:', response.data);

//             Swal.fire({
//                 title: 'Success!',
//                 text: 'Data successfully updated.',
//                 icon: 'success',
//                 showConfirmButton: false,
//                 timer: 1000
//             });
//         } catch (error) {
//             console.error('Error updating data:', error);

//             Swal.fire({
//                 title: 'Error!',
//                 text: 'Failed to update data. Please try again.',
//                 icon: 'error',
//                 confirmButtonColor: '#3085d6',
//                 confirmButtonText: 'OK',
//             });
//         }
//     };

//     return (
//         <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
//             <h1 className="text-center font-bold text-[20px] mb-[20px]">Integrated Data</h1>
//             <form onSubmit={handleUpdate}>
//                 <div>
//                     <span htmlFor="name">Company Name:</span>
//                     <br />
//                     <input
//                         className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]"
//                         type="text"
//                         id="name"
//                         value={companyData.company_name}
//                         onChange={(e) => handleChange('company_name', e.target.value)}
//                         autoComplete="off"
//                     />
//                 </div>
//                 <div className="mt-[10px]">
//                     <span htmlFor="image">Image:</span>
//                     <br />
//                     <input
//                         id="image"
//                         className="mt-[10px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[3px] cursor-pointer"
//                         type="file"
//                         onChange={handleImageChange}
//                     />
//                 </div>
//                 <div>
//                     <span htmlFor="tittle">Title:</span>
//                     <br />
//                     <input
//                         className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]"
//                         type="text"
//                         id="tittle"
//                         value={companyData.tittle_company}
//                         onChange={(e) => handleChange('tittle_company', e.target.value)}
//                         autoComplete="off"
//                     />
//                 </div>
//                 <div className="mt-[15px]">
//                     <label htmlFor="desc">Description:</label>
//                     <ReactQuill
//                         id="desc"
//                         className="mt-[15px]"
//                         value={companyData.description_about}
//                         onChange={(content) => handleChange('description_about', content)}
//                     />
//                 </div>
//                 <button className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]" type="submit">
//                     Save Changes
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Integrated;








// import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import 'react-quill/dist/quill.snow.css';

// const Integrated = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [token, setToken] = useState('');

//     useEffect(() => {
//         // Ambil token dari local storage atau sesuai kebutuhan aplikasi Anda
//         const userToken = localStorage.getItem('token');
//         setToken(userToken);

//         axios.get(`http://localhost:4000/company/${id}`, {
//             headers: {
//                 Authorization: `Bearer ${userToken}`
//             }
//         })
//         .then(response => {
//             const {
//                 company_name,
//                 image_company,
//                 tittle_company,
//                 description_company
//             } = response.data;
//             setCompanyName(company_name);
//             setImageCompany(image_company);
//             setTitleCompany(tittle_company);
//             setDescriptionCompany(description_company);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
//     }, [id]);

//     const [company_name, setCompanyName] = useState('');
//     const [image_company, setImageCompany] = useState('');
//     const [tittle_company, setTitleCompany] = useState('');
//     const [description_company, setDescriptionCompany] = useState('');

//     const handleUpdate = async (event) => {
//         event.preventDefault();

//         const formData = new FormData();
//         formData.append('company_name', company_name);
//         formData.append('image_company', image_company);
//         formData.append('tittle_company', tittle_company);
//         formData.append('description_company', description_company);

//         try {
//             const response = await axios.patch(`http://localhost:4000/company/${id}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     Authorization: `Bearer ${token}`
//                 },
//             });

//             console.log('Response from server:', response.data);
//             Swal.fire({
//                 title: 'Sukses!',
//                 text: 'Data berhasil diupdate.',
//                 icon: 'success',
//                 showConfirmButton: false,
//                 timer: 1000
//             }).then(() => {
//                 navigate('/preview-data-company');
//             });
//         } catch (error) {
//             console.error('Error updating data:', error);

//             Swal.fire({
//                 title: 'Error!',
//                 text: 'Terjadi kesalahan saat mengupdate data. Silakan coba lagi.',
//                 icon: 'error',
//                 confirmButtonColor: '#3085d6',
//                 confirmButtonText: 'OK',
//             });
//         }
//     };

//     return (
//         <div className="bg-white p-4 rounded-md mt-4">
//             <h1 className="text-center font-bold text-2xl mb-4">Edit Company</h1>
//             <form onSubmit={handleUpdate}>
//                 <div>
//                     <label htmlFor="company_name">Company Name:</label>
//                     <input 
//                         type="text"
//                         id="company_name"
//                         value={company_name}
//                         onChange={(e) => setCompanyName(e.target.value)}
//                         className="w-full mt-2 border border-gray-300 rounded-md p-2"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="image_company">Image:</label>
//                     <input 
//                         type="file"
//                         id="image_company"
//                         onChange={(e) => setImageCompany(e.target.files[0])}
//                         className="w-full mt-2 border border-gray-300 rounded-md p-2"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="tittle_company">Title:</label>
//                     <input 
//                         type="text"
//                         id="tittle_company"
//                         value={tittle_company}
//                         onChange={(e) => setTitleCompany(e.target.value)}
//                         className="w-full mt-2 border border-gray-300 rounded-md p-2"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="description_company">Description:</label>
//                     <textarea 
//                         id="description_company"
//                         value={description_company}
//                         onChange={(e) => setDescriptionCompany(e.target.value)}
//                         className="w-full mt-2 border border-gray-300 rounded-md p-2"
//                     ></textarea>
//                 </div>
//                 <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md mt-4" type="submit">Save Changes</button>
//             </form>
//         </div>
//     );
// };

// export default Integrated;

