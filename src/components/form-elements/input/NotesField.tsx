import React from "react";
import { EditIcon } from "@/icons";
import TextareaField from "@/components/form-elements/input/TextareaField";

interface NotesFieldProps {
  // Input-specific props
  name?: string;
  id?: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  success?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean; // Auto-focus on mount
  // FormField props (inherited from TextareaField)
  label?: string;
  error?: boolean | string;
  required?: boolean;
  hasValue?: boolean;
  hasBeenTouched?: boolean;
  className?: string;
  hint?: string;
}

const NotesField: React.FC<NotesFieldProps> = ({
  // Input props
  name,
  id,
  placeholder = "Buyer Notes...",
  rows = 4,
  value = "",
  onChange,
  disabled = false,
  success = false,
  readOnly = false,
  autoFocus = false,
  // FormField props
  label = "Notes",
  error = false,
  required = false,
  hasValue,
  hasBeenTouched,
  className = "",
  hint = "",
}) => {
  const fieldId = id || name || "notes";

  return (
    <TextareaField
      id={fieldId}
      name={name || fieldId}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      disabled={disabled}
      success={success}
      error={error}
      readOnly={readOnly}
      autoFocus={autoFocus}
      leftIcon={<EditIcon />}
      label={label}
      required={required}
      hasValue={hasValue}
      hasBeenTouched={hasBeenTouched}
      className={className}
      hint={hint}
    />
  );
};

export default NotesField;
