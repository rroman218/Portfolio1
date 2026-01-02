import { forwardRef, useState } from "react"
import { categories, projects } from "../const"
import { Button } from "./ui/Button"
import { ExternalLink } from "lucide-react"
import { Card } from "./ui/Card"

export const Portfolio = forwardRef<HTMLDivElement>((_, ref) => {
    const [ActiveCategory, setActiveCategory] = useState("All")
    const finteredActive = ActiveCategory === "All"
        ? projects
        : projects.filter(p => p.category === ActiveCategory)
    return (
        <section ref={ref} className="py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <p className="tracking-wide mb-4">My Work</p>
                    <h2 className="mb-6">Portfolio</h2>
                    <p className="mx-auto max-w-2xl">A selection of the best projects I've worked on over the past years</p>
                </div>
                <div className="flex flex-wrap gap-4 mb-12 justify-center">
                    {categories.map((category) => (
                        <Button variant="portfolio-sort-button"
                            key={category}
                            active={ActiveCategory === category}
                            onClick={() => setActiveCategory(category)}>
                            {category}
                        </Button>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {finteredActive.map((projects, index) => (
                        <Card key={index} variant="portfolio-blocks">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300"></div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                                        <ExternalLink className="w-6 h-6 text-blue-600" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-sm text-blue-600 mb-2 block">{projects.category}</span>
                                <h3 className="mb-3">{projects.title}</h3>
                                <p className="text-sm text-gray-600">{projects.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
)
