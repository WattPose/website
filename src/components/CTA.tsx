import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useLang } from '../LangContext'

export default function CTA() {
  const { ref, inView } = useInView()
  const { t } = useLang()

  return (
    <section id="download" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px]
                        bg-indigo/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px]
                        bg-pink/10 blur-[100px] rounded-full" />
      </div>

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-3xl p-10 sm:p-14 border border-white/10 shadow-2xl shadow-black/30 glow-indigo"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold
                          bg-teal/10 border border-teal/30 text-teal mb-8">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            {t.ctaBadge}
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">
            {t.ctaHeadline1}{' '}
            <span className="text-gradient">{t.ctaHeadlineGradient}</span>
          </h2>

          <p className="text-white/55 text-lg mb-10 max-w-lg mx-auto leading-relaxed">{t.ctaSub}</p>

          <p className="mt-2 text-sm text-white/30">{t.ctaPlatform}</p>
        </motion.div>
      </div>
    </section>
  )
}
