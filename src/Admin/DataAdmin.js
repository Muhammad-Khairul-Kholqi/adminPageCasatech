import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import backgImg from '../Assets/bg.png';
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";

// base url
import BaseUrl from "../Api/BaseUrl";

const DataAdmin = () => {
    // mengatur tittle agar berubah
    useEffect(() => {
        document.title = "Data Admins | Casatech";
    }, []);

    const navigate = useNavigate();
    const itemsPerPage = 6;
    const [selectedItems, setSelectedItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);

    // mengambil data dari api
    useEffect(() => {
        const fetchData = async () => {
            try {
                // mengambil token lalu di simpan di local storage
                const token = localStorage.getItem('token');
                // jika tidak ada token maka akan di arahkan ke halaman login
                if (!token) {
                    navigate('/');
                } else {
                    const response = await axios.get(`${BaseUrl}users`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    
                    const sortedData = response.data.data.sort((a, b) => b.id - a.id);

                    setData(sortedData);
                }

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // fungsi hapus data
    const handleDelete = async () => {
        if (selectedItems.length === 0) {
            Swal.fire({
                title: 'Peringatan!',
                text: 'Klik Checkbox terlebih dahulu.',
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
                    await Promise.all(selectedItems.map(id => axios.delete(`${BaseUrl}users/${id}`, {
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

    // checkbox untuk hapus data per id
    const handleCheckboxChange = (id) => {
        const updatedSelection = selectedItems.includes(id) ?
            selectedItems.filter(item => item !== id) :
            [...selectedItems, id];

        setSelectedItems(updatedSelection);
    };

    // paginate
    const paginateData = () => {
        if (!data) {
            return [];
        }

        const filteredData = data.filter(item =>
            item.fullname.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filteredData.length === 0) {
            return [];
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        return filteredData.slice(startIndex, endIndex).map((item, index) => ({
            ...item,
            pageNo: startIndex + index + 1
        }));
    };


    const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

    // mengganti ke paginate selanjutnya
    const changePage = (newPage) => {
        setCurrentPage(newPage);
    };

    return(
        <div>
            <div className = "container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style = {
                    {
                        backgroundImage: `url(${backgImg})`
                    }
                }>
                <h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]">Data Admins</h1>
            </div>

            <div className="search-count bg-white p-[20px] rounded-[10px] flex flex-wrap gap-[20px] items-center mt-[20px]">
                <div>
                    <input
                        className="w-full border h-[40px] px-[5px] rounded-[5px]"
                        autoComplete="off"
                        placeholder="Search by fullname"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="px-[15px] py-[10px] border rounded-[5px]" style={{ display: 'inline-block' }}>
                    <p className="font-bold text-blue-600">{data ? `${data.length}` : 0} Data Admins</p>
                </div>
            </div>

            <div className = "bg-white p-[20px] rounded-[10px] mt-[20px]" >   
                {loading ? (
                    <div className="text-center text-blue-600">Loading...</div>
                ) : paginateData().length > 0 ? (
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
                                    Full Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Position
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Birth
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginateData().map((item) => (
                                <tr key = {item.id} className = "text-[13px]" >
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
                                            src={`${BaseUrl}${item.image}`} 
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.fullname}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.position}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.place_date_birth}
                                    </td>    
                                    <td className="px-6 py-4">
                                        {item.addres}
                                    </td>    
                                    <td className="px-6 py-4">
                                        <div className="flex gap-[10px]">
                                            <Link to={`/edit-data-admin/${item.id}`}>
                                                <div className="icon-text text-[15px] flex justify-center gap-[5px] items-center text-blue-600 border border-blue-600 py-[3px] px-[5px] rounded-[3px] hover:bg-blue-600 hover:text-white">
                                                    <FaRegPenToSquare />
                                                    <p className="text-link">Edit</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <hr />
                </div>
                ) : (
                    <div className="text-center py-4 text-red-600">Tidak ada data!</div>
                )}
                <div className="flex justify-between mt-[30px]">
                    <button
                        className="flex gap-[5px] items-center text-red-600 hover:bg-red-600 border hover:text-white border-red-600 p-[4px] rounded-[3px]"
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

export default DataAdmin

