import type { FC, ReactNode } from "react";
import clsx from "clsx";

type ButtonType = "header-button";

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
        }
      )}
    >
      {children}
    </button>
  );
};
