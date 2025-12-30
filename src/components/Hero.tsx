import { forwardRef } from "react"
import type { ScrollToSectionProps } from "../types/ScrollToSection"
import HeroPerson from "../assets/HeroPerson.jpg"
import { ArrowRight, Mail } from "lucide-react"

export const Hero = forwardRef<HTMLDivElement, ScrollToSectionProps>(({ scrollToSection }, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="">
            <p className="text-gray-600 mb-4 tracking-wide">UI/UX & Графічний дизайнер</p>
            <h1 className="mb-6">
              Олександр Іванов
            </h1>
            <p className="text-xl mb-8 text-gray-700 leading-relaxed">
              Створюю зручні й красиві цифрові продукти, які допомагають бізнесу
              вирішувати реальні завдання користувачів через продуманий дизайн.
            </p>
            <p className="mb-10 text-gray-600">
              Мій підхід поєднує дослідження, креативність та увагу до деталей,
              щоб кожен проєкт був не просто красивим, а й функціональним.
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30"
              >
                <span>Переглянути портфоліо</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>Зв'язатися</span>
              </button>
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
