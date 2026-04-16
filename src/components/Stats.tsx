import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useLang } from '../LangContext'

const statsMeta = [
  { value: 6,   suffix: '',    color: '#6366F1', key: 'stat1Label' },
  { value: 15,  suffix: ' FPS', color: '#10B981', key: 'stat2Label' },
  { value: 10,  suffix: 's',   color: '#FF4081', key: 'stat3Label' },
  { value: 100, suffix: '%',   color: '#00C6FF', key: 'stat4Label' },
] as const

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!active) return
    const duration = 1400
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) frameRef.current = requestAnimationFrame(tick)
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [active, target])

  return <span>{count}{suffix}</span>
}

export default function Stats() {
  const { ref, inView } = useInView({ threshold: 0.3 })
  const { t } = useLang()

  return (
    <section className="py-20 bg-surface/40 border-y border-white/[0.05]">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {statsMeta.map((s, i) => (
          <motion.div
            key={s.key}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-5xl sm:text-6xl font-black mb-2 tracking-tight" style={{ color: s.color }}>
              <CountUp target={s.value} suffix={s.suffix} active={inView} />
            </div>
            <p className="text-white/45 text-sm leading-snug">{t[s.key]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
