import React, { useState } from "react";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import InputField from "@/components/form-elements/input/InputField";

interface PasswordFieldProps {
  // Input-specific props
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  copyable?: boolean;
  disabled?: boolean;
  success?: boolean;
  readOnly?: boolean;
  // FormField props (inherited from InputField)
  label?: string;
  error?: boolean | string;
  required?: boolean;
  hasValue?: boolean;
  hasBeenTouched?: boolean;
  className?: string;
  hint?: string;
  // Password-specific features
  allowToggleVisibility?: boolean; // Whether to show the eye icon toggle
}

// Password validation utilities
const validatePasswordField = (
  value: string,
  required: boolean = false,
  minLength: number = 0
): string => {
  const trimmed = value?.trim() || "";

  // If field is required and empty
  if (required && !trimmed) {
    return "Password is required";
  }

  // If field has content and minimum length is specified
  if (trimmed && minLength > 0 && trimmed.length < minLength) {
    return `Password must be at least ${minLength} characters`;
  }

  // No errors
  return "";
};

const PasswordField: React.FC<PasswordFieldProps> = ({
  // Input props
  id = "password",
  value,
  onChange,
  onBlur,
  placeholder = "Enter your password",
  copyable = false, // Passwords should not be copyable by default for security
  disabled = false,
  success = false,
  readOnly = false,
  // FormField props
  label = "Password",
  error = false,
  required = false,
  hasValue,
  hasBeenTouched,
  className = "",
  hint,
  // Password-specific features
  allowToggleVisibility = true,
}) => {
  // State for password visibility toggle
  const [isVisible, setIsVisible] = useState(false);

  // Toggle password visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Create the toggle icon following the copy icon pattern
  const toggleIcon =
    allowToggleVisibility && !disabled && !readOnly ? (
      <button
        type="button"
        onClick={toggleVisibility}
        className="inline-flex cursor-pointer items-center gap-1 border-l border-gray-200 py-3 pl-3.5 pr-3 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
        tabIndex={-1}
        aria-label={isVisible ? "Hide password" : "Show password"}
      >
        {isVisible ? (
          <EyeIcon />
        ) : (
          <EyeCloseIcon />
        )}
      </button>
    ) : null;

  return (
    <InputField
      id={id}
      type={isVisible ? "text" : "password"}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      rightIcon={toggleIcon}
      copyable={copyable}
      disabled={disabled}
      error={error}
      success={success}
      readOnly={readOnly}
      fieldName="Password"
      label={label}
      required={required}
      hasValue={hasValue}
      hasBeenTouched={hasBeenTouched}
      className={className}
      hint={hint}
    />
  );
};

export default PasswordField;
