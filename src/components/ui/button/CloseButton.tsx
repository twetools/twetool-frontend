import React from "react";
import Button from "@/components/ui/button/Button";
import { CloseIcon } from "@/icons";

const CloseButton: React.FC<{
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  showIcon?: boolean;
}> = ({
  onClick,
  children = "Close",
  className = "",
  type = "button",
  showIcon = false,
}) => (
  <Button
    size="sm"
    variant="outline"
    onClick={onClick}
    startIcon={showIcon ? <CloseIcon /> : undefined}
    className={className}
    type={type}
  >
    {children}
  </Button>
);

export default CloseButton;
