import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from './i18n'
import type { Lang } from './i18n'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations['en']
  screenshotPath: (name: string) => string
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const browser = navigator.language.toLowerCase()
    return browser.startsWith('de') ? 'de' : 'en'
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: LangContextValue = {
    lang,
    setLang,
    t: translations[lang] as any,
    screenshotPath: (name: string) => `${import.meta.env.BASE_URL}screenshots/${lang}/${name}`,
  }

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
