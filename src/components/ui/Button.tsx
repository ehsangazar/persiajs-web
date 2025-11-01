import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "px-4 py-2.5 text-sm min-h-[40px] gap-2",
    md: "px-6 py-3 text-base min-h-[44px] gap-2.5",
    lg: "px-8 py-3.5 text-base min-h-[48px] gap-2.5",
  };

  const variants = {
    primary:
      "bg-[#FF4500] text-white hover:bg-[#FF5414] active:bg-[#E03D00] shadow-md hover:shadow-lg",
    secondary:
      "bg-[#0079D3] text-white hover:bg-[#3394DC] active:bg-[#005BA1] shadow-md hover:shadow-lg",
    ghost:
      "bg-transparent text-gray-900 hover:bg-[#EDEFF1] active:bg-[#DAE0E6]",
    outline:
      "bg-white text-gray-900 border border-gray-200 hover:bg-[#F7F9FA] active:bg-[#EDEFF1] shadow-sm hover:shadow-md",
  };

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Loading spinner */}
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {/* Left icon */}
      {!isLoading && leftIcon && (
        <span className="flex-shrink-0">{leftIcon}</span>
      )}

      {/* Content */}
      <span className="whitespace-nowrap">{children}</span>

      {/* Right icon */}
      {!isLoading && rightIcon && (
        <span className="flex-shrink-0">{rightIcon}</span>
      )}
    </button>
  );
}
