import { TypeAnimation } from 'react-type-animation';
import { Facebook, Instagram, Linkedin, Github, Figma, Code, Cpu } from 'lucide-react';
import HeroCard from '../components/HeroCard';

export default function Hero() {
    return (
        <section
            id="home"
            className="bg-[#0A0A0A] text-white pt-[108px] sm:pt-[115px] md:pt-[120px] lg:pt-[125px] xl:pt-[130px] 2xl:pt-[130px] pb-20 flex justify-center w-full overflow-hidden "
        >
            <div className="max-w-[1440px] w-full flex flex-col lg:flex-row items-center gap-16 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-18 2xl:px-20">
                {/* LEFT CONTENT */}
                <div className="flex flex-col w-[100%] lg:w-[55%]">
                    {/* Label */}
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] tracking-[3px] text-gray-400 mb-3 font-montserrat">
                        WELCOME TO MY WORLD
                    </p>

                    {/* Main Titles */}
                    <h1
                        className="text-[30px] sm:text-[42px] md:text-[52px] lg:text-[44px] xl:text-[60px] 
 font-bold leading-tight font-montserrat tracking-[1px]"
                    >
                        Hi, I'm <span className="text-[#00E5FF]">ASIF HASAN</span>
                    </h1>

                    {/* Animated Job Titles */}
                    <div className="text-[28px] sm:text-[42px] md:text-[52px] lg:text-[44px] xl:text-[56px]  font-bold mt-2 text-gray-200 flex font-montserrat tracking-[1px]">
                        <TypeAnimation
                            sequence={[
                                'A Frontend Engineer',
                                2000,
                                'A React Developer',
                                2000,
                                'A UI/UX Enthusiast',
                                2000,
                                'A Problem Solver',
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    {/* Description */}
                    <p
                        className="mt-4 text-gray-400 leading-relaxed font-poppins tracking-[1.2px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px] max-w-[85%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[55%]"
                    >
                        I create engaging digital experiences using animation, clean UI, and modern
                        tools. I focus on making interactions smooth, meaningful, and visually
                        exciting.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4 mt-6 sm:mt-8 md:mt-10">
                        <button className="px-[18px] py-[9px] sm:px-[18px] sm:py-[9px] md:px-[18px] md:py-[9px] lg:px-[20px] lg:py-[10px] xl:px-[22px] xl:py-[11px] 2xl:px-[24px] 2xl:py-[12px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[17px] bg-[#00E5FF] border-[#00E5FF] border-[2px] rounded-lg font-medium hover:bg-[#4FC3F7] transition-all font-montserrat tracking-[1px]">
                            DOWNLOAD CV
                        </button>

                        <button className="px-[16px] py-[8px] sm:px-[18px] sm:py-[9px] md:px-[18px] md:py-[9px] lg:px-[20px] lg:py-[10px] xl:px-[22px] xl:py-[11px] 2xl:px-[24px] 2xl:py-[12px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[17px] border border-gray-500 rounded-lg hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all  font-montserrat tracking-[1px]">
                            CONTACT ME
                        </button>
                    </div>

                    {/* SOCIAL & SKILLS */}
                    <div className="flex flex-col md:flex-row gap-7 md:gap-14 mt-8 md:mt-10 lg:mt-12">
                        {/* SOCIAL ICONS */}
                        <div>
                            <p className="text-gray-400 text-sm mb-2 md:mb-3 tracking-widest">
                                FIND WITH ME
                            </p>
                            <div className="flex gap-4">
                                {[Facebook, Instagram, Linkedin, Github].map((Icon, i) => (
                                    <div
                                        key={i}
                                        className="
                                        w-12 h-12 bg-[#111111] rounded-xl flex items-center justify-center
                                        border border-white/10 shadow-[0_10px_28px_rgba(0,30,60,0.45)]
                                        transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:border-[#00E5FF]/50
                                        group"
                                    >
                                        <Icon className="text-white/90 w-4 h-4 sm:w-5 sm:h-5 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5 xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] group-hover:text-[#00E5FF]" />

                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SKILL ICONS */}
                        <div>
                            <p className="text-gray-400 text-sm mb-3 tracking-widest">
                                BEST SKILL ON
                            </p>
                            <div className="flex gap-4">
                                {[Code, Cpu, Figma].map((Icon, i) => (
                                    <div
                                        key={i}
                                        className="
                                        w-12 h-12 bg-[#111111] rounded-xl flex items-center justify-center
                                        border border-white/10 shadow-[0_10px_28px_rgba(0,30,60,0.45)]
                                        transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:border-[#00E5FF]/40 
                                        group"
                                    >
                                       <Icon className="text-white/90 w-4 h-4 sm:w-5 sm:h-5 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5 xl:w-[20px] xl:h-[20px] 2xl:w-[22px] 2xl:h-[22px] group-hover:text-[#00E5FF]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE — HERO IMAGE */}
                <div className="w-[100%] lg:w-[45%] flex justify-start xs lg:justify-centre ">
                    <div className="w-full max-w-[460px]">
                        <HeroCard imgSrc="/asif.png" />
                    </div>
                </div>
            </div>
        </section>
    );
}
