import { forwardRef } from "react"
import { steps } from "../const"
import { Card } from "./ui/Card"

export const Process = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} className="py-24 px-6 lg:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <div className="text-center mb-12">
                    <p className="tracking-wide mb-4">How I Work</p>
                    <h2 className="mb-6">My Process</h2>
                    <p className="mx-auto text-gray-600 max-w-2xl">A structured approach that ensures quality results at every stage</p>
                </div>
                {/* Process steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <Card key={index} variant="process_blocks">
                                <div className="text-6xl mb-4 text-gray-200">
                                    0{index + 1}
                                </div>
                                <div className="w-14 h-14 bg-blue-100 flex justify-center items-center rounded-full mb-6">
                                    <Icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="mb-4">{step.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
)
