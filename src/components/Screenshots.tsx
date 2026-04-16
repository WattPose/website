import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import PhoneFrame from './PhoneFrame'
import { useLang } from '../LangContext'

const screenFiles = ['screen1.jpg', 'screen2.jpg', 'screen3.jpg', 'screen4.jpg', 'screen5.jpg']

export default function Screenshots() {
  const { ref, inView } = useInView()
  const scrollRef = useRef<HTMLDivElement>(null)
  const { t, screenshotPath } = useLang()

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 280 : -280, behavior: 'smooth' })
  }

  return (
    <section id="screenshots" className="py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-pink uppercase mb-4 block">
              {t.screenshotsLabel}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              {t.screenshotsHeadline}
            </h2>
          </div>
          <div className="flex gap-3">
            {(['left', 'right'] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                aria-label={`Scroll ${dir}`}
                className="w-10 h-10 rounded-full glass border border-white/10
                           flex items-center justify-center hover:border-indigo/50
                           hover:bg-indigo/10 transition-all duration-200"
              >
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className={dir === 'left' ? 'rotate-180' : ''}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory"
        >
          {screenFiles.map((file, i) => (
            <motion.div
              key={file}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-none snap-center"
            >
              <PhoneFrame
                src={screenshotPath(file)}
                alt={t.screenshots[i]?.caption}
                className="w-52 sm:w-60"
              />
              <p className="mt-4 text-center text-sm text-white/40">{t.screenshots[i]?.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
