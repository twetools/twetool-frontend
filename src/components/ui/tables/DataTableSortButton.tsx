import React from "react";

import { SortDownIcon, SortUpIcon } from "@/icons";


interface DataTableSortButtonProps {
  isActive: boolean;
  sortOrder: "asc" | "desc";
  onSort: () => void;
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

const DataTableSortButton: React.FC<DataTableSortButtonProps> = ({
  isActive,
  sortOrder,
  onSort,
  children,
  align = "left",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-between w-full cursor-pointer ${className}`}
      onClick={onSort}
    >
      <span
        className={`font-medium text-theme-xs uppercase w-full
        ${
          align === "center"
            ? "text-center"
            : align === "right"
            ? "text-right"
            : "text-left"
        }
        ${
          isActive
            ? sortOrder === "asc"
              ? "text-gray-600 dark:text-gray-400"
              : "text-brand-600 dark:text-brand-400"
            : "text-gray-700 dark:text-gray-400"
        }`}
      >
        {children}
      </span>
      <button
        className="flex flex-col gap-0.5 ml-2"
        tabIndex={-1}
        type="button"
        onClick={(e) => e.stopPropagation()}
      >
        <SortUpIcon
          className={
            isActive && sortOrder === "asc"
              ? "text-gray-600 dark:text-gray-400"
              : "text-gray-300 dark:text-gray-700"
          }
        />
        <SortDownIcon
          className={
            isActive && sortOrder === "desc"
              ? "text-brand-600 dark:text-brand-400"
              : "text-gray-300 dark:text-gray-700"
          }
        />
      </button>
    </div>
  );
};

export default DataTableSortButton;
