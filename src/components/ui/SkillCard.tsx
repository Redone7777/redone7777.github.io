import { motion, type Variants } from "framer-motion";
import type { IconType } from "react-icons";

// Types
export interface SkillIcon {
	icon: IconType;
	name: string;
}

export interface Skill {
	id: string;
	number: string;
	title: string;
	subtitle: string;
	description: string;
	icons: SkillIcon[];
	variant: "lime" | "white" | "dark";
}

// Animation variants
// Animation variants matching Profile section
export const itemVariants: Variants = {
	hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

// SkillCard Component
export function SkillCard({ skill, className = "" }: { skill: Skill; className?: string }) {
	const variantStyles = {
		lime: "bg-[#c8f560] text-neutral-900",
		white: "bg-white text-neutral-900",
		dark: "bg-[#262626] text-white border border-[#3a3a3a]",
	};

	const subtitleStyles = {
		lime: "text-neutral-700",
		white: "text-neutral-500",
		dark: "text-gray-300",
	};

	const labelStyles = {
		lime: "text-neutral-600",
		white: "text-neutral-500",
		dark: "text-gray-400",
	};

	const iconStyles = {
		lime: "text-neutral-800",
		white: "text-neutral-600",
		dark: "text-gray-200",
	};

	return (
		<motion.div
			variants={itemVariants}
			whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
			className={`${variantStyles[skill.variant]} rounded-2xl p-5 md:p-6 flex flex-col justify-between ${className}`}
		>
			<div>
				<span className="text-3xl md:text-4xl font-bold opacity-20">{skill.number}</span>
				<h3 className="text-lg md:text-xl font-bold mt-1 leading-tight">{skill.title}</h3>
				<p className={`text-xs font-medium mt-1 ${subtitleStyles[skill.variant]}`}>
					{skill.subtitle}
				</p>
				<p className={`text-xs mt-2 leading-relaxed ${subtitleStyles[skill.variant]}`}>
					{skill.description}
				</p>
			</div>
			<div className={`flex gap-4 mt-5 flex-wrap ${iconStyles[skill.variant]}`}>
				{skill.icons.map((item, index) => (
					<div key={index} className="flex flex-col items-center gap-1">
						<item.icon className="w-5 h-5 md:w-6 md:h-6" />
						<span className={`text-[10px] md:text-xs font-medium ${labelStyles[skill.variant]}`}>
							{item.name}
						</span>
					</div>
				))}
			</div>
		</motion.div>
	);
}
