import type { FC, ReactNode } from "react";
import clsx from "clsx";

type ButtonType = "header-button" | "hero-portfolio-link" | "hero-contact-link";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonType;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "header-button",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-medium transition active:scale-95",
        {
          // Header
          "px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm":
            variant === "header-button"
        },
        {
          "group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30":
          variant === "hero-portfolio-link"
        },
        {
          "px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2":
          variant === "hero-contact-link"
        }
      )}
    >
      {children}
    </button>
  );
};
