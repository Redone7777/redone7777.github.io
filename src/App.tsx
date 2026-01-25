import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Profile from "./components/sections/Profile";
import Contact from "./components/sections/Contact";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function App() {
	useSmoothScroll();

	return (
		<>
			<Navbar />

			{/* Hero Section - Full viewport height */}
			<Hero />

			{/* Projets Section - Separated from Hero */}
			<Projects />

			{/* Skills Section - Bento Grid */}
			<Skills />

			{/* Profile Section - About & Parcours */}
			<Profile />

			{/* Contact Section - Interactive Piano */}
			<Contact />

			{/* Footer */}
			<Footer />
		</>
	);
}

export default App;
