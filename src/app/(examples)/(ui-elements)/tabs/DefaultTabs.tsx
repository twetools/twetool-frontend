"use client";

import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Tab from "@/components/ui/tabs/Tab";

export default function DefaultTabs() {
  const tabItems = [
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
    <ComponentCard title="Default Tabs">
      <div className="space-y-8">
        {/* Basic Default Tabs */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <Tab items={tabItems} defaultActiveKey="overview" />
        </div>

        {/* Without Border */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Without Border
          </h4>
          <Tab
            items={tabItems}
            defaultActiveKey="analytics"
            showBorder={false}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
