import React from "react";
import ComponentCard from "@/components/common/ComponentCard";

export default function DarkModeCompatibility() {
  return (
    <ComponentCard title="Dark Mode Compatibility">
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400">
          ButtonsGroup components are fully compatible with dark mode and
          automatically adapt their appearance based on the current theme.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Light Mode Features
            </h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Clean white/gray backgrounds</li>
              <li>• Subtle border definitions</li>
              <li>• Brand colors for primary variant</li>
              <li>• Clear text contrast</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Dark Mode Features
            </h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Dark backgrounds with proper contrast</li>
              <li>• Adapted border colors</li>
              <li>• Adjusted brand color intensity</li>
              <li>• Optimized text readability</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Implementation Details
          </h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li>• Automatically detects system theme preference</li>
              <li>• Uses Tailwind's dark: prefix for conditional styling</li>
              <li>• Maintains consistent visual hierarchy in both modes</li>
              <li>• Preserves accessibility standards across themes</li>
              <li>• Smooth transitions when switching themes</li>
            </ul>
          </div>
        </div>

        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Note:</strong> The button group automatically inherits theme
            changes without requiring any additional configuration.
          </p>
        </div>
      </div>
    </ComponentCard>
  );
}
