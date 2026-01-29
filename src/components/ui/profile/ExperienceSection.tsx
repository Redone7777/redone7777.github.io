import { motion } from "framer-motion";
import { forwardRef } from "react";
import { fadeInUp, staggerContainer, experiences } from "./constants";

const ExperienceSection = forwardRef<HTMLDivElement>((_, ref) => {
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
				03 — Professionnelle
			</motion.span>

			<motion.h2
				variants={fadeInUp}
				className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl  font-black text-white tracking-tight leading-none"
			>
				EXPÉRIENCE
			</motion.h2>

			{/* Main Experience - Highlighted */}
			<motion.div
				variants={fadeInUp}
				className="relative space-y-4 pt-6 rounded-2xl"
			>
				<div className="flex items-center justify-between flex-wrap gap-2">
					<span className="text-[#d0ff71] text-sm font-medium">
						2025 • 6 mois
					</span>
					<span className="text-xs text-gray-500 uppercase tracking-wider">
						Job d'été
					</span>
				</div>
				<h3 className="text-2xl md:text-3xl font-bold text-white">
					Technicien Support Informatique
				</h3>
				<p className="text-lg text-gray-300">
					Services du Premier Ministre — Paris
				</p>
				<ul className="space-y-2 pt-2">
					<li className="text-base text-gray-400 flex items-start gap-3">
						<span className="text-[#d0ff71]">•</span>
						Maintenance d'équipements sensibles
					</li>
					<li className="text-base text-gray-400 flex items-start gap-3">
						<span className="text-[#d0ff71]">•</span>
						Gestion des incidents IT
					</li>
					<li className="text-base text-gray-400 flex items-start gap-3">
						<span className="text-[#d0ff71]">•</span>
						Support VIP
					</li>
				</ul>
			</motion.div>
			
			<div className="border-b border-gray-800" />

			{/* Secondary Experiences - Compact List */}
			<motion.div variants={fadeInUp}>
				<div>
					{experiences.map((exp) => (
						<div
							key={exp.role}
							className="flex items-center justify-between py-3 border-b border-gray-800"
						>
							<div>
								<p className="text-base text-gray-300 font-medium">
									{exp.role}
								</p>
								<p className="text-sm text-gray-500">{exp.company}</p>
							</div>
							<span className="text-sm text-gray-500">{exp.period}</span>
						</div>
					))}
				</div>
			</motion.div>
		</motion.div>
	);
});

ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
