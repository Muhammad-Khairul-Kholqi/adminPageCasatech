import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import backgImg from '../../Assets/bg.png';
import { FaRegPenToSquare } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

// api
import BaseUrl from "../../Api/BaseUrl";

const DataBlog = () => {
    useEffect(() => {
        document.title = "Data Blog | Casatech";
    }, []);

    const itemsPerPage = 6;
    const [data, setData] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/');
                } else {
                    const response = await axios.get(`${BaseUrl}blog`, {
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${BaseUrl}blog`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const sortedData = response.data.data.sort((a, b) => b.id - a.id);

                setData(sortedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async () => {
        if (selectedItems.length === 0) {
            Swal.fire({
                title: 'Peringatan!',
                text: 'Pilih setidaknya satu data untuk dihapus.',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
            });
            return;
        }

        Swal.fire({
            title: `Yakin mau hapus ${selectedItems.length} data?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Hapus',
            cancelButtonText: 'Batal'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const token = localStorage.getItem('token');
                    await Promise.all(selectedItems.map(id => axios.delete(`${BaseUrl}blog/${id}`, {
                         headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })));

                    Swal.fire('Terhapus!', `${selectedItems.length} Data telah dihapus.`, 'success');

                    const updatedData = data.filter(item => !selectedItems.includes(item.id));
                    setData(updatedData);
                    setSelectedItems([]);
                } catch (error) {
                    console.error("Error deleting data:", error);
                    Swal.fire('Error!', 'Terjadi kesalahan saat menghapus data.', 'error');
                }
            }
        });
    };

    const handleCheckboxChange = (id) => {
        const updatedSelection = selectedItems.includes(id) ?
            selectedItems.filter(item => item !== id) :
            [...selectedItems, id];

        setSelectedItems(updatedSelection);
    };

    const paginateData = () => {
        if (!data) {
            return [];
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const filteredData = data.filter(item =>
            item.tittle.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return filteredData.slice(startIndex, endIndex).map((item, index) => ({
            ...item,
            pageNo: startIndex + index + 1
        }));
    };


    const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

    const changePage = (newPage) => {
        setCurrentPage(newPage);
    };

    // mengatur jika kata lebih dari 25 maka tidak di tampilkan
    const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        } else {
            return description;
        }
    };

    return (
        <div>
            <div className = "container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style = {
                    {
                        backgroundImage: `url(${backgImg})`
                    }
                }>
                <h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]">Data Blog</h1></div>

                <div className="header-content bg-white p-[20px] rounded-[10px] gap-[20px] flex items-center flex-wrap justify-between mt-[20px]">
                    <div className="search-count flex flex-wrap gap-[20px] items-center">
                        <div>
                            <input
                                className="w-full border h-[40px] px-[5px] rounded-[5px]"
                                autoComplete="off"
                                placeholder="Search by title"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="px-[15px] py-[10px] border rounded-[5px]" style={{ display: 'inline-block' }}>
                            <p className="font-bold text-blue-600">{data ? `${data.length}` : 0} Data Blog</p>
                        </div>
                    </div>

                    <div>
                        <Link to="/add-data-blog">
                            <div className = "flex justify-center gap-[5px] py-[5px] px-[10px] items-center border-solid border-2 border-blue-600 rounded-[100px] hover:bg-blue-600 hover:text-white" >
                                <FiPlusCircle />
                                <div>Add Data</div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className = "bg-white p-[20px] rounded-[10px] mt-[20px]" >
                        <div className = "relative overflow-x-auto" >
                            <table className="table-striped w-full text-sm text-left rtl:text-right">
                                <thead className = "text-[15px] bg-indigo-50" >
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Check
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            No
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Image
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Description
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginateData().map((item) => (
                                        <tr key={item.id} className="text-[13px]">
                                            <td className="px-6 py-4">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedItems.includes(item.id)}
                                                    onChange={() => handleCheckboxChange(item.id)}
                                                    className="cursor-pointer"
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.pageNo}
                                            </td>
                                            <td className="py-4 px-2">
                                                <img  
                                                    className="w-[100px]"      
                                                    src={`https://casatech.id/compro-api${item.image}`} 
                                                />
                                            </td>
                                            <td className="px-6 py-4 w-[300px]">
                                                {item.tittle}
                                            </td>
                                            <td className="px-6 py-4 w-[300px] text-[10px]">
                                                <div dangerouslySetInnerHTML={{ __html: truncateDescription(item.description, 25) }} />
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-[10px]">
                                                    <Link to={`/edit-data-blog/${item.id}`}>
                                                        <div className="icon-text text-[15px] flex gap-[5px] items-center text-blue-600 hover:underline">
                                                            <FaRegPenToSquare />
                                                            <p className="text-link">Edit</p>
                                                        </div>
                                                    </Link>
                                                    <button
                                                        className="flex gap-[5px] items-center text-red-600 hover:underline"
                                                        onClick={(e) => handleDelete(item.id, e)}>
                                                        <IoTrashOutline />
                                                        <p>Delete</p>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <hr />
                        </div>
                        <div className="flex justify-between mt-[30px]">
                            <button
                                className="flex gap-[5px] items-center text-red-600 hover:underline"
                                onClick={handleDelete}>
                                <IoTrashOutline />
                                <p className="text-[13px]">Delete</p>
                            </button>
                            <div className="flex gap-[5px] items-center">
                                <button
                                    className={`text-blue-600 hover:underline ${currentPage === 1 ? 'cursor-not-allowed text-gray-400' : ''}`}
                                    onClick={() => changePage(currentPage - 1)}
                                    disabled={currentPage === 1}>
                                    Previous
                                </button>
                                <button
                                    className={`text-blue-600 hover:underline ${currentPage === totalPages ? 'cursor-not-allowed text-gray-400' : ''}`}
                                    onClick={() => changePage(currentPage + 1)}
                                    disabled={currentPage === totalPages}>
                                    Next
                                </button>
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default DataBlog;