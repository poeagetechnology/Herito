import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../Asset/3.jpeg'
import { HiOutlineMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Products', to: '/products' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? 'bg-white/80 backdrop-blur shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]'
          : 'bg-transparent'
      }`}
    >
      {/* Gold Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

      <nav className="max-w-7xl mx-auto h-24 flex items-center justify-between px-6 md:px-12">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Herito Wellness Private Limited"
            className="w-20 md:w-24 object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-12 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `pb-1 transition-colors duration-200 ${
                      isActive
                        ? 'text-[#2b133d]'
                        : 'text-[#5f5b66] hover:text-[#2b133d]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>

                {/* Active underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* Luxury CTA Button */}
          <NavLink
            to="/enquiry"
            className="ml-6 px-7 py-3 rounded-full bg-gradient-to-r from-[#2b133d] to-[#4a148c] text-white
                       text-sm font-medium hover:opacity-90 transition shadow-lg"
          >
            Enquire Now
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-[#2b133d]">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={26} /> : <HiOutlineMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu – Luxury Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/95 backdrop-blur border-t border-[#ede9f3]"
          >
            <ul className="flex flex-col items-center gap-8 py-10 text-[15px] font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-[#2b133d]'
                        : 'text-[#5f5b66] hover:text-[#2b133d]'
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

              {/* Mobile CTA */}
              <NavLink
                to="/enquiry"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#2b133d] to-[#4a148c]
                           text-white text-sm font-medium shadow-lg hover:opacity-90 transition"
              >
                Enquire Now
              </NavLink>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
