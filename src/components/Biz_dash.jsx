import React from 'react'
import user_img from '../assets/images/user_img.png'
import { MdOutlineDashboard, MdContactMail } from "react-icons/md";
import { BsFillBuildingFill, BsPeopleFill } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';


const Biz_dash = () => {
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
                                className="flex items-center p-2 text-base font-semibold hover:text-white active:text-white active:font-semibold rounded-lg hover:bg-blue-900 bg-[#4C3CCE] text-white"
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


{/* Business profile */}
            <div className="ml-60">
                <div>
                    <h1 className="text-xl font-semibold border border-1 border-gray-300 bg-white pl-4 py-4 shadow-[rgba(21,_21,_21,_0.5)_0px_0px_2px] font-SourceSansPro">
                        Your Profile
                    </h1>
                    <div className='py-10 px-10'>
                        <div className="text-left min-w-max bg-white rounded-3xl py-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            {/* Form */}
                            <form action="" method="post">
                                <div className="flex flex-row justify-center">
                                    {/* Company details */}
                                    <div className="grid grid-cols-2 space-y-1 py-6 pr-10">
                                        <h2 className="text-xl col-span-2 text-left my-3 pb-5">
                                            Company Details
                                        </h2>
                                        <p>Company Name: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="companyName"
                                            required=""
                                            id=""
                                        />
                                        <p>Company Email: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="email"
                                            name="companyEmail"
                                            required=""
                                            id=""
                                        />
                                        <p>Company Phone: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="tel"
                                            name="companyPhone"
                                            required=""
                                            id=""
                                        />
                                        <p>Company WebSite: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="url"
                                            name="CompanyWebSite"
                                            required=""
                                            id=""
                                        />
                                        <p>Business Type: </p>
                                        <select
                                            id="type-signup"
                                            required=""
                                            className="text-sm rounded-md font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block border-2 border-gray-200 w-full h-8 m-auto"
                                        >
                                            <option value="" disabled="" selected="" hidden="">
                                                Choose Business type
                                            </option>
                                            <option className="text-gray-700 font-Poppins">
                                                Private Limited Company
                                            </option>
                                            <option className="text-gray-700 font-Poppins">
                                                Public Limited Company
                                            </option>
                                            <option className="text-gray-700 font-Poppins">
                                                Partnerships Company
                                            </option>
                                            <option className="text-gray-700 font-Poppins">
                                                Limited Liability Partnership
                                            </option>
                                            <option className="text-gray-700 font-Poppins">
                                                One Person Company
                                            </option>
                                            <option className="text-gray-700 font-Poppins">
                                                Sole Proprietorship
                                            </option>
                                        </select>
                                        <p>Business Categary: </p>
                                        <select
                                            id="type-signup"
                                            required=""
                                            className="text-sm rounded-md font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block border-2 border-gray-200 w-full h-8 m-auto"
                                        >
                                            <option value="" disabled="" selected="" hidden="">
                                                Choose Business Category
                                            </option>
                                            <option className="text-gray-700 font-Poppins">
                                                Retail Store
                                            </option>
                                            <option className="text-gray-700 font-Poppins">Wholesaler</option>
                                            <option className="text-gray-700 font-Poppins">Consultant</option>
                                            <option className="text-gray-700 font-Poppins">Education</option>
                                            <option className="text-gray-700 font-Poppins">
                                                Service Provider
                                            </option>
                                            <option className="text-gray-700 font-Poppins">
                                                Financial Services Provider
                                            </option>
                                            <option className="text-gray-700 font-Poppins">
                                                Health services provider
                                            </option>
                                            <option className="text-gray-700 font-Poppins">
                                                Restaurant / Bar / Wine Store
                                            </option>
                                            <option className="text-gray-700 font-Poppins">Utilities</option>
                                            <option className="text-gray-700 font-Poppins">
                                                Travel and transport
                                            </option>
                                            <option className="text-gray-700 font-Poppins">Government</option>
                                            <option className="text-gray-700 font-Poppins">
                                                Online store / Marketplace
                                            </option>
                                            <option className="text-gray-700 font-Poppins">
                                                Social media
                                            </option>
                                            <option className="text-gray-700 font-Poppins">
                                                Charity / NGO
                                            </option>
                                            <option className="text-gray-700 font-Poppins">Others</option>
                                        </select>
                                        <p>Business Registration Number: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="Business_Registration_Number"
                                            required=""
                                            id=""
                                        />
                                        <p>Address: </p>
                                        <textarea
                                            className="border-2 border-gray-200 text-sm rounded-md p-2"
                                            required=""
                                            name="Address"
                                            id=""
                                            cols={30}
                                            rows={3}
                                            defaultValue={""}
                                        />
                                        <p>Zipcode: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="zip"
                                            required=""
                                            id=""
                                        />
                                        <p>City: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="city"
                                            required=""
                                            id=""
                                        />
                                        <p>State: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="state"
                                            required=""
                                            id=""
                                        />
                                        <p>Country: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="country"
                                            required=""
                                            id=""
                                        />
                                    </div>
                                    {/* Contact details */}
                                    <div className="grid grid-cols-2 space-y-1 p-6 pb-96  ">
                                        <h2 className="text-xl col-span-2 text-left pb-5 mt-3">
                                            Contact Details
                                        </h2>
                                        <p>Name: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="name"
                                            required=""
                                            id=""
                                        />
                                        <p>Phone: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="tel"
                                            name="phone"
                                            required=""
                                            id=""
                                        />
                                        <p>Email: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="email"
                                            name="email"
                                            required=""
                                            id=""
                                        />
                                        <p>Job Title: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="jobTitle"
                                            required=""
                                            id=""
                                        />
                                    </div>
                                </div>
                                <div className="flex mt-10">
                                    <button
                                        className="items-center justify-center bg-blue-600 hover:bg-slate-800 text-gray-300 w-1/5 h-9 mx-auto rounded-md font-Poppins tracking-wide"
                                        type="submit"
                                        name="registration_next_button"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Biz_dash