import React from 'react';
import work from '../assets/images/workimg.svg';
import { SlLocationPin } from 'react-icons/sl';
import { BsBuildings } from 'react-icons/bs';
import { MdOutlineSubscriptions } from 'react-icons/md';

const Section4 = () => {
    return (
        <div>
            <section className="flex flex-col justify-center items-center bg-[#d7e5f2]">
                <h1 className="mt-24 lap:mt-28 w-[336px] lap:w-[432px] text-3xl lap:text-4xl font-medium text-center">
                    See how much you can save with Tandem
                </h1>
                <div className="flex flex-col lap:flex-row mt-5 lap:mt-20 justify-center lap:space-x-28 items-center mb-28">
                    <img className="h-[410.4px] w-[380px] lap:h-[453.6px] lap:w-[420px]" src={work} alt="woriking-img" />
                    <form method="post">
                        <div className="lap:ml-32 lap:mr-[124px] bg-white py-10 px-10 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            <div className="grid grid-flow-row space-y-1 text-left">
                                <span className="text-[#7D7D7D] text-base font-normal">Step 1 of 1</span>
                                <h3 className="text-2xl font-medium">Saving Calculator</h3>
                                <p className="text-[15px] font-light w-72 mb-8">
                                    Enter your business location, type, and size of your workforce.
                                </p>
                                <div className="space-y-5">
                                    <div className="border border-1 border-[#151515] h-8 p-1 flex rounded-md mt-8">
                                        <SlLocationPin className="h-5 pt-0.5 mr-1" />
                                        <input className="w-full outline-none" type="text" name="location" id="location" placeholder="Location" />
                                    </div>
                                    <div className="border border-1 border-[#151515] h-8 p-1 flex rounded-md">
                                        <BsBuildings className="h-5 pt-0.5 mr-1" />
                                        <input className="w-full outline-none" type="text" name="location" id="location" placeholder="No. of Employes" />
                                    </div>
                                    <div className="border border-1 border-[#151515] h-8 p-1 flex rounded-md">
                                        <MdOutlineSubscriptions className="h-5 pt-0.5" />
                                        <select id="type-signup" defaultValue={'DEFAULT'} aria-label="Choose Plan" required className="text-sm tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full outline-none">
                                            <option disabled value="DEFAULT" hidden>
                                                Choose Plan
                                            </option>
                                            <option value="1" className="text-gray-700 font-Poppins">Basic</option>
                                        </select>
                                    </div>
                                    <button className="text-base text-white font-medium border border-1 border-[#1F3C88] rounded-full w-40 h-10 bg-[#23469f] hover:bg-[#1F3C88] mr-[5px] lap:mr-[10px]" type="submit">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Section4