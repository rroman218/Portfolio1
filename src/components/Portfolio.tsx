import { forwardRef, useState } from "react"
import { categories } from "../const"
import { Button } from "./ui/Button"


export const Portfolio = forwardRef<HTMLDivElement>((_, ref) => {
    const [ActiveCategory, setActiveCategory] = useState("All")
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
            </div>
        </section>
    )
}
)
