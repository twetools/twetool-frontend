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
              (required): "success" | "error" | "warning" | "info"
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">title</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (required): string - The alert title
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">message</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (required): string - The alert message
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">showLink</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (optional): boolean - Whether to show the link
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">linkHref</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (optional): string - Link URL
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">linkText</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (optional): string - Link text
            </span>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
