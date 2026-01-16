import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="min-h-[200vh] pt-32 px-8 flex flex-col items-center gap-16 font-sans">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-7xl mx-auto">

            <div className="text-white text-center md:text-right flex-1 space-y-2">
                <p className="text-sm md:text-base font-medium text-gray-400 uppercase tracking-[0.3em]">Ingénieur informatique</p>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter drop-shadow-lg">REDWAN</h1>
                {/* Spacer to align Redwan with Khan */}
                <p className="text-sm md:text-base font-medium text-transparent uppercase tracking-[0.3em] select-none">Recherche d'une alternance</p>
            </div>
            
            <div className="relative group z-10">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 to-slate-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <img src="../public/photo.png" alt="Redwan Khan" className="relative rounded-3xl w-64 md:w-80 shadow-2xl object-cover transition-transform duration-500 hover:scale-[1.01]"/>
            </div>
          
          <div className="text-white text-center md:text-left flex-1 space-y-2">
                {/* Spacer to align Khan with Redwan */}
                <p className="text-sm md:text-base font-medium text-transparent uppercase tracking-[0.3em] select-none">Ingénieur informatique</p>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter drop-shadow-lg">KHAN</h1>
                <p className="text-sm md:text-base font-medium text-gray-400 uppercase tracking-[0.3em]">Recherche d'une alternance</p>
            </div>
            
        </div>

        <h1 className="text-white text-4xl text-center font-bold mt-20 opacity-20 hover:opacity-100 transition-opacity duration-300 cursor-default">Hello World !</h1>
      </div>
    </>
  )
}

export default App
