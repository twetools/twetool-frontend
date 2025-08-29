import React from "react";
import { TimeIcon } from "@/icons";
import InputField from "@/components/form-elements/input/InputField";

interface TimeFieldProps {
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
  // Time-specific features
  format24Hour?: boolean; // Whether to use 24-hour format (default: 12-hour)
}

// Time formatting utilities
const formatTime = (value: string, format24Hour: boolean = false): string => {
  if (!value) return "";

  if (format24Hour) {
    // For 24-hour format, keep existing logic
    const digitsOnly = value.replace(/\D/g, "");

    if (digitsOnly.length === 0) return "";
    if (digitsOnly.length <= 2) return digitsOnly;
    if (digitsOnly.length <= 4) {
      const hours = digitsOnly.slice(0, 2);
      const minutes = digitsOnly.slice(2);
      return `${hours}:${minutes}`;
    }

    // Limit to 4 digits (HHMM)
    const limitedDigits = digitsOnly.slice(0, 4);
    const hours = limitedDigits.slice(0, 2);
    const minutes = limitedDigits.slice(2);
    return `${hours}:${minutes}`;
  } else {
    // For 12-hour format, handle AM/PM
    let workingValue = value.toUpperCase();

    // Smart AM/PM conversion
    if (workingValue.includes("A") && !workingValue.includes("AM")) {
      workingValue = workingValue.replace(/A+/, "AM");
    }
    if (workingValue.includes("P") && !workingValue.includes("PM")) {
      workingValue = workingValue.replace(/P+/, "PM");
    }

    // Extract AM/PM if present
    const ampmMatch = workingValue.match(/(AM|PM)$/);
    const ampm = ampmMatch ? ampmMatch[1] : "";

    // Remove AM/PM and format time part
    const timeOnly = workingValue.replace(/(AM|PM)$/, "").trim();
    const digitsOnly = timeOnly.replace(/\D/g, "");

    if (digitsOnly.length === 0) return ampm ? ` ${ampm}` : "";

    let formattedTime = "";
    if (digitsOnly.length <= 2) {
      formattedTime = digitsOnly;
    } else if (digitsOnly.length <= 4) {
      const hours = digitsOnly.slice(0, 2);
      const minutes = digitsOnly.slice(2);
      formattedTime = `${hours}:${minutes}`;
    } else {
      // Limit to 4 digits (HHMM)
      const limitedDigits = digitsOnly.slice(0, 4);
      const hours = limitedDigits.slice(0, 2);
      const minutes = limitedDigits.slice(2);
      formattedTime = `${hours}:${minutes}`;
    }

    return formattedTime + (ampm ? ` ${ampm}` : "");
  }
};

const validateTimeFormat = (
  value: string,
  required: boolean = false,
  format24Hour: boolean = false
): string => {
  const trimmed = value?.trim() || "";

  // If field is required and empty
  if (required && !trimmed) {
    return "Time is required";
  }

  // If field has content, validate format
  if (trimmed) {
    if (format24Hour) {
      // For 24-hour format using HTML5 time input, value is in HH:MM format
      const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
      if (!timeRegex.test(trimmed)) {
        return "Please select a valid time";
      }
    } else {
      // 12-hour format validation with AM/PM
      const timeAmPmRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;
      const timeOnlyRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/;

      if (!timeAmPmRegex.test(trimmed) && !timeOnlyRegex.test(trimmed)) {
        return "Please enter time in HH:MM AM/PM format";
      }

      // If time only (no AM/PM), that's acceptable for partial input
      if (timeOnlyRegex.test(trimmed)) {
        const [hoursStr, minutesStr] = trimmed.split(":");
        const hours = parseInt(hoursStr, 10);
        const minutes = parseInt(minutesStr, 10);

        if (hours < 1 || hours > 12) {
          return "Hours must be between 01 and 12";
        }
        if (minutes < 0 || minutes > 59) {
          return "Minutes must be between 00 and 59";
        }
      }
    }
  }

  // No errors
  return "";
};

const TimeField: React.FC<TimeFieldProps> = ({
  // Input props
  id = "time",
  value,
  onChange,
  onBlur,
  placeholder,
  copyable = false,
  disabled = false,
  success = false,
  readOnly = false,
  // FormField props
  label = "Time",
  error = false,
  required = false,
  hasValue,
  hasBeenTouched,
  className = "",
  hint,
  // Time-specific features
  format24Hour = false,
}) => {
  // For 24-hour format, use native HTML5 time input for better UX
  // For 12-hour format, use text input with intelligent AM/PM formatting
  const inputType = format24Hour ? "time" : "text";

  // Handle input changes with intelligent formatting (only for 12-hour format)
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (format24Hour) {
      // For 24-hour format, pass through unchanged (HTML5 time input handles formatting)
      if (onChange) {
        onChange(e);
      }
    } else {
      // For 12-hour format, apply intelligent formatting
      const formattedValue = formatTime(inputValue, format24Hour);

      // Create a new event with the formatted value
      const formattedEvent = {
        ...e,
        target: {
          ...e.target,
          value: formattedValue,
        },
      };

      if (onChange) {
        onChange(formattedEvent);
      }
    }
  };

  // Create the time icon indicator using base class system
  const timeIcon = <TimeIcon />;

  // Set appropriate placeholder based on format
  const defaultPlaceholder = format24Hour ? "Select time" : "HH:MM AM/PM";

  return (
    <InputField
      id={id}
      type={inputType}
      value={value}
      onChange={handleTimeChange}
      onBlur={onBlur}
      placeholder={placeholder || defaultPlaceholder}
      rightIcon={timeIcon}
      copyable={copyable}
      disabled={disabled}
      error={error}
      success={success}
      readOnly={readOnly}
      fieldName="Time"
      label={label}
      required={required}
      hasValue={hasValue}
      hasBeenTouched={hasBeenTouched}
      className={className}
      hint={hint}
    />
  );
};

export default TimeField;
export { validateTimeFormat, formatTime };
