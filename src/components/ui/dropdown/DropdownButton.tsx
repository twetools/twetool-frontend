"use client";
import { Dropdown } from "@/components/ui/dropdown/Dropdown";
import React, { useState, ReactNode } from "react";

interface DropdownButtonProps {
  label?: ReactNode;
  icon?: ReactNode; // Legacy support - will be treated as dropdownIcon
  startIcon?: ReactNode; // Icon to the left of the text
  endIcon?: ReactNode; // Icon to the right of the text
  dropdownIcon?: ReactNode; // Dropdown indicator icon
  children?: ReactNode;
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  colorClassName?: string;
  /**
   * Dropdown alignment:
   *  - undefined/null: default (dropdown left aligns with button left)
   *  - "left": dropdown right aligns with button left
   *  - "right": dropdown left aligns with button right
   */
  alignDropdown?: "left" | "right";
  align?: "left" | "right"; // legacy, still supported
  onOpen?: () => void;
  onClose?: () => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  label = "Account Menu",
  icon, // Legacy support
  startIcon,
  endIcon,
  dropdownIcon,
  children,
  className = "",
  buttonClassName = "",
  menuClassName = "",
  colorClassName = "bg-brand-500 hover:bg-brand-600 text-white",
  alignDropdown,
  align, // legacy
  onOpen,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen((open) => {
      if (!open && onOpen) onOpen();
      if (open && onClose) onClose();
      return !open;
    });
  }

  function closeDropdown() {
    setIsOpen(false);
    if (onClose) onClose();
  }

  // Determine dropdown alignment class
  let dropdownAlignClass = "";
  if (alignDropdown === "left") {
    // Align left border of dropdown with left border of button
    dropdownAlignClass = "left-0 right-auto";
  } else if (alignDropdown === "right") {
    // Align right border of dropdown with right border of button
    dropdownAlignClass = "right-0 left-auto";
  } else if (align === "right") {
    // legacy support
    dropdownAlignClass = "right-0 left-auto";
  } else {
    // default: left align
    dropdownAlignClass = "left-0";
  }

  // Default animated dropdown icon
  const defaultDropdownIcon = (
    <svg
      className={`duration-200 ease-in-out stroke-current ${
        isOpen ? "rotate-180" : ""
      }`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.79199 7.396L10.0003 12.6043L15.2087 7.396"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Determine the final dropdown icon to use
  const finalDropdownIcon = dropdownIcon || icon || defaultDropdownIcon;

  // Determine icon positioning based on startIcon and endIcon
  const hasStartIcon = !!startIcon;
  const hasEndIcon = !!endIcon;

  // If endIcon is provided, dropdown icon goes to the left of text
  // Otherwise, dropdown icon goes on the right (standard position)
  const dropdownIconPosition = hasEndIcon ? "left" : "right";

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={toggleDropdown}
        className={`inline-flex items-center dropdown-toggle gap-2 px-4 py-3 text-sm font-medium rounded-lg ${colorClassName} ${buttonClassName}`}
        type="button"
      >
        {/* Start Icon */}
        {hasStartIcon && <span className="flex-shrink-0">{startIcon}</span>}

        {/* Dropdown Icon on Left (when endIcon is present) */}
        {dropdownIconPosition === "left" && (
          <span className="flex-shrink-0 w-5 h-5">{finalDropdownIcon}</span>
        )}

        {/* Label */}
        <span className="flex-1">{label}</span>

        {/* End Icon */}
        {hasEndIcon && <span className="flex-shrink-0 w-5 h-5">{endIcon}</span>}

        {/* Dropdown Icon on Right (default position) */}
        {dropdownIconPosition === "right" && (
          <span className="flex-shrink-0 w-5 h-5">{finalDropdownIcon}</span>
        )}
      </button>

      <Dropdown
        className={`absolute left-0 top-full z-40 mt-2 min-w-[260px] rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-[#1E2635] ${dropdownAlignClass} ${menuClassName}`}
        width="md"
        isOpen={isOpen}
        onClose={closeDropdown}
      >
        <ul className="flex flex-col gap-1">
          {React.Children.map(children, (child, idx) =>
            child ? (
              <li key={idx}>
                {React.isValidElement(child) && typeof child.type !== "string"
                  ? React.cloneElement(child as React.ReactElement<any>, {
                      className: `${
                        (child as React.ReactElement<any>).props.className || ""
                      } pr-6`,
                      onItemClick: (...args: any[]) => {
                        const childElement = child as React.ReactElement<any>;
                        if (childElement.props.onItemClick)
                          childElement.props.onItemClick(...args);
                        closeDropdown();
                      },
                    })
                  : child}
              </li>
            ) : null
          )}
        </ul>
      </Dropdown>
    </div>
  );
};

export default DropdownButton;
