import { forwardRef } from "react"
import { Div } from "./ui/Div"
import { services } from "../const"
import { Card } from "./ui/Card"

export const Services = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Div variant="section" ref={ref}>
      <Div variant="container">
        <div className="text-center mb-16">
          <p className="text-blue-600 mb-4 tracking-wide">What I Offer</p>
          <h2 className="mb-6">Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Full range of design services for your business</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card variant="services" key={index}>
 <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>

                <h3 className="mb-4">{service.title}</h3>
                
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-blue-600">{service.price}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </Div>
    </Div>
  )
}
)
