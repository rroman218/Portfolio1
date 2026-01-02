import clsx from "clsx"
import type { FC, ReactNode, ElementType } from "react"

type CardType = "skills" | "stats" | "portfolio-blocks"

interface CardProps {
  children: ReactNode
  variant?: CardType
}

export const Card: FC<CardProps> = ({ children, variant }) => {
  const Component: ElementType =
    variant === "portfolio-blocks" || variant === "stats" ? "div" : "span"

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
            variant === "portfolio-blocks",
        }
      )}
    >
      {children}
    </Component>
  )
}
