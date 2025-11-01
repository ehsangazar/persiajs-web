import { HTMLAttributes, ReactNode } from "react";

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
    "bg-white rounded-lg transition-all duration-150 relative overflow-hidden";

  const variants = {
    default: "border border-[#DAE0E6]",
    elevated: "border border-[#DAE0E6]",
    bordered: "border border-[#DAE0E6]",
  };

  const hoverStyles = hover
    ? "hover:border-[#C8CBD0] cursor-pointer"
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
