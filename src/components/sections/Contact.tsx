import { motion } from "framer-motion";
import ContactForm, { fadeInUp, staggerContainer } from "../ui/ContactForm.tsx";

function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen pt-24 pb-40 px-8 flex items-center justify-center relative overflow-hidden"
        >
            <div className="max-w-3xl w-full relative z-10">
                {/* Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6 text-center"
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-12"
                    >
                        <span className="text-white">ENSEMBLE,</span>
                        <br />
                        <span className="text-[#c8f560]">CRÉONS L'AVENIR</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        À la recherche de nouvelles opportunités en stage ou alternance.
                        Une idée, un projet ou une offre ? Discutons-en.
                    </motion.p>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full mt-20"
                >
                    <ContactForm />
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;
