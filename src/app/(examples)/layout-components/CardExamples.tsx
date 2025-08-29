"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";

export default function CardExamples() {
  return (
    <ComponentCard title="Card Examples">
      <div className="space-y-8">
        {/* Basic Card Usage */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            ComponentCard Usage
          </h3>
          <div className="space-y-4">
            <ComponentCard title="Basic Card">
              <p className="text-gray-600 dark:text-gray-300">
                This is an example of the ComponentCard component being used to
                organize content.
              </p>
            </ComponentCard>

            <ComponentCard title="Card with Complex Content">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Section 1
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Cards can contain complex layouts and nested content.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Section 2
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Responsive grid layouts work well within cards.
                    </p>
                  </div>
                </div>
              </div>
            </ComponentCard>
          </div>
        </div>

        {/* Card Features */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Card Features
          </h3>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p>• Consistent styling across the application</p>
            <p>• Dark mode support</p>
            <p>• Flexible content area</p>
            <p>• Title header with proper typography</p>
            <p>• Responsive design patterns</p>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Usage Guidelines
          </h3>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              Best Practices
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Use ComponentCard to wrap related content sections</li>
              <li>• Provide descriptive titles for better organization</li>
              <li>• Maintain consistent spacing with space-y-* classes</li>
              <li>• Use grid layouts for complex content arrangements</li>
            </ul>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
