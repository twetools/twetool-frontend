"use client";
import React from "react";
import Checkbox from "@/components/form-elements/input/Checkbox";
import Radio from "@/components/form-elements/input/Radio";

export interface ListItem {
  id?: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  checked?: boolean;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onCheckboxChange?: (checked: boolean) => void;
  onRadioChange?: (value: string) => void;
}

export interface BaseListProps {
  items: ListItem[];
  variant?:
    | "default"
    | "ordered"
    | "unordered"
    | "checkbox"
    | "radio"
    | "button"
    | "icon"
    | "horizontal";
  className?: string;
  radioName?: string;
  selectedRadioValue?: string;
  onRadioChange?: (value: string) => void;
}

// Core list rendering logic - the base component
const BaseList: React.FC<BaseListProps> = ({
  items,
  variant = "default",
  className = "",
  radioName = "radio-list",
  selectedRadioValue,
  onRadioChange,
}) => {
  const baseClasses =
    "rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]";
  const containerClasses =
    variant === "horizontal"
      ? `${baseClasses} sm:w-fit`
      : variant === "button"
      ? `${baseClasses} w-full overflow-hidden sm:w-[228px]`
      : `${baseClasses} sm:w-fit`;

  const listClasses =
    variant === "horizontal" ? "flex flex-col md:flex-row" : "flex flex-col";

  const getItemClasses = (index: number, item: ListItem) => {
    const baseItemClasses =
      variant === "horizontal"
        ? "flex items-center gap-2 border-b border-gray-200 px-3 py-2.5 text-sm text-gray-500 last:border-0 dark:border-gray-800 dark:text-gray-400 md:border-b-0 md:border-r"
        : "border-b border-gray-200 last:border-b-0 dark:border-gray-800";

    if (variant === "button") {
      return `${baseItemClasses}`;
    }

    if (
      variant === "ordered" ||
      variant === "unordered" ||
      variant === "icon"
    ) {
      return `flex items-center gap-2 ${baseItemClasses} px-3 py-2.5 text-sm text-gray-500 dark:text-gray-400`;
    }

    return `${baseItemClasses} px-3 py-2.5 text-sm text-gray-500 dark:text-gray-400`;
  };

  const renderListItem = (item: ListItem, index: number) => {
    const itemId = item.id || `list-item-${index}`;

    if (variant === "ordered") {
      return (
        <li key={itemId} className={getItemClasses(index, item)}>
          <span>
            {index + 1}. {item.content}
          </span>
        </li>
      );
    }

    if (variant === "unordered") {
      return (
        <li key={itemId} className={getItemClasses(index, item)}>
          <span className="ml-2 block h-[3px] w-[3px] rounded-full bg-gray-500 dark:bg-gray-400"></span>
          <span>{item.content}</span>
        </li>
      );
    }

    if (variant === "checkbox") {
      return (
        <li key={itemId} className={getItemClasses(index, item)}>
          <Checkbox
            id={itemId}
            checked={item.checked || false}
            disabled={item.disabled}
            onChange={(checked) =>
              item.onCheckboxChange && item.onCheckboxChange(checked)
            }
            label={item.content as string}
          />
        </li>
      );
    }

    if (variant === "radio") {
      const isSelected = selectedRadioValue === itemId;
      return (
        <li key={itemId} className={getItemClasses(index, item)}>
          <Radio
            id={itemId}
            name={radioName}
            value={itemId}
            checked={isSelected}
            label={item.content as string}
            disabled={item.disabled}
            onChange={(value) => {
              if (onRadioChange) onRadioChange(value);
              if (item.onRadioChange) item.onRadioChange(value);
            }}
          />
        </li>
      );
    }

    if (variant === "button") {
      return (
        <li key={itemId} className={getItemClasses(index, item)}>
          <button
            onClick={item.onClick}
            disabled={item.disabled}
            className={`flex w-full items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors ${
              item.disabled
                ? "text-gray-500 disabled:opacity-50 dark:text-gray-400"
                : "text-gray-500 hover:bg-brand-50 hover:text-brand-500 dark:text-gray-400 dark:hover:bg-brand-500/[0.12] dark:hover:text-brand-400"
            }`}
          >
            {item.icon && <span className="text-current">{item.icon}</span>}
            <span>{item.content}</span>
          </button>
        </li>
      );
    }

    if (variant === "icon") {
      return (
        <li key={itemId} className={getItemClasses(index, item)}>
          {item.icon && (
            <span className="text-brand-500 dark:text-brand-400">
              {item.icon}
            </span>
          )}
          <span>{item.content}</span>
        </li>
      );
    }

    // Default variant
    return (
      <li key={itemId} className={getItemClasses(index, item)}>
        {item.content}
      </li>
    );
  };

  return (
    <div className={`${containerClasses} ${className}`}>
      <ul className={listClasses}>{items.map(renderListItem)}</ul>
    </div>
  );
};

export default BaseList;
