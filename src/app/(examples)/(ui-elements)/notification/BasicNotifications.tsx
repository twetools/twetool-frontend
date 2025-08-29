"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import { Notification } from "@/components/ui/notification";

export default function BasicNotifications() {
  return (
    <ComponentCard title="Basic Notifications">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <div className="space-y-4">
            <Notification
              variant="success"
              title="Success!"
              description="Your action was completed successfully."
              autoHide={false}
            />
            <Notification
              variant="info"
              title="Information"
              description="Here's some useful information for you."
              autoHide={false}
            />
            <Notification
              variant="warning"
              title="Warning"
              description="Please review this important notice."
              autoHide={false}
            />
            <Notification
              variant="error"
              title="Error"
              description="Something went wrong. Please try again."
              autoHide={false}
            />
          </div>
        </div>

        {/* States and Validation */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            States and Validation
          </h4>
          <div className="space-y-4">
            <Notification
              variant="success"
              title="Without Description"
              autoHide={false}
            />
            <Notification
              variant="info"
              title="Auto-hide Notification"
              description="This notification will disappear automatically."
              autoHide={true}
              hideDuration={3000}
            />
          </div>
          <div className="mt-4 text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
            Notifications support both title-only and title+description formats
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
