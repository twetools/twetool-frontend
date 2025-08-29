import React from "react";
import FormField from "@/components/form-elements/form/FormField";

interface BaseFormControlProps {
  // FormField props (always available)
  label?: string;
  htmlFor?: string;
  error?: string | boolean;
  required?: boolean;
  hasValue?: boolean;
  hasBeenTouched?: boolean;
  className?: string;
  hint?: string;
  // Control for rendering behavior
  children: React.ReactNode;
}

const BaseFormControl: React.FC<BaseFormControlProps> = ({
  label = "",
  htmlFor = "",
  error,
  required = false,
  hasValue,
  hasBeenTouched,
  className = "",
  hint,
  children,
}) => {
  // Always wrap with FormField - this is the base for all form controls
  return (
    <FormField
      label={label}
      htmlFor={htmlFor}
      error={typeof error === "string" ? error : undefined}
      required={required}
      hasValue={hasValue}
      hasBeenTouched={hasBeenTouched}
      className={className}
      hint={hint}
    >
      {children}
    </FormField>
  );
};

export default BaseFormControl;
