import { forwardRef } from "react"
import type { ScrollToSectionProps } from "../types/ScrollToSection"
import HeroPerson from "../assets/HeroPerson.jpg"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "./ui/Button"

export const Hero = forwardRef<HTMLDivElement, ScrollToSectionProps>(({ scrollToSection }, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="">
            <p className="text-gray-600 mb-4 tracking-wide">
              UI/UX & Graphic Designer
            </p>
            <h1 className="mb-6">
              Alex Ivanov
            </h1>
            <p className="text-xl mb-8 text-gray-700 leading-relaxed">
              Creating convenient and beautiful digital products that help businesses
              solve real user problems through thoughtful design.
            </p>
            <p className="mb-10 text-gray-600">
              My approach combines research, creativity, and attention to detail
              to ensure each project is not just beautiful, but also functional.
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Button for portfolio */}
              <Button
                onClick={() => scrollToSection('portfolio')}
                variant="hero-portfolio-link"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* Button for contact */}
              <Button
                onClick={() => scrollToSection('contact')}
                variant="hero-contact-link"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </Button>
            </div>
          </div>
          {/* Image container */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={HeroPerson} alt="" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
            </div>
            {/* Decoration elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-50 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
})
