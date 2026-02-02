import { motion as Motion } from 'framer-motion';

export default function HeroCard({ imgSrc }) {
    return (
        <div className="relative w-full aspect-square max-w-[320px] xs:max-w-[360px] sm:max-w-[410px] md:max-w-[430px] mx-auto">
            {/* IMAGE CIRCLE */}
            <div className="absolute inset-[15%] md:inset-[12%] rounded-full overflow-hidden border border-white/10 shadow-[0_25px_45px_rgba(0,0,0,0.55)] z-20">
                <img src={imgSrc} alt="Profile" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40"></div>
            </div>

            {/* QUIET STAT ROW (CALM & STABLE) */}
            <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 z-30">
                <div className="flex gap-4 px-5 py-3 bg-[#0D0D0D]/85 backdrop-blur-md border border-white/10 rounded-full shadow-[0_6px_18px_rgba(0,0,0,0.4)]">
                    <Stat value="3+" label="Years" />
                    <Divider />
                    <Stat value="25+" label="Projects" />
                    <Divider />
                    <Stat value="10+" label="Skills" />
                </div>
            </div>

            {/* OUTER HALF RING */}
            <div className="absolute inset-[5%] rounded-full border-[3px] border-l-0 border-t-white/10 border-r-white/20 border-b-white/10 z-10"></div>

            {/* SLOW BACK RING (BACKGROUND ONLY) */}
            <div className="absolute inset-0 rounded-full pointer-events-none p-[5px] z-0">
                <Motion.div
                    className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,#00E5FF,#4FC3F7,#00E5FF)] opacity-10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
            </div>
        </div>
    );
}

/* --- Small helper components (calm & readable) --- */

function Stat({ value, label }) {
    return (
        <div className="text-center">
            <div className="text-[#00E5FF] font-semibold text-sm sm:text-base">{value}</div>
            <div className="text-white/70 text-[10px] sm:text-[11px] tracking-wide">{label}</div>
        </div>
    );
}

function Divider() {
    return <div className="w-px h-6 bg-white/10" />;
}
