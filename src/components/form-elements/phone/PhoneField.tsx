import React from "react";
import { formatPhoneNumber } from "@/utils/format";
import { PhoneIcon } from "@/icons";
import InputField from "@/components/form-elements/input/InputField";

interface PhoneFieldProps {
  // Input-specific props
  id?: string;
  value?: string;
  onChange?: (phoneNumber: string) => void;
  placeholder?: string;
  copyable?: boolean;
  fieldName?: string; // For tooltip and accessibility
  icon?: React.ReactNode; // Custom icon support
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

const PhoneField: React.FC<PhoneFieldProps> = ({
  // Input props
  id = "phone",
  value,
  onChange,
  placeholder = "(555) 123-4567",
  copyable = false,
  fieldName = "Phone",
  icon,
  disabled = false,
  success = false,
  readOnly = false,
  autoFocus = false,
  // FormField props
  label = "Phone",
  error = false,
  required = false,
  hasValue,
  hasBeenTouched,
  className = "",
  hint,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    onChange?.(formatted);
  };

  return (
    <InputField
      id={id}
      name={id}
      type="tel"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      leftIcon={icon ?? <PhoneIcon />}
      copyable={copyable}
      disabled={disabled}
      error={error}
      success={success}
      readOnly={readOnly}
      autoFocus={autoFocus}
      fieldName={fieldName}
      label={label}
      required={required}
      hasValue={hasValue}
      hasBeenTouched={hasBeenTouched}
      className={className}
      hint={hint}
    />
  );
};

export default PhoneField;
