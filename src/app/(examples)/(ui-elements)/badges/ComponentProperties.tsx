"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";

export default function ComponentProperties() {
  return (
    <ComponentCard title="Component Properties">
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="space-y-3 text-sm">
          <div>
            <strong className="text-gray-900 dark:text-white">variant</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (optional): "light" | "solid" (default: "light")
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">size</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (optional): "sm" | "md" (default: "md")
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">color</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (optional): "primary" | "success" | "error" | "warning" | "info" |
              "light" | "dark" (default: "primary")
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">startIcon</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (optional): React.ReactNode - Icon displayed at the start
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">endIcon</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (optional): React.ReactNode - Icon displayed at the end
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">children</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (required): React.ReactNode - Badge content
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">className</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (optional): string - Additional CSS classes
            </span>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
