"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";

export default function ComponentProperties() {
  return (
    <ComponentCard title="Component Properties">
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="space-y-3 text-sm">
          <div>
            <strong className="text-gray-900 dark:text-white">items</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (required): Array of breadcrumb items
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">variant</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (optional): "default" | "withIcon" | "dotted" | "chevron"
              (default: "default")
            </span>
          </div>
          <div className="ml-4">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              Item structure:
            </p>
            <div className="space-y-1">
              <div>
                <strong className="text-gray-800 dark:text-gray-200">
                  label
                </strong>
                <span className="text-gray-600 dark:text-gray-400">
                  : string - Display text
                </span>
              </div>
              <div>
                <strong className="text-gray-800 dark:text-gray-200">
                  href
                </strong>
                <span className="text-gray-600 dark:text-gray-400">
                  : string (optional) - Link URL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
