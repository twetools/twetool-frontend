import React from "react";
import Button from "@/components/ui/button/Button";
import { SaveIcon } from "@/icons";

interface SaveButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  showIcon?: boolean;
  size?: "sm" | "md";
  variant?: "primary" | "success";
  loading?: boolean;
  disabled?: boolean;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  onClick,
  children = "Save",
  className = "",
  type = "submit",
  showIcon = true,
  size = "sm",
  variant = "primary",
  loading = false,
  disabled = false,
}) => (
  <Button
    size={size}
    variant={variant}
    onClick={onClick}
    startIcon={showIcon && !loading ? <SaveIcon /> : undefined}
    className={className}
    type={type}
    loading={loading}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default SaveButton;
