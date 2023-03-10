import React from 'react'
import refer_img from '../assets/images/refer-img.svg'
import user_img from '../assets/images/user_img.png'
import { MdOutlineDashboard, MdContactMail } from "react-icons/md";
import { BsFillBuildingFill, BsPeopleFill } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const Refer_dash = () => {
    return (
        <div className='font-Poppins bg-gray-100'>
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

                                className="flex items-center p-2 text-base font-normal text-gray-500 hover:text-white active:text-white active:font-semibold rounded-lg hover:bg-blue-900 active:bg-[#4C3CCE]"
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
                                className="flex items-center p-2 text-base font-semibold hover:text-white active:text-white active:font-semibold rounded-lg text-white hover:bg-blue-900 bg-[#4C3CCE]"
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



            {/* refer and earn */}
            <div className="ml-60 pb-10">
                <div className="">
                    <h1 className="text-xl font-semibold border border-1 border-gray-300 bg-white pl-4 py-4 shadow-[rgba(21,_21,_21,_0.5)_0px_0px_2px]">
                        Refer &amp; Earn
                    </h1>
                    <div className="flex mt-10 mx-10 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
                        <div className="bg-white px-3 py-4 min-w-full min-h-full border border-1 border-gray-300 rounded-md flex flex-col text-center justify-center items-center">
                            <h1 className="text-3xl font-semibold mt-16 font-SourceSansPro">
                                Invite your business partners &amp; save more
                            </h1>
                            <p className="text-xl font-light mt-10">
                                The more business partners that joins, the more we grow.
                                <br />
                                The more we grow, the more you earn.
                            </p>
                            <img className="mt-16" src={refer_img} alt="refer-img" />
                            <button
                                name="invite"
                                className="text-white bg-[#15213A] hover:bg-[#1c2d4f] py-0.5 h-10 w-52 mt-14 mb-6 rounded-md "
                                type="submit"
                            >
                                Invite
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Refer_dash