import React from 'react'
import login_logo from '../assets/images/login-page-img.png'

const Signup = () => {
    return (
        <section className="font-Poppins w-full h-screen bg-gray-200 flex flex-col justify-center items-center">

            <form
                method="post"
                className="registration-details flex flex-col items-center space-y-4 w-full"
            >

                <img
                    className="w-40 tab:w-48 lap:w-52 rounded-full"
                    src={login_logo}
                    alt="logo-img"
                />

                <input
                    className="bg-gray-50 focus:bg-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-sm rounded-md px-5 w-60 tab:w-64 lap:w-72 h-10 placeholder:font-Poppins placeholder:tracking-wide "
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                />

                <input
                    className="bg-gray-50 focus:bg-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-sm rounded-md px-5 w-60 tab:w-64 lap:w-72 h-10 placeholder:font-Poppins placeholder:tracking-wide "
                    type="password"
                    name="pwd"
                    required
                    placeholder="Create new password"
                />

                <input
                    className="bg-gray-50 focus:bg-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-sm rounded-md px-5 w-60 tab:w-64 lap:w-72 h-10 placeholder:font-Poppins placeholder:tracking-wide "
                    type="confirm-password"
                    name="confirm_pwd"
                    required
                    placeholder="Confirm new Password"
                />

                <select
                    id="type-signup"
                    required
                    className="bg-gray-50 text-sm rounded-md font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 w-60 tab:w-64 lap:w-72 h-10"
                    defaultValue={'DEFAULT'}
                >
                    <option value="DEFAULT" disabled hidden>
                        Login as
                    </option>

                    <option className="text-gray-700 font-Poppins" value="2">
                        Business
                    </option>
                </select>


                <div
                    className="mx-auto"
                    id="error-message"
                    style={{ display: "none", color: "red" }}
                >
                    Passwords do not match
                </div>
                <button
                    className="bg-[#15213A] hover:bg-[#1e3055] shadow-lg shadow-blue-900/70 hover:shadow-blue-900/40 text-gray-300 w-60 tab:w-64 lap:w-72 h-9 mx-auto rounded-md font-Poppins tracking-wide"
                    type="submit"
                    name="login_button"

                >
                    Sign up
                </button>
            </form>
            <a
                className="mx-auto mt-2 text-sm hover:underline hover:text-blue-600 font-Poppins  text-gray-600 placeholder:tracking-wide"
                href="/login.html"
            >
                Already have an account? Login here
            </a>
        </section>


    )
}

export default Signup