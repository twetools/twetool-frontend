"use client";
import React from "react";
import type { FC, ReactNode } from "react";
import { useState } from "react";
import { CopyIcon } from "@/icons";
import BaseFormControl from "@/components/form-elements/form/BaseFormControl";

interface InputFieldProps {
  // Input-specific props
  type?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "date"
    | "time"
    | "tel"
    | string;
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string | number;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  min?: string;
  max?: string;
  step?: number;
  disabled?: boolean;
  success?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean; // Auto-focus on mount
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftPadding?: string; // Custom left padding when using icons
  rightPadding?: string; // Custom right padding when using icons
  iconBorder?: boolean; // Whether to show border separator for left icon
  copyable?: boolean; // For copy functionality
  onCopy?: (value: string) => void; // Custom copy handler
  fieldName?: string; // For copy tooltip message
  // FormField props (inherited from BaseFormControl)
  label?: string;
  error?: boolean | string;
  required?: boolean;
  hasValue?: boolean;
  hasBeenTouched?: boolean;
  className?: string;
  hint?: string;
}

// Internal component for the actual input rendering
const InputBase: FC<
  Omit<
    InputFieldProps,
    "label" | "required" | "hasValue" | "hasBeenTouched"
  > & { className?: string }
> = ({
  type = "text",
  id,
  name,
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  className = "",
  min,
  max,
  step,
  disabled = false,
  success = false,
  error = false,
  readOnly = false,
  autoFocus = false,
  leftIcon,
  rightIcon,
  leftPadding = leftIcon ? "pl-[62px]" : "",
  rightPadding = "",
  iconBorder = true,
  copyable = false,
  onCopy,
  fieldName = "Value",
  hint,
}) => {
  // State for copy functionality
  const [showTooltip, setShowTooltip] = useState(false);
  const [copyText, setCopyText] = useState("");

  // Determine if we should show the copy icon
  const showCopyIcon = copyable && value && String(value).trim() !== "";

  const handleCopy = () => {
    if (copyable && value) {
      navigator.clipboard.writeText(value.toString()).then(() => {
        setCopyText(`${fieldName} copied`);
        setTimeout(() => setCopyText(""), 2000);
      });
      onCopy?.(value.toString());
    }
  };

  // Create the enhanced copy icon with tooltip functionality
  const copyIconWithTooltip = showCopyIcon ? (
    <button
      type="button"
      onClick={handleCopy}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="inline-flex cursor-pointer items-center gap-1 border-l border-gray-200 py-3 px-3.5 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400"
      tabIndex={-1}
    >
      <CopyIcon />
      {/* Tooltip */}
      {(showTooltip || copyText) && (
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 z-10 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white shadow-lg">
          {copyText ? copyText : `Copy ${fieldName}`}
        </span>
      )}
    </button>
  ) : null;

  // Determine the right icon to show
  const effectiveRightIcon = copyIconWithTooltip || rightIcon;

  // Check if the rightIcon is a functional button (contains button element)
  const isRightIconButton =
    effectiveRightIcon &&
    React.isValidElement(effectiveRightIcon) &&
    effectiveRightIcon.type === "button";

  // Adjust right padding if we're showing copy icon or functional button
  const effectiveRightPadding =
    showCopyIcon || isRightIconButton
      ? "pr-[90px]"
      : rightIcon
      ? "pr-12" // 48px - space for right-3 positioned icons (12px offset + 20px icon + 16px buffer)
      : rightPadding;

  let inputClasses = `h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 ${leftPadding} ${effectiveRightPadding} ${className}`;

  if (disabled) {
    inputClasses += ` text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
  } else if (readOnly) {
    inputClasses += ` bg-transparent text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-900 dark:text-gray-500 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-300 dark:focus:border-gray-700 pointer-events-none`;
  } else if (error) {
    inputClasses += ` border-error-500 focus:border-error-300 focus:ring-error-500/20 dark:text-error-400 dark:border-error-500 dark:focus:border-error-800`;
  } else if (success) {
    inputClasses += ` border-success-500 focus:border-success-300 focus:ring-success-500/20 dark:text-success-400 dark:border-success-500 dark:focus:border-success-800`;
  } else {
    inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800`;
  }

  // Only pass value or defaultValue, not both
  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    type,
    id,
    name,
    placeholder,
    onChange,
    onBlur,
    min,
    max,
    step,
    disabled,
    readOnly,
    autoFocus,
    className: inputClasses,
  };

  if (value !== undefined) {
    inputProps.value = value;
  } else if (defaultValue !== undefined) {
    inputProps.defaultValue = defaultValue;
  }

  return (
    <div className="relative">
      <input {...inputProps} />

      {/* Left Icon */}
      {leftIcon && (
        <span
          className={`absolute left-0 top-1/2 -translate-y-1/2 px-3.5 py-3 text-gray-500 dark:text-gray-400 ${
            iconBorder ? "border-r border-gray-200 dark:border-gray-800" : ""
          }`}
        >
          {leftIcon}
        </span>
      )}

      {/* Right Icon */}
      {effectiveRightIcon && (
        <span
          className={`absolute top-1/2 -translate-y-1/2 ${
            copyIconWithTooltip || isRightIconButton ? "right-0" : "right-3"
          } text-gray-500 dark:text-gray-400`}
        >
          {effectiveRightIcon}
        </span>
      )}

      {hint && (
        <p
          className={`mt-1.5 text-xs ${
            error
              ? "text-error-500"
              : success
              ? "text-success-500"
              : "text-gray-500"
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

// Main InputField component with BaseFormControl integration
const InputField: FC<InputFieldProps> = ({
  // Input props
  type = "text",
  id = "input",
  name,
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  min,
  max,
  step,
  disabled = false,
  success = false,
  readOnly = false,
  autoFocus = false,
  leftIcon,
  rightIcon,
  leftPadding,
  rightPadding,
  iconBorder = true,
  copyable = false,
  onCopy,
  fieldName = "Value",
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
        <InputBase
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          success={success}
          error={typeof error === "boolean" ? error : !!error}
          readOnly={readOnly}
          autoFocus={autoFocus}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          leftPadding={leftPadding}
          rightPadding={rightPadding}
          iconBorder={iconBorder}
          copyable={copyable}
          onCopy={onCopy}
          fieldName={fieldName}
        />
      </BaseFormControl>
    );
  }

  // If no label, return bare InputBase (for backward compatibility)
  return (
    <InputBase
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onBlur={onBlur}
      className={className}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      success={success}
      error={typeof error === "boolean" ? error : !!error}
      readOnly={readOnly}
      autoFocus={autoFocus}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      leftPadding={leftPadding}
      rightPadding={rightPadding}
      iconBorder={iconBorder}
      copyable={copyable}
      onCopy={onCopy}
      fieldName={fieldName}
    />
  );
};

export default InputField;
