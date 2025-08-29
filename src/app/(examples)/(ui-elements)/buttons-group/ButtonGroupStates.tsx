"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import ButtonsGroup from "@/components/ui/buttons-group/ButtonsGroup";

export default function ButtonGroupStates() {
  return (
    <ComponentCard title="Button Group States">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Normal and Disabled States
          </h4>
          <ButtonsGroup
            items={[
              { label: "Active", active: true },
              { label: "Normal" },
              { label: "Disabled", disabled: true },
            ]}
            variant="primary"
          />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Disabled buttons are non-interactive and visually distinct
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            All Active Example
          </h4>
          <ButtonsGroup
            items={[
              { label: "All", active: true },
              { label: "Selected", active: true },
              { label: "Items", active: true },
            ]}
            variant="secondary"
          />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Multiple buttons can be active simultaneously for multi-select
            scenarios
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            All Disabled Example
          </h4>
          <ButtonsGroup
            items={[
              { label: "Feature", disabled: true },
              { label: "Coming", disabled: true },
              { label: "Soon", disabled: true },
            ]}
            variant="primary"
          />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Entire button groups can be disabled during loading or unavailable
            states
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
