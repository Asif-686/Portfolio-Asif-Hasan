import { motion as Motion } from 'framer-motion';

export default function HeroCard({ imgSrc }) {
    const badges = [
        { label: '3+ Years Experience', angle: -40 }, // upper-right arc
        { label: '25+ Projects ', angle: 40 }, // bottom-right arc
        { label: '10+ Skills', angle: 200 }, // lower arc
    ];

    return (
        <div className="relative w-full aspect-square max-w-[320px] xs:max-w-[360px] sm:max-w-[410px] md:max-w-[430px] mx-auto">
            {/* INNER IMAGE CIRCLE */}
            <div className="absolute inset-[15%] md:inset-[12%]  rounded-full overflow-hidden border border-white/10 shadow-[0_25px_45px_rgba(0,0,0,0.55)] z-20">
                <img src={imgSrc} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50"></div>
            </div>

            {/* OUTER HALF-RING (RIGHT SIDE ONLY) */}
            <div className=" absolute  inset-[5%]  rounded-full border-[3px] border-l-0  border-t-white/10  border-r-white/20  border-b-white/10 z-10"></div>

            {/* FLOATING BADGES ON THE ARC */}
            {badges.map((b, i) => {
                const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
                const radius = w < 380 ? 135 : w < 430 ? 140 : w < 540 ? 160 : w < 640 ? 185 : 195;

                // perfect circle arc distance

                // angle → radians
                const rad = (b.angle * Math.PI) / 180;

                // Convert to polar-coordinates → screen positions
                const x = radius * Math.cos(rad);
                const y = radius * Math.sin(rad);

                return (
                    <Motion.div
                        key={i}
                        animate={{ x: [x, x + 5, x], y: [y, y, y] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                        whileHover={{ scale: 1.08, boxShadow: '0 0 18px rgba(0,229,255,0.45)' }}
                        className="
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-[6px] max-w-[fit-content] bg-[#0D0D0D]/80 border border-white/10 rounded-full text tracking-wide  text-white backdrop-blur-xl shadow-[0_4px_14px_rgba(0,229,255,0.25)] text-[15px] font-medium relative overflow-hidden whitespace-nowrap"
                    >
                        {/* glowing dot */}
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_5px_#00E5FF]"></div>

                        {/* highlighted number + text */}
                        <span>
                            <span
                                className="text-[#00E5FF] font-bold text-[10px] xs:text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]
"
                            >
                                {b.label.split(' ')[0]}
                            </span>

                            <span
                                className="ml-1 opacity-90 text-[10px] xs:text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px]
"
                            >
                                {b.label.split(' ').slice(1).join(' ')}
                            </span>
                        </span>

                        {/* shine */}
                        <div className=" absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-120%] animate-shine"></div>
                    </Motion.div>
                );
            })}

            {/* SPINNING NEON BACK RING */}
            <div className="absolute inset-0 rounded-full pointer-events-none p-[5px] z-0">
                <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,#00E5FF,#4FC3F7,#00E5FF)] opacity-15 animate-spin-slower"></div>
            </div>

            <style>{`
                @keyframes spin-slower {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slower {
                    animation: spin-slower 9s linear infinite;
                }
            `}</style>
        </div>
    );
}
