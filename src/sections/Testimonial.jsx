import { useState, useEffect } from 'react';

export default function Testimonial() {
    const testimonials = [
        {
            name: 'Nevine Acotanza',
            role: 'Chief Operating Officer',
            company: 'Rainbow Themes',
            project: 'Android App Development',
            // WordPress image supports resizing via ?w=
            img: 'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/final-home-1st.png?w=1200',
            review: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
        },
        {
            name: 'Jonathan Miller',
            role: 'Product Manager',
            company: 'TechNova Labs',
            project: 'SaaS Dashboard Development',
            img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=1000&q=80&auto=format&fit=crop',
            review: 'The project was delivered with exceptional attention to detail. Communication was consistent, timelines were respected, and the final product exceeded expectations.',
        },
        {
            name: 'Sarah Williams',
            role: 'Founder',
            company: 'Creative Spark Studio',
            project: 'Portfolio Website & Branding',
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&q=80&auto=format&fit=crop',
            review: 'An absolute professional to work with. The design choices were thoughtful, modern, and aligned perfectly with our brand vision.',
        },
        {
            name: 'David Chen',
            role: 'CTO',
            company: 'CloudCore Systems',
            project: 'Web App Architecture',
            img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1000&q=80&auto=format&fit=crop',
            review: 'Strong technical expertise and a problem-solving mindset. The architecture decisions helped us scale confidently and efficiently.',
        },
        {
            name: 'Emily Rodriguez',
            role: 'Marketing Lead',
            company: 'NextGen Solutions',
            project: 'Landing Page Optimization',
            img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&q=80&auto=format&fit=crop',
            review: 'The new landing page significantly improved our conversion rate. Clean design, fast performance, and excellent collaboration throughout.',
        },
    ];

    const [index, setIndex] = useState(0);

    /* AUTO SCROLL LOGIC */
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000); // ⏱ change delay here (ms)

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const t = testimonials[index];

    return (
        <section
            className="
                w-full
                py-16
                px-4 sm:px-8 md:px-12 lg:px-16 xl:px-18 2xl:px-20
            "
        >
            {/* SECTION HEADER */}
            <div className="text-center mb-14">
                <p className="text-[#00E5FF] tracking-[2px] text-sm uppercase font-poppins">
                    Testimonial
                </p>
                <h2 className="font-montserrat text-white font-bold text-[30px] sm:text-[36px] md:text-[42px]">
                    What it’s like working with me
                </h2>
            </div>

            {/* OUTER WRAPPER */}
            <div
                className="
                    relative
                    max-w-[1200px] mx-auto
                    bg-[#101114]
                    border border-white/5
                    rounded-2xl
                    shadow-[0_8px_25px_rgba(0,0,0,0.45)]
                    p-6 sm:p-8 lg:p-12
                    overflow-hidden
                "
            >
                {/* SUBTLE BACKGROUND PATTERN */}
                <div
                    className="
                        absolute inset-0
                        opacity-[0.03]
                        pointer-events-none
                        bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)]
                        [background-size:22px_22px]
                    "
                />

                {/* WATERMARK QUOTE */}
                <div
                    className="
                        absolute -top-10 right-10
                        text-white/5
                        text-[220px]
                        font-serif
                        pointer-events-none
                        select-none
                    "
                >
                    “
                </div>

                {/* CONTENT */}
                <div className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-20 items-center">
                        {/* LEFT — IMAGE CARD */}
                        <div
                            className="
                                bg-[#0d0e12]
                                rounded-xl
                                p-3.5 md:p-5
                                border border-white/10
                                shadow-[0_8px_25px_rgba(0,0,0,0.45)]
                            "
                        >
                            <div className="w-full h-[260px] rounded-lg overflow-hidden mb-5">
                                <img
                                    src={t.img}
                                    alt={t.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h4 className="text-white font-montserrat font-semibold text-[20px]">
                                {t.name}
                            </h4>
                            <p className="text-gray-400 text-sm mt-1">{t.role}</p>
                            <p className="text-[#00E5FF] text-xs uppercase tracking-[2px] mt-3">
                                {t.company}
                            </p>
                        </div>

                        {/* RIGHT — COMMENT */}
                        <div className="max-w-[520px]">
                            <p className="text-gray-300 font-poppins text-[18px] leading-relaxed">
                                “{t.review}”
                            </p>

                            <p className="mt-6 text-sm text-gray-400">
                                Project: <span className="text-[#00E5FF]">{t.project}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROGRESS (CLICKABLE + AUTO SYNCED) */}
            <div className="flex justify-center gap-3 mt-10">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`
                            h-[3px] w-10 rounded-full transition-all duration-300
                            ${i === index ? 'bg-[#00E5FF]' : 'bg-white/20'}
                            hover:bg-[#00E5FF]/70
                            cursor-pointer
                        `}
                    />
                ))}
            </div>
        </section>
    );
}
