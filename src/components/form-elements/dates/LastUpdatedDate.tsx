import React from "react";
import DateField from "@/components/form-elements/dates/DateField";

interface LastUpdatedDateFieldProps {
  value?: string | Date | null;
  onChange?: (dateString: string) => void;
  error?: string;
  className?: string;
  label?: string;
  htmlFor?: string;
  readonly?: boolean;
  isNewRecord?: boolean; // Hide component when creating new records
}

export default function LastUpdatedDate({
  value,
  onChange,
  error,
  className = "sm:col-span-1",
  label = "Last Updated",
  htmlFor = "last_updated_at",
  readonly = true,
  isNewRecord = false,
}: LastUpdatedDateFieldProps) {
  // Don't render if it's a new record or if value is empty/null
  const hasValue = value && value !== "" && value !== null;

  if (isNewRecord || !hasValue) {
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
      placeholder="Updated on save"
      readonly={readonly}
      autoPopulateToday={false} // Never auto-populate - should come from DB
    />
  );
}
