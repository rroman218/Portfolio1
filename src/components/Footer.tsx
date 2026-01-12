import type { FC } from "react"

interface FooterSectionProps {
  scrollToSection: (section: string) => void
}

export const Footer:FC<FooterSectionProps> = ({scrollToSection}) => {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600">
            © 2024 Alex Ivanov. All rights reserved.
          </p>

          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
            >
              Portfolio
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
