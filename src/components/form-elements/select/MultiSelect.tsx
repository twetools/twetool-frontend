import React, { useState } from "react";
import BaseFormControl from "@/components/form-elements/form/BaseFormControl";

interface Option {
  value: string;
  text: string;
  selected: boolean;
}

interface MultiSelectProps {
  label?: string;
  options: Option[];
  defaultSelected?: string[];
  onChange?: (selected: string[]) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  // FormField props (inherited from BaseFormControl)
  error?: boolean | string;
  required?: boolean;
  hasValue?: boolean;
  hasBeenTouched?: boolean;
  hint?: string;
}

// Internal component for the actual multi-select rendering
const MultiSelectBase: React.FC<
  Omit<
    MultiSelectProps,
    "label" | "required" | "hasValue" | "hasBeenTouched" | "hint"
  >
> = ({
  options,
  defaultSelected = [],
  onChange,
  disabled = false,
  id,
  name,
  className = "",
  placeholder = "Select options",
  error = false,
}) => {
  const [selectedOptions, setSelectedOptions] =
    useState<string[]>(defaultSelected);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (optionValue: string) => {
    const newSelectedOptions = selectedOptions.includes(optionValue)
      ? selectedOptions.filter((value) => value !== optionValue)
      : [...selectedOptions, optionValue];

    setSelectedOptions(newSelectedOptions);
    if (onChange) onChange(newSelectedOptions);
  };

  const removeOption = (index: number, value: string) => {
    const newSelectedOptions = selectedOptions.filter((opt) => opt !== value);
    setSelectedOptions(newSelectedOptions);
    if (onChange) onChange(newSelectedOptions);
  };

  const selectedValuesText = selectedOptions.map(
    (value) => options.find((option) => option.value === value)?.text || ""
  );

  return (
    <div className="relative w-full">
      <div onClick={toggleDropdown} className="w-full">
        <div
          className={`flex h-11 rounded-lg border py-1.5 pl-3 pr-3 shadow-theme-xs outline-hidden transition focus:border-brand-300 focus:shadow-focus-ring dark:bg-gray-900 dark:focus:border-brand-300 ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 dark:border-gray-700"
          } ${
            disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          } ${className}`}
        >
          <div className="flex flex-wrap flex-auto gap-2">
            {selectedValuesText.length > 0 ? (
              selectedValuesText.map((text, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center rounded-full border-[0.7px] border-transparent bg-gray-100 py-1 pl-2.5 pr-2 text-sm text-gray-800 hover:border-gray-200 dark:bg-gray-800 dark:text-white/90 dark:hover:border-gray-800"
                >
                  <span className="flex-initial max-w-full">{text}</span>
                  <div className="flex flex-row-reverse flex-auto">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        removeOption(index, selectedOptions[index]);
                      }}
                      className="pl-2 text-gray-500 cursor-pointer group-hover:text-gray-400 dark:text-gray-400"
                    >
                      <svg
                        className="fill-current"
                        role="button"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.40717 4.46881C3.11428 4.17591 3.11428 3.70104 3.40717 3.40815C3.70006 3.11525 4.17494 3.11525 4.46783 3.40815L6.99943 5.93975L9.53095 3.40822C9.82385 3.11533 10.2987 3.11533 10.5916 3.40822C10.8845 3.70112 10.8845 4.17599 10.5916 4.46888L8.06009 7.00041L10.5916 9.53193C10.8845 9.82482 10.8845 10.2997 10.5916 10.5926C10.2987 10.8855 9.82385 10.8855 9.53095 10.5926L6.99943 8.06107L4.46783 10.5927C4.17494 10.8856 3.70006 10.8856 3.40717 10.5927C3.11428 10.2998 3.11428 9.8249 3.40717 9.53201L5.93877 7.00041L3.40717 4.46881Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex-1 flex items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {placeholder}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center py-1 pl-1 pr-1 w-7">
            <button
              type="button"
              onClick={toggleDropdown}
              disabled={disabled}
              className="w-5 h-5 text-gray-700 outline-hidden cursor-pointer focus:outline-hidden dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className={`stroke-current transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.79175 7.39551L10.0001 12.6038L15.2084 7.39551"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && !disabled && (
        <div className="absolute left-0 z-40 w-full overflow-y-auto bg-white rounded-lg shadow-lg border border-gray-200 top-full mt-2 max-h-60 dark:bg-gray-900 dark:border-gray-700">
          <div className="flex flex-col">
            {options.map((option) => (
              <div key={option.value}>
                <div
                  className="hover:bg-gray-50 w-full cursor-pointer border-b border-gray-100 last:border-b-0 dark:hover:bg-gray-800 dark:border-gray-700"
                  onClick={() => handleSelect(option.value)}
                >
                  <div
                    className={`relative flex w-full items-center p-3 ${
                      selectedOptions.includes(option.value)
                        ? "bg-brand-50 dark:bg-brand-900/20"
                        : ""
                    }`}
                  >
                    <div className="flex-1 text-sm text-gray-800 dark:text-white/90">
                      {option.text}
                    </div>
                    {selectedOptions.includes(option.value) && (
                      <div className="ml-2 text-brand-600 dark:text-brand-400">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main MultiSelect component with BaseFormControl integration
const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  defaultSelected,
  onChange,
  disabled,
  id,
  name,
  className,
  placeholder,
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
        <MultiSelectBase
          options={options}
          defaultSelected={defaultSelected}
          onChange={onChange}
          disabled={disabled}
          id={id}
          name={name}
          className={className}
          placeholder={placeholder}
          error={typeof error === "boolean" ? error : !!error}
        />
      </BaseFormControl>
    );
  }

  // If no label, return bare MultiSelectBase (for backward compatibility)
  return (
    <MultiSelectBase
      options={options}
      defaultSelected={defaultSelected}
      onChange={onChange}
      disabled={disabled}
      id={id}
      name={name}
      className={className}
      placeholder={placeholder}
      error={typeof error === "boolean" ? error : !!error}
    />
  );
};

export default MultiSelect;
