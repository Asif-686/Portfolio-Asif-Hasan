import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - document.documentElement.clientHeight;

            const scrolled = Math.min((scrollTop / docHeight) * 100, 100);
            setProgress(scrolled);
            setVisible(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`
                fixed right-6 bottom-10 md:bottom-12 z-50
                w-14 h-14
                rounded-full
                overflow-hidden
                transition-all duration-300
                ${
                    visible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6 pointer-events-none'
                }
            `}
        >
            {/* OUTER SHELL */}
            <div className="absolute inset-0 rounded-full bg-[#0D0D0D] border border-white/15" />

            {/* WATER */}
            <div
                className="absolute inset-0"
                style={{
                    transform: `translateY(${100 - progress}%)`,
                    transition: 'transform 0.2s linear',
                }}
            >
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    <path
                        fill="#00E5FF"
                        d="
                            M0 35
                            C 12 25, 25 45, 38 35
                            C 50 25, 62 45, 75 35
                            C 87 25, 100 45, 112 35
                            V 100
                            H 0
                            Z
                        "
                    >
                        <animate
                            attributeName="d"
                            dur="3s"
                            repeatCount="indefinite"
                            values="
                                M0 35 C12 25,25 45,38 35 C50 25,62 45,75 35 C87 25,100 45,112 35 V100 H0 Z;
                                M0 35 C12 45,25 25,38 35 C50 45,62 25,75 35 C87 45,100 25,112 35 V100 H0 Z;
                                M0 35 C12 25,25 45,38 35 C50 25,62 45,75 35 C87 25,100 45,112 35 V100 H0 Z
                            "
                        />
                    </path>
                </svg>
            </div>

            {/* ARROW — ALWAYS WHITE */}
            <div className="absolute inset-0 flex items-center justify-center text-white">
                <FiArrowUp size={18} />
            </div>
        </button>
    );
}
