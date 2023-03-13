import React from 'react'
import user_img from '../assets/images/user_img.png'
import { MdOutlineDashboard, MdContactMail } from "react-icons/md";
import { BsFillBuildingFill, BsPeopleFill } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import Dash_sidebar from './Dash_sidebar';


const Biz_dash = () => {
    return (
        <div className='font-Poppins bg-gray-100'>
            {/* sidebar */}
            <Dash_sidebar />


            {/* Business profile */}
            <div className="ml-60">
                <div>
                    <h1 className="text-xl font-semibold border border-1 border-gray-300 bg-white pl-4 py-4 shadow-[rgba(21,_21,_21,_0.5)_0px_0px_2px] font-SourceSansPro">
                        Your Profile
                    </h1>
                    <div className='py-10 px-10'>
                        <div className="text-left min-w-max bg-white rounded-3xl py-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            {/* Form */}
                            <form method="post">
                                <div className="flex flex-row justify-center">
                                    {/* Company details */}
                                    <div className="grid grid-cols-2 space-y-1 py-6 pr-10">
                                        <h2 className="text-xl col-span-2 text-left my-3 pb-5">
                                            Company Details
                                        </h2>
                                        <p><span className='text-red-600 text-xl'>*</span>Company Name: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="companyName"
                                            required
                                        />
                                        <p><span className='text-red-600 text-xl'>*</span>Company Email: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="email"
                                            name="companyEmail"
                                            required
                                        />
                                        <p><span className='text-red-600 text-xl'>*</span>Company Phone: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="tel"
                                            name="companyPhone"
                                            required
                                        />
                                        <p><span className='text-red-600 text-xl'>*</span>Company WebSite: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="url"
                                            name="CompanyWebSite"
                                            required
                                        />
                                        <p><span className='text-red-600 text-xl'>*</span>Business Type: </p>
                                        <select
                                            id="type-signup"
                                            required
                                            defaultValue={'DEFAULT'}
                                            className="text-sm rounded-md font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block border-2 border-gray-200 w-full px-2 h-8 m-auto"
                                        >
                                            <option disabled value={'DEFAULT'} hidden>
                                                Choose Business type
                                            </option>
                                            <option value={'1'} className="text-gray-700 font-Poppins">
                                                Private Limited Company
                                            </option>
                                            <option value={'2'} className="text-gray-700 font-Poppins">
                                                Public Limited Company
                                            </option>
                                            <option value={'3'} className="text-gray-700 font-Poppins">
                                                Partnerships Company
                                            </option>
                                            <option value={'4'} className="text-gray-700 font-Poppins">
                                                Limited Liability Partnership
                                            </option>
                                            <option value={'5'} className="text-gray-700 font-Poppins">
                                                One Person Company
                                            </option>
                                            <option value={'6'} className="text-gray-700 font-Poppins">
                                                Sole Proprietorship
                                            </option>
                                        </select>
                                        <p><span className='text-red-600 text-xl'>*</span>Business Categary: </p>
                                        <select
                                            id="type-signup"
                                            required
                                            defaultValue={'DEFAULT'}
                                            className="text-sm rounded-md font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block border-2 border-gray-200 w-full px-2 h-8 m-auto"
                                        >
                                            <option disabled value={'DEFAULT'} hidden>
                                                Choose Business Category
                                            </option>
                                            <option value={'1'} className="text-gray-700 font-Poppins">
                                                Retail Store
                                            </option>
                                            <option value={'2'} className="text-gray-700 font-Poppins">Wholesaler</option>
                                            <option value={'3'} className="text-gray-700 font-Poppins">Consultant</option>
                                            <option value={'4'} className="text-gray-700 font-Poppins">Education</option>
                                            <option value={'5'} className="text-gray-700 font-Poppins">
                                                Service Provider
                                            </option>
                                            <option value={'6'} className="text-gray-700 font-Poppins">
                                                Financial Services Provider
                                            </option>
                                            <option value={'7'} className="text-gray-700 font-Poppins">
                                                Health services provider
                                            </option>
                                            <option value={'8'} className="text-gray-700 font-Poppins">
                                                Restaurant / Bar / Wine Store
                                            </option>
                                            <option value={'9'} className="text-gray-700 font-Poppins">Utilities</option>
                                            <option value={'10'} className="text-gray-700 font-Poppins">
                                                Travel and transport
                                            </option>
                                            <option value={'11'} className="text-gray-700 font-Poppins">Government</option>
                                            <option value={'12'} className="text-gray-700 font-Poppins">
                                                Online store / Marketplace
                                            </option>
                                            <option value={'13'} className="text-gray-700 font-Poppins">
                                                Social media
                                            </option>
                                            <option value={'14'} className="text-gray-700 font-Poppins">
                                                Charity / NGO
                                            </option>
                                            <option value={'15'} className="text-gray-700 font-Poppins">Others</option>
                                        </select>
                                        <p><span className='text-red-600 text-xl'>*</span>Business Registration Number: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="Business_Registration_Number"
                                            required
                                        />
                                        <p><span className='text-red-600 text-xl'>*</span>Address: </p>
                                        <textarea
                                            className="border-2 border-gray-200 text-sm rounded-md p-2"
                                            required
                                            name="Address"
                                            cols={30}
                                            rows={3}
                                            defaultValue={""}
                                        />
                                        <p><span className='text-red-600 text-xl'>*</span>Zipcode: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="zip"
                                            required
                                        />
                                        <p><span className='text-red-600 text-xl'>*</span>City: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="city"
                                            required
                                        />
                                        <p><span className='text-red-600 text-xl'>*</span>State: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="state"
                                            required
                                        />
                                        <p><span className='text-red-600 text-xl'>*</span>Country: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="country"
                                            required
                                        />
                                    </div>
                                    {/* Contact details */}
                                    <div className="grid grid-cols-2 space-y-1 p-6 pb-96  ">
                                        <h2 className="text-xl col-span-2 text-left pb-5 mt-3">
                                            Contact Details
                                        </h2>
                                        <p><span className='text-red-600 text-xl'>*</span>Name: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="name"
                                            required
                                        />
                                        <p><span className='text-red-600 text-xl'>*</span>Phone: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="tel"
                                            name="phone"
                                            required
                                        />
                                        <p><span className='text-red-600 text-xl'>*</span>Email: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="email"
                                            name="email"
                                            required
                                        />
                                        <p><span className='text-red-600 text-xl'>*</span>Job Title: </p>
                                        <input
                                            className="border-2 border-gray-200 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                            type="text"
                                            name="jobTitle"
                                            required
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