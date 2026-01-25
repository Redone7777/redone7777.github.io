import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    achievements: string[];
    techStack: string[];
    image: string;
}

function TechTag({ name }: { name: string }) {
    return (
        <span className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
            {name}
        </span>
    );
}

function ProjectCard({
    title,
    category,
    description,
    achievements,
    techStack,
    image,
}: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full bg-[#18181b] rounded-3xl border border-white/10 shadow-2xl transition-all duration-500 group"
        >
            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
                {/* Header - Category & Arrow */}
                <div className="flex items-start justify-between mb-6">
                    {/* Category Badge */}
                    <span className="px-4 py-2 text-xs font-bold bg-[#d0ff71] text-neutral-900 rounded-full uppercase tracking-wider">
                        {category}
                    </span>
                </div>

                {/* Project Image - Floating outside card */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="absolute top-4 right-4 md:top-6 md:right-6 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#d0ff71] shadow-2xl z-20 bg-[#18181b]"
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    {title}
                </h3>

                {/* Description - Main focus */}
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                    {description}
                </p>

                {/* Achievements - Listed with impact */}
                <ul className="space-y-3 mb-8">
                    {achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center bg-[#d0ff71]/20 rounded-full">
                                <FiZap className="text-xs text-[#d0ff71]" />
                            </span>
                            <span className="text-gray-200 text-base md:text-lg leading-relaxed">
                                {achievement}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {techStack.map((tech, i) => (
                        <TechTag key={i} name={tech} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;
