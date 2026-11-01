import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  variant?: "default" | "elevated" | "bordered";
}

export default function Card({
  children,
  hover = true,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const baseStyles =
    "bg-white rounded-2xl transition-all duration-300 relative overflow-hidden shadow-lg border border-gray-200";

  const variants = {
    default: "",
    elevated: "shadow-xl",
    bordered: "border-2",
  };

  const hoverStyles = hover
    ? "hover:border-orange-200 hover:shadow-xl cursor-pointer"
    : "";

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
