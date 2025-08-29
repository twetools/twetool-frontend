import React, { FC } from "react";
import BaseFormControl from "@/components/form-elements/form/BaseFormControl";

interface FileInputProps {
  // File input specific props
  id?: string;
  name?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // FormField props (inherited from BaseFormControl)
  label?: string;
  error?: boolean | string;
  required?: boolean;
  hasValue?: boolean;
  hasBeenTouched?: boolean;
  hint?: string;
}

// Internal component for the actual file input rendering (preserving exact TailAdmin styling)
const FileInputBase: FC<
  Omit<
    FileInputProps,
    "label" | "required" | "hasValue" | "hasBeenTouched" | "hint"
  >
> = ({
  id,
  name,
  accept,
  multiple = false,
  disabled = false,
  className = "",
  onChange,
  error = false,
}) => {
  return (
    <input
      type="file"
      id={id}
      name={name}
      accept={accept}
      multiple={multiple}
      disabled={disabled}
      onChange={onChange}
      className={`focus:border-ring-brand-300 h-11 w-full overflow-hidden rounded-lg border ${
        error ? "border-red-500 focus:border-red-500" : "border-gray-300"
      } bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    />
  );
};

// Main FileInput component with BaseFormControl integration
const FileInput: FC<FileInputProps> = ({
  id = "file-input",
  name,
  accept,
  multiple = false,
  disabled = false,
  className = "",
  onChange,
  label,
  error = false,
  required = false,
  hasValue,
  hasBeenTouched,
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
        hint={hint}
      >
        <FileInputBase
          id={id}
          name={name}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          className={className}
          onChange={onChange}
          error={typeof error === "boolean" ? error : !!error}
        />
      </BaseFormControl>
    );
  }

  // If no label, return bare FileInputBase (for backward compatibility)
  return (
    <FileInputBase
      id={id}
      name={name}
      accept={accept}
      multiple={multiple}
      disabled={disabled}
      className={className}
      onChange={onChange}
      error={typeof error === "boolean" ? error : !!error}
    />
  );
};

export default FileInput;
