import { motion } from "framer-motion";

interface FlipLinkProps {
	children: string;
	href: string;
}

const FlipLink = ({ children, href }: FlipLinkProps) => {
	return (
		<motion.a
			href={href}
			initial="rest"
			whileHover="hover"
			animate="rest"
			className="relative overflow-hidden px-4 py-1.5 text-white block rounded-full hover:bg-white/5 transition-colors"
		>
			<div className="relative overflow-hidden block font-medium">
				<motion.span
					variants={{
						rest: { y: 0 },
						hover: { y: "-100%" },
					}}
					transition={{
						duration: 0.25,
						ease: "easeInOut",
					}}
					className="block"
				>
					{children}
				</motion.span>
				<motion.span
					variants={{
						rest: { y: "100%" },
						hover: { y: 0 },
					}}
					transition={{
						duration: 0.25,
						ease: "easeInOut",
					}}
					className="absolute inset-0 block text-[#d0ff71]"
				>
					{children}
				</motion.span>
			</div>
		</motion.a>
	);
};

export default FlipLink;
