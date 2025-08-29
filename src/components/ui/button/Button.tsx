import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // Button text or content
  size?: "sm" | "md"; // Button size (matching template)
  variant?: "primary" | "outline" | "ghost" | "danger" | "success"; // Button variant
  startIcon?: ReactNode; // Icon before the text
  endIcon?: ReactNode; // Icon after the text
  loading?: boolean; // Loading state
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  startIcon,
  endIcon,
  loading = false,
  className = "",
  disabled = false,
  type = "button",
  onClick,
  ...rest
}) => {
  // Size Classes (matching template exactly)
  const sizeClasses = {
    sm: "px-4 py-3 text-sm",
    md: "px-5 py-3.5 text-sm",
  };

  // Variant Classes (matching template styling)
  const variantClasses = {
    primary:
      "bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300",
    outline:
      "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300",
    ghost:
      "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
    danger:
      "bg-red-600 text-white shadow-theme-xs hover:bg-red-700 disabled:bg-red-300",
    success:
      "bg-green-600 text-white shadow-theme-xs hover:bg-green-700 disabled:bg-green-300",
  };

  // Check if button has any icons
  const hasIcons = !!(loading || startIcon || endIcon);

  // Check if children is only sr-only content (no visible text)
  const hasVisibleChildren = React.isValidElement(children)
    ? !(
        children.props &&
        typeof children.props === "object" &&
        "className" in children.props &&
        typeof children.props.className === "string" &&
        children.props.className.includes("sr-only")
      )
    : !!children;

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center font-medium ${
        hasIcons && hasVisibleChildren ? "gap-2" : ""
      } rounded-lg transition ${className} ${sizeClasses[size]} ${
        variantClasses[variant]
      } ${disabled || loading ? "cursor-not-allowed opacity-50" : ""}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
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
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <>
          {startIcon && <span className="flex-shrink-0">{startIcon}</span>}
          <span>{children}</span>
          {endIcon && <span className="flex-shrink-0">{endIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
