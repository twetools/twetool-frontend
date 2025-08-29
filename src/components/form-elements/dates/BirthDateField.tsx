import React from "react";
import DateField from "@/components/form-elements/dates/DateField";

interface BirthDateFieldProps {
  value?: string;
  onChange?: (dateString: string) => void;
  error?: string;
  className?: string;
  label?: string;
  htmlFor?: string;
}

export default function BirthDateField({
  value,
  onChange,
  error,
  className = "sm:col-span-1",
  label = "Birthdate",
  htmlFor = "birth_date",
}: BirthDateFieldProps) {
  return (
    <DateField
      value={value}
      onChange={onChange}
      error={error}
      className={className}
      label={label}
      htmlFor={htmlFor}
    />
  );
}
