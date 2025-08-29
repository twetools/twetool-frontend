import React from "react";
import Button from "@/components/ui/button/Button";

interface ButtonSpinnerProps {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md";
}

const ButtonSpinner: React.FC<ButtonSpinnerProps> = ({
  variant = "primary",
  children,
  loading = false,
  disabled = false,
  onClick,
  className = "",
  size = "sm",
}) => {
  // Create spinner icon with better styling
  const spinnerIcon = (
    <span className="animate-spin">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <circle
          cx="10"
          cy="10"
          r="8"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.25"
        />
        <path
          d="M18 10C18 5.58172 14.4183 2 10 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );

  return (
    <Button
      variant={variant}
      size={size}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      className={className}
      startIcon={loading ? spinnerIcon : undefined}
    >
      {children}
    </Button>
  );
};

export default ButtonSpinner;
