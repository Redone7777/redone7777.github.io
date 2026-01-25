import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FlipLink from "./FlipLink";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	// Gestion du scroll
	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const difference = Math.abs(currentScrollY - lastScrollY);

			if (currentScrollY < 50) {
				setIsScrolled(false);
				lastScrollY = currentScrollY;
				return;
			}

			if (difference < 30) return;

			if (currentScrollY > lastScrollY) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "Accueil", href: "#hero" },
		{ name: "Projets", href: "#projets" },
		{ name: "Compétences", href: "#competences" },
		{ name: "Profil", href: "#profil" },
	];

	return (
		<div className="fixed top-2 sm:top-4 left-2 right-2 sm:left-0 sm:right-0 flex justify-center z-50 pointer-events-none">
			<motion.nav
				layout
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 150,
					damping: 22,
					mass: 0.8,
				}}
				className="pointer-events-auto bg-black/60 rounded-full border border-white/10 p-1 sm:p-2.5 flex items-center gap-0.5 sm:gap-2 backdrop-blur-lg shadow-lg overflow-hidden"
			>
				<Logo />

				<AnimatePresence mode="popLayout" initial={false}>
					{!isScrolled ? <FullNav navItems={navItems} /> : <ReducedNav />}
				</AnimatePresence>
			</motion.nav>
		</div>
	);
};

// --- Sous-composants ---

const Logo = () => (
	<motion.div layout="position" className="relative z-20">
		<a
			href="/"
			className="flex items-center justify-center w-7 h-7 sm:w-11 sm:h-11 bg-[#d0ff71] rounded-full text-neutral-800 font-bold text-[10px] sm:text-lg tracking-tighter hover:scale-105 transition-transform"
		>
			RK
		</a>
	</motion.div>
);

const FullNav = ({ navItems }: { navItems: { name: string; href: string }[] }) => (
	<motion.div
		layout
		key="full-nav-content"
		initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
		animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
		exit={{ opacity: 0, x: -10, filter: "blur(4px)" }}
		transition={{ duration: 0.3, ease: "easeInOut" }}
		className="flex items-center gap-1 sm:gap-4 pl-1 sm:pl-2"
	>
		{/* Liens de navigation */}
		<div className="flex items-center gap-0 sm:gap-1">
			{navItems.map(item => (
				<FlipLink key={item.name} href={item.href}>
					{item.name}
				</FlipLink>
			))}
		</div>

		{/* Bouton Contact */}
		<ContactButton />
	</motion.div>
);

const ReducedNav = () => (
	<motion.div
		layout
		key="reduced-nav-content"
		initial={{ opacity: 0, x: 10, filter: "blur(4px)" }}
		animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
		exit={{ opacity: 0, x: 10, filter: "blur(4px)" }}
		transition={{ duration: 0.3, ease: "easeInOut" }}
		className="flex items-center gap-2 sm:gap-3 h-9 sm:h-11 pl-1"
	>
		<div className="w-[1px] h-4 sm:h-5 bg-white/20"></div>

		<div className="flex items-center gap-2 sm:gap-3 pr-1 sm:pr-2">
			<FlipLink key="open-for-work" href="#contact">
				Open to work
			</FlipLink>
			<div className="relative flex items-center justify-center w-3 h-3">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d0ff71] opacity-75"></span>
				<span className="relative inline-flex rounded-full h-1 w-1 bg-[#d0ff71]"></span>
			</div>
		</div>
	</motion.div>
);

const ContactButton = () => (
	<motion.a
		href="#contact"
		initial="rest"
		animate="rest"
		whileHover="hover"
		className="relative overflow-hidden bg-white text-black rounded-full h-6 sm:h-11 px-2 sm:px-6 flex items-center font-medium text-[10px] sm:text-base"
	>
		<motion.div
			variants={{
				rest: { y: "100%" },
				hover: { y: 0 },
			}}
			transition={{ duration: 0.3, ease: "easeOut" }}
			className="absolute inset-0 bg-[#d0ff71]"
		/>
		<span className="relative z-10">Contact</span>
	</motion.a>
);

export default Navbar;
