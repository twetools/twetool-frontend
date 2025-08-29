"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import List from "@/components/ui/list/List";
import type { ListItem } from "@/components/ui/list/List";
import { HomeIcon, UserIcon, SettingsIcon, PipelineIcon } from "@/icons";

export default function InteractiveLists() {
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [selectedRadio, setSelectedRadio] = useState<string>("radio-item-0");

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const newStates = [...checkboxStates];
    newStates[index] = checked;
    setCheckboxStates(newStates);
  };

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
  };

  const handleButtonClick = (itemName: string) => {
    console.log(`${itemName} clicked`);
  };

  const basicItems: ListItem[] = [
    { content: "Lorem ipsum dolor sit amet" },
    { content: "It is a long established fact that a reader" },
    { content: "Lorem ipsum dolor sit amet" },
    { content: "Contrary to popular belief" },
    { content: "There are many variations of passages" },
  ];

  const checkboxItems: ListItem[] = basicItems.map((item, index) => ({
    ...item,
    id: `checkbox-item-${index}`,
    checked: checkboxStates[index],
    onCheckboxChange: (checked) => handleCheckboxChange(index, checked),
  }));

  const radioItems: ListItem[] = basicItems.map((item, index) => ({
    ...item,
    id: `radio-item-${index}`,
  }));

  const buttonItems: ListItem[] = [
    {
      content: "Inbox",
      onClick: () => handleButtonClick("Inbox"),
      icon: <HomeIcon className="w-4 h-4 text-brand-500 dark:text-brand-400" />,
    },
    {
      content: "Sent",
      onClick: () => handleButtonClick("Sent"),
      icon: <UserIcon className="w-4 h-4 text-brand-500 dark:text-brand-400" />,
    },
    {
      content: "Drafts",
      onClick: () => handleButtonClick("Drafts"),
      icon: (
        <SettingsIcon className="w-4 h-4 text-brand-500 dark:text-brand-400" />
      ),
    },
    {
      content: "Trash",
      onClick: () => handleButtonClick("Trash"),
      icon: (
        <PipelineIcon className="w-4 h-4 text-brand-500 dark:text-brand-400" />
      ),
    },
  ];

  return (
    <ComponentCard title="Interactive Lists">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Checkbox List
          </h4>
          <List items={checkboxItems} variant="checkbox" />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Checkbox variant allows multiple selections with state management
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Radio List
          </h4>
          <List
            items={radioItems}
            variant="radio"
            radioName="example-radio"
            selectedRadioValue={selectedRadio}
            onRadioChange={handleRadioChange}
          />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Radio variant allows single selection from multiple options
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Button List
          </h4>
          <List items={buttonItems} variant="button" />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Button variant creates clickable items with optional icons and
            disabled states
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
