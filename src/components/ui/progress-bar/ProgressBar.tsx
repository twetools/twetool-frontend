"use client";
import React from "react";

interface ProgressBarProps {
  progress: number;
  size?: "sm" | "md" | "lg" | "xl";
  label?: "none" | "outside" | "inside";
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  size = "sm",
  label = "none",
  className = "",
}) => {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
    xl: "h-5",
  };

  const baseClasses =
    "relative w-full bg-gray-200 rounded-full dark:bg-gray-700";
  const progressClasses =
    "absolute left-0 h-full bg-brand-600 rounded-full dark:bg-brand-500";

  const renderLabel = () => {
    if (label === "outside") {
      return (
        <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
          {clampedProgress}%
        </span>
      );
    } else if (label === "inside") {
      return (
        <span className="absolute inset-0 flex items-center justify-center text-brand-100 dark:text-brand-200 font-medium text-xs leading-tight">
          {clampedProgress}%
        </span>
      );
    }
    return null;
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${baseClasses} ${sizeClasses[size]}`}>
        <div
          className={`${progressClasses} ${
            label === "inside" ? "flex items-center justify-center" : ""
          }`}
          style={{ width: `${clampedProgress}%` }}
        >
          {label === "inside" && renderLabel()}
        </div>
      </div>
      {label === "outside" && renderLabel()}
    </div>
  );
};

export default ProgressBar;
