import React, { useState } from 'react';
import { FiHeart, FiExternalLink } from 'react-icons/fi';

export default function Portfolio() {
    const filters = ['All Projects', 'WordPress', 'Web App', 'UI/UX', 'Mobile App'];

    const projects = [
        {
            title: 'Fitness Landing – WordPress',
            category: 'WordPress',
            likes: 1085,
            img: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1400&q=60',
        },
        {
            title: 'Agency Portfolio – Web App',
            category: 'Web App',
            likes: 533,
            img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=60',
        },
        {
            title: 'Personal Portfolio UI',
            category: 'UI/UX',
            likes: 556,
            img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=60',
        },
        {
            title: 'Food Delivery – Mobile App',
            category: 'Mobile App',
            likes: 742,
            img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c43?auto=format&fit=crop&w=1400&q=60',
        },
        {
            title: 'SaaS Dashboard – Web App',
            category: 'Web App',
            likes: 624,
            img: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=1400&q=60',
        },
        {
            title: 'Business Site – WordPress',
            category: 'WordPress',
            likes: 412,
            img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=60',
        },
    ];

    const [activeFilter, setActiveFilter] = useState('All Projects');

    const filtered =
        activeFilter === 'All Projects'
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <div
            id="projects"
            className="w-full py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18 2xl:py-20 px-6 sm:px-10 lg:px-20"
        >
            <div className="text-center mb-12">
                <p className="text-[#00E5FF] tracking-[2px] text-sm uppercase font-poppins">
                    Visit my portfolio and keep your feedback
                </p>
                <h2 className="font-montserrat text-white font-bold text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] mt-2">
                    Featured Projects
                </h2>
            </div>

            {/* FILTERS */}
            <div className="flex justify-center flex-wrap gap-4 mb-12">
                {filters.map((f, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveFilter(f)}
                        className={`
              px-6 py-3 rounded-xl text-sm font-poppins transition-all duration-300
              shadow-[0_6px_20px_rgba(0,0,0,0.35)]
              bg-gradient-to-b from-[#18191D] to-[#101114]
              border border-white/5
              ${
                  activeFilter === f
                      ? 'text-[#00E5FF] font-semibold bg-gradient-to-r from-[#00E5FF] to-[#4FC3F7] shadow-[0_0_20px_rgba(0,229,255,0.6)] scale-[1.02]'
                      : 'text-gray-200 font-normal hover:text-white hover:border-[#00E5FF]/50 hover:shadow-[0_0_14px_rgba(0,229,255,0.35)]'
              }
            `}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* CARDS */}
            <div className="flex flex-wrap gap-6 justify-between">
                {filtered.map((item, idx) => (
                    <div
                        key={idx}
                        className="
              w-full sm:w-[48%] lg:w-[32%]
              bg-[#101114] rounded-2xl p-5 
              border border-white/5 
              shadow-[0_8px_30px_rgba(0,0,0,0.55)]
              transition-all duration-500
              hover:-translate-y-2 hover:border-[#00E5FF]/60 hover:shadow-[0_14px_45px_rgba(0,229,255,0.35)]
              group
            "
                    >
                        <div className="relative w-full h-[220px] md:h-[250px] rounded-xl overflow-hidden">
                            <img
                                src={item.img}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                alt={item.title}
                            />
                            <div className="absolute top-3 right-3 bg-black/45 backdrop-blur-md w-8 h-8 rounded-md flex items-center justify-center border border-white/20 group-hover:border-[#00E5FF]/70 transition-all">
                                <FiExternalLink className="text-white text-[18px]" />
                            </div>
                        </div>

                        <p className="mt-5 text-[#00E5FF] text-[13px] tracking-wide uppercase font-poppins">
                            {item.category}
                        </p>

                        <h3 className="text-white font-montserrat font-semibold text-[17px] sm:text-[18px] leading-relaxed mt-1">
                            {item.title}
                        </h3>

                        <div className="flex items-center gap-2 text-gray-400 text-sm mt-3 font-poppins">
                            <FiHeart className="text-gray-300 text-[16px] group-hover:text-[#00E5FF] transition-colors" />
                            {item.likes}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
