import { motion } from "framer-motion";
import { forwardRef } from "react";
import { fadeInUp, staggerContainer, socialLinks } from "./constants";

const AboutSection = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<motion.div
			ref={ref}
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			className="space-y-8"
		>
			<motion.span
				variants={fadeInUp}
				className="text-[#d0ff71] text-sm md:text-base font-medium tracking-widest uppercase"
			>
				01 — Introduction
			</motion.span>

			<motion.h2
				variants={fadeInUp}
				className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl  font-black text-white tracking-tight leading-none"
			>
				A PROPOS
			</motion.h2>

			<motion.div variants={fadeInUp} className="space-y-2">
				<h3 className="text-2xl md:text-3xl font-bold text-white">
					REDWAN KHAN
				</h3>
				<p className="text-lg md:text-xl text-gray-400">21 ans</p>
			</motion.div>

			<motion.p
				variants={fadeInUp}
				className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg"
			>
				Étudiant en 3ème année de Licence Informatique, je combine
				développement et cybersécurité. Calme et organisé, je cherche un{" "}
				<span className="text-[#d0ff71] font-medium">
					stage de 2 à 4 mois dès Mai 2025
				</span>{" "}
				et une{" "}
				<span className="text-[#d0ff71] font-medium">
					alternance pour l'année 2026-2027
				</span>
				.
			</motion.p>

			{/* Social Links */}
			<motion.div
				variants={fadeInUp}
				className="flex items-center gap-4 pt-4"
			>
				{socialLinks.map((social) => (
					<a
						key={social.label}
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#d0ff71] hover:border-[#d0ff71] transition-all duration-300"
						aria-label={social.label}
					>
						<social.icon className="w-5 h-5" />
					</a>
				))}
			</motion.div>
		</motion.div>
	);
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
