"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import ButtonsGroup from "@/components/ui/buttons-group/ButtonsGroup";
import { HomeIcon, UserIcon, SettingsIcon, PlusIcon } from "@/icons";

export default function ButtonsWithIcons() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ComponentCard title="Buttons Group with Icons">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Icons on the Left
          </h4>
          <ButtonsGroup
            items={[
              {
                label: "Home",
                icon: <HomeIcon className="w-4 h-4" />,
                active: activeIndex === 0,
                onClick: () => setActiveIndex(0),
              },
              {
                label: "Users",
                icon: <UserIcon className="w-4 h-4" />,
                active: activeIndex === 1,
                onClick: () => setActiveIndex(1),
              },
              {
                label: "Settings",
                icon: <SettingsIcon className="w-4 h-4" />,
                active: activeIndex === 2,
                onClick: () => setActiveIndex(2),
              },
            ]}
            variant="primary"
            iconPosition="left"
          />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Icons appear to the left of button labels
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Icons on the Right
          </h4>
          <ButtonsGroup
            items={[
              {
                label: "Elements",
                icon: <PlusIcon className="w-4 h-4" />,
                active: activeIndex === 0,
                onClick: () => setActiveIndex(0),
              },
              {
                label: "Users",
                icon: <UserIcon className="w-4 h-4" />,
                active: activeIndex === 1,
                onClick: () => setActiveIndex(1),
              },
              {
                label: "Home",
                icon: <HomeIcon className="w-4 h-4" />,
                active: activeIndex === 2,
                onClick: () => setActiveIndex(2),
              },
            ]}
            variant="secondary"
            iconPosition="right"
          />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Icons appear to the right of button labels
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
