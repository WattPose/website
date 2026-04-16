import { motion } from 'framer-motion'
import PhoneFrame from './PhoneFrame'
import { useLang } from '../LangContext'

export default function Hero() {
  const { t, screenshotPath } = useLang()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full
                        bg-indigo/20 blur-[120px] animate-float-slow" />
        <div className="absolute top-[20%] right-[-15%] w-[500px] h-[500px] rounded-full
                        bg-pink/15 blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full
                        bg-teal/10 blur-[100px] animate-float-slow" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold
                       bg-indigo/10 border border-indigo/30 text-indigo mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-glow" />
            {t.heroBadge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black leading-[1.05] tracking-tight mb-6"
          >
            {t.heroHeadline1}{' '}
            <span className="text-gradient">{t.heroHeadlineGradient}</span>
            {' '}{t.heroHeadline2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg"
          >
            {t.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm
                         glass border border-white/10 hover:border-indigo/50 transition-all duration-200"
            >
              {t.heroCtaHowItWorks}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center gap-6 text-sm text-white/40"
          >
            <span className="flex items-center gap-1.5"><span className="text-teal">✓</span> {t.heroProof1}</span>
            <span className="flex items-center gap-1.5"><span className="text-teal">✓</span> {t.heroProof2}</span>
            <span className="flex items-center gap-1.5"><span className="text-teal">✓</span> {t.heroProof3}</span>
          </motion.div>
        </div>

        {/* Right — phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative animate-float">
            <div className="absolute inset-[-40px] rounded-[80px] bg-indigo/20 blur-[60px] animate-pulse-glow" />
            <PhoneFrame src={screenshotPath('screen1.png')} className="relative z-10 w-64 sm:w-72" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs"
      >
        <span>{t.heroScroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  )
}

