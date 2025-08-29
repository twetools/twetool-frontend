import type React from "react";

interface DropdownDividerProps {
  className?: string;
}

export const DropdownDivider: React.FC<DropdownDividerProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`my-1 h-px w-full bg-gray-200 dark:bg-gray-600 ${className}`}
    />
  );
};
