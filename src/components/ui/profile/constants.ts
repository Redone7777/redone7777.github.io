import { type Variants } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// Animation variants for smooth text appearance
export const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

export const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

export const staggerContainer: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.12, delayChildren: 0.1 },
	},
};

// Section images array for stacked animation
export const sectionImages = [
	"/photo.png",      // index 0: about
	"/USPN.jpg",       // index 1: formation
	"/JOBphoto.png",   // index 2: experience
	"/personnel.png",  // index 3: langues & passions
];

// Social links data
export const socialLinks = [
	{ icon: FaLinkedinIn, href: "https://linkedin.com/in/", label: "LinkedIn" },
	{ icon: FaGithub, href: "https://github.com/", label: "GitHub" },
	{ icon: FaGitlab, href: "https://gitlab.com/", label: "GitLab" },
	{ icon: HiOutlineMail, href: "mailto:contact@example.com", label: "Email" },
];

// Languages data
export const languages = [
	{ name: "Français", level: "C2", label: "Natif" },
	{ name: "Anglais", level: "B2", label: "Intermédiaire+" },
	{ name: "Bengali", level: "B2", label: "Intermédiaire+" },
	{ name: "Espagnol", level: "A2", label: "Élémentaire" },
];

// Interests data
export const interests = [
	{ name: "Lecture", icon: "FaBook" },
	{ name: "Jeux Vidéo", icon: "FaGamepad" },
	{ name: "Badminton", icon: "GiShuttlecock" },
	{ name: "Basket", icon: "FaBasketballBall" },
	{ name: "Voyages", icon: "FaPlane" },
	{ name: "Side Projects", icon: "FaCode" },
];

// Experiences data
export const experiences = [
	{
		role: "Opérateur de production",
		company: "ELIS",
		period: "2024 • 1 an",
	},
	{
		role: "Animateur périscolaire",
		company: "ACDP",
		period: "2023 • 4 mois",
	},
	{
		role: "Hôte de caisse",
		company: "Carrefour",
		period: "2021 • 6 mois",
	},
];
