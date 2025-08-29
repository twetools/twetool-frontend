import React from "react";
import DateField from "@/components/form-elements/dates/DateField";

interface CreatedDateFieldProps {
  value?: string | Date | null;
  onChange?: (dateString: string) => void;
  error?: string;
  className?: string;
  label?: string;
  htmlFor?: string;
  readonly?: boolean;
  isNewRecord?: boolean; // Add flag to determine if this is a new record
}

export default function CreatedDateField({
  value,
  onChange,
  error,
  className = "sm:col-span-1",
  label = "Created Date",
  htmlFor = "created_at",
  readonly = true,
  isNewRecord = false, // Default to false for safety
}: CreatedDateFieldProps) {
  // Don't render if it's a new record and no value is set
  const hasValue = value && value !== "" && value !== null;

  if (isNewRecord && !hasValue) {
    return null;
  }

  return (
    <DateField
      value={value}
      onChange={onChange}
      error={error}
      className={className}
      label={label}
      htmlFor={htmlFor}
      placeholder={
        value ? undefined : isNewRecord ? "Will be set on save" : "No date set"
      }
      readonly={readonly}
      autoPopulateToday={isNewRecord && !value} // Only auto-populate for new records without a value
    />
  );
}
