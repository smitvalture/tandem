import React from 'react'
import login_logo from '../assets/images/login-page-img.png'
import { GrFormClose } from "react-icons/gr";
import { useRef, useState } from "react";





const Login = () => {

    const [toggle, setToggle] = useState(false);
    const [error, setError] = useState("There is an error while loggging in.");
    // console.log(error);

    return (
        <form action="" method="post" className='font-Poppins w-full h-screen bg-gray-200 flex justify-center items-center'>

            <section className='flex flex-col items-center space-y-4 w-72'>
                <img className='w-40 tab:w-48 lap:w-52 rounded-full' src={login_logo} alt="login-img" />
                <input
                    className="bg-gray-50 focus:bg-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-sm rounded-md px-5 w-60 tab:w-64 lap:w-72 m-auto h-10 placeholder:font-Poppins placeholder:tracking-wide "
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email or phone no."
                />
                
                <input
                    className="bg-gray-50 focus:bg-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-sm rounded-md px-5 w-60 tab:w-64 lap:w-72 m-auto h-10 placeholder:font-Poppins placeholder:tracking-wide "
                    type="pasword"
                    name="pwd"
                    required
                    placeholder="Password"
                />
                



                <select
                    id="type-login"
                    required
                    className="bg-gray-50 text-sm rounded-md font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 w-60 tab:w-64 lap:w-72 m-auto h-10"
                    defaultValue={'DEFAULT'}
                >
                    <option value="DEFAULT" disabled hidden>
                        Login as
                    </option>
                    <option className="text-gray-700 font-Poppins" value="1">
                        Employee
                    </option>
                    <option className="text-gray-700 font-Poppins" value="2">
                        Business
                    </option>
                </select>


                <div className='flex justify-between items-center text-sm w-64 px-4'>
                    <div className='flex items-center'>
                        <input type="checkbox" />
                        <p className='ml-1'>Remember Me</p>
                    </div>

                    <a className='text-blue-900 hover:text-blue-600 hover:underline' href="">Forgot Password</a>
                </div>

                {/* Error message */}
                <div className={`${toggle ? "hidden" : ""}`}>
                    <div className={`flex justify-center w-60 tab:w-64 lap:w-72 px-2 py-1 h-fit border border-1 border-red-900 text-sm`}>
                        <label htmlFor="" className='text-red-600 font-semibold text-xs mr-1.5'>Error: </label>
                        <p className='text-red-500 font-normal'>{error}</p>
                        <button onClick={() => { setToggle(!toggle); setError("") }}>
                            <GrFormClose className='text-xl my-auto' />
                        </button>

                    </div>
                </div>


                <button
                    className="bg-[#15213A] hover:bg-[#1e3055] shadow-lg shadow-blue-900/70 hover:shadow-blue-900/40 text-gray-300 w-60 tab:w-64 lap:w-72 h-9 mx-auto rounded-md font-Poppins tracking-wide"
                    type="submit"
                    name="login_button"

                >
                    Login
                </button>

                <div>
                    <a className='text-blue-900 hover:text-blue-600 hover:underline text-sm' href="#">Create new account</a>
                </div>

            </section>
        </form>
    )
}

export default Login