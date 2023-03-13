import { useState } from 'react';
import user_img from '../assets//images/user_img.png'
import UpdateEmpPop from './UpdateEmpPop';


const Emp_list = () => {
    const [updatePop, setUpdatePop] = useState(false);

    return (

        <div className="flex justify-between items-center h-28 bg-white my-5 ml-10 mr-20 py-4 pl-3 pr-6 border border-1 border-gray-300 rounded-md">
            <div className="left flex">
                <img
                    className="row-span-2 flex-shrink-0 w-16 h-16 mx-5 justify-between text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                    src={user_img}
                    alt="user_img"
                />
                <div className="grid grid-cols-2">
                    <p className="text-[#28313B] font-semibold">Name: </p>
                    <span className="text-[#28313B] font-thin">Bon joe vee</span>
                    <p className="text-[#28313B] font-semibold">Job Title: </p>
                    <span className="text-[#28313B] font-thin">Manager</span>
                    <p className="text-[#28313B] font-semibold">Plan: </p>
                    <span className="text-[#28313B] font-thin">Basic</span>
                </div>
            </div>
            <div className="right flex flex-col space-y-2.5 w-1/12">
                <button
                    onClick={() => setUpdatePop(true)}
                    className="text-[#696969] border border-1 border-gray-300 hover:bg-slate-100 py-0.5 rounded-md"
                    type="submit"
                >
                    Edit
                </button>
                <button
                    className="text-white bg-[#B13308] hover:bg-[#b04e2e] py-0.5 rounded-md"
                    type="submit"
                >
                    Delete
                </button>
            </div>

            <UpdateEmpPop trigger={updatePop} setTrigger={setUpdatePop}/>
        </div>

    )
}

export default Emp_list