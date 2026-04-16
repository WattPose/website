import { LangProvider } from './LangContext'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Stats       from './components/Stats'
import Features    from './components/Features'
import HowItWorks  from './components/HowItWorks'
import Screenshots from './components/Screenshots'
import CTA         from './components/CTA'
import Footer      from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Screenshots />
        <CTA />
      </main>
      <Footer />
    </LangProvider>
  )
}
