"use client";
import React, { useState, ReactNode } from "react";

export interface TabItem {
  key: string;
  title: string;
  content: ReactNode;
  icon?: ReactNode;
  count?: number;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveKey?: string;
  variant?: "default" | "underline" | "vertical";
  showBorder?: boolean;
  className?: string;
  onChange?: (key: string) => void;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveKey,
  variant = "default",
  showBorder = true,
  className = "",
  onChange,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveKey || items[0]?.key || ""
  );

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    onChange?.(key);
  };

  const renderDefaultTabs = () => (
    <div
      className={`${
        showBorder
          ? "border border-gray-200 rounded-xl dark:border-gray-800"
          : ""
      } ${className}`}
    >
      <div
        className={`p-3 ${
          showBorder ? "border-b border-gray-200 dark:border-gray-800" : ""
        }`}
      >
        <nav className="flex overflow-x-auto rounded-lg bg-gray-100 p-1 dark:bg-gray-900 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-white dark:[&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600">
          {items.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => handleTabChange(item.key)}
              className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
                activeTab === item.key
                  ? "bg-brand-50 text-brand-500 shadow-theme-xs dark:bg-brand-500/15 dark:text-brand-400"
                  : "bg-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              {item.title}
              {item.count !== undefined && (
                <span className="inline-block items-center justify-center rounded-full bg-brand-50 px-2 py-0.5 text-center text-xs font-medium text-brand-500 dark:bg-brand-500/15 dark:text-brand-400">
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-6 pt-4">
        {items.map((item) => (
          <div
            key={item.key}
            style={{ display: activeTab === item.key ? "block" : "none" }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );

  const renderUnderlineTabs = () => (
    <div
      className={`p-6 ${
        showBorder
          ? "border border-gray-200 rounded-xl dark:border-gray-800"
          : ""
      } ${className}`}
    >
      <div className="border-b border-gray-200 dark:border-gray-800">
        <nav className="-mb-px flex space-x-2 overflow-x-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 dark:[&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:h-1.5">
          {items.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => handleTabChange(item.key)}
              className={`inline-flex items-center gap-2 border-b-2 px-2.5 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
                activeTab === item.key
                  ? "text-brand-500 dark:text-brand-400 border-brand-500 dark:border-brand-400"
                  : "bg-transparent text-gray-500 border-transparent hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              {item.title}
              {item.count !== undefined && (
                <span className="inline-block items-center justify-center rounded-full bg-brand-50 px-2 py-0.5 text-center text-xs font-medium text-brand-500 dark:bg-brand-500/15 dark:text-brand-400">
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="pt-4">
        {items.map((item) => (
          <div
            key={item.key}
            style={{ display: activeTab === item.key ? "block" : "none" }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );

  const renderVerticalTabs = () => (
    <div
      className={`p-6 ${
        showBorder
          ? "border border-gray-200 rounded-xl dark:border-gray-800"
          : ""
      } ${className}`}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <div className="overflow-x-auto pb-2 sm:w-[200px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-100 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:bg-white dark:[&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:h-1.5">
          <nav className="flex flex-row w-full sm:flex-col sm:space-y-2">
            {items.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => handleTabChange(item.key)}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out sm:p-3 ${
                  activeTab === item.key
                    ? "text-brand-500 dark:bg-brand-400/20 dark:text-brand-400 bg-brand-50"
                    : "bg-transparent text-gray-500 border-transparent hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {item.icon && <span className="shrink-0">{item.icon}</span>}
                {item.title}
                {item.count !== undefined && (
                  <span className="inline-block items-center justify-center rounded-full bg-brand-50 px-2 py-0.5 text-center text-xs font-medium text-brand-500 dark:bg-brand-500/15 dark:text-brand-400">
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex-1">
          {items.map((item) => (
            <div
              key={item.key}
              style={{ display: activeTab === item.key ? "block" : "none" }}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  switch (variant) {
    case "underline":
      return renderUnderlineTabs();
    case "vertical":
      return renderVerticalTabs();
    default:
      return renderDefaultTabs();
  }
};

export default Tabs;
