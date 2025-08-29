import React from "react";
import InputField from "@/components/form-elements/input/InputField";
import { CloseIcon, SearchIcon, SearchCancel } from "@/icons";

interface SearchFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function SearchField({
  value,
  onChange,
  placeholder = "Search...",
}: SearchFieldProps) {
  const handleClear = () => {
    // Create a synthetic event to clear the value
    const syntheticEvent = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(syntheticEvent);

    // Focus the input after clearing using getElementById
    setTimeout(() => {
      const searchInput = document.getElementById("search-input");
      if (searchInput) {
        searchInput.focus();
      }
    }, 0);
  };

  // Dynamic left icon based on whether there's text
  const leftIcon = value ? (
    <button
      type="button"
      onClick={handleClear}
      className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors flex items-center justify-center"
      tabIndex={-1}
    >
      <CloseIcon className="h-5 w-5" />
    </button>
  ) : (
    <SearchIcon className="h-5 w-5" />
  );

  return (
    <div className="relative">
      <InputField
        id="search-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        leftIcon={leftIcon}
        leftPadding="pl-[62px]"
        className="xl:w-[300px]"
      />
    </div>
  );
}
