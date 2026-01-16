import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = Math.abs(currentScrollY - lastScrollY);
      
      // Si on est en haut de page (< 50px), toujours afficher le menu complet
      if (currentScrollY < 50) {
        setIsScrolled(false);
        lastScrollY = currentScrollY;
        return;
      }

      // Ignorer les petits scrolls
      if (difference < 30) return;

      if (currentScrollY > lastScrollY) {
        // Mode réduit
        setIsScrolled(true);
      } else {
        // Mode complet
        setIsScrolled(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Works', href: '#works' },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <motion.nav
        layout
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 150, 
          damping: 22, 
          mass: 0.8
        }}
        className="pointer-events-auto bg-[rgba(0,0,0,0.6)] rounded-full border border-white/10 p-2.5 flex items-center gap-2 backdrop-blur-lg shadow-lg overflow-hidden"
      >
        {/* Logo - Sorti de la condition pour la stabilité */}
        <motion.div layout="position" className="relative z-20">
             <a href="/" className="flex items-center justify-center w-11 h-11 bg-[#d0ff71] rounded-full text-black font-bold text-lg tracking-tighter hover:scale-105 transition-transform">
              RK
            </a>
        </motion.div>

        <AnimatePresence mode="popLayout" initial={false}>
          {!isScrolled ? (
            <motion.div
              layout
              key="full-nav-content"
              initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center gap-4 pl-2"
            >
                {/* Links */}
                <div className="flex items-center gap-1">
                  {navItems.map((item) => (
                    <FlipLink key={item.name} href={item.href}>
                      {item.name}
                    </FlipLink>
                  ))}
                </div>

                {/* Contact Button */}
                <motion.a
                  href="#contact"
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  className="relative overflow-hidden bg-white text-black rounded-full h-11 px-6 flex items-center font-medium"
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
            </motion.div>
          ) : (
            <motion.div
              layout
              key="reduced-nav-content"
              initial={{ opacity: 0, x: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 10, filter: "blur(4px)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center gap-3 h-11 pl-1"
            >
               {/* Separator */}
               <div className="w-[1px] h-5 bg-white/20"></div>

               {/* Available Text */}
               <div className="flex items-center gap-3 pr-2">
                   <span className="text-white font-medium whitespace-nowrap text-base">Available for work</span>

                   {/* Green Dot Animation */}
                   <div className="relative flex items-center justify-center w-3 h-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d0ff71] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1 w-1 bg-[#d0ff71]"></span>
                   </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative overflow-hidden px-4 py-1.5 text-white block rounded-full hover:bg-white/5 transition-colors"
    >
        <div className='relative overflow-hidden block font-medium'>
            <motion.span
                variants={{
                    rest: { y: 0 },
                    hover: { y: "-100%" },
                }}
                transition={{
                    duration: 0.25,
                    ease: "easeInOut" }}
                className='block'
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
                    ease: "easeInOut"
                }}
                className='absolute inset-0 block text-[#d0ff71]'
            >
                {children}
            </motion.span>
        </div>
    </motion.a>
  );
};

export default Navbar;
