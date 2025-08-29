"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import List from "@/components/ui/list/List";
import IconList from "@/components/ui/list/IconList";
import type { ListItem } from "@/components/ui/list/List";
import { HomeIcon, UserIcon, SettingsIcon, PipelineIcon } from "@/icons";

export default function IconLists() {
  const iconItems: ListItem[] = [
    {
      content: "Home Dashboard",
      icon: <HomeIcon className="w-4 h-4 text-brand-500 dark:text-brand-400" />,
    },
    {
      content: "User Management",
      icon: <UserIcon className="w-4 h-4 text-brand-500 dark:text-brand-400" />,
    },
    {
      content: "Settings & Configuration",
      icon: (
        <SettingsIcon className="w-4 h-4 text-brand-500 dark:text-brand-400" />
      ),
    },
    {
      content: "Pipeline Overview",
      icon: (
        <PipelineIcon className="w-4 h-4 text-brand-500 dark:text-brand-400" />
      ),
    },
  ];

  return (
    <ComponentCard title="List Base Class Architecture">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Base List Component (Static Text)
          </h4>
          <List items={iconItems} variant="icon" />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Base List component with icon variant - displays branded app icons
            alongside meaningful content with template-compliant text styling
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            IconList Component (Specialized)
          </h4>
          <IconList items={iconItems.slice(0, 3)} />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Specialized IconList component - inherits from BaseList and always
            uses icon variant
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Horizontal Layout Options
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Base List (Horizontal Variant)
              </h5>
              <List items={iconItems.slice(0, 3)} variant="horizontal" />
            </div>
            <div>
              <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                IconList (Horizontal)
              </h5>
              <IconList items={iconItems.slice(0, 3)} horizontal={true} />
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            All list components support horizontal layouts - Base List uses
            variant prop, specialized components use horizontal prop for cleaner
            API. For interactive button lists, see InteractiveLists component.
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
