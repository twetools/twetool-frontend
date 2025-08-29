import React from "react";
import ComponentCard from "@/components/common/ComponentCard";

export default function DarkModeCompatibility() {
  return (
    <ComponentCard title="Dark Mode Compatibility">
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400">
          Link components are fully compatible with dark mode and automatically
          adapt their appearance based on the current theme.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Light Mode Features
            </h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Standard blue link colors</li>
              <li>• High contrast text</li>
              <li>• Bright color variants</li>
              <li>• Clear underline visibility</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Dark Mode Features
            </h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Adjusted color brightness</li>
              <li>• Optimal contrast ratios</li>
              <li>• Muted color variants</li>
              <li>• Enhanced readability</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Variant Adaptations
          </h4>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Default:</strong> Automatically switches between
                standard blue and light blue for optimal visibility
              </p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Colored:</strong> All color variants adjust brightness
                and saturation for dark backgrounds
              </p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Underline:</strong> Underline colors adapt to maintain
                proper contrast ratios
              </p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Opacity:</strong> Opacity values remain consistent while
                base colors adapt to theme
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Note:</strong> Links automatically inherit theme changes and
            maintain accessibility standards across both light and dark modes.
          </p>
        </div>
      </div>
    </ComponentCard>
  );
}
