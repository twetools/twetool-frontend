import React from "react";
import DateField from "@/components/form-elements/dates/DateField";

interface LastContactDateFieldProps {
  value?: Date | string | undefined;
  onChange: (dateString: string) => void;
  error?: string;
  className?: string;
  label?: string;
  htmlFor?: string;
}

export default function LastContactDateField({
  value,
  onChange,
  error,
  className = "sm:col-span-1",
  label = "Last Contact",
  htmlFor = "last_contact_date",
}: LastContactDateFieldProps) {
  return (
    <DateField
      value={value}
      onChange={onChange}
      error={error}
      className={className}
      label={label}
      htmlFor={htmlFor}
      placeholder="Select date"
    />
  );
}
