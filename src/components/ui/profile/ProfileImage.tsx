import { motion } from "framer-motion";
import { sectionImages } from "./constants";

interface ProfileImageProps {
	activeIndex: number;
}

function ProfileImage({ activeIndex }: ProfileImageProps) {
	return (
		<div className="hidden lg:flex items-center justify-center lg:sticky lg:top-0 lg:h-screen">
			<motion.div
				initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
				whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
				transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
				viewport={{ once: true }}
				className="relative"
			>
				{/* Glow effect behind photo */}
				<div className="absolute inset-0 bg-[#d0ff71]/20 rounded-3xl blur-3xl scale-90" />

				{/* Profile photo - Stacked Carousel */}
				<div className="relative w-80 h-96 md:w-96 md:h-[34rem] rounded-3xl overflow-hidden border border-gray-800">
					{/* Image stack container */}
					<div
						className="absolute inset-0 flex flex-col transition-transform duration-500 ease-out"
						style={{
							height: `${sectionImages.length * 100}%`,
							transform: `translateY(-${activeIndex * (100 / sectionImages.length)}%)`
						}}
					>
						{sectionImages.map((src, index) => (
							<div
								key={src}
								className="relative w-full flex-shrink-0"
								style={{ height: `${100 / sectionImages.length}%` }}
							>
								<img
									src={src}
									alt={`Photo ${index + 1}`}
									className={`w-full h-full object-cover object-center transition-all duration-500 ${activeIndex === index
										? 'scale-100 brightness-100'
										: 'scale-95 brightness-50'
										}`}
								/>
							</div>
						))}
					</div>
					{/* Subtle gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-[#18181b]/60 via-transparent to-transparent pointer-events-none" />

					{/* Progress indicators */}
					<div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
						{sectionImages.map((_, index) => (
							<div
								key={index}
								className={`w-1.5 rounded-full transition-all duration-300 ${activeIndex === index
									? 'h-8 bg-[#d0ff71]'
									: 'h-2 bg-gray-600'
									}`}
							/>
						))}
					</div>
				</div>

				{/* Decorative elements */}
				<div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#d0ff71]/30 rounded-2xl" />
				<div className="absolute -top-4 -left-4 w-16 h-16 border border-gray-700 rounded-xl" />
			</motion.div>
		</div>
	);
}

export default ProfileImage;
