"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import ButtonsGroup from "@/components/ui/buttons-group/ButtonsGroup";

export default function ButtonGroupSizes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const basicItems = [
    {
      label: "First",
      active: activeIndex === 0,
      onClick: () => setActiveIndex(0),
    },
    {
      label: "Second",
      active: activeIndex === 1,
      onClick: () => setActiveIndex(1),
    },
    {
      label: "Third",
      active: activeIndex === 2,
      onClick: () => setActiveIndex(2),
    },
  ];

  return (
    <ComponentCard title="Button Group Sizes">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Small Size
          </h4>
          <ButtonsGroup items={basicItems} variant="primary" size="small" />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Compact size for space-constrained interfaces
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Medium Size (Default)
          </h4>
          <ButtonsGroup items={basicItems} variant="primary" size="medium" />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Standard size for most use cases
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Large Size
          </h4>
          <ButtonsGroup items={basicItems} variant="primary" size="large" />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Larger size for prominent interfaces or mobile-friendly designs
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
