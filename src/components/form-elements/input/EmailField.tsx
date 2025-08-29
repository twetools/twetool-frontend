import React from "react";
import { EnvelopeIcon } from "@/icons";
import InputField from "@/components/form-elements/input/InputField";

interface EmailFieldProps {
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
  // Email-specific validation
  validateFormat?: boolean; // Whether to validate email format (independent of required)
}

// Email validation utilities
const formatEmail = (value: string): string => {
  // Convert to lowercase and trim whitespace
  return value.toLowerCase().trim();
};

const isValidEmail = (value: string): boolean => {
  // Basic email validation pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

// Conditional email validation - validates format only if email has content
const validateEmailField = (
  value: string,
  required: boolean = false,
  validateFormat: boolean = true
): string => {
  const trimmed = value?.trim() || "";

  // If field is required and empty
  if (required && !trimmed) {
    return "Email is required";
  }

  // If field has content and format validation is enabled
  if (trimmed && validateFormat && !isValidEmail(trimmed)) {
    return "Please enter a valid email address";
  }

  // No errors
  return "";
};

const suggestEmailDomain = (value: string): string | null => {
  // Common email domain suggestions for typos
  const commonDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
  ];
  const domainSuggestions: { [key: string]: string } = {
    "gmial.com": "gmail.com",
    "gmai.com": "gmail.com",
    "yahooo.com": "yahoo.com",
    "hotmial.com": "hotmail.com",
    "outlok.com": "outlook.com",
  };

  const atIndex = value.lastIndexOf("@");
  if (atIndex === -1) return null;

  const domain = value.substring(atIndex + 1);
  return domainSuggestions[domain] || null;
};

const EmailField: React.FC<EmailFieldProps> = ({
  // Input props
  id = "email",
  value,
  onChange,
  onBlur,
  placeholder = "user@example.com",
  copyable = true,
  disabled = false,
  success = false,
  readOnly = false,
  // FormField props
  label = "Email",
  error = false,
  required = false,
  hasValue,
  hasBeenTouched,
  className = "",
  hint,
  // Email-specific validation
  validateFormat = true,
}) => {
  // Handle formatted input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;

    // Only format on blur to avoid disrupting typing
    // During typing, just pass through the value
    if (onChange) {
      onChange(e);
    }
  };

  // Handle blur with intelligent formatting
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = formatEmail(rawValue);

    // Create a new event with formatted value if it changed
    if (formattedValue !== rawValue) {
      const formattedEvent = {
        ...e,
        target: {
          ...e.target,
          value: formattedValue,
        },
      };

      if (onChange) {
        onChange(
          formattedEvent as unknown as React.ChangeEvent<HTMLInputElement>
        );
      }
    }

    // Call original onBlur handler
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <InputField
      id={id}
      type="email"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      leftIcon={<EnvelopeIcon />}
      copyable={copyable}
      disabled={disabled}
      error={error}
      success={success}
      readOnly={readOnly}
      fieldName="Email"
      label={label}
      required={required}
      hasValue={hasValue}
      hasBeenTouched={hasBeenTouched}
      className={className}
      hint={hint}
    />
  );
};

export default EmailField;
