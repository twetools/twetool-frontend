import React from "react";
import TextareaBase from "@/components/form-elements/input/TextareaBase";
import BaseFormControl from "@/components/form-elements/form/BaseFormControl";

interface TextareaFieldProps {
  // Input-specific props
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  disabled?: boolean;
  success?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean; // Auto-focus on mount
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftPadding?: string;
  rightPadding?: string;
  iconBorder?: boolean;
  resize?: "none" | "vertical" | "horizontal" | "both";
  minHeight?: string;
  // FormField props (inherited from BaseFormControl)
  label?: string;
  error?: boolean | string;
  required?: boolean;
  hasValue?: boolean;
  hasBeenTouched?: boolean;
  className?: string;
  hint?: string;
}

// Internal component for the actual textarea rendering
const TextareaBaseInternal: React.FC<
  Omit<
    TextareaFieldProps,
    "label" | "required" | "hasValue" | "hasBeenTouched"
  > & { className?: string }
> = ({
  id = "textarea",
  name,
  placeholder,
  defaultValue,
  value,
  onChange,
  rows = 3,
  disabled = false,
  success = false,
  readOnly = false,
  autoFocus = false,
  leftIcon,
  rightIcon,
  leftPadding,
  rightPadding,
  iconBorder,
  resize = "vertical",
  minHeight,
  error = false,
  className = "",
  hint,
}) => {
  return (
    <TextareaBase
      id={id}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      rows={rows}
      disabled={disabled}
      success={success}
      error={typeof error === "boolean" ? error : !!error}
      hint={hint}
      readOnly={readOnly}
      autoFocus={autoFocus}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      leftPadding={leftPadding}
      rightPadding={rightPadding}
      iconBorder={iconBorder}
      resize={resize}
      minHeight={minHeight}
      className={className}
    />
  );
};

// Main TextareaField component with BaseFormControl integration
const TextareaField: React.FC<TextareaFieldProps> = ({
  // Input props
  id = "textarea",
  name,
  placeholder,
  defaultValue,
  value,
  onChange,
  rows = 3,
  disabled = false,
  success = false,
  readOnly = false,
  autoFocus = false,
  leftIcon,
  rightIcon,
  leftPadding,
  rightPadding,
  iconBorder,
  resize = "vertical",
  minHeight,
  // FormField props
  label,
  error = false,
  required = false,
  hasValue,
  hasBeenTouched,
  className = "",
  hint,
}) => {
  // If label is provided, wrap with BaseFormControl
  if (label) {
    return (
      <BaseFormControl
        label={label}
        htmlFor={id}
        error={error}
        required={required}
        hasValue={hasValue}
        hasBeenTouched={hasBeenTouched}
        className={className}
        hint={hint}
      >
        <TextareaBaseInternal
          id={id}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          rows={rows}
          disabled={disabled}
          success={success}
          error={error}
          readOnly={readOnly}
          autoFocus={autoFocus}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          leftPadding={leftPadding}
          rightPadding={rightPadding}
          iconBorder={iconBorder}
          resize={resize}
          minHeight={minHeight}
          hint={hint}
        />
      </BaseFormControl>
    );
  }

  // If no label, return bare TextareaBaseInternal (for backward compatibility)
  return (
    <TextareaBaseInternal
      id={id}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      rows={rows}
      disabled={disabled}
      success={success}
      error={error}
      readOnly={readOnly}
      autoFocus={autoFocus}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      leftPadding={leftPadding}
      rightPadding={rightPadding}
      iconBorder={iconBorder}
      resize={resize}
      minHeight={minHeight}
      className={className}
      hint={hint}
    />
  );
};

export default TextareaField;
