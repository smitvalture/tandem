import React from 'react'

const Popup = (props) => {
    return (props.trigger) ? (
        <div className='fixed top-0 right-0 flex justify-center items-center w-[calc(100%-15rem)] h-screen bg-gray-200/75'>
            <div className='w-[600px] relative'>
                <button
                    onClick={() => props.setTrigger(false)}
                    className="bg-white hover:bg-slate-100 text-[#696969] w-fit px-4 h-9 rounded-md font-Poppins tracking-wide border-2 border-gray-300"
                    name="cancle"
                >
                    Close
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup