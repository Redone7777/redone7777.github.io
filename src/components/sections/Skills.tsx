import { motion, type Variants } from "framer-motion";
import { FaJava } from "react-icons/fa";
import {
	SiReact,
	SiTailwindcss,
	SiThreedotjs,
	SiTypescript,
	SiCplusplus,
	SiPython,
	SiKalilinux,
	SiWireshark,
	SiDocker,
	SiGit,
	SiGnubash,
	SiPostgresql,
	SiJavascript,
	SiMysql,
	SiDjango,
	SiSelenium,
	SiRust,
} from "react-icons/si";
import { FiCpu, FiShield, FiTrendingUp, FiUsers, FiCheckCircle, FiDatabase, FiTerminal, FiTarget } from "react-icons/fi";
import { SkillCard, type Skill } from "../ui/SkillCard";

// Data - 8 compétences avec couleur lime en quantité limitée (seulement 2 cartes)
const skills: Skill[] = [
	{
		id: "01",
		number: "01.",
		title: "Frontend & Creative Dev",
		subtitle: "Ingénierie d'Interface",
		description:
			"Conception d'expériences immersives 3D et d'interfaces réactives haute performance. Expertise en rendu WebGL et animations fluides.",
		icons: [
			{ icon: SiReact, name: "React" },
			{ icon: SiTypescript, name: "TypeScript" },
			{ icon: SiThreedotjs, name: "Three.js" },
			{ icon: SiTailwindcss, name: "Tailwind CSS" },
		],
		variant: "white",
	},
	{
		id: "02",
		number: "02.",
		title: "Backend & API Design",
		subtitle: "Architecture Serveur",
		description:
			"Conception d'architectures robustes et scalables. Développement d'API REST performantes avec Node.js, Python et Spring Boot.",
		icons: [
			{ icon: SiPython, name: "Python" },
			{ icon: SiJavascript, name: "Node.js" },
			{ icon: FiTerminal, name: "API REST" },
			{ icon: FiShield, name: "JWT Auth" },
		],
		variant: "dark",
	},
	{
		id: "03",
		number: "03.",
		title: "Bases de Données",
		subtitle: "Modélisation & Requêtes",
		description:
			"Conception de schémas relationnels, optimisation de requêtes SQL.",
		icons: [
			{ icon: FiDatabase, name: "SQL" },
			{ icon: SiPostgresql, name: "PostgreSQL" },
			{ icon: SiMysql, name: "MySQL" },
			{ icon: SiDjango, name: "Django" },
		],
		variant: "lime",
	},
	{
		id: "04",
		number: "04.",
		title: "Cybersécurité & Réseaux",
		subtitle: "Sécurité Offensive & Défensive",
		description:
			"Audit de vulnérabilités, analyse de protocoles sécurisés et administration système durcie. Expertise en cryptographie appliquée.",
		icons: [
			{ icon: SiKalilinux, name: "Kali Linux" },
			{ icon: SiWireshark, name: "Wireshark" },
			{ icon: FiShield, name: "Sécurité" },
		],
		variant: "dark",
	},
	{
		id: "05",
		number: "05.",
		title: "DevOps & Automation",
		subtitle: "Intégration Continue & Scraping",
		description:
			"Conteneurisation, automatisation et web scraping. Extraction de données à grande échelle avec Selenium.",
		icons: [
			{ icon: SiGnubash, name: "Bash" },
			{ icon: SiDocker, name: "Docker" },
			{ icon: SiGit, name: "Git" },
			{ icon: SiSelenium, name: "Selenium" },

		],
		variant: "white",
	},
	{
		id: "06",
		number: "06.",
		title: "Low-Level & Architecture",
		subtitle: "Performance Critique",
		description:
			"Développement système, gestion mémoire optimisée et algorithmes haute performance. Maîtrise des contraintes matérielles.",
		icons: [
			{ icon: SiCplusplus, name: "C/C++" },
			{ icon: SiRust, name: "Rust" },
			{ icon: FaJava, name: "Java" },
			{ icon: FiCpu, name: "Architecture des systèmes" },
		],
		variant: "dark",
	},
	{
		id: "07",
		number: "07.",
		title: "Mindset & Pro",
		subtitle: "Learning Agility",
		description:
			"Apprentissage rapide, rigueur et esprit d'équipe. Opérationnel dès le premier jour.",
		icons: [
			{ icon: FiTrendingUp, name: "Adaptabilité" },
			{ icon: FiUsers, name: "Équipe" },
			{ icon: FiCheckCircle, name: "Fiabilité" },
			{ icon: FiTarget, name: "Autonomie" },

		],
		variant: "lime",
	}

];

// Animation variants
// Animation variants
const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.1,
		},
	},
};

const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

// Main component
function Skills() {
	return (
		<section id="competences" className="w-full py-10 md:py-16 px-4 md:px-8">
			<div className="max-w-6xl mx-auto">
				{/* Main Container with Stagger */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					{/* Section Header */}
					<div className="mb-6 md:mb-8">
						<motion.h2
							variants={fadeInUp}
							className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-3"
						>
							COMPÉTENCES
						</motion.h2>
						<motion.p
							variants={fadeInUp}
							className="text-base md:text-lg text-gray-400 max-w-xl"
						>
							Expertise et savoir-être professionnel au service de vos projets.
						</motion.p>
					</div>

					{/* Bento Grid - 8 cartes, couleur lime limitée */}
					<motion.div
						variants={containerVariants}
						className="grid grid-cols-1 md:grid-cols-3 gap-4"
					>
						{/* Row 1: 01 (white) | 02 (dark) | 03 (lime) */}
						<SkillCard skill={skills[0]} className="min-h-[200px]" />
						<SkillCard skill={skills[1]} className="min-h-[200px]" />
						<SkillCard skill={skills[2]} className="min-h-[200px]" />

						{/* Row 2-3: 04 (dark, 2 rows) | 05 (dark) | 06 (dark) */}
						<SkillCard skill={skills[3]} className="md:row-span-2 min-h-[200px] !justify-center" />
						<SkillCard skill={skills[4]} className="min-h-[200px]" />
						<SkillCard skill={skills[5]} className="min-h-[200px]" />

						{/* Row 3: _ | 07 (lime, 2 cols) */}
						<SkillCard skill={skills[6]} className="md:col-start-2 md:col-span-2 min-h-[200px]" />
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default Skills;
