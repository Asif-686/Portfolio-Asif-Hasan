import { Disclosure } from '@headlessui/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const links = [
        { name: 'Home', href: '#home' },
        { name: 'Features', href: '#features' },
        { name: 'Portfolio', href: '#projects' },
        { name: 'Resume', href: '#resume' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <Disclosure
            as="nav"
            className="fixed top-0 left-0 w-full bg-[#050505]/80 backdrop-blur-lg border-b border-white/10 z-50"
        >
            {({ open, close }) => (
                <>
                    {/* TOP NAV */}
                    <div className="max-w-[1440px] mx-auto w-full py-4 flex justify-between items-center px-4 sm:px-8 lg:px-16 xl:px-18">
                        {/* LOGO with scaling */}
                        <div className="flex items-center gap-3 select-none cursor-pointer">
                            <div
                                className="
                                    w-8 h-8 
                                    xs:w-9 xs:h-9
                                    sm:w-10 sm:h-10
                                    md:w-12 md:h-12
                                    lg:w-[50px] lg:h-[50px]
                                    xl:w-[54px] xl:h-[54px]    /* 1025–1280px increased */
                                    2xl:w-[60px] 2xl:h-[60px]
                                    rounded-full border border-white/10 
                                    bg-cover bg-center bg-no-repeat
                                "
                                style={{ backgroundImage: "url('/Asif-logo.png')" }}
                            />
                            <p
                                className="
                                font-audiowide font-bold tracking-wide text-gray-200 
                                text-lg xs:text-xl sm:text-2xl lg:text-[26px] xl:text-[30px] 2xl:text-[34px]
                            "
                            >
                                <span className="text-[#00E5FF] text-lg xs:text-xl sm:text-2xl lg:text-[26px] xl:text-[30px] 2xl:text-[34px]"> ASIF</span>. 
                            </p>
                        </div>

                        {/* DESKTOP MENU */}
                        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
                            {links.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-gray-300 hover:text-white font-montserrat transition group tracking-wide active:text-[#00E5FF]"
                                >
                                    {item.name}
                                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#00E5FF] transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}

                            <a
                                href="#contact"
                                className="px-6 py-2 rounded-md bg-gradient-to-r from-[#00E5FF] to-[#4FC3F7] text-white font-semibold font-montserrat
                                transition-all duration-300 hover:scale-110"
                            >
                                Hire Me
                            </a>
                        </div>

                        {/* MOBILE BUTTON */}
                        <Disclosure.Button className="lg:hidden text-gray-300 hover:text-[#00E5FF] transition">
                            {open ? <X size={28} /> : <Menu size={28} />}
                        </Disclosure.Button>
                    </div>

                    {/* MOBILE SLIDE PANEL */}
                    <Disclosure.Panel
                        static
                        className="
                            lg:hidden fixed top-0 right-0 h-screen 
                            w-[85%] xs:w-[75%] sm:w-[60%] md:w-[50%] 
                            bg-[#0A0A0A] shadow-xl border-l border-white/10
                            px-6 py-10 transform transition-all duration-300
                        "
                        style={{
                            transform: open ? 'translateX(0)' : 'translateX(100%)',
                        }}
                    >
                        {/* CLOSE BUTTON INSIDE PANEL */}
                        <button
                            onClick={() => close()}
                            className="absolute top-6 right-6 text-gray-300 hover:text-[#00E5FF] transition"
                        >
                            <X size={26} />
                        </button>

                        <div className="flex flex-col gap-6 mt-10">
                            {links.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => close()}
                                    className="text-gray-300 text-[13px] sm:text-[14px] hover:text-[#00E5FF] transition font-medium tracking-wide"
                                >
                                    {item.name}
                                </a>
                            ))}

                            <a
                                href="#contact"
                                onClick={() => close()}
                                className="mt-4 w-full text-center py-3 rounded-md 
                                bg-gradient-to-r from-[#00E5FF] to-[#4FC3F7] 
                                text-white font-semibold hover:scale-105 transition-all duration-300"
                            >
                                Hire Me
                            </a>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
