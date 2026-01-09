import clsx from "clsx"
import type { FC, ReactNode } from "react"
import { testimonials } from "../../const"

type CardType = "skills" | "stats" | "portfolio_blocks" | "process_blocks" | "testimonials"

interface CardProps {
  children: ReactNode
  variant?: CardType
}

const componentMap = {
  skills: "span",
  stats: "div",
  portfolio_blocks: "div",
  process_blocks: "div",
  testimonials: "div"
} as const

export const Card: FC<CardProps> = ({
  children,
  variant = "skills",
}) => {
  const Component = componentMap[variant]

  return (
    <Component
      className={clsx(
        "transition-colors",
        {
          // Skills
          "px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm cursor-default hover:border-blue-600 hover:text-blue-600":
            variant === "skills",

          // Stats
          "text-center py-8 bg-white rounded-2xl shadow-sm":
            variant === "stats",

          // Portfolio blocks
          "group rounded-2xl bg-white overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl":
            variant === "portfolio_blocks",

          // Process blocks
          "relative bg-white p-8 shadow-sm hover:shadow-md transition-shadow rounded-2xl":
            variant === "process_blocks",

          // Testimonials cards
          "bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100":
            variant === "testimonials"
        }
      )}
    >
      {children}
    </Component>
  )
}
