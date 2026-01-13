import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/projects', label: 'Projets' },
]

function NavItem({ to, label }: { to: string; label: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <NavLink
      to={to}
      className="relative block h-6 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {({ isActive }) => (
        <div className="relative">
          {/* Effet dé qui roule */}
          <motion.div
            className="flex flex-col"
            animate={{ y: isHovered && !isActive ? -24 : 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className={`h-6 flex items-center font-medium ${isActive ? 'text-lime' : 'text-white'}`}>
              {label}
            </span>
            <span className="h-6 flex items-center font-medium text-lime">
              {label}
            </span>
          </motion.div>

          {/* Point actif */}
          {isActive && (
            <motion.div
              className="absolute -bottom-2 left-1/2 w-1.5 h-1.5 bg-lime rounded-full"
              layoutId="activeDot"
              initial={{ x: '-50%' }}
              animate={{ x: '-50%' }}
              style={{ boxShadow: '0 0 8px rgba(200, 245, 96, 1)' }}
            />
          )}
        </div>
      )}
    </NavLink>
  )
}

export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* Container avec effet liquid glass */}
      <div className="relative">
        {/* Ombre externe pour la profondeur */}
        <div className="absolute inset-0 rounded-full bg-black/10 blur-xl translate-y-2" />

        {/* Conteneur principal glass */}
        <div
          className="relative flex items-center gap-2 rounded-full px-2 py-2 backdrop-blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)',
            boxShadow: `
              inset 0 1px 1px rgba(255,255,255,0.1),
              inset 0 -1px 1px rgba(0,0,0,0.05),
              0 8px 32px rgba(0,0,0,0.15),
              0 2px 8px rgba(0,0,0,0.1)
            `,
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Reflet supérieur (effet lumière) */}
          <div
            className="absolute inset-x-4 top-0 h-[1px] rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            }}
          />

          {/* Logo RK */}
          <NavLink
            to="/"
            className="relative w-10 h-10 rounded-full bg-lime flex items-center justify-center"
            style={{
              boxShadow: '0 2px 8px rgba(200, 245, 96, 0.3)',
            }}
          >
            <span className="text-dark font-bold text-sm tracking-tighter">RK</span>
          </NavLink>

          {/* Liens de navigation */}
          <div className="flex items-center gap-6 px-4">
            {navLinks.map((link) => (
              <NavItem key={link.to} to={link.to} label={link.label} />
            ))}
          </div>

          {/* Bouton Contact */}
          <NavLink to="/contact" className="relative group">
            <div
              className="relative bg-white text-dark font-medium px-5 py-2 rounded-full overflow-hidden"
              style={{
                boxShadow: '0 2px 8px rgba(255,255,255,0.1)',
              }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-dark">
                Contact
              </span>
              {/* Remplissage liquide vert */}
              <div className="absolute inset-0 bg-lime translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
