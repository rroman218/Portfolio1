import clsx from "clsx"
import { forwardRef, type ReactNode } from "react"

type DivType = "container" | "section"

interface DivProps {
    children: ReactNode
    variant?: DivType
    className?: string
}

const DivVariants: Record<DivType, string> = {
    section: "py-24 px-6 lg:px-12",
    container: "max-w-7xl mx-auto"
}

export const Div = forwardRef<HTMLDivElement, DivProps>(
  ({ children, variant = "section", className }, ref) => {
    return (
      <div
        ref={variant === "section" ? ref : undefined}
        className={clsx(
          DivVariants[variant],
          className
        )}
      >
        {children}
      </div>
    )
  }
)

Div.displayName = "Div"
