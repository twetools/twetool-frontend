import React from "react";
import { CreditCardIcon } from "@/icons";
import InputField from "@/components/form-elements/input/InputField";

interface CreditCardFieldProps {
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
}

// Credit card formatting utilities
const formatCreditCard = (value: string): string => {
  // Remove all non-digits
  const digits = value.replace(/\D/g, "");

  // Limit to 16 digits
  const limitedDigits = digits.slice(0, 16);

  // Add spaces every 4 digits
  return limitedDigits.replace(/(\d{4})(?=\d)/g, "$1 ");
};

const isValidCreditCard = (value: string): boolean => {
  // Remove spaces and check if it's 13-19 digits (most common card lengths)
  const digits = value.replace(/\s/g, "");
  return /^\d{13,19}$/.test(digits);
};

const CreditCardField: React.FC<CreditCardFieldProps> = ({
  // Input props
  id = "credit-card",
  value,
  onChange,
  onBlur,
  placeholder = "1234 5678 9012 3456",
  copyable = false, // Credit cards shouldn't be copyable for security
  disabled = false,
  success = false,
  readOnly = false,
  // FormField props
  label = "Credit Card",
  error = false,
  required = false,
  hasValue,
  hasBeenTouched,
  className = "",
  hint,
}) => {
  // Handle formatted input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = formatCreditCard(rawValue);

    // Create a new event with formatted value
    const formattedEvent = {
      ...e,
      target: {
        ...e.target,
        value: formattedValue,
      },
    };

    if (onChange) {
      onChange(formattedEvent as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <InputField
      id={id}
      type="text"
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      placeholder={placeholder}
      leftIcon={<CreditCardIcon  />}
      copyable={copyable}
      disabled={disabled}
      error={error}
      success={success}
      readOnly={readOnly}
      fieldName="Credit Card"
      label={label}
      required={required}
      hasValue={hasValue}
      hasBeenTouched={hasBeenTouched}
      className={className}
      hint={hint}
    />
  );
};

export default CreditCardField;
