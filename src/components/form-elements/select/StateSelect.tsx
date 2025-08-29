import { DropdownIcon } from "@/icons";
import React, { useEffect, useState } from "react";
import BaseFormControl from "@/components/form-elements/form/BaseFormControl";

interface StateOption {
  value: string; // State abbreviation (e.g., "CA", "NY")
  label: string; // Full state name (e.g., "California", "New York")
}

interface StateSelectProps {
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  value?: string;
  defaultValue?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  // FormField props (inherited from BaseFormControl)
  label?: string;
  error?: boolean | string;
  required?: boolean;
  hasValue?: boolean;
  hasBeenTouched?: boolean;
  hint?: string;
}

// US States data in alphabetical order with abbreviations
const US_STATES: StateOption[] = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
  { value: "DC", label: "District of Columbia" },
];

// Internal component for the actual state dropdown rendering
const StateSelectBase: React.FC<
  Omit<
    StateSelectProps,
    "label" | "required" | "hasValue" | "hasBeenTouched" | "hint"
  >
> = ({
  placeholder = "Select a state",
  onChange,
  className = "",
  value,
  defaultValue = "",
  id,
  name,
  disabled = false,
  error = false,
}) => {
  // If controlled, use value prop; otherwise, use internal state
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  // Keep internal state in sync with value prop if controlled
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (value === undefined) setSelectedValue(val); // only update state if uncontrolled
    onChange(val);
  };

  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        disabled={disabled}
        className={`h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${
          selectedValue
            ? "text-gray-800 dark:text-white/90"
            : "text-gray-400 dark:text-gray-400"
        } ${error ? "border-red-500 focus:border-red-500" : ""} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
        value={value !== undefined ? value : selectedValue}
        onChange={handleChange}
      >
        {/* Placeholder option */}
        <option
          value=""
          disabled
          hidden
          className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
        >
          {placeholder}
        </option>
        {US_STATES.map((state) => (
          <option
            key={state.value}
            value={state.value}
            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
          >
            {state.label}
          </option>
        ))}
      </select>
      <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
        <DropdownIcon className="w-5 h-5" />
      </span>
    </div>
  );
};

// Main StateSelect component with BaseFormControl integration
const StateSelect: React.FC<StateSelectProps> = ({
  placeholder,
  onChange,
  className,
  value,
  defaultValue,
  id,
  name,
  disabled,
  label,
  error,
  required,
  hasValue,
  hasBeenTouched,
  hint,
}) => {
  // If label is provided, wrap with BaseFormControl
  if (label) {
    return (
      <BaseFormControl
        label={label}
        htmlFor={id || name}
        error={error}
        required={required}
        hasValue={hasValue}
        hasBeenTouched={hasBeenTouched}
        hint={hint}
      >
        <StateSelectBase
          placeholder={placeholder}
          onChange={onChange}
          className={className}
          value={value}
          defaultValue={defaultValue}
          id={id}
          name={name}
          disabled={disabled}
          error={typeof error === "boolean" ? error : !!error}
        />
      </BaseFormControl>
    );
  }

  // If no label, return bare StateSelectBase (for backward compatibility)
  return (
    <StateSelectBase
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      value={value}
      defaultValue={defaultValue}
      id={id}
      name={name}
      disabled={disabled}
      error={typeof error === "boolean" ? error : !!error}
    />
  );
};

export default StateSelect;
export type { StateOption, StateSelectProps };
