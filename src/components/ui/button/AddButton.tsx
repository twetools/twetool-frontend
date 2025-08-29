import React from "react";
import Button from "@/components/ui/button/Button";
import { PlusIcon } from "@/icons";

interface AddButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
  variant?: "primary" | "success";
  showIcon?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const AddButton: React.FC<AddButtonProps> = ({
  onClick,
  children = "Add",
  className = "",
  size = "sm",
  variant = "primary",
  showIcon = true,
  loading = false,
  disabled = false,
}) => (
  <Button
    size={size}
    variant={variant}
    onClick={onClick}
    startIcon={showIcon && !loading ? <PlusIcon /> : undefined}
    className={className}
    type="button"
    loading={loading}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default AddButton;
