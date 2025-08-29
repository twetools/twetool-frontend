import React from "react";
import Link from "next/link";

interface DropdownItemProps {
  tag?: "a" | "button";
  href?: string;
  onClick?: () => void;
  onItemClick?: () => void;
  baseClassName?: string;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: "default" | "destructive";
  disabled?: boolean;
  childrenClassName?: string; // New prop for overriding children wrapper classes
}

export function DropdownItem({
  tag = "button",
  href,
  onClick,
  onItemClick,
  baseClassName = "",
  className = "",
  children,
  icon,
  iconPosition = "left",
  variant = "default",
  disabled = false,
  childrenClassName, // New prop for overriding children wrapper classes
}: DropdownItemProps) {
  // Variant classes
  const variantClasses = {
    default:
      "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5",
    destructive:
      "text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20",
  };

  // Base classes
  const baseClasses =
    baseClassName ||
    "flex items-center gap-3 w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors";

  const combinedClasses = `${baseClasses} ${
    variantClasses[variant]
  } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`.trim();

  const handleClick = (event: React.MouseEvent) => {
    if (disabled) return;

    if (tag === "button") {
      event.preventDefault();
    }
    if (onClick) onClick();
    if (onItemClick) onItemClick();
  };

  const renderContent = () => (
    <>
      {icon && iconPosition === "left" && (
        <span className="flex items-center flex-shrink-0">
          {React.isValidElement(icon)
            ? React.cloneElement(icon as React.ReactElement<any>, {
                className: "w-6 h-6 flex-shrink-0",
                style: { color: "currentColor" },
              })
            : icon}
        </span>
      )}
      {/* Default flex wrapper for children, but allow override */}
      {childrenClassName === "" ? (
        children
      ) : (
        <span className={childrenClassName || "flex items-center gap-3"}>
          {children}
        </span>
      )}
      {icon && iconPosition === "right" && (
        <span className="flex items-center flex-shrink-0">
          {React.isValidElement(icon)
            ? React.cloneElement(icon as React.ReactElement<any>, {
                className: "w-6 h-6 flex-shrink-0",
                style: { color: "currentColor" },
              })
            : icon}
        </span>
      )}
    </>
  );

  if (tag === "a" && href) {
    return (
      <Link href={href} className={combinedClasses} onClick={handleClick}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={combinedClasses}
      disabled={disabled}
    >
      {renderContent()}
    </button>
  );
}
