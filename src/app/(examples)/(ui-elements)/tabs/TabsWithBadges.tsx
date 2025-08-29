"use client";

import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Tab from "@/components/ui/tabs/Tab";

export default function TabsWithBadges() {
  const tabItemsWithBadges = [
    {
      key: "overview",
      title: "Overview",
      count: 8,
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
      count: 4,
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
      count: 12,
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
    <ComponentCard title="Tabs with Badges">
      <div className="space-y-8">
        {/* Default Tabs with Badges */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Default Style with Count Badges
          </h4>
          <Tab items={tabItemsWithBadges} defaultActiveKey="overview" />
        </div>

        {/* Underline Tabs with Badges */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Underline Style with Count Badges
          </h4>
          <Tab
            items={tabItemsWithBadges}
            defaultActiveKey="analytics"
            variant="underline"
          />
        </div>
      </div>
    </ComponentCard>
  );
}
