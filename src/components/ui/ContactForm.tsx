import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
	FaUser,
	FaEnvelope,
	FaBriefcase,
	FaPaperPlane,
	FaChevronDown,
	FaCheckCircle,
	FaExclamationCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../../config/emailjs.config";

// Service options for the contact form
export const serviceOptions = [
	{ value: "", label: "Sélectionner un sujet..." },
	{ value: "internship", label: "Stage" },
	{ value: "apprenticeship", label: "Alternance" },
	{ value: "job", label: "Offre d'emploi / CDI" },
	{ value: "collaboration", label: "Collaboration" },
	{ value: "other", label: "Autre" },
];

// Animation variants
export const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.8, ease: "easeOut" as const },
	},
};

export const staggerContainer: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.1 },
	},
};

export const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.6, ease: "easeOut" as const },
	},
};

interface FormData {
	name: string;
	email: string;
	service: string;
	message: string;
}

function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		service: "",
		message: "",
	});

	const [focusedField, setFocusedField] = useState<string | null>(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
	const dropdownRef = useRef<HTMLDivElement>(null);
	const formRef = useRef<HTMLFormElement>(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsDropdownOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const fieldMap: { [key: string]: string } = {
			from_name: "name",
			from_email: "email",
			message: "message",
		};
		const fieldName = fieldMap[e.target.name] || e.target.name;
		setFormData({ ...formData, [fieldName]: e.target.value });
	};

	const handleServiceSelect = (value: string) => {
		setFormData({ ...formData, service: value });
		setIsDropdownOpen(false);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			// Préparer les paramètres pour EmailJS avec les bons noms de variables
			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				subject: formData.service,
				message: formData.message,
			};

			const result = await emailjs.send(
				emailjsConfig.serviceId,
				emailjsConfig.templateId,
				templateParams,
				emailjsConfig.publicKey
			);

			console.log("Email envoyé avec succès:", result.text);
			setSubmitStatus("success");

			// Réinitialiser le formulaire après 2 secondes
			setTimeout(() => {
				setFormData({
					name: "",
					email: "",
					service: "",
					message: "",
				});
				setSubmitStatus("idle");
			}, 3000);
		} catch (error) {
			console.error("Erreur lors de l'envoi:", error);
			setSubmitStatus("error");
			setTimeout(() => setSubmitStatus("idle"), 5000);
		} finally {
			setIsSubmitting(false);
		}
	};

	const inputClasses = (fieldName: string) => `
        w-full 
        bg-neutral-900/50 backdrop-blur-sm
        border-2 rounded-xl 
        px-4 py-3.5 pl-12
        text-white placeholder-neutral-500
        transition-all duration-300 ease-out
        ${
					focusedField === fieldName || (fieldName === "service" && isDropdownOpen)
						? "border-[#c8f560] shadow-[0_0_20px_rgba(200,245,96,0.15)]"
						: "border-neutral-700/50 hover:border-neutral-600"
				}
        focus:outline-none
    `;

	const labelClasses = (fieldName: string) => `
        text-sm font-medium mb-2 block transition-colors duration-300
        ${focusedField === fieldName || (fieldName === "service" && isDropdownOpen) ? "text-[#c8f560]" : "text-neutral-400"}
    `;

	const iconClasses = (fieldName: string) => `
        absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 z-10 w-4 h-4
        ${focusedField === fieldName || (fieldName === "service" && isDropdownOpen) ? "text-[#c8f560]" : "text-neutral-500"}
    `;

	const getSelectedLabel = () => {
		const option = serviceOptions.find(opt => opt.value === formData.service);
		return option ? option.label : "Sélectionner un sujet...";
	};

	return (
		<motion.form
			ref={formRef}
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			onSubmit={handleSubmit}
			className="space-y-5"
		>
			{/* Name & Email row */}
			<motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label className={labelClasses("name")}>Nom</label>
					<div className="relative">
						<FaUser className={iconClasses("name")} />
						<input
							type="text"
							name="from_name"
							value={formData.name}
							onChange={handleChange}
							onFocus={() => setFocusedField("name")}
							onBlur={() => setFocusedField(null)}
							placeholder="John Doe"
							className={inputClasses("name")}
							required
						/>
					</div>
				</div>
				<div>
					<label className={labelClasses("email")}>Email</label>
					<div className="relative">
						<FaEnvelope className={iconClasses("email")} />
						<input
							type="email"
							name="from_email"
							value={formData.email}
							onChange={handleChange}
							onFocus={() => setFocusedField("email")}
							onBlur={() => setFocusedField(null)}
							placeholder="john@example.com"
							className={inputClasses("email")}
							required
						/>
					</div>
				</div>
			</motion.div>

			{/* Custom Service Dropdown */}
			<motion.div variants={fadeInUp} className="relative z-50">
				<label className={labelClasses("service")}>Sujet du message</label>
				<div ref={dropdownRef} className="relative">
					{/* Hidden input for EmailJS */}
					<input type="hidden" name="subject" value={formData.service} />
					<FaBriefcase className={iconClasses("service")} />

					{/* Trigger Button */}
					<button
						type="button"
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						className={`
                            w-full text-left
                            bg-neutral-900/50 backdrop-blur-sm
                            border-2 rounded-xl 
                            px-4 py-3.5 pl-12 pr-10
                            transition-all duration-300 ease-out
                            ${
															isDropdownOpen
																? "border-[#c8f560] shadow-[0_0_20px_rgba(200,245,96,0.15)]"
																: "border-neutral-700/50 hover:border-neutral-600"
														}
                            ${formData.service ? "text-white" : "text-neutral-500"}
                        `}
					>
						{getSelectedLabel()}
					</button>

					{/* Arrow Icon */}
					<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
						<motion.div
							animate={{ rotate: isDropdownOpen ? 180 : 0 }}
							transition={{ duration: 0.2 }}
						>
							<FaChevronDown
								className={`w-3.5 h-3.5 transition-colors duration-300 ${
									isDropdownOpen ? "text-[#c8f560]" : "text-neutral-500"
								}`}
							/>
						</motion.div>
					</div>

					{/* Dropdown Menu */}
					<AnimatePresence>
						{isDropdownOpen && (
							<motion.div
								initial={{ opacity: 0, y: -10, scale: 0.95 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: -10, scale: 0.95 }}
								transition={{ duration: 0.2 }}
								className="absolute top-full left-0 right-0 mt-2 bg-[#171717] border border-neutral-700 rounded-xl overflow-hidden shadow-2xl z-50 py-1"
							>
								{serviceOptions
									.filter(opt => opt.value !== "")
									.map(option => (
										<button
											key={option.value}
											type="button"
											onClick={() => handleServiceSelect(option.value)}
											className={`
                                            w-full text-left px-4 py-3 pl-12 relative
                                            transition-colors duration-200
                                            hover:bg-neutral-800
                                            ${
																							formData.service === option.value
																								? "text-[#c8f560] bg-neutral-800/50 font-medium"
																								: "text-neutral-300"
																						}
                                        `}
										>
											{formData.service === option.value && (
												<motion.div
													layoutId="activeOption"
													className="absolute left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#c8f560]"
												/>
											)}
											<span className={formData.service === option.value ? "ml-4" : ""}>
												{option.label}
											</span>
										</button>
									))}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</motion.div>

			{/* Message textarea */}
			<motion.div variants={fadeInUp} className="z-10 relative">
				<label className={labelClasses("message")}>Comment puis-je vous aider ?</label>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					onFocus={() => setFocusedField("message")}
					onBlur={() => setFocusedField(null)}
					placeholder="Bonjour, j'aimerais discuter de..."
					rows={4}
					className={`
                        w-full 
                        bg-neutral-900/50 backdrop-blur-sm
                        border-2 rounded-xl 
                        px-4 py-3.5
                        text-white placeholder-neutral-500
                        transition-all duration-300 ease-out
                        resize-none
                        ${
													focusedField === "message"
														? "border-[#c8f560] shadow-[0_0_20px_rgba(200,245,96,0.15)]"
														: "border-neutral-700/50 hover:border-neutral-600"
												}
                        focus:outline-none
                    `}
					required
				/>
			</motion.div>

			{/* Submit button */}
			<motion.div variants={fadeInUp} className="z-10 relative mt-15">
				<motion.button
					type="submit"
					disabled={isSubmitting}
					whileHover={!isSubmitting ? { scale: 1.02 } : {}}
					whileTap={!isSubmitting ? { scale: 0.98 } : {}}
					className={`group relative overflow-hidden font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3 ${
						isSubmitting
							? "bg-neutral-700 text-neutral-400 cursor-not-allowed"
							: "bg-[#c8f560] text-neutral-900"
					}`}
				>
					{/* Hover gradient overlay */}
					{!isSubmitting && (
						<span className="absolute inset-0 bg-gradient-to-r from-[#d0ff71] to-[#a8e040] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					)}

					{/* Button content */}
					<span className="relative uppercase tracking-wider">
						{isSubmitting ? "Envoi en cours..." : "Envoyer"}
					</span>
					{isSubmitting ? (
						<div className="relative w-4 h-4 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin" />
					) : (
						<FaPaperPlane className="relative text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
					)}
				</motion.button>

				{/* Status Messages */}
				<AnimatePresence>
					{submitStatus === "success" && (
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							className="mt-4 flex items-center gap-2 text-[#c8f560] bg-[#c8f560]/10 border border-[#c8f560]/30 rounded-lg px-4 py-3"
						>
							<FaCheckCircle className="text-lg" />
							<span className="text-sm font-medium">Message envoyé avec succès !</span>
						</motion.div>
					)}
					{submitStatus === "error" && (
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							className="mt-4 flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg px-4 py-3"
						>
							<FaExclamationCircle className="text-lg" />
							<span className="text-sm font-medium">
								Erreur lors de l'envoi. Veuillez réessayer.
							</span>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</motion.form>
	);
}

export default ContactForm;
