import React from "react";
import ComponentCard from "@/components/common/ComponentCard";

export default function ComponentProperties() {
  return (
    <ComponentCard title="List Component Properties">
      <div className="space-y-4">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Property
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Default
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                  items
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  ListItem[]
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  required
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Array of list item configuration objects
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                  variant
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  'default' | 'ordered' | 'unordered' | 'icon' | 'horizontal' |
                  'checkbox' | 'radio' | 'button'
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  'default'
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Visual style and behavior variant of the list
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                  radioName
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  string
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  undefined
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Name attribute for radio button group
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                  selectedRadioValue
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  string
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  undefined
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Currently selected radio button value
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                  onRadioChange
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  (value: string) =&gt; void
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  undefined
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Callback when radio selection changes
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            ListItem Interface
          </h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
              {`interface ListItem {
  content: string;
  icon?: React.ReactNode;
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onCheckboxChange?: (checked: boolean) => void;
}`}
            </pre>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Variant Guide
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong>default:</strong> Simple list without markers
              </p>
              <p>
                <strong>ordered:</strong> Numbered list items
              </p>
              <p>
                <strong>unordered:</strong> Bulleted list items
              </p>
              <p>
                <strong>icon:</strong> List with custom icons
              </p>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong>horizontal:</strong> Items in a row layout
              </p>
              <p>
                <strong>checkbox:</strong> Multi-select with checkboxes
              </p>
              <p>
                <strong>radio:</strong> Single-select with radio buttons
              </p>
              <p>
                <strong>button:</strong> Clickable menu-style items
              </p>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
