import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import Logo from "../../Assets/logo.png"

const DataIntegrated = () => {
  return (
    <div className = "" >
      <div className="flex mt-[20px] font-bold text-[40px] ml-[45px] items-center gap-[15px]">
        <h1>Integrated Data</h1>
      </div>

        <div className="flex justify-between items-center py-[10px] px-[45px]">
          <div className = "flex gap-[5px] items-center text-[17px]" >
            <Link to="/">
              <p className="text-blue-600">Dashboard</p>
            </Link>
            <MdKeyboardArrowRight className="text-blue-600 mt-[3px] text-[20px]" />
            <p>Integrated Data</p>
          </div>

          <div className="flex justify-between gap-[20px]">
            <div>
              <form className="flex">
                <input type="text" placeholder="Search all data.." className="px-[8px] rounded-l-[5px] py-[7px] w-[250px]"></input>
                <button className = "items-center bg-blue-600 hover:bg-blue-700 text-white px-[10px] rounded-r-[5px] py-[7px]" >
                  <IoSearch className="text-[20px]" />
                </button>
              </form>
            </div>

            <div>
              <Link>
                <div className = "flex items-center gap-[5px] bg-blue-600 hover:bg-blue-700 text-white py-[7px] px-[10px] rounded-[5px]" >
                  <FiPlusCircle className="text-[20px]" />
                  <p>Add New Data</p>
                </div>
              </Link>
            </div>
          </div>
      </div>

      <div className="bg-white p-[30px] mt-[30px] rounded-[10px]">
        <h1 className = "text italic mb-[10px]" >
          This is integrated data_
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-black">
                <thead className="text-xs text-black uppercase bg-blue-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Company Name
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
                    <tr className="">
                        <td className="px-6 py-4">
                            PT.Catur Sangkara Tekhnologi
                        </td>
                        <td className="px-6 py-4">
                            <img className="w-[100px]" src={Logo} />
                        </td>
                        <td className="px-6 py-4">
                            Deep Understanding, Inspirational Solutions
                        </td>
                        <td className="px-6 py-4">
                            Trusted IT Consultation for Business Growth. Partner with us to navigate the digital landscape and unlock your business's full potential.
                        </td>
                        <td className="px-6 py-4 flex gap-[10px]">
                          <Link>
                            <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                          </Link>
                          <Link>
                            <p className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</p>
                          </Link>
                        </td>
                    </tr>

                    <tr className="">
                        <td className="px-6 py-4">
                            PT.Catur Sangkara Tekhnologi
                        </td>
                        <td className="px-6 py-4">
                            <img className="w-[100px]" src={Logo} />
                        </td>
                        <td className="px-6 py-4">
                            Deep Understanding, Inspirational Solutions
                        </td>
                        <td className="px-6 py-4">
                            Trusted IT Consultation for Business Growth. Partner with us to navigate the digital landscape and unlock your business's full potential.
                        </td>
                        <td className="px-6 py-4 flex gap-[10px]">
                          <Link>
                            <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                          </Link>
                          <Link>
                            <p className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</p>
                          </Link>
                        </td>
                    </tr>

                    <tr className="">
                        <td className="px-6 py-4">
                            PT.Catur Sangkara Tekhnologi
                        </td>
                        <td className="px-6 py-4">
                            <img className="w-[100px]" src={Logo} />
                        </td>
                        <td className="px-6 py-4">
                            Deep Understanding, Inspirational Solutions
                        </td>
                        <td className="px-6 py-4">
                            Trusted IT Consultation for Business Growth. Partner with us to navigate the digital landscape and unlock your business's full potential.
                        </td>
                        <td className="px-6 py-4 flex gap-[10px]">
                          <Link>
                            <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                          </Link>
                          <Link>
                            <p className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</p>
                          </Link>
                        </td>
                    </tr>

                    <tr className="">
                        <td className="px-6 py-4">
                            PT.Catur Sangkara Tekhnologi
                        </td>
                        <td className="px-6 py-4">
                            <img className="w-[100px]" src={Logo} />
                        </td>
                        <td className="px-6 py-4">
                            Deep Understanding, Inspirational Solutions
                        </td>
                        <td className="px-6 py-4">
                            Trusted IT Consultation for Business Growth. Partner with us to navigate the digital landscape and unlock your business's full potential.
                        </td>
                        <td className="px-6 py-4 flex gap-[10px]">
                          <Link>
                            <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                          </Link>
                          <Link>
                            <p className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</p>
                          </Link>
                        </td>
                    </tr>

                    <tr className="">
                        <td className="px-6 py-4">
                            PT.Catur Sangkara Tekhnologi
                        </td>
                        <td className="px-6 py-4">
                            <img className="w-[100px]" src={Logo} />
                        </td>
                        <td className="px-6 py-4">
                            Deep Understanding, Inspirational Solutions
                        </td>
                        <td className="px-6 py-4 overflow-auto">
                            Trusted IT Consultation for Business Growth. Partner with us to navigate the digital landscape and unlock your business's full potential.
                        </td>
                        <td className="px-6 py-4 flex gap-[10px]">
                          <Link>
                            <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                          </Link>
                          <Link>
                            <p className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</p>
                          </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>

    </div>
  );
};

export default DataIntegrated;