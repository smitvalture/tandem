import { element } from 'prop-types';
import React, { useState } from 'react'
import bg from '/images/hero_bg1.svg'
import logo from '/images/tandem_logo.svg'



const Landing = () => {


    const [toggle, setToggle] = useState("close");


    function menu(e) {
        
        setToggle(!toggle);
        if (toggle) {
                list.classList.add("top-[76px]"),
                list.classList.add("opacity-100"),
                list.classList.add("block"),
                list.classList.add("bg-white"),
                nav.classList.add("bg-white")
        } else {
                list.classList.remove("top-[76px]"),
                list.classList.remove("opacity-100"),
                list.classList.remove("bg-white"),
                nav.classList.remove("bg-white");
        }
    }

    function navclose(e) {
        
        document.getElementById("menu_toggle").setAttribute("name", "menu")
        list.classList.remove("top-[76px]"),
        list.classList.remove("opacity-100"),
        nav.classList.remove("bg-white")
        
    }

    return (
        <div>
            <section className="bg-[#d7e5f2] w-full" style={{
                backgroundImage: `url(${bg})`
            }}>
                {/* navbar */}
                <nav className="sticky p-5 laptop:flex laptop:justify-between laptop:items-center laptop:z-auto duration-200 laptop:transition-none" id="navbar">
                    <div className="flex justify-between items-center">
                        <a href="https://www.google.co.in"><img className="inline mx-2 h-7 laptop:h-auto" href="#" src={logo} alt="tandem-img" /></a>
                        <span className="text-3xl cursor-pointer mx-2 laptop:hidden block">
                            <ion-icon id="menu_toggle" name={!toggle ? "close" : "menu"} onClick={() => menu(this)} />
                        </span>
                        {/* List       */}
                        <div id="menu" className="flex flex-col justify-between items-center text-center z-[-1] laptop:z-auto laptop:static absolute laptop:bg-transparent w-full left-0 laptop:w-auto pb-24 pt-5 laptop:py-0 opacity-0 laptop:opacity-100 top-[-400px] transition-all ease-in duration-500 laptop:transition-none shadow-laptop laptop:shadow-none">
                            <ul className="laptop:inline-flex laptop:flex-row laptop:items-center laptop:space-x-4">
                                <li className="my-6 laptop:my-0 laptop:ml-4">
                                    <a href="#mission" className="text-lg font-medium hover:text-cyan-500 duration-500 laptop:transition-none" onClick={() => { navclose(this) }}>Our mission</a>
                                </li>
                                <li className="my-6 laptop:my-0">
                                    <a href="#demo" className="text-lg font-medium hover:text-cyan-500 duration-500 laptop:transition-none" onClick={() => { navclose(this) }}>Live
                                        demo</a>
                                </li>
                                <li className="my-6 laptop:my-0">
                                    <a href="#contact" className="text-lg font-medium hover:text-cyan-500 duration-500 laptop:transition-none" onClick={() => { navclose(this) }}>Contact us</a>
                                </li>
                            </ul>
                            <div className="laptop:flex laptop:items-center mt-10 laptop:-m-1 space-x-4 laptop:absolute laptop:right-5">
                                <a href="/sign_up.html" target="_blank" rel="noopener noreferrer"><button className="w-28 h-9 font-medium text-[#1F3C88] hover:text-cyan-500 border border-1 border-[#1F3C88] hover:border-cyan-500 laptop:border-0 rounded-full" name="login" type="submit">
                                    Get started
                                </button></a>
                                <a href="/login.html" target="_blank" rel="noopener noreferrer"><button className="w-28 h-9 font-medium text-[#1F3C88] hover:text-cyan-500 border border-1 border-[#1F3C88] hover:border-cyan-500 duration-500 laptop:transition-none rounded-full" name="login" type="submit">
                                    Log in
                                </button></a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[#272746] text-4xl laptop:text-7xl font-semibold text-center mt-36 laptop:mt-40 w-72 laptop:w-[573px]">
                        Save money on your payroll
                    </h1>
                    <p className="text-[#272746] text-base laptop:text-2xl font-normal w-80 laptop:w-[730px] text-center mt-12 laptop:mt-14">
                        At Tandem, We help businesses - reduce their payroll expense by
                        delivering them a unique payout structure, which not only lets them
                        save money but also makes their workforce satisfied &amp; happy.
                    </p>
                    <div className="mt-12 mb-36 laptop:mb-40">
                        <a href="/dashboard.html" target="_blank" rel="noopener noreferrer"><button className="text-base text-white font-medium border border-1 border-[#272746] rounded-full w-40 h-10 bg-[#272746] hover:bg-[#363662] mr-[5px] laptop:mr-[10px]" type="submit">
                            Get started
                        </button></a>
                        <button className="text-base font-semibold border border-1 border-[#272746] rounded-full w-40 h-10 ml-[5px] laptop:ml-[10px]" type="submit">
                            Learn more
                        </button>
                    </div>
                </div>
            </section>

            <section id="mission" className="text-[#15213A] flex flex-col justify-center items-center">
                <h1 className="text-2xl laptop:text-4xl font-semibold mt-16 laptop:mt-24">
                    Our mission
                </h1>
                <div className="flex flex-col laptop:flex-row items-center justify-between mt-20 laptop:mt-24 mb-20 laptop:mb-40">
                    <p className="text-center laptop:text-left w-80 laptop:w-[543px] text-[15px] laptop:text-xl font-normal">
                        Our mission is to empower businesses to streamline their payroll
                        processes and reduce costs through innovative solutions and
                        exceptional customer service. We strive to simplify the payroll
                        process and provide unparalleled value to our clients, enabling them
                        to focus on their core business objectives while achieving financial
                        stability and growth.
                    </p>
                    <img className="w-80 h-80 laptop:w-96 laptop:h-96 mt-16 laptop:mt-auto laptop:ml-20" src="/images/our_mission_img.svg" alt="" />
                </div>
            </section>
            <section className="flex flex-col justify-center items-center bg-[#d7e5f2]">
                <h1 className="mt-24 laptop:mt-28 w-[336px] laptop:w-[432px] text-3xl laptop:text-4xl font-medium text-center">
                    See how much you can save with Tandem
                </h1>
                <div className="flex flex-col laptop:flex-row mt-5 laptop:mt-20 justify-center laptop:space-x-28 items-center mb-28">
                    <img className="h-[410.4px] w-[380px] laptop:h-[453.6px] laptop:w-[420px]" src="/images/workimg.svg" alt="woriking-img" />
                    <form action method="post">
                        <div className="laptop:ml-32 laptop:mr-[124px] bg-white py-10 px-10 rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                            <div className="grid grid-flow-row space-y-1 text-left">
                                <span className="text-[#7D7D7D] text-base font-normal">Step 1 of 1</span>
                                <h3 className="text-2xl font-medium">Saving Calculator</h3>
                                <p className="text-[15px] font-light w-72 mb-8">
                                    Enter your business location, type, and size of your workforce.
                                </p>
                                <div className="space-y-5">
                                    <div className="border border-1 border-[#151515] h-8 p-1 flex rounded-md mt-8">
                                        <img className="h-5 pt-0.5 mr-2" src="/images/loc_icon.png" alt="" />
                                        <input className="w-full outline-none" type="text" name="location" id="location" placeholder="Location" />
                                    </div>
                                    <div className="border border-1 border-[#151515] h-8 p-1 flex rounded-md">
                                        <img className="h-5 pt-0.5 mr-2" src="/images/emp_icon.png" alt="" />
                                        <input className="w-full outline-none" type="text" name="location" id="location" placeholder="No. of Employes" />
                                    </div>
                                    <div className="border border-1 border-[#151515] h-8 p-1 flex rounded-md">
                                        <img className="h-5 pt-0.5 mr-2" src="/images/sub_icon.png" alt="" />
                                        <select id="type-signup" defaultValue={'DEFAULT'} aria-label="Choose Plan" required className="text-sm tracking-wide text-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full outline-none">
                                            <option disabled value="DEFAULT" hidden>
                                                Choose Plan
                                            </option>
                                            <option value="1" className="text-gray-700 font-Poppins">Basic</option>
                                        </select>
                                    </div>
                                    <button className="text-base text-white font-medium border border-1 border-[#1F3C88] rounded-full w-40 h-10 bg-[#23469f] hover:bg-[#1F3C88] mr-[5px] laptop:mr-[10px]" type="submit">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section id="demo" className="flex flex-col laptop:grid laptop:grid-cols-2 laptop:place-items-center justify-center items-center">
                <div className="flex flex-col justify-center items-center laptop:ml-32">
                    <div className="text-[#272746] text-center">
                        <h1 className="text-3xl laptop:text-4xl font-medium mt-[73px] laptop:mt-0">
                            Request Live Demo
                        </h1>
                        <p className="text-[15px] laptop:text-lg font-extralight w-[360px] mt-4">
                            Get live demo and learn how Tandem can help you to reduce your HR
                            cost.
                        </p>
                    </div>
                    <div className>
                        <img className="mt-16 laptop:hidden" src="/images/demo_icon.svg" alt="demo-img" />
                        <img className="hidden laptop:block mt-24" src="/images/demo2_icon.svg" alt="demo-img" />
                    </div>
                </div>
                <form className="grid grid-flow-row laptop:mr-40 laptop:my-24">
                    <p className="text-base text-[#363636] font-light place-items-start mt-16">
                        Please note: all fields are required.
                    </p>
                    <div className="grid grid-flow-row mt-6 laptop:mt-8 space-y-3 laptop:space-y-5">
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 laptop:py-2 placeholder:text-xs w-[360px]" type="text" name="name" id placeholder="Your Name" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 laptop:py-2 placeholder:text-xs w-[360px]" type="tel" name="phone" id placeholder="Phone Number" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 laptop:py-2 placeholder:text-xs w-[360px]" type="text" name="job" id placeholder="Job Title" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 laptop:py-2 placeholder:text-xs w-[360px]" type="text" name="biz" id placeholder="Business Name" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 laptop:py-2 placeholder:text-xs w-[360px]" type="text" name="biz_type" id placeholder="Business Type" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 laptop:py-2 placeholder:text-xs w-[360px]" type="number" name="no_emp" id placeholder="Number of Employees" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 laptop:py-2 placeholder:text-xs w-[360px]" type="text" name="city" id placeholder="City" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 laptop:py-2 placeholder:text-xs w-[360px]" type="text" name="state" id placeholder="State" />
                    </div>
                    <button className="text-base text-white font-medium border border-1 border-[#1F3C88] rounded-full w-[360px] h-12 mt-12 bg-[#23469f] hover:bg-[#1F3C88] mr-[5px] laptop:mr-[10px] mb-28" type="submit">
                        Request demo
                    </button>
                </form>
            </section>
            <section id="contact" className="flex flex-col justify-center items-center bg-[#d7e5f2]">
                <h1 className="text-3xl laptop:text-5xl font-medium laptop:font-semibold mt-24 laptop:mt-44">
                    Reach out to Us
                </h1>
                <div className="flex flex-col laptop:flex-row justify-center items-center space-y-20 laptop:space-y-0 laptop:space-x-10 mt-14 laptop:mt-28">
                    <div>
                        <p className="text-2xl text-center font-semibold">For General Inquiry</p>
                        <a target="_blank" href="mailto:info@tandempay.co">
                            <div className="left h-24 w-[360px] px-8 mt-2 laptop:mt-5 border border-1 border-[#151515] rounded-lg flex items-center justify-start">
                                <img className="mr-5" src="/images/email_icon.svg" alt="mail-img" />
                                <div className="text-left text-xl">
                                    <p>info@tandempay.co</p>
                                    <span className="text-[#737373]">will reply in 24hrs</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <p className="text-2xl text-center font-semibold">For Businesses</p>
                        <a target="_blank" href="mailto:partner@tandempay.co">
                            <div className="left h-24 w-[360px] px-8 mt-2 laptop:mt-5 border border-1 border-[#151515] rounded-lg flex items-center justify-start">
                                <img className="mr-5" src="/images/email_icon.svg" alt="mail-img" />
                                <div className="text-left text-xl">
                                    <p>partner@tandempay.co</p>
                                    <span className="text-[#737373]">will reply in 24hrs</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <p className="text-2xl text-center font-semibold">For Investor</p>
                        <a target="_blank" href="mailto:invest@tandempay.co">
                            <div className="left h-24 w-[360px] px-8 mt-2 laptop:mt-5 border border-1 border-[#151515] rounded-lg flex items-center justify-start">
                                <img className="mr-5" src="/images/email_icon.svg" alt="mail-img" />
                                <div className="text-left text-xl">
                                    <p>invest@tandempay.co</p>
                                    <span className="text-[#737373]">Will reply in 24hrs</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <p className="mb-32 w-80 text-center mt-14 laptop:mb-44 text-[#737373] text-xl font-light laptop:mt-20">
                    We are available on all days between 10 AM to 7PM
                </p>
            </section>

        </div>
    )
}

export default Landing