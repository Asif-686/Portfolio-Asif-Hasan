import { FiUser, FiMail, FiMessageSquare, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
    return (
        <section className="w-full py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-18 2xl:px-20">
            {/* HEADER */}
            <div className="w-[100%] mb-20 justify-center items-center flex flex-col">
                <p className="text-[#00E5FF] tracking-[2px] text-sm uppercase font-poppins">
                    Contact
                </p>

                <h2 className="mt-4 font-montserrat text-white font-bold text-[32px] sm:text-[38px] md:text-[44px] leading-tight">
                    Have something in mind?
                </h2>

                <p className="mt-6 text-gray-400 text-[16px] leading-relaxed">
                    I’m always open to meaningful conversations, interesting projects, or
                    opportunities where I can add real value.
                </p>
            </div>

            {/* CONTENT — 45 / 55 RATIO */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-24 gap-24
    items-start lg:items-center  ">
                {/* LEFT — CONTACT SUMMARY */}
                <div className='flex flex-col '>
                    <h3 className="text-white font-montserrat text-[20px] font-semibold mb-6">
                        Reach me directly
                    </h3>

                    <div className="space-y-6">
                        <InfoItem icon={<FiMail />} label="Email" value="asifhasan4566@gmail.com" />

                        <InfoItem icon={<FiPhone />} label="Phone" value="+880 1755937471" />

                        <InfoItem icon={<FiMapPin />} label="Location" value="Remote · Worldwide" />
                    </div>

                    {/* VISUAL ANCHOR */}
                    <div className="mt-10">
                        <div className="h-px w-20 bg-[#00E5FF]/50" />
                        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                            I usually respond within 24–48 hours on business days.
                        </p>
                    </div>
                </div>

                {/* RIGHT — FORM (DOMINANT, NOT HEAVY) */}
                <div
                    className="
                        bg-[#101114]
                        border border-white/5
                        rounded-2xl
                        p-6 sm:p-8 md:p-10
                        shadow-[0_14px_40px_rgba(0,0,0,0.55)]
                    "
                >
                    

                    <form className="space-y-4">
                        <Field icon={<FiUser />} placeholder="Your name" />

                        <Field icon={<FiMail />} placeholder="Email address" type="email" />

                        <Field
                            icon={<FiMessageSquare />}
                            placeholder="Tell me about your project"
                            textarea
                        />

                        <button
                            type="submit"
                            className="
                                w-full
                                mt-4
                                py-3.5
                                rounded-xl
                                bg-[#00E5FF]
                                text-black
                                font-semibold
                                transition-all
                                hover:opacity-90
                                hover:shadow-[0_0_25px_rgba(0,229,255,0.35)]
                            "
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

/* ---------- LEFT INFO ITEM ---------- */

function InfoItem({ icon, label, value }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="text-[#00E5FF] text-lg mt-1">{icon}</div>

            <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
                <p className="text-white font-medium">{value}</p>
            </div>
        </div>
    );
}

/* ---------- FORM FIELD ---------- */

function Field({ icon, placeholder, type = 'text', textarea }) {
    return (
        <div
            className="
                flex gap-3
                bg-[#0D0D0D]
                border border-white/10
                rounded-xl
                px-4 py-3.5
                focus-within:border-[#00E5FF]/50
                focus-within:shadow-[0_0_12px_rgba(0,229,255,0.2)]
                transition
            "
        >
            <div className="pt-1 text-[#00E5FF] text-lg">{icon}</div>

            {textarea ? (
                <textarea
                    rows="4"
                    placeholder={placeholder}
                    className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none resize-none"
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                />
            )}
        </div>
    );
}
