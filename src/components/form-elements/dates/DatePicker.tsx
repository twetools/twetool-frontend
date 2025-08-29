"use client";
import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import Label from "@/components/form-elements/input/Label";
import { CalendarIcon } from "@/icons";
import Hook = flatpickr.Options.Hook;
import DateOption = flatpickr.Options.DateOption;

type PropsType = {
  id: string;
  mode?: "single" | "multiple" | "range" | "time";
  onChange?: Hook | Hook[];
  onDateChange?: (dateString: string) => void; // New simplified handler
  defaultDate?: DateOption | string; // Accept both Date objects and ISO strings
  value?: string | Date; // For controlled components with string or Date values
  label?: string;
  placeholder?: string;
  readonly?: boolean; // Add readonly support
  disabled?: boolean; // Add disabled support
  autoFormat?: boolean; // Enable automatic slash insertion while typing (default: true)
  inputFormat?: "YYYY-MM-DD" | "MM/DD/YYYY" | "DD/MM/YYYY"; // Input format for automatic formatting
};

export default function DatePicker({
  id,
  mode,
  onChange,
  onDateChange,
  label,
  defaultDate,
  value,
  placeholder,
  readonly = false,
  disabled = false,
  autoFormat = true,
  inputFormat = "MM/DD/YYYY",
}: PropsType) {
  const inputRef = useRef<HTMLInputElement>(null);
  const flatpickrRef = useRef<flatpickr.Instance | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    // Create a wrapper for onChange to handle the string conversion
    const handleDateChange = (
      selectedDates: Date[],
      dateStr: string,
      instance: flatpickr.Instance
    ) => {
      // Call the original onChange if provided
      if (onChange) {
        if (Array.isArray(onChange)) {
          onChange.forEach((fn) => fn(selectedDates, dateStr, instance));
        } else {
          onChange(selectedDates, dateStr, instance);
        }
      }

      // Call the simplified onDateChange with ISO string format
      if (onDateChange) {
        if (selectedDates && selectedDates[0]) {
          onDateChange(selectedDates[0].toISOString().split("T")[0]);
        } else {
          onDateChange("");
        }
      }
    };

    const fp = flatpickr(inputRef.current, {
      mode: mode || "single",
      static: false,
      monthSelectorType: "static",
      dateFormat: "m/d/Y",
      defaultDate: undefined,
      onChange: readonly ? undefined : handleDateChange,
      enableTime: false,
      allowInput: !readonly, // Allow typing when not readonly
      appendTo: document.body,
      clickOpens: false, // Disable click to open - calendar only opens via icon
      position: "auto", // Better positioning
      parseDate: (datestr, format) => {
        // Custom date parsing to ensure local timezone
        if (typeof datestr === "string" && datestr.includes("-")) {
          const [year, month, day] = datestr.split("-").map(Number);
          if (year && month && day) {
            return new Date(year, month - 1, day, 12, 0, 0); // Set to noon local time
          }
        }
        return new Date(datestr);
      },
    });

    flatpickrRef.current = fp;

    // Handle both defaultDate and value props with priority to value
    // Convert Date objects to ISO string format for consistent handling
    let dateValue = defaultDate;
    if (value !== undefined) {
      if (value instanceof Date) {
        dateValue = value.toISOString().split("T")[0];
      } else {
        dateValue = value;
      }
    }

    // Only set date if we have a valid date value
    if (dateValue && dateValue !== "") {
      // Handle string dates to prevent timezone issues
      let dateToSet = dateValue;
      if (typeof dateValue === "string") {
        // Parse ISO date string as local date to prevent timezone shifting
        const [year, month, day] = dateValue.split("-").map(Number);
        if (year && month && day) {
          // Create date in local timezone, not UTC
          dateToSet = new Date(year, month - 1, day, 12, 0, 0); // Set to noon to avoid timezone issues
        }
      } else if (dateValue instanceof Date) {
        // If it's already a Date object, create a new one at noon to avoid timezone issues
        dateToSet = new Date(
          dateValue.getFullYear(),
          dateValue.getMonth(),
          dateValue.getDate(),
          12,
          0,
          0
        );
      }

      fp.setDate(dateToSet, false); // false prevents triggering onChange
    }
    // Don't call fp.clear() when dateValue is empty - this was causing the infinite loop

    return () => {
      fp.destroy();
      flatpickrRef.current = null;
    };
  }, [mode, onChange, onDateChange, id, defaultDate, value, readonly]);

  // Auto-formatting functionality for date input
  useEffect(() => {
    if (!inputRef.current || readonly || disabled || !autoFormat) return;

    const input = inputRef.current;

    const formatInput = (value: string): string => {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, "");

      if (inputFormat === "MM/DD/YYYY") {
        // Format as MM/DD/YYYY
        if (digitsOnly.length >= 5) {
          return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(
            2,
            4
          )}/${digitsOnly.slice(4, 8)}`;
        } else if (digitsOnly.length >= 3) {
          return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2)}`;
        } else if (digitsOnly.length >= 1) {
          return digitsOnly;
        }
      } else if (inputFormat === "DD/MM/YYYY") {
        // Format as DD/MM/YYYY
        if (digitsOnly.length >= 5) {
          return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(
            2,
            4
          )}/${digitsOnly.slice(4, 8)}`;
        } else if (digitsOnly.length >= 3) {
          return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2)}`;
        } else if (digitsOnly.length >= 1) {
          return digitsOnly;
        }
      } else if (inputFormat === "YYYY-MM-DD") {
        // Format as YYYY-MM-DD
        if (digitsOnly.length >= 7) {
          return `${digitsOnly.slice(0, 4)}-${digitsOnly.slice(
            4,
            6
          )}-${digitsOnly.slice(6, 8)}`;
        } else if (digitsOnly.length >= 5) {
          return `${digitsOnly.slice(0, 4)}-${digitsOnly.slice(4)}`;
        } else if (digitsOnly.length >= 1) {
          return digitsOnly;
        }
      }

      return digitsOnly;
    };

    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const cursorPosition = target.selectionStart || 0;
      const oldValue = target.value;
      const oldDigitsOnly = oldValue.replace(/\D/g, "");
      const newValue = formatInput(target.value);
      const newDigitsOnly = newValue.replace(/\D/g, "");

      // Only update if the value actually changed
      if (newValue !== oldValue) {
        target.value = newValue;

        // Calculate proper cursor position after formatting
        // Count digits before cursor position to maintain relative position
        const digitsBeforeCursor = oldValue
          .slice(0, cursorPosition)
          .replace(/\D/g, "").length;

        // Find where this many digits would be in the new formatted string
        let newCursorPosition = 0;
        let digitCount = 0;

        for (
          let i = 0;
          i < newValue.length && digitCount < digitsBeforeCursor;
          i++
        ) {
          if (/\d/.test(newValue[i])) {
            digitCount++;
          }
          newCursorPosition = i + 1;
        }

        // If we added characters and the user was typing at the end, position after new separators
        if (
          cursorPosition === oldValue.length &&
          newValue.length > oldValue.length
        ) {
          newCursorPosition = newValue.length;
        }

        // Set cursor position
        target.setSelectionRange(newCursorPosition, newCursorPosition);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLInputElement;
      const cursorPosition = target.selectionStart || 0;

      // Allow backspace to remove separators
      if (e.key === "Backspace") {
        const char = target.value[cursorPosition - 1];
        if (char === "/" || char === "-") {
          e.preventDefault();
          const newValue =
            target.value.slice(0, cursorPosition - 1) +
            target.value.slice(cursorPosition);
          target.value = newValue;
          target.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
        }
      }
    };

    input.addEventListener("input", handleInput);
    input.addEventListener("keydown", handleKeyDown);

    return () => {
      input.removeEventListener("input", handleInput);
      input.removeEventListener("keydown", handleKeyDown);
    };
  }, [autoFormat, inputFormat, readonly, disabled]);

  const handleCalendarClick = () => {
    if (flatpickrRef.current) {
      flatpickrRef.current.open();
    }
  };

  return (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative">
        <input
          id={id}
          ref={inputRef}
          placeholder={placeholder || "Select date"}
          readOnly={readonly}
          disabled={disabled}
          tabIndex={readonly ? -1 : undefined}
          className={`h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 ${
            readonly
              ? "bg-transparent text-gray-500 cursor-not-allowed dark:bg-gray-900 dark:text-gray-500 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-300 dark:focus:border-gray-700 pointer-events-none"
              : disabled
              ? "bg-gray-50 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 border-gray-300 dark:border-gray-700"
              : "bg-transparent text-gray-800 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 focus:outline-hidden focus:ring-3 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800"
          }`}
        />
        {!readonly && !disabled && (
          <span
            className="absolute text-gray-500 -translate-y-1/2 cursor-pointer right-3 top-1/2 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
            onClick={handleCalendarClick}
          >
            <CalendarIcon className="size-6" />
          </span>
        )}
      </div>
    </div>
  );
}
