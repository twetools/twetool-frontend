import React from "react";
import ComponentCard from "@/components/common/ComponentCard";

export default function ComponentProperties() {
  return (
    <ComponentCard title="ButtonsGroup Properties">
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
                  ButtonItem[]
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  required
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Array of button configuration objects
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                  variant
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  'primary' | 'secondary'
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  'primary'
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Visual style variant of the button group
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                  size
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  'small' | 'medium' | 'large'
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  'medium'
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Size of the buttons in the group
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                  iconPosition
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  'left' | 'right'
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  'left'
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Position of icons relative to button labels
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            ButtonItem Interface
          </h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <pre className="text-sm text-gray-700 dark:text-gray-300">
              {`interface ButtonItem {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}`}
            </pre>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Usage Examples
          </h4>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <p>• Use for tab-like navigation within a section</p>
            <p>• Perfect for filter toggles and view switchers</p>
            <p>• Ideal for toolbar actions and mode selection</p>
            <p>• Great for pagination controls and step indicators</p>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
