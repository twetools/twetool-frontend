"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import ButtonsGroup from "@/components/ui/buttons-group/ButtonsGroup";
import { HomeIcon, UserIcon, SettingsIcon, PlusIcon } from "@/icons";

const BasicUsageExample = () => {
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
    <ComponentCard title="ButtonsGroup Examples">
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

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            With Icons (Left Position)
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
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            With Icons (Right Position)
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
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Different Sizes
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Small:
              </p>
              <ButtonsGroup items={basicItems} variant="primary" size="small" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Medium (default):
              </p>
              <ButtonsGroup
                items={basicItems}
                variant="primary"
                size="medium"
              />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Large:
              </p>
              <ButtonsGroup items={basicItems} variant="primary" size="large" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Disabled State
          </h4>
          <ButtonsGroup
            items={[
              { label: "Active", active: true },
              { label: "Normal" },
              { label: "Disabled", disabled: true },
            ]}
            variant="primary"
          />
        </div>
      </div>
    </ComponentCard>
  );
};

export default function ButtonsGroupExamples() {
  return (
    <div className="space-y-8">
      <BasicUsageExample />
    </div>
  );
}
