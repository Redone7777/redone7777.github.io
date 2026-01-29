import { motion } from "framer-motion";
import { forwardRef } from "react";
import { fadeInUp, staggerContainer, interests } from "./constants";
import { FaBook, FaGamepad, FaBasketballBall, FaPlane, FaCode } from "react-icons/fa";
import { GiShuttlecock } from "react-icons/gi";
import type { IconType } from "react-icons";

// Icon mapping
const iconMap: Record<string, IconType> = {
	FaBook,
	FaGamepad,
	FaBasketballBall,
	FaPlane,
	FaCode,
	GiShuttlecock,
};

const PassionsSection = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<motion.div
			ref={ref}
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			className="space-y-8 pb-20"
		>
			<motion.span
				variants={fadeInUp}
				className="text-[#d0ff71] text-sm md:text-base font-medium tracking-widest uppercase"
			>
				05 — Personnel
			</motion.span>

			<motion.h2
				variants={fadeInUp}
				className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none"
			>
				PASSIONS
			</motion.h2>

			<motion.p
				variants={fadeInUp}
				className="text-lg text-gray-400 max-w-lg"
			>
				Ce qui m'anime, me motive et nourrit ma curiosité au quotidien.
			</motion.p>

			{/* Grid layout for better visual balance - 3 columns on desktop */}
			<motion.div
				variants={fadeInUp}
				className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4"
			>
				{interests.map((interest) => {
					const IconComponent = iconMap[interest.icon];
					return (
						<motion.div
							key={interest.name}
							initial={{ opacity: 0, y: 20, scale: 0.9 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							whileHover={{ 
								scale: 1.05, 
								borderColor: "#d0ff71",
							}}
							className="group relative flex flex-col items-center justify-center gap-3 
								py-6 px-4 rounded-2xl border border-neutral-800 
								bg-neutral-900/50
								hover:bg-neutral-800/30 transition-all duration-300 cursor-default"
						>
							{/* Icon */}
							<div className="w-12 h-12 rounded-xl bg-neutral-800/50 flex items-center justify-center group-hover:bg-[#d0ff71]/10 transition-colors duration-300">
								{IconComponent && (
									<IconComponent className="w-6 h-6 text-neutral-400 group-hover:text-[#d0ff71] transition-colors duration-300" />
								)}
							</div>
							
							{/* Text */}
							<span className="text-base font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">
								{interest.name}
							</span>

							{/* Subtle glow on hover */}
							<div className="absolute inset-0 rounded-2xl bg-[#d0ff71]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
						</motion.div>
					);
				})}
			</motion.div>
		</motion.div>
	);
});

PassionsSection.displayName = "PassionsSection";

export default PassionsSection;
