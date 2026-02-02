export default function Pricing() {
    const plans = [
        {
            title: 'Basic',
            price: '$299',
            duration: 'per project',
            description: 'Best for small tasks or landing pages.',
            features: [
                'Single page website',
                'Responsive design',
                'Basic SEO setup',
                'Email support',
                '3 days delivery',
            ],
            popular: false,
        },
        {
            title: 'Standard',
            price: '$799',
            duration: 'per project',
            description: 'Perfect for growing businesses.',
            features: [
                'Multi-page website',
                'Custom UI design',
                'Performance optimization',
                'SEO friendly',
                'Priority support',
                '7 days delivery',
            ],
            popular: true,
        },
        {
            title: 'Premium',
            price: '$1499',
            duration: 'per project',
            description: 'Best for startups & advanced projects.',
            features: [
                'Full custom web app',
                'Advanced UI/UX',
                'API integration',
                'Authentication system',
                'Deployment support',
                '14 days delivery',
            ],
            popular: false,
        },
    ];

    return (
        <section
            className="
                w-full
                py-16
                px-4 sm:px-8 md:px-12 lg:px-16 xl:px-18 2xl:px-20
            "
        >
            {/* SECTION HEADER */}
            <div className="text-center mb-16">
                <p className="text-[#00E5FF] tracking-[2px] text-sm uppercase font-poppins">
                    Pricing
                </p>
                <h2 className="font-montserrat text-white font-bold text-[30px] sm:text-[36px] md:text-[42px]">
                    Flexible pricing for freelance work
                </h2>
                <p className="text-gray-400 mt-4 max-w-[600px] mx-auto">
                    Simple, transparent pricing. No hidden fees — just clear deliverables.
                </p>
            </div>

            {/* PRICING CARDS */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        className={`
                            relative
                            bg-[#101114]
                            border
                            rounded-2xl
                            p-8
                            shadow-[0_8px_25px_rgba(0,0,0,0.45)]
                            transition-all duration-500
                            hover:-translate-y-2
                            ${
                                plan.popular
                                    ? 'border-[#00E5FF]/50'
                                    : 'border-white/5'
                            }
                        `}
                    >
                        {/* POPULAR BADGE */}
                        {plan.popular && (
                            <span
                                className="
                                    absolute -top-4 left-1/2 -translate-x-1/2
                                    bg-[#00E5FF]
                                    text-black
                                    text-xs
                                    font-semibold
                                    px-4 py-1
                                    rounded-full
                                    shadow-[0_0_15px_rgba(0,229,255,0.5)]
                                "
                            >
                                Most Popular
                            </span>
                        )}

                        {/* PLAN HEADER */}
                        <h3 className="text-white font-montserrat text-[22px] font-semibold">
                            {plan.title}
                        </h3>

                        <p className="text-gray-400 text-sm mt-2">
                            {plan.description}
                        </p>

                        {/* PRICE */}
                        <div className="mt-6">
                            <span className="text-white text-[36px] font-bold">
                                {plan.price}
                            </span>
                            <span className="text-gray-400 text-sm ml-2">
                                {plan.duration}
                            </span>
                        </div>

                        {/* FEATURES */}
                        <ul className="mt-8 space-y-3">
                            {plan.features.map((feature, idx) => (
                                <li
                                    key={idx}
                                    className="text-gray-300 text-sm flex items-center gap-2"
                                >
                                    <span className="text-[#00E5FF]">✔</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <button
                            className={`
                                w-full
                                mt-8
                                py-3
                                rounded-xl
                                font-semibold
                                transition-all
                                ${
                                    plan.popular
                                        ? 'bg-[#00E5FF] text-black hover:opacity-90'
                                        : 'border border-white/10 text-white hover:border-[#00E5FF]/40'
                                }
                            `}
                        >
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
