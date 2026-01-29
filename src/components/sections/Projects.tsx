import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

interface Project {
    title: string;
    category: string;
    description: string;
    achievements: string[];
    techStack: string[];
    image: string;
}

const projets: Project[] = [
    {
        title: "MedEye France",
        category: "Data Visualization",
        description: "Plateforme de visualisation des données de santé publique françaises avec cartographie dynamique.",
        achievements: [
            "Cartographie interactive avec +35 000 points géolocalisés",
            "Visualisation 3D avec Three.js",
            "Intégration de 3 API gouvernementales",
        ],
        techStack: ["Python", "React", "Three.js", "PostgreSQL", "Git"],
        image: "/projets/medeye.png",
    },
    {
        title: "Freescord",
        category: "Réseau & Sécurité",
        description: "Messagerie instantanée sécurisée avec architecture client-serveur TCP.",
        achievements: [
            "Protocole TCP custom supportant +50 connexions",
            "Chiffrement AES-256 pour messages, fichiers et vocaux",
            "Architecture multi-threadée en C",
        ],
        techStack: ["C/C++", "Python", "UNIX", "Shell"],
        image: "/projets/freescord.png",
    },
    {
        title: "Rubik's Cube IA",
        category: "Intelligence Artificielle",
        description: "Résolveur de Rubik's Cube avec algorithmes de recherche et deep learning.",
        achievements: [
            "Algorithmes A* et IDA* (résolution en -25 moves)",
            "Réseau de neurones pour estimation heuristique",
            "Interface 3D interactive en React",
        ],
        techStack: ["Python", "React", "Three.js", "Git"],
        image: "/projets/rubiks.png",
    },
    {
        title: "ArchSimul",
        category: "Projet Académique",
        description: "Simulateur de circuits électroniques avec interface drag-and-drop.",
        achievements: [
            "Lead d'une équipe de 8 devs ",
            "Interface avec +20 composants simulables",
            "Architecture modulaire extensible",
        ],
        techStack: ["Java", "JavaFX", "Docker", "Git"],
        image: "/projets/archsimul.png",
    },
];

const smoothSpring = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    clamp: true,
};

const [firstProject, ...otherProjets] = projets;

function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, smoothSpring);

    // Première carte : scale et brightness basés sur le scroll
    const firstCardScale = useTransform(smoothProgress, [0, 0.15], [1, 0.9]);
    const firstCardBrightness = useTransform(smoothProgress, [0, 0.15], [1, 0.65]);

    return (
        <section
            id="projets"
            ref={containerRef}
            className="relative w-full"
            style={{ height: `${100 + otherProjets.length * 100}vh` }}
        >
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* Titre et description */}
                <div className="absolute top-0 left-0 right-0 pt-20 md:pt-24 flex justify-center pointer-events-none z-10 px-4 md:px-8 pb-8 md:pb-16">
                    <div className="w-full max-w-4xl flex flex-col items-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight text-center mb-2 md:mb-4"
                        >
                            MES PROJETS
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 text-center max-w-2xl"
                        >
                            Découvrez mes réalisations les plus marquantes.
                        </motion.p>
                    </div>
                </div>

                {/* Cartes */}
                <div className="relative h-full flex items-center justify-center px-4 sm:px-6 md:px-8 pt-40 md:pt-28 lg:pt-28">
                    {/* Première carte - statique, visible immédiatement */}
                    <motion.div
                        style={{
                            scale: firstCardScale,
                            filter: useTransform(firstCardBrightness, (b) => `brightness(${b})`),
                            zIndex: 1,
                        }}
                        className="absolute w-full max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
                    >
                        <ProjectCard {...firstProject} />
                    </motion.div>

                    {/* Autres cartes - animées au scroll */}
                    {otherProjets.map((project, i) => (
                        <AnimatedCard
                            key={project.title}
                            index={i}
                            total={otherProjets.length}
                            progress={smoothProgress}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface AnimatedCardProps {
    index: number;
    total: number;
    progress: MotionValue<number>;
    project: Project;
}

function AnimatedCard({ index, total, progress, project }: AnimatedCardProps) {
    const step = 1 / total;
    const start = index * step;
    const end = start + step;

    const y = useTransform(progress, [start, start + step * 0.6], [600, 0]);
    const scale = useTransform(progress, [end - step * 0.2, end + step * 0.3], [1, 0.9]);
    const brightness = useTransform(progress, [end - step * 0.2, end + step * 0.3], [1, 0.65]);
    const rotateX = useTransform(progress, [start, start + step * 0.6], [8, 0]);

    return (
        <motion.div
            style={{
                y,
                scale,
                rotateX,
                zIndex: index + 2,
                filter: useTransform(brightness, (b) => `brightness(${b})`),
                transformPerspective: 1200,
            }}
            className="absolute w-full max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl will-change-transform"
        >
            <ProjectCard {...project} />
        </motion.div>
    );
}

export default Projects;
