import { motion } from "framer-motion";
import { forwardRef } from "react";
import { fadeInUp, staggerContainer } from "./constants";

const FormationSection = forwardRef<HTMLDivElement>((_, ref) => {
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
				02 — Académique
			</motion.span>

			<motion.h2
				variants={fadeInUp}
				className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl  font-black text-white tracking-tight leading-none"
			>
				FORMATION
			</motion.h2>

			{/* Main Degree - Licence */}
			<motion.div variants={fadeInUp} className="space-y-4 pt-4">
				<div className="flex items-start gap-4">
					<div className="w-1 h-24 bg-[#d0ff71] rounded-full mt-1" />
					<div className="space-y-2">
						<h3 className="text-2xl md:text-3xl font-bold text-white">
							Licence Informatique
						</h3>
						<p className="text-lg text-gray-400">
							Université Sorbonne Paris Nord
						</p>
						<p className="text-base text-gray-500">2023 — 2026</p>
					</div>
				</div>
			</motion.div>

			{/* Secondary Degree - Baccalauréat */}
			<motion.div
				variants={fadeInUp}
				className="space-y-3 pl-5 border-l border-gray-700"
			>
				<h4 className="text-xl md:text-2xl font-semibold text-gray-300">
					Baccalauréat Général
				</h4>
				<p className="text-base text-gray-400">
					Lycée Paul Valéry, Paris 12
				</p>
				<p className="text-sm text-gray-500">
					<span className="text-[#d0ff71] font-medium">
						Mention Bien
					</span>{" "}
					— Spécialités Mathématiques & NSI
				</p>
			</motion.div>
		</motion.div>
	);
});

FormationSection.displayName = "FormationSection";

export default FormationSection;
