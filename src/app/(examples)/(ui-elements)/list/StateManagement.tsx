"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";

export default function StateManagement() {
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>([
    false,
    true,
    false,
    true,
    false,
  ]);
  const [selectedRadio, setSelectedRadio] = useState<string>("radio-item-2");

  return (
    <ComponentCard title="State Management & Features">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Current States
          </h4>
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <div className="space-y-3">
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Checkbox States:</strong>{" "}
                <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                  {JSON.stringify(checkboxStates)}
                </code>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Selected Radio:</strong>{" "}
                <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                  {selectedRadio}
                </code>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Interact with the lists on other cards to see state changes
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Component Features
          </h4>
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Multiple variants (default, ordered, unordered)
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Icon support with custom SVGs
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Interactive states (checkbox, radio, button)
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Horizontal layout option
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Dark mode compatibility
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Disabled state handling
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  TypeScript interfaces
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Event handlers for interactions
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Usage Tips
          </h4>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <p>
              • Use <strong>default</strong> variant for simple content lists
            </p>
            <p>
              • Use <strong>ordered/unordered</strong> variants for structured
              content
            </p>
            <p>
              • Use <strong>icon</strong> variant to enhance visual
              communication
            </p>
            <p>
              • Use <strong>checkbox</strong> variant for multi-selection
              scenarios
            </p>
            <p>
              • Use <strong>radio</strong> variant for single-choice selections
            </p>
            <p>
              • Use <strong>button</strong> variant for actionable menu items
            </p>
            <p>
              • Use <strong>horizontal</strong> variant for navigation or tags
            </p>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
