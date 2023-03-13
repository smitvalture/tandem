import { useState } from 'react';
import Dash_sidebar from './Dash_sidebar';
import AddEmpPop from './AddEmpPop';
import Emp_list from './Emp_list'


const Dashboard = () => {

    const [popUp, setPopUp] = useState(false);

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
                        onClick={() => setPopUp(true)}
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
                            onClick={() => setPopUp(true)}
                            className="w-fit px-5 py-2 mt-14 rounded-md text-white text-xs font-semibold bg-[#424770] hover:bg-[#4c5281]"
                            type="submit"
                            id="add2"
                        >
                            Add Employee
                        </button>
                    </div>

                    <AddEmpPop trigger={popUp} setTrigger={setPopUp}/>
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