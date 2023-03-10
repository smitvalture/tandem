import React from 'react'
import user_img from '../assets/images/user_img.png'
import { MdOutlineDashboard, MdContactMail } from "react-icons/md";
import { BsFillBuildingFill, BsPeopleFill } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';


const Dash = () => {
    return (
        <div className='bg-gray-100 font-Poppins'>
            {/* Sidebar */}
            <aside
                id="default-sidebar"
                className="fixed top-0 left-0 z-40 w-60 h-screen block"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-[#15213A]">
                    <ul className="space-y-2 text-white">
                        {/*        Profile */}
                        <li>
                            <div className="user_profile grid grid-col-2 text-sm">
                                <img
                                    className="row-span-2 flex-shrink-0 w-9 h-9 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                                    src={user_img}
                                    alt="user_img"
                                />
                                <p className="business_name col-start-2 col-end-7">Biz Name</p>
                                <p>
                                    id = <span className="phone_no">phone no</span>
                                </p>
                            </div>
                        </li>

                        <li>
                            <div className="d&t bg-white text-[#4C3CCE] text-center text-sm py-1 rounded-full mx-4">
                                <p>Date &amp; Time</p>
                            </div>
                        </li>

                        <li className=''>
                            <NavLink
                                to="/dashboard"

                                className="flex items-center p-2 text-base font-semibold hover:text-white active:text-white active:font-semibold rounded-lg hover:bg-blue-900 bg-[#4C3CCE] text-white"
                            >
                                <MdOutlineDashboard className="flex-shrink-0 w-6 h-6 transition duration-75" />
                                <span className="ml-3">Dashboard</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/business-profile"
                                className="flex items-center p-2 text-base font-normal text-gray-500 hover:text-white active:text-white active:font-semibold rounded-lg  hover:bg-blue-900 active:bg-[#4C3CCE]"
                            >
                                <BsFillBuildingFill className="flex-shrink-0 w-6 h-6 transition duration-75" />
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Business Profile
                                </span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/billing"
                                className="flex items-center p-2 text-base font-normal text-gray-500 hover:text-white active:text-white active:font-semibold rounded-lg  hover:bg-blue-900 active:bg-[#4C3CCE]"
                            >
                                <FaRegMoneyBillAlt className="flex-shrink-0 w-6 h-6 transition duration-75" />
                                <span className="flex-1 ml-3 whitespace-nowrap">Billing</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/refer"
                                className="flex items-center p-2 text-base font-normal text-gray-500 hover:text-white active:text-white active:font-semibold rounded-lg  hover:bg-blue-900 active:bg-[#4C3CCE]"
                            >
                                <BsPeopleFill className="flex-shrink-0 w-6 h-6 transition duration-75" />
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Refer &amp; Earn
                                </span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact-us"
                                className="flex items-center p-2 text-base font-normal text-gray-500 hover:text-white active:text-white active:font-semibold rounded-lg  hover:bg-blue-900 active:bg-[#4C3CCE]"
                            >
                                <MdContactMail className="flex-shrink-0 w-6 h-6 transition duration-75" />
                                <span className="flex-1 ml-3 whitespace-nowrap">Contact Us</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/"
                                className="flex items-center p-2 text-base font-normal text-gray-500 hover:text-white active:text-white active:font-semibold rounded-lg  hover:bg-blue-900 active:bg-[#4C3CCE]"
                            >
                                <RiLogoutBoxRFill className="flex-shrink-0 w-6 h-6 transition duration-75" />
                                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </aside>


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

export default Dash