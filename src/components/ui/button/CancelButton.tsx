import React from "react";
import Button from "@/components/ui/button/Button";
import { CloseIcon } from "@/icons";

interface CancelButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  showIcon?: boolean;
  size?: "sm" | "md";
  variant?: "outline" | "ghost";
  disabled?: boolean;
}

const CancelButton: React.FC<CancelButtonProps> = ({
  onClick,
  children = "Cancel",
  className = "",
  type = "button",
  showIcon = false,
  size = "sm",
  variant = "outline",
  disabled = false,
}) => (
  <Button
    size={size}
    variant={variant}
    onClick={onClick}
    startIcon={showIcon ? <CloseIcon /> : undefined}
    className={className}
    type={type}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default CancelButton;
