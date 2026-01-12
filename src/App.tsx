import { useRef, type RefObject } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { Services } from './components/Services'
import { Contact } from './components/Contact'

function App() {
  const HeroRef = useRef<HTMLDivElement>(null);
  const AboutRef = useRef<HTMLDivElement>(null);
  const PortfolioRef = useRef<HTMLDivElement>(null);
  const ProcessRef = useRef<HTMLDivElement>(null);
  const TestimonialsRef = useRef<HTMLDivElement>(null);
  const ServicesRef = useRef<HTMLDivElement>(null);
  const ContactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const map: Record<string, RefObject<HTMLDivElement | null>> = {
      hero: HeroRef,
      about: AboutRef,
      portfolio: PortfolioRef,
      process: ProcessRef,
      testimonials: TestimonialsRef,
      services: ServicesRef,
      contact: ContactRef,
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
      <Testimonials ref={TestimonialsRef} />
      <Services ref={ServicesRef}/>
      <Contact ref={ContactRef}/>
    </div>
  )
}

export default App
