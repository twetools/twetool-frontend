"use client";
import type React from "react";
import { useEffect, useRef } from "react";

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  position?: "left" | "right" | "center";
  width?: "auto" | "full" | "sm" | "md" | "lg";
}

export const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  onClose,
  children,
  className = "",
  position = "left",
  width = "auto",
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Position classes - Updated for better right alignment
  const positionClasses = {
    left: "left-0 origin-top-left",
    right: "right-0 origin-top-right",
    center: "left-1/2 transform -translate-x-1/2 origin-top",
  };

  // Width classes
  const widthClasses = {
    auto: "w-auto min-w-max",
    full: "w-full",
    sm: "w-48",
    md: "w-64",
    lg: "w-80",
  };

  // Base dropdown styles
  const baseStyles =
    "absolute z-40 mt-2 rounded-xl border border-gray-200 bg-white shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark";

  const combinedClasses =
    `${baseStyles} ${positionClasses[position]} ${widthClasses[width]} ${className}`.trim();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(".dropdown-toggle")
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div ref={dropdownRef} className={combinedClasses}>
      {children}
    </div>
  );
};
