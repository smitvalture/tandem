import React from 'react'
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import user_img from '../assets/images/user_img.png'
import { MdOutlineDashboard, MdContactMail } from "react-icons/md";
import { BsFillBuildingFill, BsPeopleFill } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const Contact_dash = () => {
    return (
        <div className='font-Poppins bg-gray-100'>
            {/* sidebar */}
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
                                className="flex items-center p-2 text-base font-semibold hover:text-white active:text-white active:font-semibold rounded-lg text-white hover:bg-blue-900 bg-[#4C3CCE]"
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


            {/* Contact us */}
            <div className="ml-60 pb-10 font-SourceSansPro">
                <div className="">
                    <h1 className="text-xl font-semibold border border-1 border-gray-300 bg-white pl-4 py-4">
                        Contact Us
                    </h1>
                    <div className="flex mt-10 mx-10 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
                        <div className="bg-white px-3 py-4 min-w-full min-h-full border border-1 border-gray-300 rounded-md flex flex-col text-center justify-center items-center">
                            <h1 className="text-5xl font-semibold mt-28 font-SourceSansPro">
                                Contact Us
                            </h1>
                            <div className="flex justify-center items-center w-2/3 space-x-5 mt-20">
                                <a target="_blank" href="https://wa.me/+917016580318">
                                    <div className="left h-24 w-fit pl-12 pr-16 border border-1 border-[#151515] rounded-lg flex justify-center items-center">
                                        <div className="mr-4 border-2 border-gray-200 rounded-full ">
                                            <IoLogoWhatsapp className="text-6xl text-green-600 p-2" />
                                        </div>
                                        <div className="text-left">
                                            <p>Let's Chat</p>
                                            <span className="text-[#737373]">will reply in 2hrs</span>
                                        </div>
                                    </div>
                                </a>
                                <a target="_blank" href="mailto:hello@tandem.com">
                                    <div className="left h-24 w-fit px-12 border border-1 border-[#151515] rounded-lg flex justify-center items-center">
                                        <div className="mr-4 border-2 border-gray-200 rounded-full">
                                            <IoIosMail className="text-6xl text-black p-2" />
                                        </div>
                                        <div className="text-left">
                                            <p>hello@tandem.com</p>
                                            <span className="text-[#737373]">will reply in 24hrs</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <p className="text-[#737373] text-base mt-6">
                                We are available on all days between 10 AM to 7PM
                            </p>
                            <div className="address flex space-x-48 mt-20 mb-14">
                                <div className="left">
                                    <h1 className="text-xl font-semibold">Correspondence Address</h1>
                                    <p className="text-base">
                                        The Pavillion,
                                        <br />
                                        #175, Dollars Colony,
                                        <br />
                                        Near Rainbow Hospital, Bannerghatta Main Rd,
                                        <br />
                                        Bengaluru, Karnataka 560076
                                    </p>
                                </div>
                                <div className="right">
                                    <h1 className="text-xl font-semibold">Registered Address</h1>
                                    <p className="text-base">
                                        Plot No. 2, Krushna Colony,
                                        <br />
                                        Near MS-E.B Colony, Jail Road,
                                        <br />
                                        Nashik Road,Nashik,
                                        <br />
                                        Maharastra,422101
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_dash