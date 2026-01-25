import { motion, AnimatePresence } from "framer-motion";
import { MdWavingHand } from "react-icons/md";
import { useState, useEffect } from "react";

function Hero() {
	const [showIcon, setShowIcon] = useState(true);

	useEffect(() => {
		let timeout: number;
		if (showIcon) {
			// Affiche l'icône pendant 3.5s (le temps de faire 2 animations de 1.5s + un peu de marge)
			timeout = setTimeout(() => setShowIcon(false), 4500);
		} else {
			// Affiche "Hello!" pendant 2s
			timeout = setTimeout(() => setShowIcon(true), 3000);
		}
		return () => clearTimeout(timeout);
	}, [showIcon]);

	return (
		<section id="hero" className="min-h-screen pt-24 px-8 flex flex-col items-center justify-center font-sans">

			<div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-7xl m-10">
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={{
						opacity: 1,
						x: 0,
						y: [0, -10, 0],
					}}
					transition={{
						opacity: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
						x: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
						y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
					}}
					className="text-white text-center md:text-right flex-1 space-y-2"
				>
					<p className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-[0.3em]">
						Apprenti <br /> ingénieur informatique
					</p>
					<h1 className="text-6xl md:text-8xl font-bold tracking-tighter drop-shadow-lg">REDWAN</h1>
					{/* Spacer to align Redwan with Khan */}
					<p className="text-sm md:text-base font-bold text-transparent uppercase tracking-[0.3em] select-none">
						Je suis à la recherche <br /> d'une alternance
					</p>
				</motion.div>

				<div style={{ perspective: 1000 }}>
					<motion.div
						initial={{ opacity: 0, rotateX: 180, scale: 0 }}
						animate={{ opacity: 1, rotateX: 0, scale: 1 }}
						transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
						className="relative group z-10"
						style={{
							transformStyle: "preserve-3d",
						}}
					>
						<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 to-slate-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
						<img
							src="/photo.png"
							alt="Redwan Khan"
							className="relative rounded-3xl w-[22rem] md:w-[24rem] h-64 md:h-[34rem] shadow-2xl object-cover transition-transform duration-500 hover:scale-[1.01]"
						/>

						{/* Badge avec icone de main */}
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
							className="absolute -bottom-15 md:-left-15 z-20 bg-[#d0ff71] w-24 h-24 md:w-36 md:h-36 rounded-full shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-500 cursor-default"
						>
							<div className="relative w-full h-full flex items-center justify-center overflow-hidden">
								<AnimatePresence initial={false}>
									{showIcon ? (
										<motion.div
											key="icon"
											className="absolute inset-0 flex items-center justify-center"
											initial={{ y: "-100%" }}
											animate={{ y: 0 }}
											exit={{ y: "100%" }}
											transition={{
												duration: 1,
												ease: [0.76, 0, 0.24, 1],
											}}
										>
											<motion.div
												animate={{ rotate: [0, 40, -20, 30, -10, 20, 0, 0] }}
												transition={{
													duration: 1.5,
													ease: "easeInOut",
													times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
													repeat: 1,
													repeatDelay: 0.2,
													delay: 0.8,
												}}
											>
												<MdWavingHand className="text-neutral-800 text-4xl md:text-5xl scale-x-[-1]" />
											</motion.div>
										</motion.div>
									) : (
										<motion.div
											key="text"
											className="absolute inset-0 flex items-center justify-center"
											initial={{ y: "100%" }}
											animate={{ y: 0 }}
											exit={{ y: "-100%" }}
											transition={{
												duration: 1,
												ease: [0.76, 0, 0.24, 1],
											}}
										>
											<span className="text-neutral-800 font-bold text-xl md:text-2xl">Bonjour</span>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</motion.div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{
						opacity: 1,
						x: 0,
						y: [0, -10, 0],
					}}
					transition={{
						opacity: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
						x: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
						y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
					}}
					className="text-white text-center md:text-left flex-1 space-y-2"
				>
					{/* Spacer to align Khan with Redwan */}
					<p className="text-sm md:text-base font-bold text-transparent uppercase tracking-[0.3em] select-none">
						Apprenti ingénieur informatique
					</p>
					<h1 className="text-6xl md:text-8xl font-bold tracking-tighter drop-shadow-lg">KHAN</h1>
					<p className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-[0.3em]">
						Je suis à la recherche <br /> d'une alternance
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export default Hero;
