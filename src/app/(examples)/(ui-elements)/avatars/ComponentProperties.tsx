"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";

export default function ComponentProperties() {
  return (
    <ComponentCard title="Component Properties">
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="space-y-3 text-sm">
          <div>
            <strong className="text-gray-900 dark:text-white">src</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (required): string - Image source URL
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">alt</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (optional): string - Alt text for accessibility (default: "User
              Avatar")
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">size</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (optional): "xsmall" | "small" | "medium" | "large" | "xlarge" |
              "xxlarge" (default: "medium")
            </span>
          </div>
          <div>
            <strong className="text-gray-900 dark:text-white">status</strong>
            <span className="text-gray-700 dark:text-gray-300">
              {" "}
              (optional): "online" | "offline" | "busy" | "none" (default:
              "none")
            </span>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
