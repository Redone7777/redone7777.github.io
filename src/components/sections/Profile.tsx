import { useInView, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
	AboutSection,
	FormationSection,
	ExperienceSection,
	LanguesSection,
	PassionsSection,
	ProfileImage,
	InteractivePiano,
} from "../ui/profile";

function Profile() {
	// Refs for each section
	const aboutRef = useRef<HTMLDivElement>(null);
	const formationRef = useRef<HTMLDivElement>(null);
	const experienceRef = useRef<HTMLDivElement>(null);
	const languesRef = useRef<HTMLDivElement>(null);
	const passionsRef = useRef<HTMLDivElement>(null);

	// Track which sections are in view
	const aboutInView = useInView(aboutRef, { margin: "-40% 0px -40% 0px" });
	const formationInView = useInView(formationRef, { margin: "-40% 0px -40% 0px" });
	const experienceInView = useInView(experienceRef, { margin: "-40% 0px -40% 0px" });
	const languesInView = useInView(languesRef, { margin: "-40% 0px -40% 0px" });
	const passionsInView = useInView(passionsRef, { margin: "-40% 0px -40% 0px" });

	// Current image index state (0-3)
	const [activeIndex, setActiveIndex] = useState(0);

	// Update active index based on visible section
	useEffect(() => {
		if (passionsInView || languesInView) {
			setActiveIndex(3);
		} else if (experienceInView) {
			setActiveIndex(2);
		} else if (formationInView) {
			setActiveIndex(1);
		} else if (aboutInView) {
			setActiveIndex(0);
		}
	}, [aboutInView, formationInView, experienceInView, languesInView, passionsInView]);

	return (
		<section id="profil" className="w-full">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
				{/* Two-column grid layout */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
					{/* LEFT COLUMN - Scrollable Content */}
					<div className="py-10 md:py-16 lg:py-20 space-y-16 md:space-y-24 mt-20">
						<AboutSection ref={aboutRef} />
						<FormationSection ref={formationRef} />
						<ExperienceSection ref={experienceRef} />
						<LanguesSection ref={languesRef} />
						<PassionsSection ref={passionsRef} />

						{/* Interactive Piano */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="flex justify-center -mt-32 ml-10"
						>
							<InteractivePiano />
						</motion.div>
					</div>

					{/* RIGHT COLUMN - Sticky Photo */}
					<ProfileImage activeIndex={activeIndex} />


				</div>
			</div>


		</section>
	);
}

export default Profile;
