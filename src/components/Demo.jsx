import React from 'react'
import demo_icon from '../assets/images/demo_icon.svg'
import demo2_icon from '../assets/images/demo2_icon.svg'

const Demo = () => {
  return (
    <div>
        <section id="demo" className="flex flex-col lap:grid lap:grid-cols-2 lap:place-items-center justify-center items-center">
                <div className="flex flex-col justify-center items-center lap:ml-32">
                    <div className="text-[#272746] text-center">
                        <h1 className="text-3xl lap:text-4xl font-medium mt-[73px] lap:mt-0">
                            Request Live Demo
                        </h1>
                        <p className="text-[15px] lap:text-lg font-extralight w-[360px] mt-4">
                            Get live demo and learn how Tandem can help you to reduce your HR cost.
                        </p>
                    </div>
                    <div>
                        <img className="mt-16 lap:hidden" src={demo_icon} alt="demo-img" />
                        <img className="hidden lap:block mt-24" src={demo2_icon} alt="demo-img" />
                    </div>
                </div>


                <form className="grid grid-flow-row lap:mr-40 lap:my-24" method='post'>
                    <p className="text-base text-[#363636] font-light place-items-start mt-16">
                        Please note: all fields are required.
                    </p>
                    <div className="grid grid-flow-row mt-6 lap:mt-8 space-y-3 lap:space-y-5">
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" type="text" name="name" placeholder="Your Name" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" type="tel" name="phone" placeholder="Phone Number" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" type="text" name="job" placeholder="Job Title" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" type="text" name="biz" placeholder="Business Name" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" type="text" name="biz_type" placeholder="Business Type" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" type="number" name="no_emp" placeholder="Number of Employees" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" type="text" name="city" placeholder="City" />
                        <input className="border border-1 border-[#272746] text-sm rounded px-4 py-1 lap:py-2 placeholder:text-xs w-[360px]" type="text" name="state" placeholder="State" />
                    </div>
                    <button className="text-base text-white font-medium border border-1 border-[#1F3C88] rounded-full w-[360px] h-12 mt-12 bg-[#23469f] hover:bg-[#1F3C88] mr-[5px] lap:mr-[10px] mb-28" type="submit">
                        Request demo
                    </button>
                </form>
            </section>
    </div>
  )
}

export default Demo