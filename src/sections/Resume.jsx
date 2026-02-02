import React, { useState } from 'react';
import { FiCheckCircle, FiStar, FiBriefcase, FiMonitor, FiCode, FiPenTool } from 'react-icons/fi';
import { SkillBar } from '../components/SkillBar';

export default function Resume() {
    const tabs = ['Design Skills', 'Experience', 'Education', 'Other Skills'];
    const [active, setActive] = useState('Design Skills');

    return (
        <div id="resume" className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-18 2xl:px-20">
            {/* Heading */}
            <div className="text-center mb-12">
                <p className="text-[#00E5FF] tracking-[2px] text-sm uppercase font-poppins">
                    My Resume
                </p>
                <h2 className="font-montserrat text-white font-bold text-[30px] sm:text-[36px] md:text-[42px]">
                    Professional Summary
                </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-5 mb-12">
                {tabs.map((t, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(t)}
                        className={`
              px-7 py-3 text-[15px] rounded-xl font-poppins tracking-wide transition-all duration-500
              bg-[#151618] border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.4)]
              hover:scale-[1.05]

              ${
                  active === t
                      ? 'text-black bg-gradient-to-r from-[#00E5FF] to-[#4FC3F7] shadow-[0_0_25px_rgba(0,229,255,0.6)] scale-[1.08]'
                      : 'text-gray-300 hover:text-white hover:border-[#00E5FF]/40'
              }
            `}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* CONTENT SECTIONS */}
            {/* ---------------------------------------------- */}
            {/* 1: DESIGN + DEVELOPMENT SKILLS SECTION */}
            {active === 'Design Skills' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* DESIGN SKILLS */}
                    <div>
                        <p className="text-[#00E5FF] uppercase text-sm tracking-wider font-poppins mb-2">
                            Features
                        </p>

                        <h3 className="text-white font-montserrat text-[28px] font-semibold mb-6">
                            Design Skill
                        </h3>

                        {[
                            { name: 'Photoshop', value: 100, icon: <FiPenTool /> },
                            { name: 'Figma', value: 95, icon: <FiMonitor /> },
                            { name: 'Adobe XD', value: 60, icon: <FiPenTool /> },
                            { name: 'Illustrator', value: 70, icon: <FiStar /> },
                            { name: 'Design', value: 90, icon: <FiCheckCircle /> },
                        ].map((s, i) => (
                            <SkillBar key={i} skill={s} />
                        ))}
                    </div>

                    {/* DEVELOPMENT SKILLS */}
                    <div>
                        <p className="text-[#00E5FF] uppercase text-sm tracking-wider font-poppins mb-2">
                            Features
                        </p>

                        <h3 className="text-white font-montserrat text-[28px] font-semibold mb-6">
                            Development Skill
                        </h3>

                        {[
                            { name: 'HTML', value: 100, icon: <FiCode /> },
                            { name: 'CSS', value: 95, icon: <FiCode /> },
                            { name: 'JavaScript', value: 60, icon: <FiMonitor /> },
                            { name: 'Software', value: 70, icon: <FiBriefcase /> },
                            { name: 'Plugin', value: 90, icon: <FiCheckCircle /> },
                        ].map((s, i) => (
                            <SkillBar key={i} skill={s} />
                        ))}
                    </div>
                </div>
            )}

            {/* ---------------------------------------------- */}
            {/* 2: EXPERIENCE SECTION */}
            {active === 'Experience' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Job Experience */}
                    <div>
                        <p className="text-[#00E5FF] uppercase text-sm tracking-wider mb-2">
                            2010 - 2022
                        </p>
                        <h3 className="text-white font-montserrat text-[28px] font-semibold mb-6">
                            Job Experience
                        </h3>

                        <div className="bg-[#101114] p-6 rounded-xl border border-white/5 shadow-lg">
                            <h4 className="text-white font-montserrat text-[20px] font-semibold">
                                Sr. Software Engineer
                            </h4>
                            <p className="text-gray-400 font-poppins mb-4">
                                Google Out Tech – (2017 - Present)
                            </p>

                            <p className="text-gray-400 font-poppins leading-relaxed">
                                Google's hiring process values culture and teamwork, focusing on
                                people who uplift the organization.
                            </p>
                        </div>
                    </div>

                    {/* Trainer Experience */}
                    <div>
                        <p className="text-[#00E5FF] uppercase text-sm tracking-wider mb-2">
                            2001 - 2020
                        </p>
                        <h3 className="text-white font-montserrat text-[28px] font-semibold mb-6">
                            Trainer Experience
                        </h3>

                        <div className="bg-[#101114] p-6 rounded-xl border border-white/5 shadow-lg">
                            <h4 className="text-white font-montserrat text-[20px] font-semibold">
                                Gym Instructor
                            </h4>
                            <p className="text-gray-400 font-poppins mb-4">
                                Rainbow Gym Center (2015 - 2020)
                            </p>

                            <p className="text-gray-400 font-poppins leading-relaxed">
                                Provided training to prepare people to work in various sectors of
                                physical fitness and body culture.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* ---------------------------------------------- */}
            {/* 3: EDUCATION SECTION */}
            {active === 'Education' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* LEFT PANEL — EDUCATION */}
                    <div>
                        <p className="text-[#00E5FF] uppercase text-sm tracking-wider mb-2">
                            2014 - 2024
                        </p>

                        <h3 className="text-white font-montserrat text-[28px] font-semibold mb-10">
                            Education Quality
                        </h3>

                        {/* Timeline Wrapper */}
                        <div className="relative">
                            {/* MAIN TIMELINE ROD */}
                            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-[#1b1d21]" />

                            {[
                                {
                                    title: 'MSc in Computer Science',
                                    inst: 'University of DVI',
                                    year: '2022 – 2024',
                                    badge: '3.95/4',
                                    desc: 'Advanced coursework in distributed systems, cloud computing and software architecture.',
                                },
                                {
                                    title: 'BSc in Computer Science',
                                    inst: 'University of DVI',
                                    year: '2018 – 2022',
                                    badge: '3.90/4',
                                    desc: 'Studied CS fundamentals, data structures, algorithms and full-stack development.',
                                },
                                {
                                    title: 'Higher Secondary Certificate (HSC)',
                                    inst: 'National College',
                                    year: '2016 – 2018',
                                    badge: '5.00',
                                    desc: 'Science major with strong focus on mathematics, physics and analytical thinking.',
                                },
                            ].map((item, i) => (
                                <div key={i} className="relative group mt-12 lg:pl-16">
                                    {/* CONNECTING HORIZONTAL ROD */}
                                    <div className="hidden lg:block absolute left-0 top-1/2 w-10 h-[2px] -translate-y-1/2 bg-[#2a2c31] group-hover:bg-[#00E5FF] transition-all duration-300" />

                                    {/* DOT */}
                                    <div
                                        className="
              hidden lg:block absolute left-10 top-1/2 -translate-y-1/2
              w-5 h-5 rounded-full bg-[#0D0D0D] border-2 border-[#3c3f43]
              group-hover:border-[#00E5FF] group-hover:shadow-[0_0_12px_#00E5FF]
              transition-all duration-300
            "
                                    />

                                    {/* CARD */}
                                    <div
                                        className="
              bg-[#101114] p-6 rounded-xl border border-white/5
              shadow-[0_8px_25px_rgba(0,0,0,0.45)]
              transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#00E5FF]/40
            "
                                    >
                                        <div
                                            className="
                absolute right-6 top-6 bg-[#121317] px-4 py-1 rounded-md text-[#00E5FF]
                border border-white/10 font-poppins text-sm shadow-[0_0_15px_rgba(0,229,255,0.25)]
              "
                                        >
                                            {item.badge}
                                        </div>

                                        <h4 className="text-white font-montserrat text-[20px] font-semibold">
                                            {item.title}
                                        </h4>

                                        <p className="text-gray-400 font-poppins mb-4">
                                            {item.inst} ({item.year})
                                        </p>

                                        <div className="w-full h-px bg-white/5 my-4" />

                                        <p className="text-gray-400 font-poppins leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT PANEL — EXPERIENCE */}
                    <div>
                        <p className="text-[#00E5FF] uppercase text-sm tracking-wider mb-2">
                            2018 - Present
                        </p>

                        <h3 className="text-white font-montserrat text-[28px] font-semibold mb-10">
                            Job Experience
                        </h3>

                        {/* Timeline Wrapper */}
                        <div className="relative">
                            {/* MAIN TIMELINE ROD */}
                            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-[#1b1d21]" />

                            {[
                                {
                                    title: 'Senior Software Engineer',
                                    inst: 'Google Out Tech',
                                    year: '2022 – Present',
                                    badge: 'USA',
                                    desc: 'Building scalable applications, leading feature development and mentoring junior engineers.',
                                },
                                {
                                    title: 'Frontend Developer',
                                    inst: 'Creative IT',
                                    year: '2018 – 2022',
                                    badge: 'BD',
                                    desc: 'Developed responsive UIs, dashboards, animations, design systems and product features.',
                                },
                            ].map((item, i) => (
                                <div key={i} className="relative group mt-12 lg:pl-16">
                                    {/* CONNECTOR */}
                                    <div className="hidden lg:block absolute left-0 top-1/2 w-10 h-[2px] -translate-y-1/2 bg-[#2a2c31] group-hover:bg-[#00E5FF] transition-all" />

                                    {/* DOT */}
                                    <div
                                        className="
              hidden lg:block absolute left-10 top-1/2 -translate-y-1/2
              w-5 h-5 rounded-full bg-[#0D0D0D] border-2 border-[#3c3f43]
              group-hover:border-[#00E5FF] group-hover:shadow-[0_0_12px_#00E5FF]
              transition-all
            "
                                    />

                                    {/* CARD */}
                                    <div
                                        className="
              bg-[#101114] p-6 rounded-xl border border-white/5
              shadow-[0_8px_25px_rgba(0,0,0,0.45)]
              transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#00E5FF]/40
            "
                                    >
                                        <div
                                            className="
                absolute right-6 top-6 bg-[#121317] px-4 py-1 rounded-md text-[#00E5FF]
                border border-white/10 font-poppins text-sm shadow-[0_0_15px_rgba(0,229,255,0.25)]
              "
                                        >
                                            {item.badge}
                                        </div>

                                        <h4 className="text-white font-montserrat text-[20px] font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400 font-poppins mb-4">
                                            {item.inst} ({item.year})
                                        </p>

                                        <div className="w-full h-px bg-white/5 my-4" />

                                        <p className="text-gray-400 font-poppins leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ---------------------------------------------- */}
            {/* 4: OTHER SKILLS */}
            {active === 'Other Skills' && (
                <div>
                    <p className="text-[#00E5FF] uppercase text-sm tracking-wider mb-4 text-center">
                        My Tools & Skill Set
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <FiCode />, name: 'Coding' },
                            { icon: <FiMonitor />, name: 'UI Design' },
                            { icon: <FiPenTool />, name: 'Branding' },
                            { icon: <FiStar />, name: 'Creativity' },
                            { icon: <FiBriefcase />, name: 'Projects' },
                            { icon: <FiCheckCircle />, name: 'Problem Solving' },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className="bg-[#101114] p-6 rounded-xl border border-white/5 shadow-lg 
                           transition-all duration-500 md:hover:-translate-y-2 md:hover:border-[#00E5FF]/50 flex flex-col items-center gap-3"
                            >
                                <div
                                    className="w-14 h-14 rounded-xl bg-[#1A1C1F] border border-white/10 
                                flex items-center justify-center text-[#00E5FF] text-3xl shadow-[0_0_15px_rgba(0,229,255,0.25)]"
                                >
                                    {s.icon}
                                </div>

                                <p className="text-white font-poppins text-[15px] tracking-wide">
                                    {s.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
