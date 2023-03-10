import React from 'react'
import user_img from '../assets/images/user_img.png'
import { MdOutlineDashboard, MdContactMail } from "react-icons/md";
import { BsFillBuildingFill, BsPeopleFill } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const Bill_dash = () => {
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
                                className="flex items-center p-2 text-base font-semibold hover:text-white active:text-white active:font-semibold rounded-lg text-white hover:bg-blue-900 bg-[#4C3CCE]"
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


            {/* Billing     */}
            <div className="ml-60 pb-10">
                <div className="">
                    <h1 className="text-xl font-semibold border border-1 border-gray-300 bg-white pl-4 py-4 shadow-[rgba(21,_21,_21,_0.5)_0px_0px_2px] font-SourceSansPro">
                        Billing
                    </h1>
                    <div className="mt-3 mx-10">
                        {/* OverView */}
                        <div className="grid grid-rows-3">
                            <div className="flex items-center ">
                                <h3 className="text-2xl text-[#687E96] h-8">Over view</h3>
                            </div>
                            <div className="top grid grid-cols-5 border-2 rounded-md rounded-b-none text-center items-center text-[#737373] text-lg font-semibold h-[80px] bg-white">
                                <p>Date</p>
                                <p>Billing Cycle</p>
                                <p>Amount</p>
                                <p>Due Date</p>
                                <p>Status</p>
                            </div>
                            <div className="bottom grid grid-cols-5 border-2 border-t-0 rounded-md rounded-t-none text-center items-center text-[#737373] text-base font-normal h-14 bg-white">
                                <p>25/12/2023</p>
                                <p>January</p>
                                <p>₹ 25,000</p>
                                <p>10 Feb 2023</p>
                                <p>Pending</p>
                            </div>
                        </div>
                        {/* Billing Email */}
                        <div className="flex flex-col mt-3">
                            <div className="flex flex-col text-left text-[#687E96]">
                                <h3 className="text-2xl h-8">Billing email</h3>
                                <p>All billing correspondence will go to this email</p>
                            </div>
                            <div className="top grid grid-cols-2 border-2 text-center items-center text-[#737373] h-48 bg-white mt-3 rounded-md">
                                <input
                                    className="border-2 rounded-md ml-10 h-12 w-[420px] px-5"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    id=""
                                />
                                <div className="text-base space-x-3">
                                    <button
                                        className="border-2 border-[#696969] rounded-md h-8 w-28 hover:bg-slate-200"
                                        type="reset"
                                    >
                                        Cancle
                                    </button>
                                    <button
                                        className="bg-[#109C2F] hover:bg-[#12ac33] text-white rounded-md h-8 w-28"
                                        type="submit"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Billing Address */}
                        <div className="flex flex-col mt-10">
                            <div className="flex flex-col text-left text-[#687E96]">
                                <h3 className="text-2xl h-8">Billing address</h3>
                                <p>This will be reflected in every invoice</p>
                            </div>
                            <div className="top grid grid-cols-2 border-2 text-center items-center text-[#737373] bg-white mt-3 rounded-md">
                                <form
                                    className="text-left flex justify-between w-[1220px] my-6 py-14 px-20"
                                    action=""
                                    method="post"
                                >
                                    <div className="grid grid-cols-2 space-y-1 w-1/2">
                                        <p className="text-[#151515] pl-20">Address: </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="address"
                                            placeholder="Address"
                                            required=""
                                            id=""
                                        />
                                        <p className="text-[#151515] pl-20">City: </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            required=""
                                            id=""
                                        />
                                        <p className="text-[#151515] pl-20">Zip code: </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="tel"
                                            name="zip"
                                            placeholder="Zip code"
                                            required=""
                                            id=""
                                        />
                                        <p className="text-[#151515] pl-20">State: </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="state"
                                            placeholder="State"
                                            required=""
                                            id=""
                                        />
                                        <p className="text-[#151515] pl-20">Country: </p>
                                        <input
                                            className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="country"
                                            placeholder="Country"
                                            required=""
                                            id=""
                                        />
                                    </div>
                                    <div className="col-start-2">
                                        <div className="flex mt-20 space-x-3">
                                            <button
                                                className="border-2 border-[#696969] rounded-md h-8 w-28 hover:bg-slate-200"
                                                type="reset"
                                                name="cancle"
                                            >
                                                Cancle
                                            </button>
                                            <button
                                                className="bg-[#109C2F] hover:bg-[#12ac33] text-white rounded-md h-8 w-28"
                                                type="submit"
                                                name="next"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Tax ID / GST */}
                        <div className="flex flex-col mt-10">
                            <div className="flex flex-col text-left text-[#687E96]">
                                <h3 className="text-2xl h-8">Tax ID / GST ID</h3>
                                <p>
                                    If you would like to include specific tax ID(s) to your invoices.{" "}
                                    <br />
                                    Make sure the tax ID looks exactly like the placeholder text.
                                </p>
                            </div>
                            <div className="top grid grid-cols-2 border-2 text-center items-center text-[#737373] h-48 bg-white mt-3 rounded-md">
                                <input
                                    className="border-2 rounded-md ml-10 h-12 w-[420px] px-5"
                                    type="text"
                                    name="tax"
                                    placeholder="Tax ID"
                                    id=""
                                />
                                <div className="text-base space-x-3">
                                    <button
                                        className="border-2 border-[#696969] rounded-md h-8 w-28 hover:bg-slate-200"
                                        type="reset"
                                        name="cancle"
                                    >
                                        Cancle
                                    </button>
                                    <button
                                        className="bg-[#109C2F] hover:bg-[#12ac33] text-white rounded-md h-8 w-28"
                                        type="submit"
                                        name="next"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bill_dash