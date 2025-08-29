import type React from "react";
import type { FC, ReactNode } from "react";

interface TextareaProps {
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  hint?: string;
  readOnly?: boolean;
  autoFocus?: boolean; // Auto-focus on mount
  // Enhanced props for semantic layer
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftPadding?: string; // Custom left padding when using icons
  rightPadding?: string; // Custom right padding when using icons
  iconBorder?: boolean; // Whether to show border separator for left icon
  resize?: "none" | "vertical" | "horizontal" | "both";
  minHeight?: string;
}

const TextareaBase: FC<TextareaProps> = ({
  id,
  name,
  placeholder,
  value,
  defaultValue,
  onChange,
  className = "",
  rows = 4,
  disabled = false,
  success = false,
  error = false,
  hint,
  readOnly = false,
  autoFocus = false,
  leftIcon,
  rightIcon,
  leftPadding = leftIcon ? "pl-16" : "pl-4",
  rightPadding = rightIcon ? "pr-[48px]" : "pr-4",
  iconBorder = true,
  resize = "vertical",
  minHeight = "4rem",
}) => {
  let textareaClasses = `w-full rounded-lg border py-3 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 ${leftPadding} ${rightPadding} ${className}`;

  if (disabled) {
    textareaClasses += ` text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
  } else if (readOnly) {
    textareaClasses += ` bg-transparent text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-900 dark:text-gray-500 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-300 dark:focus:border-gray-700 pointer-events-none`;
  } else if (error) {
    textareaClasses += ` border-error-500 focus:border-error-300 focus:ring-error-500/20 dark:text-error-400 dark:border-error-500 dark:focus:border-error-800`;
  } else if (success) {
    textareaClasses += ` border-success-500 focus:border-success-300 focus:ring-success-500/20 dark:text-success-400 dark:border-success-500 dark:focus:border-success-800`;
  } else {
    textareaClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800`;
  }

  // Only pass value or defaultValue, not both
  const textareaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
    id,
    name,
    placeholder,
    onChange,
    rows,
    disabled,
    readOnly,
    autoFocus,
    className: textareaClasses,
    style: { resize, minHeight },
  };

  if (value !== undefined) {
    textareaProps.value = value;
  } else if (defaultValue !== undefined) {
    textareaProps.defaultValue = defaultValue;
  }

  return (
    <div className="relative">
      <textarea {...textareaProps} />

      {/* Left Icon */}
      {leftIcon && (
        <span
          className={`absolute left-0 top-0 h-full flex items-start pt-3 px-3.5 text-gray-500 dark:text-gray-400 ${
            iconBorder ? "border-r border-gray-200 dark:border-gray-800" : ""
          }`}
          style={{ pointerEvents: "none" }}
        >
          {leftIcon}
        </span>
      )}

      {/* Right Icon */}
      {rightIcon && (
        <span
          className="absolute right-0 top-0 pt-3 px-3.5 text-gray-500 dark:text-gray-400"
          style={{ pointerEvents: "none" }}
        >
          {rightIcon}
        </span>
      )}

      {hint && (
        <p
          className={`mt-1.5 text-xs ${
            error
              ? "text-error-500"
              : success
              ? "text-success-500"
              : "text-gray-500"
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

export default TextareaBase;
