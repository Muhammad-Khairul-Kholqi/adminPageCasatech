import React, { useState, useEffect } from 'react';
import backgImg from '../../Assets/bg.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ReactQuill from 'react-quill';
import { Link, useParams } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import '../../Style/Company/StyleEditCompany.css';
import { useNavigate } from 'react-router-dom';
import BaseUrl from '../../Api/BaseUrl';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditData = () => {
    useEffect(() => {
        document.title = "Edit Data Company | Casatech";
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
                    const response = await axios.get(`${BaseUrl}company`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    const sortedData = response.data.data.sort((a, b) => b.id - a.id);

                    setData(sortedData[0]); // Ambil data pertama (atau sesuai kebutuhan)
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [navigate]);

    const { id } = useParams();
    const [company_name, setCompanyName] = useState('');
    const [image_company, setImageCompany] = useState('');
    const [tittle_company, setTittleCompany] = useState('');
    const [description_company, setDescriptionCompany] = useState('');
    const [client, setClient] = useState('');
    const [sponsor, setSponsor] = useState('');
    const [rating, setRating] = useState('');
    const [image_client, setImageClient] = useState('');
    const [image_about, setImageAbout] = useState('');
    const [description_about, setDescriptionAbout] = useState('');
    const [visi, setVisi] = useState('');
    const [misi, setMisi] = useState('');
    const [no_wa, setNoWa] = useState('');
    const [no_telephone, setNoTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [addres, setAddres] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [instagram, setInstagram] = useState('');
    const [youtube, setYoutube] = useState('');
    const [telegram, setTelegram] = useState('');
    const [map, setMap] = useState('');

    useEffect(() => {
        if (data) {
            const {
                company_name,
                image_company,
                tittle_company,
                description_company,
                client,
                sponsor,
                rating,
                image_client,
                image_about,
                description_about,
                visi,
                misi,
                no_wa,
                no_telephone,
                email,
                addres,
                linkedin,
                instagram,
                youtube,
                telegram,
                map
            } = data;

            setCompanyName(company_name || '');
            setImageCompany(image_company || '');
            setTittleCompany(tittle_company || '');
            setDescriptionCompany(description_company || '');
            setClient(client || '');
            setSponsor(sponsor || '');
            setRating(rating || '');
            setImageClient(image_client || '');
            setImageAbout(image_about || '');
            setDescriptionAbout(description_about || '');
            setVisi(visi || '');
            setMisi(misi || '');
            setNoWa(no_wa || '');
            setNoTelephone(no_telephone || '');
            setEmail(email || '');
            setAddres(addres || '');
            setLinkedin(linkedin || '');
            setInstagram(instagram || '');
            setYoutube(youtube || '');
            setTelegram(telegram || '');
            setMap(map || '');
        }
    }, [data]);

    const handleUpdate = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('company_name', company_name);
        formData.append('image_company', image_company);
        formData.append('tittle_company', tittle_company);
        formData.append('description_company', description_company);
        formData.append('client', client);
        formData.append('sponsor', sponsor);
        formData.append('rating', rating);
        formData.append('image_client', image_client);
        formData.append('image_about', image_about);
        formData.append('description_about', description_about);
        formData.append('visi', visi);
        formData.append('misi', misi);
        formData.append('no_wa', no_wa);
        formData.append('no_telephone', no_telephone);
        formData.append('email', email);
        formData.append('addres', addres);
        formData.append('linkedin', linkedin);
        formData.append('instagram', instagram);
        formData.append('youtube', youtube);
        formData.append('telegram', telegram);
        formData.append('map', map);

        try {
            const token = localStorage.getItem('token');
            const response = await axios.patch(`${BaseUrl}company/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Response from server:', response.data);
            Swal.fire({
                title: 'Success!',
                text: 'Data updated successfully.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
                navigate('/company-data');
            });
        } catch (error) {
            console.error('Error updating data:', error);

            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while updating data. Please try again.',
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
                <h1 className = "title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]" >
                    Edit Company Data
                </h1>
                <div className = "link flex flex-wrap px-[10px] items-center text-white gap-[5px] justify-center mt-[15px]" >
                    <Link to = "/company-data" >
                        <p className="hover:underline">Company Data</p>
                    </Link>
                    <MdOutlineKeyboardArrowRight className="mt-[3px]" />
                    <p className="text-blue-600">Edit Company Data</p>
                </div>
            </div>

            <div className = "bg-white p-[20px] rounded-[10px] mt-[20px]" >

                <div>
                    <form onSubmit={handleUpdate}>
                        <div className="ini-integrated">
                            <h1 className="text-center font-bold text-[20px] mb-[20px]">Integragted Data</h1>
                            <div>
                                <span for="name">Company Name:</span>
                                <br />
                                <input 
                                    className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]" 
                                    type="text" 
                                    id="name" 
                                    autoComplete="off"
                                    value={company_name || ''}
                                    onChange={(e) => setCompanyName(e.target.value)}
                            /></div>
                            <div className="mt-[10px]"> 
                                <span for="image">Image:</span>
                                <br />
                                <input 
                                    id="image" 
                                    className="mt-[10px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[3px] cursor-pointer" 
                                    type="file"
                                    onChange={(e) => setImageCompany(e.target.files[0])}
                            /></div>
                            <div>
                                <span for="tittle">Title:</span>
                                <br />
                                <input
                                    className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px] pl-[10px] pr-[10px]"
                                    type="text"
                                    id="tittle"
                                    autoComplete="off"
                                    value={tittle_company || ''}
                                    onChange={(e) => setTittleCompany(e.target.value)}
                            /></div>
                            <div className="mt-[15px]">
                                <label htmlFor="desc">Description:</label>
                                <ReactQuill
                                    id="desc"
                                    className="mt-[15px]"
                                    modules={modules}
                                    formats={formats}
                                    value={description_company || ''}
                                    onChange={setDescriptionCompany}
                            /></div>
                        </div>

                        <div className="ini-about mt-[50px]">
                            <h1 className="text-center font-bold text-[20px] mb-[20px]">About Data</h1>
                            <div className="mt-[10px]">
                                <span for="image">Image:</span>
                                <br />
                                <input id="image" 
                                className="mt-[10px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[3px] cursor-pointer" 
                                type="file"
                                onChange={(e) => setImageAbout(e.target.files[0])}
                             /></div>
                            <div className = "mt-[15px]" >
                                <span for="desc">Description:</span>
                                <ReactQuill id="desc" className="mt-[15px]"
                                    modules={modules}
                                    formats={formats}
                                    value={description_about || ''}
                                    onChange={setDescriptionAbout}
                            /></div>
                            <div className = "mt-[15px]" >
                                <span for="desc">Vision:</span>
                                <br />
                                <ReactQuill id="desc" className="mt-[15px]"
                                    modules={modules}
                                    formats={formats}
                                    value={visi || ''}
                                    onChange={setVisi}
                            /></div>
                            <div className = "mt-[15px]" >
                                <span for="desc">Mision:</span>
                                <br />
                                <ReactQuill id="desc" className="mt-[15px]" 
                                    modules={modules}
                                    formats={formats}
                                    value={misi || ''}
                                    onChange={setMisi}
                            /></div>
                        </div>

                        <div className="ini-sponsorship mt-[50px]">
                            <h1 className="text-center font-bold text-[20px] mb-[20px]">Sponsorship</h1>
                            <div className="mt-[15px]">
                                <span for="client">Clients:</span>
                                <br />
                                <input 
                                    className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" 
                                    type="number" 
                                    id="client" 
                                    value={client || ''}
                                    onChange={(e) => setClient(e.target.value)}
                                />
                            </div>
                            <div className="mt-[15px]">
                                <span for="sponsor">Sponsors:</span>
                                <br />
                                <input 
                                    className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" 
                                    type="number" 
                                    id="sponsor" 
                                    value={sponsor || ''}
                                    onChange={(e) => setSponsor(e.target.value)}
                                />
                            </div>
                            <div className="mt-[15px]">
                                <span for="ratings">Ratings:</span>
                                <br />
                                <input 
                                    className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" 
                                    type="text" 
                                    id="ratings" 
                                    value={rating || ''}
                                    onChange={(e) => setRating(e.target.value)}
                                />
                            </div>
                            <div className="mt-[10px]">
                                <span for="image">Image Client:</span>
                                <br />
                                <input 
                                    id="image" 
                                    className="mt-[10px] w-full mb-5 text-sm text-black border-2 border-gray-600 p-[5px] rounded-[3px] cursor-pointer" 
                                    type="file" 
                                    onChange={(e) => setImageClient(e.target.files[0])}
                            /></div>
                        </div>

                        <div className="ini-contact mt-[50px]">
                            <h1 className="text-center font-bold text-[20px] mb-[20px]">Contact Catalog</h1>
                            <div className="mt-[15px]">
                                <span for="wa">No Whatsapp:</span>
                                <br />
                                <input 
                                    className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" 
                                    type="text" 
                                    id="wa" 
                                    value={no_wa || ''}
                                    onChange={(e) => setNoWa(e.target.value)}
                                    />
                            </div>

                            <div className="mt-[15px]">
                                <span for="telephone">No Telephone:</span>
                                <br />
                                <input 
                                    className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" 
                                    type="text" 
                                    id="telephone" 
                                    value={no_telephone || ''}
                                    onChange={(e) => setNoTelephone(e.target.value)}
                                    />
                            </div>

                            <div className="mt-[15px]">
                                <span for="email">Email:</span>
                                <br />
                                <input 
                                    className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" 
                                    type="text" 
                                    id="email" 
                                    value={email || ''}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                            </div>

                            <div className="mt-[15px]">
                                <span for="linkedin">Link Linkedin:</span>
                                <br />
                                <input 
                                    className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" 
                                    type="text" 
                                    id="linkedin" 
                                    value={linkedin || ''}
                                    onChange={(e) => setLinkedin(e.target.value)}
                                    />
                            </div>

                            <div className="mt-[15px]">
                                <span for="ig">Link Instagram:</span>
                                <br />
                                <input 
                                    className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" 
                                    type="text" 
                                    id="ig" 
                                    value={instagram || ''}
                                    onChange={(e) => setInstagram(e.target.value)}
                                />
                            </div>

                            <div className="mt-[15px]">
                                <span for="yt">Link Youtube:</span>
                                <br />
                                <input 
                                    className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" 
                                    type="text" 
                                    id="yt" 
                                    value={youtube || ''}
                                    onChange={(e) => setYoutube(e.target.value)}
                                />
                            </div>

                            <div className="mt-[15px]">
                                <span for="tele">Link Telegram:</span>
                                <br />
                                <input 
                                    className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" 
                                    type="text" 
                                    id="tele" 
                                    value={telegram || ''}
                                    onChange={(e) => setTelegram(e.target.value)}
                            /></div>

                            <div className="mt-[15px]">
                                <span for="map">Link Map:</span>
                                <br />
                                <input 
                                    className="w-full mt-[10px] border-solid border-2 border-gray-600 rounded-[3px]" 
                                    type="text" 
                                    id="map" 
                                    value={map || ''}
                                    onChange={(e) => setMap(e.target.value)}
                            /></div>

                            <div className = "mt-[15px]" >
                                <span for="address">Address:</span>
                                <ReactQuill id="address" className="mt-[15px]"
                                    modules={modules}
                                    formats={formats}
                                    value={addres || ''}
                                    onChange={setAddres}
                                />
                            </div>
                        </div>
                        <button className="mt-[20px] rounded-[3px] w-full bg-gray-500 hover:bg-gray-600 text-white py-[5px]" type="submit">
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditData;