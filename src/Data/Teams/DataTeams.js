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

const DataTeams = () => {
    useEffect(() => {
        document.title = "Data Teams | Casatech";
    }, []);

     const itemsPerPage = 5;
     const [data, setData] = useState(null);
     const [selectedItems, setSelectedItems] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate();
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const token = localStorage.getItem('token');
                    if (!token) {
                        navigate('/');
                    } else {
                        const response = await axios.get(`${BaseUrl}team`, {
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
                    await Promise.all(selectedItems.map(id => axios.delete(`${BaseUrl}team/${id}`, {
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
            selectedItems.filter(item => item !== id) : [...selectedItems, id];

        setSelectedItems(updatedSelection);
    };

    const paginateData = () => {
        if (!data) {
            return [];
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        return data.slice(startIndex, endIndex).map((item, index) => ({
            ...item,
            pageNo: startIndex + index + 1
        }));
    };


    const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

    const changePage = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <div className = "container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style = {
                    {
                        backgroundImage: `url(${backgImg})`
                    }
                }>
                <h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]">Data Teams</h1></div>

                <div className = "bg-white p-[20px] rounded-[10px] mt-[20px]" >
                        <div className="flex justify-end mb-[20px]">
                            <Link to="/add-data-teams">
                                <div className = "flex justify-center gap-[5px] py-[5px] px-[10px] items-center border-solid border-2 border-blue-600 rounded-[100px] hover:bg-blue-600 hover:text-white" >
                                    <FiPlusCircle />
                                    <div>Add Data</div>
                                </div>
                            </Link>
                        </div>
                        <p className="pb-[5px]">{data ? `${data.length}` : 0} Data Team</p>
                        <p className="pb-[10px] italic">Klik checkbox untuk hapus data</p>
                        <div className = "relative overflow-x-auto border-solid border-[1px] border-black" >
                            <table className = "w-full text-sm text-left rtl:text-right" >
                                <thead className = "text-[15px] bg-blue-100 border-b-[1px] border-black" >
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            No
                                        </th>
                                        <th scope="col" className="px-6 py-3 w-[300px]">
                                            Image
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Position
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginateData().map((item) => (
                                        <tr key={item.id} className="text-[13px]">
                                            <td className="px-6 py-4">
                                                {item.pageNo}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item.image}
                                            </td>
                                            <td className = "px-6 py-4" >
                                                {item.name}
                                            </td>
                                            <td className = "px-6 py-4" >
                                                {item.position}
                                            </td>
                                            <td className="px-6 py-4 flex gap-[10px]">
                                                <Link to = {`/edit-data-teams/${item.id}`} >
                                                    <div className="icon-text text-[15px] flex gap-[5px] items-center text-blue-600 hover:underline">
                                                        <FaRegPenToSquare />
                                                        <p className="text-link">Edit</p>
                                                    </div>
                                                </Link>
                                                <p>|</p>
                                                <button
                                                    className="flex gap-[5px] items-center text-red-600 hover:underline"
                                                    onClick={(e) => handleDelete(item.id, e)}>
                                                    <IoTrashOutline />
                                                    <p>Delete</p>
                                                </button>
                                            </td>
                                            <td className="px-6 py-4">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedItems.includes(item.id)}
                                                    onChange={() => handleCheckboxChange(item.id)}
                                                    className="cursor-pointer"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between mt-[10px]">
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

export default DataTeams;