import React from "react";
import { WebsiteIcon } from "@/icons";
import InputField from "@/components/form-elements/input/InputField";

interface WebsiteFieldProps {
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
  // Website-specific validation
  validateFormat?: boolean; // Whether to validate website format (independent of required)
}

// Website validation utilities
const formatWebsite = (value: string): string => {
  // Trim whitespace and convert to lowercase
  let formatted = value.trim().toLowerCase();

  // Add https:// if no protocol is present and it looks like a valid domain
  if (formatted && !formatted.match(/^https?:\/\//)) {
    // Check if it looks like a domain (contains a dot and no spaces)
    if (formatted.includes(".") && !formatted.includes(" ")) {
      formatted = `https://${formatted}`;
    }
  }

  return formatted;
};

const isValidWebsite = (value: string): boolean => {
  // Basic website validation pattern
  const websiteRegex =
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
  return websiteRegex.test(value);
};

// Conditional website validation - validates format only if website has content
const validateWebsiteField = (
  value: string,
  required: boolean = false,
  validateFormat: boolean = true
): string => {
  const trimmed = value?.trim() || "";

  // If field is required and empty
  if (required && !trimmed) {
    return "Website is required";
  }

  // If field has content and format validation is enabled
  if (trimmed && validateFormat && !isValidWebsite(trimmed)) {
    return "Please enter a valid website URL";
  }

  // No errors
  return "";
};

const suggestWebsiteDomain = (value: string): string | null => {
  // Common website domain suggestions for typos
  const domainSuggestions: { [key: string]: string } = {
    "gooogle.com": "google.com",
    "googel.com": "google.com",
    "facebok.com": "facebook.com",
    "linkdin.com": "linkedin.com",
    "youtub.com": "youtube.com",
  };

  // Extract domain from URL
  try {
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    const domain = url.hostname.replace("www.", "");
    return domainSuggestions[domain] || null;
  } catch {
    return null;
  }
};

const WebsiteField: React.FC<WebsiteFieldProps> = ({
  // Input props
  id = "website",
  value,
  onChange,
  onBlur,
  placeholder = "https://www.example.com",
  copyable = true,
  disabled = false,
  success = false,
  readOnly = false,
  // FormField props
  label = "Website",
  error = false,
  required = false,
  hasValue,
  hasBeenTouched,
  className = "",
  hint,
  // Website-specific validation
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
    const formattedValue = formatWebsite(rawValue);

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
      type="url"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      leftIcon={<WebsiteIcon  />}
      copyable={copyable}
      disabled={disabled}
      error={error}
      success={success}
      readOnly={readOnly}
      fieldName="Website"
      label={label}
      required={required}
      hasValue={hasValue}
      hasBeenTouched={hasBeenTouched}
      className={className}
      hint={hint}
    />
  );
};

export default WebsiteField;
