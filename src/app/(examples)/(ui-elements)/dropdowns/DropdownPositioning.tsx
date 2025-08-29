"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import { DropdownItem, DropdownButton } from "@/components/ui/dropdown";

export default function DropdownPositioning() {
  return (
    <ComponentCard title="Position and Width Options">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <div className="flex flex-wrap gap-4">
            <DropdownButton
              label="Left Aligned"
              className="relative inline-block"
              buttonClassName="px-4 py-3 text-sm"
              alignDropdown="left"
            >
              <DropdownItem>Left Option 1</DropdownItem>
              <DropdownItem>Left Option 2</DropdownItem>
            </DropdownButton>

            <DropdownButton
              label="Right Aligned"
              className="relative inline-block"
              buttonClassName="px-4 py-3 text-sm"
              alignDropdown="right"
            >
              <DropdownItem>Right Option 1</DropdownItem>
              <DropdownItem>Right Option 2</DropdownItem>
            </DropdownButton>
          </div>
        </div>

        {/* States and Validation */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            States and Validation
          </h4>
          <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
            <p className="mb-2">
              <strong className="text-gray-900 dark:text-white">
                Left Aligned:
              </strong>{" "}
              Dropdown appears aligned to the left edge of the button
            </p>
            <p>
              <strong className="text-gray-900 dark:text-white">
                Right Aligned:
              </strong>{" "}
              Dropdown appears aligned to the right edge of the button
            </p>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
