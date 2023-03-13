import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useRef } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from '../assets/images/tandem_logo.svg'
import Alerts from '../components/Alerts';

const Signup = () => {

    const [eye, setEye] = useState(false);
    const [msg, setMsg] = useState("");

    
    // const [ceye, csetEye] = useState(false);




    return (

        <div className='bg-gray-200 py-5 px-5'>
            <Link to={"/"}>
                <img className='' src={logo} alt="tandem_img" />
            </Link>

            <section className="font-Poppins w-full h-[calc(100vh-78px)] flex flex-col justify-center items-center">

                <div className='bg-gray-100 py-5 px-10 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <form
                        method="post"
                        className="registration-details flex flex-col items-center space-y-4 w-[290px]"
                    >

                        <h1 className='text-3xl lap:text-5xl font-semibold mb-5'>Sign Up</h1>



                        <input
                            className="bg-gray-50 hover:bg-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-sm rounded-md px-3 w-60 tab:w-64 lap:w-72 m-auto h-10 placeholder:font-Poppins placeholder:tracking-wide outline-none border hover:border-1 hover:border-gray-700 "
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                        />

                        <div className='flex justify-between items-center bg-gray-50 hover:bg-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-sm rounded-md px-3 w-60 tab:w-64 lap:w-72 m-auto h-10 placeholder:font-Poppins placeholder:tracking-wide border hover:border-1 hover:border-gray-700'>
                            <input
                                className='outline-none bg-transparent w-full'
                                type={eye ? 'text' : 'password'}
                                name="pwd"
                                required
                                placeholder="Create new password"

                            />
                            {
                                eye ? <AiOutlineEye className='w-5 h-5 cursor-pointer' onClick={() => setEye(false)} /> : <AiOutlineEyeInvisible className='w-5 h-5 cursor-pointer' onClick={() => setEye(true)} />
                            }

                        </div>



                        <div className='flex justify-between items-center bg-gray-50 hover:bg-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-sm rounded-md px-3 w-60 tab:w-64 lap:w-72 m-auto h-10 placeholder:font-Poppins placeholder:tracking-wide border hover:border-1 hover:border-gray-700'>
                            <input
                                className='outline-none bg-transparent w-full'
                                type={eye ? 'text' : 'password'}
                                name="pwd"
                                required
                                placeholder="Confirm new password"

                            />
                            {
                                eye ? <AiOutlineEye className='w-5 h-5 cursor-pointer' onClick={() => setEye(false)} /> : <AiOutlineEyeInvisible className='w-5 h-5 cursor-pointer' onClick={() => setEye(true)} />
                            }

                        </div>


                        {/* Error message */}

                        <div>
                            {
                                msg && <Alerts msg="Success" des={msg} type="success" closable onClose={() => setMsg("")} />
                            }
                        </div>

                        <button
                            className="bg-[#15213A] hover:bg-[#1e3055] shadow-lg shadow-blue-900/70 hover:shadow-blue-900/40 text-gray-300 w-60 tab:w-64 lap:w-72 h-9 mx-auto rounded-md font-Poppins tracking-wide"
                            type="submit"
                            name="login_button"

                        >
                            Sign up
                        </button>

                        <p className='text-sm'>Already have an account? <Link className='text-blue-900 hover:text-blue-600 hover:underline text-sm' to={"/login"}>Login here</Link></p>

                    </form>



                </div>
            </section>

        </div>
    )
}

export default Signup