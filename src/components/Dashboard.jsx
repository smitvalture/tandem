import React from 'react'
import user_img from '../assets/images/user_img.png'
import { MdOutlineDashboard, MdContactMail } from "react-icons/md";
import { BsFillBuildingFill, BsPeopleFill } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import Dash_sidebar from './Dash_sidebar';


const Dashboard = () => {
    return (
        <div className='bg-gray-100 font-Poppins'>
            {/* Sidebar */}
            <Dash_sidebar />


            {/* Dashboard */}
            <div className="ml-60 h-screen">
                <h1 className="text-xl font-semibold border border-1 border-gray-300 bg-white pl-4 py-4 shadow-[rgba(21,_21,_21,_0.5)_0px_0px_2px] font-SourceSansPro">
                    Dashboard
                </h1>

                {/* total employee number & Search */}
                <div className="">
                    <div className="flex justify-between mt-10 ml-10">
                        <div className="bg-white px-3 py-4 w-4/12 border border-1 border-gray-300 rounded-md flex justify-between">
                            <p className=" text-[#28313B] text-sm  ">Total Employees</p>
                            <span className="">100</span>
                        </div>
                        <input
                            className="w-1/3 py-2 px-4 mr-20 border border-1 border-gray-300 rounded-md"
                            type="search"
                            placeholder="Search:"
                            name="search"
                            id="search"
                        />
                    </div>
                    <button
                        className="font-semibold ml-10 bg-[#028820] hover:bg-[#2c8f41] w-36 mt-4 text-white py-1 rounded-md "
                        type="submit"
                        id="add"
                    >
                        + Add
                    </button>
                    {/* Employee list */}
                    <h2 className="text-sm text-[#687E96] font-semibold border border-1 border-gray-300 rounded-t-md bg-white my-5 ml-10 mr-20 pl-4 py-4">
                        Employee List
                    </h2>
                    <div className="mx-auto flex flex-col items-center">
                        <p className="text-[#BBBBBB] mt-32 text-center text-xl">
                            Empty
                            <br />
                            No employee data available
                        </p>
                        <button
                            className="w-fit px-5 py-2 mt-14 rounded-md text-white text-xs font-semibold bg-[#424770] hover:bg-[#4c5281]"
                            type="submit"
                            id="add2"
                        >
                            Add Employee
                        </button>
                    </div>
                    {/* <div className="flex justify-between items-center h-28 bg-white my-5 ml-10 mr-20 py-4 pl-3 pr-6 border border-1 border-gray-300 rounded-md">
                    <div className="left flex">
                        <img
                            className="row-span-2 flex-shrink-0 w-16 h-16 mx-5 justify-between text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                            src="/images/user_img.png"
                            alt="user_img"
                        />
                        <div className="grid grid-cols-2">
                            <p className="text-[#28313B] font-semibold">Name: </p>
                            <span className="text-[#28313B] font-thin">Bon joe vee</span>
                            <p className="text-[#28313B] font-semibold">Job Title: </p>
                            <span className="text-[#28313B] font-thin">Manager</span>
                            <p className="text-[#28313B] font-semibold">Plan: </p>
                            <span className="text-[#28313B] font-thin">Basic</span>
                        </div>
                    </div>
                    <div className="right flex flex-col space-y-2.5 w-1/12">
                        <button
                            className="text-[#696969] border border-1 border-gray-300 hover:bg-slate-100 py-0.5 rounded-md"
                            type="submit"
                        >
                            Edit
                        </button>
                        <button
                            className="text-white bg-[#B13308] hover:bg-[#b04e2e] py-0.5 rounded-md"
                            type="submit"
                        >
                            Delete
                        </button>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard