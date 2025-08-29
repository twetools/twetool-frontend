"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import ButtonsGroup from "@/components/ui/buttons-group/ButtonsGroup";

export default function BasicUsage() {
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
    <ComponentCard title="Basic Button Groups">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Primary Variant
          </h4>
          <ButtonsGroup items={basicItems} variant="primary" />
          <div className="text-xs text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 p-2 rounded border border-brand-200 dark:border-brand-800 mt-2">
            Primary variant uses brand colors for active states
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Secondary Variant
          </h4>
          <ButtonsGroup items={basicItems} variant="secondary" />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Secondary variant uses subtle gray colors
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
