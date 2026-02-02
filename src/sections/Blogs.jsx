export default function Blogs() {
    const blogs = [
        {
            title: 'How I Build Scalable React Applications',
            excerpt:
                'A practical breakdown of my approach to structuring React apps for scalability, performance, and maintainability.',
            date: 'March 12, 2024',
            tag: 'React',
            link: '#',
        },
        {
            title: 'Designing Clean UI Without Overengineering',
            excerpt:
                'Thoughts on building modern interfaces that feel intentional, usable, and easy to maintain.',
            date: 'February 28, 2024',
            tag: 'UI/UX',
            link: '#',
        },
        {
            title: 'Lessons Learned From Freelancing Full-Time',
            excerpt:
                'Key takeaways from working with international clients, managing scope, and delivering quality work consistently.',
            date: 'January 18, 2024',
            tag: 'Freelancing',
            link: '#',
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
                <p className="text-[#00E5FF] tracking-[2px] text-sm uppercase font-poppins">Blog</p>
                <h2 className="font-montserrat text-white font-bold text-[30px] sm:text-[36px] md:text-[42px]">
                    Writing & Insights
                </h2>
                <p className="text-gray-400 mt-4 max-w-[600px] mx-auto">
                    I occasionally write about development, design, and freelancing.
                </p>
            </div>

            {/* BLOG CARDS */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogs.map((blog, i) => (
                    <article
                        key={i}
                        className="
                            bg-[#101114]
                            border border-white/5
                            rounded-2xl
                            p-8
                            shadow-[0_8px_25px_rgba(0,0,0,0.45)]
                            transition-all duration-500
                            hover:-translate-y-2 hover:border-[#00E5FF]/40
                        "
                    >
                        {/* TAG */}
                        <span
                            className="
                                inline-block
                                text-xs
                                uppercase
                                tracking-[2px]
                                text-[#00E5FF]
                                font-poppins
                                mb-4
                            "
                        >
                            {blog.tag}
                        </span>

                        {/* TITLE */}
                        <h3 className="text-white font-montserrat text-[20px] font-semibold leading-snug">
                            {blog.title}
                        </h3>

                        {/* EXCERPT */}
                        <p className="text-gray-400 text-sm leading-relaxed mt-4">{blog.excerpt}</p>

                        {/* FOOTER */}
                        <div className="flex items-center justify-between mt-8">
                            <span className="text-gray-500 text-xs">{blog.date}</span>

                            <a
                                href={blog.link}
                                className="text-[#00E5FF] text-sm font-medium hover:underline"
                            >
                                Read more →
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
