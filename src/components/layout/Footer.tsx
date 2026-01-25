import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaLinkedin, href: "https://linkedin.com/in/khan-redwan", label: "LinkedIn" },
        { icon: FaGithub, href: "https://github.com/redone7777", label: "GitHub" },
        { icon: FaGitlab, href: "https://gitlab.sorbonne-paris-nord.fr/12212148", label: "GitLab" },
    ];

    return (
        <footer className="bg-[#c8f560] text-neutral-900">
            {/* Main footer content */}
            <div className="max-w-4xl mx-auto py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {/* Email */}
                    <div className="flex flex-col">
                        <span className="text-sm text-neutral-600 mb-1">Email :</span>
                        <a
                            href="mailto:redwan.kn17@gmail.com"
                            className="font-semibold text-lg hover:underline flex items-center gap-2"
                        >
                            <MdEmail className="text-xl" />redwan.kn17@gmail.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                        <span className="text-sm text-neutral-600 mb-1">Appelez-moi :</span>
                        <a
                            href="tel:+33612345678"
                            className="font-semibold text-lg hover:underline flex items-center gap-2"
                        >
                            <MdPhone className="text-xl" />
                            +33 6 12 34 56 78
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col">
                        <span className="text-sm text-neutral-600 mb-2">Social :</span>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 bg-neutral-900 text-[#c8f560] rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors"
                                >
                                    <social.icon className="text-lg" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-neutral-900/20">
                <div className="max-w-6xl mx-auto px-8 py-4 flex flex-col md:flex-row justify-center items-center gap-4">
                    <span className="text-sm">
                        © Copyright {currentYear}. Tous droits réservés par{" "}
                        <a href="#" className="underline font-semibold hover:no-underline">
                            Redwan Khan
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
