import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../Style/StyleHeader.css';
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import Swal from 'sweetalert2';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (username) {
            setUsername(username.length > 10 ? username.slice(0, 10) + '...' : username);
        }
    }, []);

    const [username, setUsername] = useState('');

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Yakin ingin logout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, Logout',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                // hapus username dan token di localstorage ketika logout
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                navigate('/');
            }
        });
    };

    return (
        <div className="container flex justify-between flex-wrap gap-[50px] px-[5%] items-center">
            <div className="teks-header">
                Welcome back, <br />
                <span className="name-admin text-[25px] font-bold font-jetbrains-mono">{username}</span>
            </div>
            <div className="relative" ref={dropdownRef}>
                <div className="flex gap-[5px] items-center cursor-pointer" onClick={toggleDropdown}>
                    <FaUser className="icon-admin" />
                    <p className="admin">Administrator</p>
                    <IoMdArrowDropdown className={`transition-transform transform ${isDropdownOpen ? 'rotate-180' : ''}`}/>
                </div>

                {isDropdownOpen && (
                    <div className="account-logout absolute top-full right-0 bg-white shadow-md rounded-md p-5 text-[15px] z-10">
                        <ul>
                            <li>
                                <Link to="/data-admin">
                                    <div className="flex items-center gap-[5px] hover:bg-blue-500 p-[5px] rounded-[5px] hover:text-white" onClick={() => setDropdownOpen(false)}>
                                        <RiAdminLine  className="icon-log-acc text-[17px]" />
                                        <p>Data</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={(e) => { handleLogout(e); setDropdownOpen(false); }}>
                                    <div className="flex items-center gap-[5px] mt-[5px] hover:bg-red-500 p-[5px] rounded-[5px] hover:text-white">
                                        <BiLogOut className="icon-log-acc text-[17px]" />
                                        <p>Logout</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
