import React from "react";
import ComponentCard from "@/components/common/ComponentCard";

export default function DarkModeCompatibility() {
  return (
    <ComponentCard title="Dark Mode Compatibility">
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400">
          List components are fully compatible with dark mode and automatically
          adapt their appearance based on the current theme.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Light Mode Features
            </h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Clean white backgrounds</li>
              <li>• Dark text for high contrast</li>
              <li>• Subtle borders and separators</li>
              <li>• Standard bullet and number markers</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Dark Mode Features
            </h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Dark backgrounds with proper contrast</li>
              <li>• Light text for optimal readability</li>
              <li>• Adapted border colors</li>
              <li>• Adjusted marker colors</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Interactive Elements
          </h4>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Checkboxes & Radios:</strong> Input elements
                automatically adapt their appearance and maintain proper
                contrast ratios
              </p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Buttons:</strong> Hover and active states adapt to theme
                with consistent visual feedback
              </p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Icons:</strong> SVG icons inherit appropriate colors and
                maintain visibility across themes
              </p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Disabled States:</strong> Disabled items show
                appropriate opacity and color adjustments for both themes
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Accessibility Features
          </h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li>
                • Maintains WCAG contrast requirements in both light and dark
                modes
              </li>
              <li>
                • Semantic HTML elements (ul, ol, li) for screen reader
                compatibility
              </li>
              <li>• Proper ARIA labels and roles for interactive elements</li>
              <li>• Keyboard navigation support for interactive variants</li>
              <li>• Focus indicators that adapt to theme colors</li>
            </ul>
          </div>
        </div>

        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Note:</strong> Lists automatically inherit theme changes and
            maintain consistent styling across all variants without requiring
            additional configuration.
          </p>
        </div>
      </div>
    </ComponentCard>
  );
}
