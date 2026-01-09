import { forwardRef } from "react"
import { Div } from "./ui/Div"
import { testimonials } from "../const"
import { Card } from "./ui/Card"
import { Quote } from "lucide-react"

export const Testimonials = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <Div ref={ref} variant="section">
            <Div variant="container">
                <div className="text-center mb-16">
                    <p className="text-blue-600 mb-4 tracking-wide">Client Feedback</p>
                    <h2 className="mb-6">Testimonials</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonials, index) => (
                        <Card variant="testimonials" key={index}>
                            <Quote className="w-10 h-10 text-blue-600 mb-6" />
                            <p className="text-gray-700 mb-8 leading-relaxed">"{testimonials.text}"</p>
                            <div className="pt-6 border-t border-gray-200">
                                <p className="mb-1">{testimonials.name}</p>
                                <p className="text-sm text-gray-500">{testimonials.role}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Div>
        </Div>
    )
}
)
