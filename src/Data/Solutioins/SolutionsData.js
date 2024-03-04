import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FaRegPenToSquare } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import backgImg from '../../Assets/bg.png';

const SolutionsData = () => {
    useEffect(() => {
        document.title = "Data Solutions | Casatech";
    }, []);

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/solution");
                console.log("API Response:", response.data);

                const sortedData = response.data.data.sort((a, b) => b.id - a.id);

                setData(sortedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = (id, event) => {
        event.preventDefault();

        Swal.fire({
            title: 'Yakin mau hapus data?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Hapus',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteData(id);
            }
        });
    };

    const deleteData = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/solution/${id}`);
            Swal.fire('Terhapus!', 'Data telah dihapus.', 'success');

            const updatedData = data.filter(item => item.id !== id);
            setData(updatedData);
        } catch (error) {
            console.error("Error deleting data:", error);
            Swal.fire('Error!', 'Terjadi kesalahan saat menghapus data.', 'error');
        }
    };

    return (
        <div>
            <div className="container bg-cover bg-center mt-[20px] py-[50px] rounded-[10px]"
                style={{ backgroundImage: `url(${backgImg})` }}>
                <h1 className="title text-center item-center text-white text-[40px] font-bold px-[20px] font-roboto-slab tracking-[2px]">Data Solutions</h1>
            </div>

            <div className="bg-white p-[20px] rounded-[10px] mt-[20px]">
                <div className="flex justify-end mb-[20px]">
                    <Link to="/add-data-solutions">
                        <div className="flex justify-center gap-[5px] py-[5px] px-[10px] items-center border-solid border-2 border-blue-600 rounded-[100px] hover:bg-blue-600 hover:text-white">
                            <FiPlusCircle />
                            <div>Add Data</div>
                        </div>
                    </Link>
                </div>
                <div className="relative overflow-x-auto border-solid border-[1px] border-black">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="text-[15px] bg-blue-100 border-b-[1px] border-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No
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
                            {data && data.map((item, index) => (
                                <tr key={item.id} className="text-[13px]">
                                    <td className='px-6 py-4'>
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 w-[300px]">
                                        {item.title}
                                    </td>
                                    <td className="px-6 py-4 w-[400px]">
                                        {item.description}
                                    </td>
                                    <td className="px-6 py-4 flex gap-[10px]">
                                        <Link to={`/edit-data-solutions/${item.id}`}>
                                            <div className="icon-text text-[15px] flex gap-[5px] items-center text-blue-600 hover:underline">
                                                <FaRegPenToSquare />
                                                <p className="text-link">Edit</p>
                                            </div>
                                        </Link>
                                        <p>|</p>
                                        <button className="flex gap-[5px] items-center text-red-600 hover:underline" onClick={(e) => handleDelete(item.id, e)}>
                                            <IoTrashOutline />
                                            <p>Delete</p>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SolutionsData;
