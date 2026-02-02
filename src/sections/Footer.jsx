import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer
            className="
                w-full
                mt-32
                py-10
                px-4 sm:px-8 md:px-12 lg:px-16 xl:px-18 2xl:px-20
                border-t border-white/5
            "
        >
            <div
                className="
                    max-w-[1200px]
                    mx-auto
                    flex flex-col md:flex-row
                    items-center
                    justify-between
                    gap-6
                "
            >
                {/* LEFT — COPYRIGHT */}
                <p className="text-sm text-gray-500 text-center md:text-left">
                    © {new Date().getFullYear()} Asif Hasan. All rights reserved.
                </p>

                {/* RIGHT — LINKS */}
                <div className="flex items-center gap-6">
                    <FooterLink
                        href="mailto:asifhasan4566@gmail.com"
                        icon={<FiMail />}
                        label="Email"
                    />
                    <FooterLink
                        href="https://github.com/"
                        icon={<FiGithub />}
                        label="GitHub"
                    />
                    <FooterLink
                        href="https://linkedin.com/"
                        icon={<FiLinkedin />}
                        label="LinkedIn"
                    />
                </div>
            </div>
        </footer>
    );
}

/* ---------- Footer Link ---------- */

function FooterLink({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
                flex items-center gap-2
                text-gray-400
                text-sm
                transition
                hover:text-[#00E5FF]
            "
        >
            <span className="text-lg">{icon}</span>
            <span className="hidden sm:inline">{label}</span>
        </a>
    );
}
