import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useLang } from '../LangContext'

const featuresMeta = [
  { icon: '🧠', color: '#6366F1', bg: 'rgba(99,102,241,0.1)',  border: 'rgba(99,102,241,0.25)' },
  { icon: '📐', color: '#10B981', bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.25)' },
  { icon: '⚡', color: '#FF4081', bg: 'rgba(255,64,129,0.1)',  border: 'rgba(255,64,129,0.25)' },
  { icon: '🎯', color: '#F43F5E', bg: 'rgba(244,63,94,0.1)',   border: 'rgba(244,63,94,0.25)'  },
  { icon: '🎥', color: '#00C6FF', bg: 'rgba(0,198,255,0.1)',   border: 'rgba(0,198,255,0.25)'  },
  { icon: '📊', color: '#FF4081', bg: 'rgba(255,64,129,0.1)',  border: 'rgba(255,64,129,0.25)' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Features() {
  const { ref, inView } = useInView()
  const { t } = useLang()

  return (
    <section id="features" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[800px] h-[400px] bg-indigo/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-indigo uppercase mb-4 block">
            {t.featuresLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">
            {t.featuresHeadline1}{' '}
            <span className="text-gradient">{t.featuresHeadlineGradient}</span>
            <br />{t.featuresHeadline2}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">{t.featuresSub}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {t.features.map((f, i) => {
            const meta = featuresMeta[i]
            return (
              <motion.div
                key={f.title}
                variants={cardVariants}
                className="glass rounded-2xl p-6 hover:border-white/15 transition-all duration-300
                           group hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5
                             transition-transform duration-300 group-hover:scale-110"
                  style={{ background: meta.bg, border: `1px solid ${meta.border}` }}
                >
                  {meta.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: meta.color }}>{f.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
