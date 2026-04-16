import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import PhoneFrame from './PhoneFrame'
import { useLang } from '../LangContext'

const stepsMeta = [
  { number: '01', color: '#6366F1', screen: 'screen2.jpg' },
  { number: '02', color: '#10B981', screen: 'screen3.jpg' },
  { number: '03', color: '#FF4081', screen: 'screen4.jpg' },
]

export default function HowItWorks() {
  const { ref, inView } = useInView()
  const { t } = useLang()

  return (
    <section id="how-it-works" className="py-28 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-teal uppercase mb-4 block">
            {t.howLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">
            {t.howHeadline}{' '}
            <span className="text-gradient">{t.howHeadlineGradient}</span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">{t.howSub}</p>
        </motion.div>

        <div className="space-y-28">
          {t.steps.map((step, i) => (
            <StepRow
              key={stepsMeta[i].number}
              title={step.title}
              desc={step.desc}
              number={stepsMeta[i].number}
              color={stepsMeta[i].color}
              screen={stepsMeta[i].screen}
              reverse={i % 2 !== 0}
              index={i}
              total={t.steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepRow({
  title, desc, number, color, screen, reverse, index, total,
}: {
  title: string
  desc: string
  number: string
  color: string
  screen: string
  reverse: boolean
  index: number
  total: number
}) {
  const { ref, inView } = useInView()
  const { screenshotPath } = useLang()

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}
    >
      <div className={reverse ? 'lg:col-start-2' : ''}>
        <div className="text-6xl font-black mb-4 opacity-20 tracking-tighter leading-none" style={{ color }}>
          {number}
        </div>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-white/55 text-lg leading-relaxed max-w-md">{desc}</p>
        {index < total - 1 && (
          <div className="mt-8 hidden lg:block w-px h-12 ml-2"
               style={{ background: `linear-gradient(to bottom, ${color}66, transparent)` }} />
        )}
      </div>

      <div className={`flex justify-center ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <div className="relative">
          <div className="absolute inset-[-30px] rounded-[80px] blur-[50px] opacity-30" style={{ background: color }} />
          <PhoneFrame src={screenshotPath(screen)} className="relative z-10 w-56 sm:w-64" />
        </div>
      </div>
    </motion.div>
  )
}
