import type { FC, ReactNode } from "react";
import clsx from "clsx";

type ButtonType =
  | "header-button"
  | "hero-portfolio-link"
  | "hero-contact-link"
  | "portfolio-sort-button";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonType;
  onClick?: () => void;
  active?: boolean; 
}

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  active = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "inline-flex items-center justify-center gap-2 font-medium transition active:scale-95",
        // Header button
        variant === "header-button" &&
          "px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm",
        // Hero button portfolio link
        variant === "hero-portfolio-link" &&
          "px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-xl",
        // Hero button contact link
        variant === "hero-contact-link" &&
          "px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600",
        // Portfolio sort button
        variant === "portfolio-sort-button" &&
          clsx(
            "px-6 py-2.5 rounded-lg transition-all",
            active
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )
      )}
    >
      {children}
    </button>
  );
};
