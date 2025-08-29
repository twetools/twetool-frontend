"use client";
import React from "react";
import Tab, { TabItem } from "./Tab";

interface TabButtonProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const TabButton: React.FC<TabButtonProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`inline-flex items-center border-b-2 px-2.5 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
        isActive
          ? "text-brand-500 dark:text-brand-400 border-brand-500 dark:border-brand-400"
          : "bg-transparent text-gray-500 border-transparent hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TabWithUnderline: React.FC = () => {
  const tabItems: TabItem[] = [
    {
      key: "overview",
      title: "Overview",
      content: (
        <div>
          <h3 className="mb-1 text-xl font-medium text-gray-800 dark:text-white/90">
            Overview
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Overview ipsum dolor sit amet consectetur. Non vitae facilisis urna
            tortor placerat egestas donec. Faucibus diam gravida enim elit lacus
            a. Tincidunt fermentum condimentum quis et a et tempus. Tristique
            urna nisi nulla elit sit libero scelerisque ante.
          </p>
        </div>
      ),
    },
    {
      key: "notification",
      title: "Notification",
      content: (
        <div>
          <h3 className="mb-1 text-xl font-medium text-gray-800 dark:text-white/90">
            Notification
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Notification ipsum dolor sit amet consectetur. Non vitae facilisis
            urna tortor placerat egestas donec. Faucibus diam gravida enim elit
            lacus a. Tincidunt fermentum condimentum quis et a et tempus.
            Tristique urna nisi nulla elit sit libero scelerisque ante.
          </p>
        </div>
      ),
    },
    {
      key: "analytics",
      title: "Analytics",
      content: (
        <div>
          <h3 className="mb-1 text-xl font-medium text-gray-800 dark:text-white/90">
            Analytics
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Analytics ipsum dolor sit amet consectetur. Non vitae facilisis urna
            tortor placerat egestas donec. Faucibus diam gravida enim elit lacus
            a. Tincidunt fermentum condimentum quis et a et tempus. Tristique
            urna nisi nulla elit sit libero scelerisque ante.
          </p>
        </div>
      ),
    },
    {
      key: "customers",
      title: "Customers",
      content: (
        <div>
          <h3 className="mb-1 text-xl font-medium text-gray-800 dark:text-white/90">
            Customers
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Customers ipsum dolor sit amet consectetur. Non vitae facilisis urna
            tortor placerat egestas donec. Faucibus diam gravida enim elit lacus
            a. Tincidunt fermentum condimentum quis et a et tempus. Tristique
            urna nisi nulla elit sit libero scelerisque ante.
          </p>
        </div>
      ),
    },
  ];

  return (
    <Tab items={tabItems} variant="underline" defaultActiveKey="overview" />
  );
};

export default TabWithUnderline;
