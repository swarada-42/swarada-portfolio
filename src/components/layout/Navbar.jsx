
import { useState } from 'react'
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
} from 'react-icons/fi'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Experience', '#experience'],
    ['Education', '#education'],
    ['Contact', '#contact'],
  ]

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#060912]/90 px-6 py-4 backdrop-blur-xl md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        
{/* Personal Brand Logo */}
<a
  href="#home"
  onClick={closeMenu}
  aria-label="Swarada Ware — Home"
  className="group flex items-center gap-3"
>
  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-sm font-extrabold tracking-tight text-[#080c16] shadow-lg shadow-cyan-500/10 transition duration-300 group-hover:bg-cyan-300 group-hover:shadow-cyan-400/25">
    SW
  </span>

  <span className="flex flex-col">
    <span className="text-base font-bold leading-tight tracking-tight text-slate-100 transition-colors group-hover:text-cyan-300 sm:text-lg">
      Swarada Ware
    </span>

    <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">
      Developer Portfolio
    </span>
  </span>
</a>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="relative py-2 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-cyan-300"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop Connect Button */}
        <a
          href="#contact"
          className="hidden items-center rounded-full border border-cyan-400/30 bg-cyan-400/[0.04] px-5 py-2.5 text-sm font-medium text-cyan-300 transition duration-300 hover:border-cyan-300/70 hover:bg-cyan-400 hover:text-slate-950 md:inline-flex"
        >
          Let's connect
          <FiArrowUpRight className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={
            isMenuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-slate-200 transition duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-300 md:hidden"
        >
          {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#080d18]/[0.98] px-6 py-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:border-cyan-400/10 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:bg-cyan-300"
            >
              Let's connect
              <FiArrowUpRight className="ml-2" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
