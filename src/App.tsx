import { useRef, type RefObject } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'

function App() {
  const HeroRef = useRef<HTMLDivElement>(null);
  const AboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const map: Record<string, RefObject<HTMLDivElement | null>> = {
      hero: HeroRef,
      about: AboutRef,
      portfolio: portfolioRef,
      services: servicesRef,
      contact: contactRef,
    };

    map[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <Hero ref={HeroRef} scrollToSection={scrollToSection} />
      <About ref={AboutRef} />
    </>
  )
}

export default App
