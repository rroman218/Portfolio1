import { useRef, type RefObject } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Process } from './components/Process'

function App() {
  const HeroRef = useRef<HTMLDivElement>(null);
  const AboutRef = useRef<HTMLDivElement>(null);
  const PortfolioRef = useRef<HTMLDivElement>(null);
  const ProcessRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const map: Record<string, RefObject<HTMLDivElement | null>> = {
      hero: HeroRef,
      about: AboutRef,
      portfolio: PortfolioRef,
      process: ProcessRef,
      services: servicesRef,
      contact: contactRef,
    };

    map[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className='min-h-screen bg-white'>
      <Header scrollToSection={scrollToSection} />
      <Hero ref={HeroRef} scrollToSection={scrollToSection} />
      <About ref={AboutRef} />
      <Portfolio ref={PortfolioRef} />
      <Process ref={ProcessRef} />
    </div>
  )
}

export default App
