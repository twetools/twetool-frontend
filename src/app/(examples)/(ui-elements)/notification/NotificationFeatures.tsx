"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import { Notification } from "@/components/ui/notification";

export default function NotificationFeatures() {
  return (
    <ComponentCard title="Notification Features">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <div className="space-y-4">
            <Notification
              variant="success"
              title="Custom Auto-hide Duration"
              description="This notification will hide after 2 seconds."
              autoHide={true}
              hideDuration={2000}
            />
            <Notification
              variant="info"
              title="Persistent Notification"
              description="This notification stays until manually closed."
              autoHide={false}
              onClose={() => console.log("Notification closed")}
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
              variant="warning"
              title="Custom Styling"
              description="This notification has custom classes applied."
              autoHide={false}
              className="border-2 border-orange-300"
            />
          </div>
          <div className="mt-4 text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
            Notifications support custom styling, auto-hide timing, and close
            callbacks
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
