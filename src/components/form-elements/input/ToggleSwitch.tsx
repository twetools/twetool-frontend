"use client";
import React from "react";
import type { FC } from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
  name?: string;
  disabled?: boolean;
  label?: string;
  className?: string;
  color?: "blue" | "gray";
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  id,
  name,
  disabled = false,
  label,
  className = "",
  color = "blue",
}) => {
  const handleToggle = () => {
    if (disabled) return;
    onChange(!checked);
  };

  const switchColors =
    color === "blue"
      ? {
          background: checked ? "bg-brand-500" : "bg-gray-200 dark:bg-gray-700",
          knob: checked
            ? "translate-x-full bg-white"
            : "translate-x-0 bg-white",
        }
      : {
          background: checked
            ? "bg-gray-800 dark:bg-gray-600"
            : "bg-gray-200 dark:bg-gray-700",
          knob: checked
            ? "translate-x-full bg-white"
            : "translate-x-0 bg-white",
        };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <input
          id={id}
          name={name}
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleToggle}
          disabled={disabled}
        />
        <div
          className={`block transition duration-150 ease-linear h-6 w-11 rounded-full cursor-pointer ${
            disabled
              ? "bg-gray-100 dark:bg-gray-800 opacity-60 cursor-not-allowed"
              : switchColors.background
          }`}
          onClick={handleToggle}
        >
          <div
            className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full shadow-sm transition duration-150 ease-linear transform ${
              disabled ? "bg-gray-300" : switchColors.knob
            }`}
          />
        </div>
      </div>
      {label && (
        <label
          htmlFor={id}
          className={`ml-3 text-sm font-medium text-gray-800 dark:text-gray-200 ${
            disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handleToggle}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default ToggleSwitch;
