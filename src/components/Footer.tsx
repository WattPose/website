import { useLang } from '../LangContext'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLang()

  return (
    <footer className="border-t border-white/[0.06] bg-surface/20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img src={`${import.meta.env.BASE_URL}app-logo.jpeg`} alt="WattPose" className="w-7 h-7 rounded-lg object-cover" />
            <span className="font-bold text-sm tracking-tight">
              Watt<span className="text-gradient">Pose</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="mailto:app@michaelfueby.com"
               className="hover:text-white/70 transition-colors duration-200">
              {t.footerContact}
            </a>
            <a href="mailto:app@michaelfueby.com?subject=WattPose%20Bug%20Report"
               className="hover:text-white/70 transition-colors duration-200">
              {t.footerBug}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/25 text-xs text-center sm:text-right">
            © {year} WattPose. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
