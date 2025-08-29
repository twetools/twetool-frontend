"use client";
import React from "react";
import type { FC } from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  disabled?: boolean;
  value?: string;
  label?: string;
  className?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  onClick,
  id,
  name,
  disabled = false,
  value,
  label,
  className = "",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative w-5 h-5">
        <input
          id={id}
          name={name}
          type="checkbox"
          value={value}
          className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-hidden focus:ring-3 focus:ring-brand-500/20 dark:focus:ring-brand-400/20"
          checked={checked}
          onChange={handleChange}
          onClick={onClick}
          disabled={disabled}
        />
        {checked && (
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
              stroke="white"
              strokeWidth="1.94437"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {label && (
        <label
          htmlFor={id}
          className={`ml-3 text-sm font-medium text-gray-800 dark:text-gray-200 ${
            disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
