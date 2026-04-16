import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../LangContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img src={`${import.meta.env.BASE_URL}app-logo.jpeg`} alt="WattPose" className="w-8 h-8 rounded-xl object-cover" />
          <span className="font-bold text-lg tracking-tight">
            Watt<span className="text-gradient">Pose</span>
          </span>
        </a>

        {/* Nav links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          {([
            [t.navFeatures, '#features'],
            [t.navHowItWorks, '#how-it-works'],
            [t.navScreenshots, '#screenshots'],
          ] as [string, string][]).map(([label, href]) => (
            <li key={label}>
              <a href={href} className="hover:text-white transition-colors duration-200">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold
                       glass border border-white/10 hover:border-indigo/50 transition-all duration-200
                       text-white/60 hover:text-white"
          >
            <span className={lang === 'en' ? 'text-white' : 'text-white/40'}>EN</span>
            <span className="text-white/20">|</span>
            <span className={lang === 'de' ? 'text-white' : 'text-white/40'}>DE</span>
          </button>

        </div>
      </nav>
    </motion.header>
  )
}


