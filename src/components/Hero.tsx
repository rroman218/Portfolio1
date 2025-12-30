import { forwardRef } from "react"

export const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen">
        <p>Hero</p>
    </section>
  )
})
