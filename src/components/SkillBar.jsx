import React, { useEffect, useState } from 'react';

export function SkillBar({ skill }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = skill.value;
        const duration = 1400;
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(counter);
            }
            setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(counter);
    }, [skill.value]);

    return (
        <div className="mb-7">
            <div className="flex justify-between mb-2 items-center">
                <div className="flex items-center gap-2 text-gray-300 font-poppins">
                    <span className="text-[#00E5FF] text-lg">{skill.icon}</span>
                    {skill.name}
                </div>
                <p className="text-gray-300 font-poppins">{count}%</p>
            </div>

            <div className="w-full h-3 bg-[#0C0C0C] rounded-full overflow-hidden relative">
                <div
                    className="skill-fill h-full rounded-full"
                    style={{ '--target-width': `${skill.value}%` }}
                ></div>

                <div
                    className="skill-pointer"
                    style={{ left: `calc(${skill.value}% - 8px)` }}
                ></div>
            </div>
        </div>
    );
}
