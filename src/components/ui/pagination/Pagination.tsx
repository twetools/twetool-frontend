"use client";
import React, { useState } from "react";
import { ArrowRightIcon } from "@/icons/index";

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  showText?: boolean;
  showIcons?: boolean;
  variant?: "default" | "icon-only" | "text-with-icon";
  className?: string;
}

export default function Pagination({
  totalPages,
  initialPage = 1,
  onPageChange,
  showText = true,
  showIcons = true,
  variant = "default",
  className = "",
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(renderPageButton(i));
      }
    } else {
      pageNumbers.push(renderPageButton(1));
      if (currentPage > 3) pageNumbers.push(renderEllipsis("ellipsis-start"));

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) end = 5;
      if (currentPage >= totalPages - 2) start = totalPages - 4;

      for (let i = start; i <= end; i++) {
        pageNumbers.push(renderPageButton(i));
      }

      if (currentPage < totalPages - 2)
        pageNumbers.push(renderEllipsis("ellipsis-end"));
      pageNumbers.push(renderPageButton(totalPages));
    }

    return pageNumbers;
  };

  const renderPageButton = (page: number) => (
    <li key={page}>
      <button
        onClick={() => handlePageChange(page)}
        className={`flex items-center justify-center w-10 h-10 text-sm font-medium rounded-lg transition-colors ${
          currentPage === page
            ? "text-white bg-brand-500 hover:bg-brand-600"
            : "text-gray-700 hover:bg-brand-500 hover:text-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-brand-500"
        }`}
      >
        {page}
      </button>
    </li>
  );

  const renderEllipsis = (key: string) => (
    <li key={key}>
      <span className="flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-700 dark:text-gray-400">
        ...
      </span>
    </li>
  );

  const getButtonContent = (direction: "prev" | "next") => {
    const isPrev = direction === "prev";
    const icon = (
      <ArrowRightIcon
        className={`fill-current w-5 h-5 ${isPrev ? "rotate-180" : ""}`}
      />
    );
    const text = isPrev ? "Previous" : "Next";

    if (variant === "icon-only") {
      return icon;
    }

    if (variant === "text-with-icon") {
      return (
        <>
          {isPrev && icon}
          <span className="hidden sm:inline">{text}</span>
          {!isPrev && icon}
        </>
      );
    }

    // Default variant
    return (
      <>
        <span className={`${showIcons ? "inline sm:hidden" : "hidden"}`}>
          {icon}
        </span>
        <span className={`${showText ? "hidden sm:inline" : "hidden"}`}>
          {text}
        </span>
      </>
    );
  };

  const buttonPadding =
    variant === "icon-only" ? "p-2 sm:p-2.5" : "px-2 py-2 sm:px-3.5 sm:py-2.5";

  return (
    <div
      className={`flex items-center justify-between gap-8 px-6 py-4 sm:justify-normal ${className}`}
    >
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${buttonPadding}`}
      >
        {getButtonContent("prev")}
      </button>

      <span className="block text-sm font-medium text-gray-700 dark:text-gray-400 sm:hidden">
        Page {currentPage} of {totalPages}
      </span>

      <ul className="hidden items-center gap-0.5 sm:flex">
        {renderPageNumbers()}
      </ul>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${buttonPadding}`}
      >
        {getButtonContent("next")}
      </button>
    </div>
  );
}
