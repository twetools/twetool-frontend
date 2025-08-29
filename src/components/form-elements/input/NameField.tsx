import React from "react";
import { UserIcon } from "@/icons";
import InputField from "@/components/form-elements/input/InputField";

interface NameFieldProps {
  // Input-specific props
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  success?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean; // Auto-focus on mount
  // FormField props (inherited from InputField)
  label?: string;
  error?: boolean | string;
  required?: boolean;
  hasValue?: boolean;
  hasBeenTouched?: boolean;
  className?: string;
  hint?: string;
}

const NameField: React.FC<NameFieldProps> = ({
  // Input props
  id = "name",
  value,
  onChange,
  onBlur,
  placeholder = "Enter name",
  disabled = false,
  success = false,
  readOnly = false,
  autoFocus = false,
  // FormField props
  label = "Name",
  error = false,
  required = false,
  hasValue,
  hasBeenTouched,
  className = "",
  hint,
}) => {
  return (
    <InputField
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      leftIcon={<UserIcon  />}
      disabled={disabled}
      error={error}
      success={success}
      readOnly={readOnly}
      autoFocus={autoFocus}
      fieldName="Name"
      label={label}
      required={required}
      hasValue={hasValue}
      hasBeenTouched={hasBeenTouched}
      className={className}
      hint={hint}
    />
  );
};

export default NameField;
