import clsx from "clsx"
import type { FC, ReactNode } from "react"

type CardType = "skills" | "stats"

interface CardProps {
    children: ReactNode,
    variant?: CardType
}

export const Card: FC<CardProps> = ({ children, variant }) => {
    return (
        <span className={clsx(
            "px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm transition-colors cursor-default",
            {
                // Skills
                "px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 text-sm hover:border-blue-600 hover:text-blue-600 transition-colors":
                variant === "skills"
            },
            {
                // Stats
                "text-center p-8 bg-white rounded-2xl shadow-sm":
                variant === "stats"
            }
        )}>{children}</span>
    )
}
