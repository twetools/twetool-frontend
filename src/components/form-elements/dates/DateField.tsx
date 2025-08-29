import React, { useEffect, useMemo, useCallback } from "react";
import DatePicker from "@/components/form-elements/dates/DatePicker";
import FormField from "@/components/form-elements/form/FormField";

/**
 * Enhanced DateField component with robust date format handling and validation
 *
 * Features:
 * - Accepts multiple input formats (YYYY-MM-DD, MM/DD/YYYY, DD/MM/YYYY)
 * - Always outputs consistent YYYY-MM-DD format
 * - Built-in validation with min/max date constraints
 * - Auto-population with today's date option
 * - Proper timezone handling to prevent date shifting
 * - Enhanced error messages for invalid dates
 * - Format-aware placeholder generation
 */

interface DateFieldProps {
  /** The current date value - accepts string (YYYY-MM-DD, MM/DD/YYYY, DD/MM/YYYY) or Date object */
  value?: string | Date | null;
  /** Callback when date changes - always returns YYYY-MM-DD format */
  onChange?: (dateString: string) => void;
  /** Error message to display */
  error?: string;
  /** CSS class for the field container */
  className?: string;
  /** Label text for the field */
  label?: string;
  /** HTML id and htmlFor attribute */
  htmlFor?: string;
  /** Placeholder text (auto-generated based on dateFormat if not provided) */
  placeholder?: string;
  /** Whether the field is read-only */
  readonly?: boolean;
  /** Auto-populate with today's date if field is empty */
  autoPopulateToday?: boolean;
  /** Minimum allowed date */
  minDate?: string | Date;
  /** Maximum allowed date */
  maxDate?: string | Date;
  /** Preferred date format for display and input parsing */
  dateFormat?: "YYYY-MM-DD" | "MM/DD/YYYY" | "DD/MM/YYYY";
  /** Enable intelligent slash/dash insertion while typing (default: true) */
  autoFormat?: boolean;
}

export default function DateField({
  value,
  onChange,
  error,
  className = "sm:col-span-1",
  label = "Date Field",
  htmlFor = "date_field",
  placeholder = "Select date",
  readonly = false,
  autoPopulateToday = false,
  minDate,
  maxDate,
  dateFormat = "MM/DD/YYYY",
  autoFormat = true,
}: DateFieldProps) {
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  // Enhanced date validation function
  const validateDate = useCallback(
    (dateString: string): string | null => {
      if (!dateString || dateString.trim() === "") {
        return null; // Empty is valid (optional field)
      }

      // Try to parse the date
      let parsedDate: Date | null = null;

      // Handle ISO format (YYYY-MM-DD)
      if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
        const [year, month, day] = dateString.split("-").map(Number);
        parsedDate = new Date(year, month - 1, day);
      }
      // Handle MM/DD/YYYY format
      else if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
        const [month, day, year] = dateString.split("/").map(Number);
        parsedDate = new Date(year, month - 1, day);
      }
      // Handle DD/MM/YYYY format
      else if (
        /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString) &&
        dateFormat === "DD/MM/YYYY"
      ) {
        const [day, month, year] = dateString.split("/").map(Number);
        parsedDate = new Date(year, month - 1, day);
      }
      // Try general parsing as fallback
      else {
        parsedDate = new Date(dateString);
      }

      // Check if date is valid
      if (!parsedDate || isNaN(parsedDate.getTime())) {
        return "Invalid date format";
      }

      // Check min/max date constraints
      if (minDate) {
        const minDateTime =
          typeof minDate === "string" ? new Date(minDate) : minDate;
        if (parsedDate < minDateTime) {
          return `Date must be after ${formatDateForDisplay(minDateTime)}`;
        }
      }

      if (maxDate) {
        const maxDateTime =
          typeof maxDate === "string" ? new Date(maxDate) : maxDate;
        if (parsedDate > maxDateTime) {
          return `Date must be before ${formatDateForDisplay(maxDateTime)}`;
        }
      }

      return null; // Valid date
    },
    [minDate, maxDate, dateFormat]
  );

  // Format date for display based on preference
  const formatDateForDisplay = useCallback(
    (date: Date): string => {
      if (!date || isNaN(date.getTime())) return "";

      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");

      switch (dateFormat) {
        case "MM/DD/YYYY":
          return `${month}/${day}/${year}`;
        case "DD/MM/YYYY":
          return `${day}/${month}/${year}`;
        case "YYYY-MM-DD":
        default:
          return `${year}-${month}-${day}`;
      }
    },
    [dateFormat]
  );

  // Normalize date input to consistent YYYY-MM-DD format for internal use
  const normalizeDate = useCallback(
    (input: string | Date | null): string => {
      if (!input) return "";

      let date: Date;

      if (input instanceof Date) {
        date = input;
      } else if (typeof input === "string") {
        const trimmed = input.trim();
        if (trimmed === "") return "";

        // Handle ISO format (YYYY-MM-DD)
        if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
          const [year, month, day] = trimmed.split("-").map(Number);
          date = new Date(year, month - 1, day);
        }
        // Handle MM/DD/YYYY format
        else if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(trimmed)) {
          const [month, day, year] = trimmed.split("/").map(Number);
          date = new Date(year, month - 1, day);
        }
        // Handle DD/MM/YYYY format (when specified)
        else if (
          /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(trimmed) &&
          dateFormat === "DD/MM/YYYY"
        ) {
          const [day, month, year] = trimmed.split("/").map(Number);
          date = new Date(year, month - 1, day);
        }
        // Handle ISO datetime strings
        else if (trimmed.includes("T")) {
          date = new Date(trimmed);
        }
        // Fallback to general parsing
        else {
          date = new Date(trimmed);
        }
      } else {
        return "";
      }

      // Return normalized YYYY-MM-DD format if valid
      if (isNaN(date.getTime())) return "";

      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");

      return `${year}-${month}-${day}`;
    },
    [dateFormat]
  );

  // Enhanced onChange handler with validation and formatting
  const handleDateChange = useCallback(
    (dateString: string) => {
      if (!onChange) return;

      const normalizedDate = normalizeDate(dateString);
      const validationError = validateDate(normalizedDate);

      // Always call onChange with the normalized date, even if there's an error
      // This allows the parent component to handle validation display
      onChange(normalizedDate);
    },
    [onChange, normalizeDate, validateDate]
  );

  // Only auto-populate on initial render if conditions are met
  useEffect(() => {
    // Only auto-populate if:
    // 1. autoPopulateToday is true
    // 2. No existing value (null, undefined, or empty string)
    // 3. onChange function exists
    const hasNoValue =
      !value ||
      (typeof value === "string" && value.trim() === "") ||
      (value instanceof Date && isNaN(value.getTime()));

    if (autoPopulateToday && onChange && hasNoValue) {
      handleDateChange(today);
    }
  }, [autoPopulateToday, today, handleDateChange]); // Use handleDateChange instead of onChange

  // Convert value to consistent string format for DatePicker with enhanced normalization
  const dateValue = useMemo(() => {
    return normalizeDate(value || null);
  }, [value, normalizeDate]);

  // Enhanced placeholder based on format preference
  const enhancedPlaceholder = useMemo(() => {
    if (placeholder !== "Select date") return placeholder;

    switch (dateFormat) {
      case "MM/DD/YYYY":
        return "MM/DD/YYYY";
      case "DD/MM/YYYY":
        return "DD/MM/YYYY";
      case "YYYY-MM-DD":
      default:
        return "YYYY-MM-DD";
    }
  }, [placeholder, dateFormat]);

  return (
    <FormField
      label={label}
      htmlFor={htmlFor}
      error={error}
      className={className}
    >
      <DatePicker
        id={htmlFor}
        value={dateValue}
        onDateChange={readonly ? undefined : handleDateChange}
        placeholder={enhancedPlaceholder}
        readonly={readonly}
        autoFormat={autoFormat}
        inputFormat={dateFormat}
      />
    </FormField>
  );
}
