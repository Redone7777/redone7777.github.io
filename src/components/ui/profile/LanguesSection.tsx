import { motion } from "framer-motion";
import { forwardRef } from "react";
import { fadeInUp, staggerContainer, languages } from "./constants";

const LanguesSection = forwardRef<HTMLDivElement>((_, ref) => {
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
				04 — Communication
			</motion.span>

			<motion.h2
				variants={fadeInUp}
				className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl  font-black text-white tracking-tight leading-none"
			>
				LANGUES
			</motion.h2>

			<motion.div
				variants={fadeInUp}
				className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
			>
				{languages.map((lang) => (
					<div
						key={lang.name}
						className="text-center py-6 px-4 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
					>
						<p className="text-2xl md:text-3xl font-black text-white mb-1">
							{lang.level}
						</p>
						<p className="text-base text-gray-300 font-medium">
							{lang.name}
						</p>
						<p className="text-xs text-gray-500 mt-1">{lang.label}</p>
					</div>
				))}
			</motion.div>
		</motion.div>
	);
});

LanguesSection.displayName = "LanguesSection";

export default LanguesSection;
