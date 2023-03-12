import React from 'react'

const AddEmpPop = (props) => {
    return (props.trigger) ? (
        <div className='fixed top-0 right-0 flex justify-center items-center w-[calc(100%-15rem)] h-screen bg-gray-200/75'>
            <div className='w-[600px]'>

                <div className="text-left my-6 bg-white py-14 px-20 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <form method="post">
                        <div className="grid grid-cols-2 space-y-1">
                            <h2 className="text-base font-semibold underline col-span-2 text-left pb-5">
                                Add Employee
                            </h2>
                            <p className="text-[#151515]">Name: </p>
                            <input
                                className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="text"
                                name="name"
                                required
                            />
                            <p className="text-[#151515]">Phone Number: </p>
                            <input
                                className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="tel"
                                name="phone"
                                required
                            />
                            <p className="text-[#151515]">Job Title: </p>
                            <input
                                className="border-2 border-gray-300 text-sm rounded-md px-4 w-full h-8 placeholder:font-Poppins  placeholder:tracking-wide"
                                type="text"
                                name="job"
                                required
                            />
                            <p className="text-[#151515]">Subscription Plan: </p>
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
                                        onClick={() => props.setTrigger(false)}
                                        className="bg-white hover:bg-slate-100 text-[#696969] w-fit px-4 h-9 ml-2 rounded-md font-Poppins tracking-wide border-2 border-gray-300"
                                        name="cancle"
                                    >
                                        Cancle
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) : "";
}

export default AddEmpPop