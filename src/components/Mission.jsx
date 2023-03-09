import React from 'react'
import mission_img from '../assets/images/our_mission_img.svg'

const Mission = () => {
    return (
        <div>
            <section id="mission" className="text-[#15213A] flex flex-col justify-center items-center">
                <h1 className="text-2xl lap:text-4xl font-semibold mt-16 lap:mt-24">
                    Our mission
                </h1>
                <div className="flex flex-col lap:flex-row items-center justify-between mt-20 lap:mt-24 mb-20 lap:mb-40">
                    <p className="text-center lap:text-left w-80 lap:w-[543px] text-[15px] lap:text-xl font-normal">
                        Our mission is to empower businesses to streamline their payroll
                        processes and reduce costs through innovative solutions and
                        exceptional customer service. We strive to simplify the payroll
                        process and provide unparalleled value to our clients, enabling them
                        to focus on their core business objectives while achieving financial
                        stability and growth.
                    </p>
                    <img className="w-80 h-80 lap:w-96 lap:h-96 mt-16 lap:mt-auto lap:ml-20" src={mission_img} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Mission