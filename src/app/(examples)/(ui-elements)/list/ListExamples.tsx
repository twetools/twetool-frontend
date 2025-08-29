"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import List from "@/components/ui/list/List";
import type { ListItem } from "@/components/ui/list/List";

export default function ListExamples() {
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

  // Sample list items
  const basicItems: ListItem[] = [
    { content: "Lorem ipsum dolor sit amet" },
    { content: "It is a long established fact that a reader" },
    { content: "Lorem ipsum dolor sit amet" },
    { content: "Contrary to popular belief" },
    { content: "There are many variations of passages" },
  ];

  const iconItems: ListItem[] = [
    {
      content: "Lorem ipsum dolor sit amet",
      icon: (
        <svg
          className="fill-current"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.61719 7.99985C2.61719 5.02736 5.02687 2.61768 7.99936 2.61768C10.9719 2.61768 13.3815 5.02736 13.3815 7.99985C13.3815 10.9723 10.9719 13.382 7.99936 13.382C5.02687 13.382 2.61719 10.9723 2.61719 7.99985ZM7.99936 1.11768C4.19844 1.11768 1.11719 4.19893 1.11719 7.99985C1.11719 11.8008 4.19844 14.882 7.99936 14.882C11.8003 14.882 14.8815 11.8008 14.8815 7.99985C14.8815 4.19893 11.8003 1.11768 7.99936 1.11768ZM10.5185 7.26551C10.8114 6.97262 10.8114 6.49775 10.5185 6.20485C10.2256 5.91196 9.75075 5.91196 9.45785 6.20485L7.45885 8.20386L6.54089 7.28589C6.24799 6.993 5.77312 6.993 5.48023 7.28589C5.18733 7.57878 5.18733 8.05366 5.48023 8.34655L6.92852 9.79485C7.06917 9.9355 7.25994 10.0145 7.45885 10.0145C7.65776 10.0145 7.84853 9.9355 7.98918 9.79485L10.5185 7.26551Z"
            fill=""
          />
        </svg>
      ),
    },
    {
      content: "It is a long established fact that a reader",
      icon: (
        <svg
          className="fill-current"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.61719 7.99985C2.61719 5.02736 5.02687 2.61768 7.99936 2.61768C10.9719 2.61768 13.3815 5.02736 13.3815 7.99985C13.3815 10.9723 10.9719 13.382 7.99936 13.382C5.02687 13.382 2.61719 10.9723 2.61719 7.99985ZM7.99936 1.11768C4.19844 1.11768 1.11719 4.19893 1.11719 7.99985C1.11719 11.8008 4.19844 14.882 7.99936 14.882C11.8003 14.882 14.8815 11.8008 14.8815 7.99985C14.8815 4.19893 11.8003 1.11768 7.99936 1.11768ZM10.5185 7.26551C10.8114 6.97262 10.8114 6.49775 10.5185 6.20485C10.2256 5.91196 9.75075 5.91196 9.45785 6.20485L7.45885 8.20386L6.54089 7.28589C6.24799 6.993 5.77312 6.993 5.48023 7.28589C5.18733 7.57878 5.18733 8.05366 5.48023 8.34655L6.92852 9.79485C7.06917 9.9355 7.25994 10.0145 7.45885 10.0145C7.65776 10.0145 7.84853 9.9355 7.98918 9.79485L10.5185 7.26551Z"
            fill=""
          />
        </svg>
      ),
    },
    {
      content: "Lorem ipsum dolor sit amet",
      icon: (
        <svg
          className="fill-current"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.61719 7.99985C2.61719 5.02736 5.02687 2.61768 7.99936 2.61768C10.9719 2.61768 13.3815 5.02736 13.3815 7.99985C13.3815 10.9723 10.9719 13.382 7.99936 13.382C5.02687 13.382 2.61719 10.9723 2.61719 7.99985ZM7.99936 1.11768C4.19844 1.11768 1.11719 4.19893 1.11719 7.99985C1.11719 11.8008 4.19844 14.882 7.99936 14.882C11.8003 14.882 14.8815 11.8008 14.8815 7.99985C14.8815 4.19893 11.8003 1.11768 7.99936 1.11768ZM10.5185 7.26551C10.8114 6.97262 10.8114 6.49775 10.5185 6.20485C10.2256 5.91196 9.75075 5.91196 9.45785 6.20485L7.45885 8.20386L6.54089 7.28589C6.24799 6.993 5.77312 6.993 5.48023 7.28589C5.18733 7.57878 5.18733 8.05366 5.48023 8.34655L6.92852 9.79485C7.06917 9.9355 7.25994 10.0145 7.45885 10.0145C7.65776 10.0145 7.84853 9.9355 7.98918 9.79485L10.5185 7.26551Z"
            fill=""
          />
        </svg>
      ),
    },
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
      icon: (
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2989 1.12891C11.4706 1.12891 10.799 1.80033 10.7989 2.62867L10.7988 3.1264V3.12659L10.799 4.87507H6.14518C3.60237 4.87507 1.54102 6.93642 1.54102 9.47923V14.3207C1.54102 15.4553 2.46078 16.3751 3.59536 16.3751H6.14518H9.99935H16.2077C17.4503 16.3751 18.4577 15.3677 18.4577 14.1251V10.1251C18.4577 7.22557 16.1072 4.87507 13.2077 4.87507H12.299L12.2989 3.87651H13.7503C14.509 3.87651 15.124 3.26157 15.1242 2.50293C15.1243 1.74411 14.5092 1.12891 13.7503 1.12891H12.2989ZM3.04102 9.47923C3.04102 7.76485 4.4308 6.37507 6.14518 6.37507C7.85957 6.37507 9.24935 7.76485 9.24935 9.47923V14.8751H6.14518H3.59536C3.28921 14.8751 3.04102 14.6269 3.04102 14.3207V9.47923ZM10.7493 9.47923V14.8751H16.2077C16.6219 14.8751 16.9577 14.5393 16.9577 14.1251V10.1251C16.9577 8.054 15.2788 6.37507 13.2077 6.37507H9.54559C10.2933 7.19366 10.7493 8.28319 10.7493 9.47923Z"
            fill=""
          />
        </svg>
      ),
    },
    {
      content: "Sent",
      onClick: () => handleButtonClick("Sent"),
      icon: (
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.98433 2.44399C3.11285 1.57147 1.15276 3.46979 1.96494 5.36824L3.82037 9.70527C3.90097 9.89367 3.90097 10.1069 3.82037 10.2953L1.96494 14.6323C1.15277 16.5307 3.11284 18.4291 4.98432 17.5565L16.8179 12.0395C18.5503 11.2319 18.5503 8.76865 16.8179 7.961L4.98433 2.44399ZM3.34404 4.77824C3.07331 4.14543 3.72667 3.51266 4.3505 3.80349L16.1841 9.32051C16.7615 9.58973 16.7616 10.4108 16.1841 10.68L4.3505 16.197C3.72667 16.4879 3.07331 15.8551 3.34404 15.2223L5.19947 10.8853C5.21895 10.8397 5.23687 10.7937 5.25321 10.7473L9.11736 10.7473C9.53157 10.7473 9.86736 10.4115 9.86736 9.99726C9.86736 9.58304 9.53157 9.24726 9.11736 9.24726L5.25108 9.24726C5.23531 9.20287 5.21811 9.15885 5.19947 9.11528L3.34404 4.77824Z"
            fill=""
          />
        </svg>
      ),
    },
    { content: "Drafts", onClick: () => handleButtonClick("Drafts") },
    { content: "Trash", onClick: () => handleButtonClick("Trash") },
    {
      content: "Spam",
      onClick: () => handleButtonClick("Spam"),
      disabled: true,
    },
  ];

  return (
    <ComponentCard title="List Examples">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Basic List Types
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Default List */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Default List
              </h4>
              <List items={basicItems} variant="default" />
            </div>

            {/* Unordered List */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Unordered List
              </h4>
              <List items={basicItems} variant="unordered" />
            </div>

            {/* Ordered List */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Ordered List
              </h4>
              <List items={basicItems} variant="ordered" />
            </div>
          </div>
        </div>

        {/* Lists with Icons */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Lists with Icons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Icon List */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Icon List
              </h4>
              <List items={iconItems} variant="icon" />
            </div>

            {/* Horizontal List */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Horizontal List
              </h4>
              <List items={iconItems.slice(0, 3)} variant="horizontal" />
            </div>
          </div>
        </div>

        {/* Interactive Lists */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Interactive Lists
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Checkbox List */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Checkbox List
              </h4>
              <List items={checkboxItems} variant="checkbox" />
            </div>

            {/* Radio List */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Radio List
              </h4>
              <List
                items={radioItems}
                variant="radio"
                radioName="example-radio"
                selectedRadioValue={selectedRadio}
                onRadioChange={handleRadioChange}
              />
            </div>

            {/* Button List */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Button List
              </h4>
              <List items={buttonItems} variant="button" />
            </div>
          </div>
        </div>

        {/* States and Validation */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            States and Validation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current State Display */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Current States
              </h4>
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="text-xs text-gray-700 dark:text-gray-300">
                    <strong>Checkbox States:</strong>{" "}
                    {JSON.stringify(checkboxStates)}
                  </div>
                  <div className="text-xs text-gray-700 dark:text-gray-300">
                    <strong>Selected Radio:</strong> {selectedRadio}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Interact with the lists above to see state changes
                  </div>
                </div>
              </div>
            </div>

            {/* List Features */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Component Features
              </h4>
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  <div>
                    ✅ Multiple variants (default, ordered, unordered, icon,
                    horizontal)
                  </div>
                  <div>✅ Interactive states (checkbox, radio, button)</div>
                  <div>✅ Dark mode support</div>
                  <div>✅ Disabled state handling</div>
                  <div>✅ Customizable styling</div>
                  <div>✅ TypeScript interfaces</div>
                  <div>✅ Event handlers for interactions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
