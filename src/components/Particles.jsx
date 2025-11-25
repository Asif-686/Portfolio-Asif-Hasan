// Generate random particles ONCE when the file loads.
// This is pure & stable for React — not executed on re-render.
const PARTICLES = Array.from({ length: 50 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 2,
}));

export default function Particles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {PARTICLES.map((p, i) => (
                <span
                    key={i}
                    className="absolute w-[4px] md:w-[4.5px] lg:w-[5px] h-[4px] md:h-[4.5px] lg:h-[5px] bg-[#00E5FF] rounded-full animate-float"
                    style={{
                        top: `${p.top}%`,
                        left: `${p.left}%`,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        opacity: 0.45,
                    }}
                />
            ))}
        </div>
    );
}
