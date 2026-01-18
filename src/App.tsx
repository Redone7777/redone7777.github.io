import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
	return (
		<>
			<Navbar />
			<div className="min-h-[200vh] pt-32 px-8 flex flex-col items-center gap-16 font-sans">
				<Hero />

				<h1 className="text-white text-4xl text-center font-bold mt-20 opacity-20 hover:opacity-100 transition-opacity duration-300 cursor-default">
					Hello World !
				</h1>
			</div>
		</>
	);
}

export default App;
