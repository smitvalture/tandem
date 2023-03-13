import { useState } from 'react';
import Dash_sidebar from './Dash_sidebar';
import Emp_list from './Emp_list'


const Dashboard = () => {

    const [addEmpPop, setAddEmpPop] = useState(false);
    const [editEmpPop, setEditEmpPop] = useState(false);


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
                        onClick={() => setAddEmpPop(true)}
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
                    <Emp_list />
                    <div className="mx-auto flex flex-col items-center">
                        <p className="text-[#BBBBBB] mt-32 text-center text-xl">
                            Empty
                            <br />
                            No employee data available
                        </p>
                        <button
                            onClick={() => setAddEmpPop(true)}
                            className="w-fit px-5 py-2 mt-14 rounded-md text-white text-xs font-semibold bg-[#424770] hover:bg-[#4c5281]"
                            type="submit"
                            id="add2"
                        >
                            Add Employee
                        </button>
                    </div>


{/* Add Employee Popup */}
                    {
                        addEmpPop ? (
                            <div className='fixed top-0 right-0 flex justify-center items-center w-[calc(100%-15rem)] h-screen bg-gray-200/75'>
                                <div className='w-[600px]'>

                                    <div className="text-left my-6 bg-white py-14 px-20 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                        <form method="post">
                                            <div className="grid grid-cols-2 space-y-1 place-items-start place-content-center ">
                                                <h2 className="text-base font-semibold underline col-span-2 text-left pb-5">
                                                    Add Employee
                                                </h2>
                                                <p className="text-[#151515]"><span className='text-red-600 text-xl'>*</span>Name: </p>
                                                <input
                                                    className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                                    type="text"
                                                    name="name"
                                                    required
                                                />
                                                <p className="text-[#151515]"><span className='text-red-600 text-xl'>*</span>Email: </p>
                                                <input
                                                    className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                                    type="email"
                                                    name="email"
                                                    required
                                                />
                                                <p className="text-[#151515]">Phone Number : </p>
                                                <input
                                                    className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                                    type="tel"
                                                    name="phone"
                                                />
                                                <p className="text-[#151515]"><span className='text-red-600 text-xl'>*</span>Job Title: </p>
                                                <input
                                                    className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                                    type="text"
                                                    name="job"
                                                    required
                                                />
                                                <p className="text-[#151515]"><span className='text-red-600 text-xl'>*</span>Subscription Plan: </p>
                                                <select
                                                    id="type-signup"
                                                    required
                                                    defaultValue={'DEFAULT'}
                                                    className="text-sm rounded-md font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block border-2 border-gray-300 w-full h-8 m-auto"
                                                >
                                                    <option disabled value={'DEFAULT'} hidden>
                                                        Choose Plan
                                                    </option>
                                                    <option value={'1'} className="text-gray-700 font-Poppins">Basic</option>
                                                </select>
                                                <div className="col-start-2">
                                                    <div className="flex mt-10">
                                                        <button
                                                            className="bg-[#11BF38] hover:bg-[#13cc3b] text-white w-fit px-8 h-9 mr-2 rounded-md font-Poppins tracking-wide"
                                                            type="submit"
                                                            name="reg_next"
                                                        >
                                                            Next
                                                        </button>
                                                        <button
                                                            onClick={() => setAddEmpPop(false)}
                                                            className="bg-white hover:bg-slate-100 text-[#696969] w-fit px-4 h-9 ml-2 rounded-md font-Poppins tracking-wide border-2 border-gray-300"
                                                            name="cancel"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        ) : ""
                    }


{/* Edit Employee Popup */}
                    {/* {
                        editEmpPop ? (
                            <div className='fixed top-0 right-0 flex justify-center items-center w-[calc(100%-15rem)] h-screen bg-gray-200/75'>
                                <div className='w-[600px]'>
                    
                                    <div className="text-left my-6 bg-white py-14 px-20 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                        <form method="post">
                                            <div className="grid grid-cols-2 space-y-1 place-items-start place-content-center ">
                                                <h2 className="text-base font-semibold underline col-span-2 text-left pb-5">
                                                    Add Employee
                                                </h2>
                                                <p className="text-[#151515]"><span className='text-red-600 text-xl'>*</span>Name: </p>
                                                <input
                                                    className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                                    type="text"
                                                    name="name"
                                                    required
                                                />
                                                <p className="text-[#151515]"><span className='text-red-600 text-xl'>*</span>Email: </p>
                                                <input
                                                    className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                                    type="email"
                                                    name="email"
                                                    required
                                                />
                                                <p className="text-[#151515]">Phone Number : </p>
                                                <input
                                                    className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                                    type="tel"
                                                    name="phone"
                                                />
                                                <p className="text-[#151515]"><span className='text-red-600 text-xl'>*</span>Job Title: </p>
                                                <input
                                                    className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                                    type="text"
                                                    name="job"
                                                    required
                                                />
                                                <p className="text-[#151515]"><span className='text-red-600 text-xl'>*</span>Subscription Plan: </p>
                                                <select
                                                    id="type-signup"
                                                    required
                                                    defaultValue={'DEFAULT'}
                                                    className="text-sm rounded-md font-Poppins tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block border-2 border-gray-300 w-full h-8 m-auto"
                                                >
                                                    <option disabled value={'DEFAULT'} hidden>
                                                        Choose Plan
                                                    </option>
                                                    <option value={'1'} className="text-gray-700 font-Poppins">Basic</option>
                                                </select>
                                                <div className="col-start-2">
                                                    <div className="flex mt-10">
                                                        <button
                                                            className="bg-[#11BF38] hover:bg-[#13cc3b] text-white w-fit px-8 h-9 mr-2 rounded-md font-Poppins tracking-wide"
                                                            type="submit"
                                                            name="reg_next"
                                                        >
                                                            Update
                                                        </button>
                                                        <button
                                                            onClick={() => setEditEmpPop(false)}
                                                            className="bg-white hover:bg-slate-100 text-[#696969] w-fit px-4 h-9 ml-2 rounded-md font-Poppins tracking-wide border-2 border-gray-300"
                                                            name="cancel"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        ) : ""
                    } */}

                    {/* <AddEmpPop trigger={popUp} setTrigger={setPopUp}/> */}
                    {/* <Popup trigger={popUp} setTrigger={setPopUp}>
                        <h1>Hello</h1>
                        <p>This is popup</p>
                    </Popup> */}

                </div>
            </div>
        </div>
    )
}

export default Dashboard