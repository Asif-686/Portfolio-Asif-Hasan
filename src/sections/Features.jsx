import React from 'react';
import { FaBusinessTime, FaMobileAlt, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { IoIosColorPalette } from 'react-icons/io';

export default function Features() {
    const features = [
        {
            title: 'Business Strategy',
            desc: 'I analyze, plan and build high-impact strategy to maximize growth.',
            icon: <FaBusinessTime className="text-[#00E5FF] text-[26px]" />,
        },
        {
            title: 'App Development',
            desc: 'Building fast, scalable and modern mobile applications.',
            icon: <FaMobileAlt className="text-[#00E5FF] text-[26px]" />,
        },
        {
            title: 'Web Development',
            desc: 'Creating visually appealing and performance-optimized solutions.',
            icon: <FaLaptopCode className="text-[#00E5FF] text-[26px]" />,
        },
        {
            title: 'SEO Marketing',
            desc: 'Improve ranking, brand reach and targeted audience growth.',
            icon: <FaChartLine className="text-[#00E5FF] text-[26px]" />,
        },
        {
            title: 'UI/UX Design',
            desc: 'Clean designs, modern interfaces & delightful user experiences.',
            icon: <MdDesignServices className="text-[#00E5FF] text-[26px]" />,
        },
        {
            title: 'Brand Identity',
            desc: 'Create identity systems that feel modern, bold and consistent.',
            icon: <IoIosColorPalette className="text-[#00E5FF] text-[26px]" />,
        },
    ];

    return (
        <div
            className="w-full max-w-[1440px] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18 2xl:py-20 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-18 2xl:px-20 mx-auto"
            id="features"
        >
            {/* Header */}
            <div className="mb-10">
                <p className="text-[#00E5FF] font-semibold tracking-[2px] text-[14px] sm:text-[15px] uppercase">
                    Features
                </p>

                <h2
                    className="mt-2 font-montserrat font-bold text-white 
          text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px]"
                >
                    What I Do
                </h2>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-wrap gap-4 lg:gap-5 xl:gap-6 justify-between">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="
        flex flex-col gap-4 p-7 
        w-full sm:w-[48%] lg:w-[31.5%] xl:w-[32%]
        bg-[#111214] border border-white/10 rounded-xl
        shadow-[0px_10px_35px_rgba(0,0,0,0.6)] 
        hover:shadow-[0px_15px_40px_rgba(0,229,255,0.15)]
        hover:-translate-y-2 transition-all duration-300
        min-h-[230px]
      "
                    >
                        <div className="w-14 h-14 rounded-xl bg-[#1A1B1F] flex items-center justify-center border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
                            {item.icon}
                        </div>

                        <h3 className="text-white font-montserrat font-semibold text-[17px] sm:text-[18px] lg:text-[19px]">
                            {item.title}
                        </h3>

                        <p className="text-gray-400 font-poppins text-[14px] sm:text-[15px] leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
