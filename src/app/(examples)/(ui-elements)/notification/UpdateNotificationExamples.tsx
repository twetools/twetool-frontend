"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import { UpdateNotification } from "@/components/ui/notification";

export default function UpdateNotificationExamples() {
  const handleLater = () => {
    console.log("Later button clicked");
  };

  const handleUpdate = () => {
    console.log("Update Now button clicked");
  };

  return (
    <ComponentCard title="Update Notifications">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <UpdateNotification
            title="New update available!"
            message="Enjoy improved functionality and enhancements."
            onLaterClick={handleLater}
            onUpdateClick={handleUpdate}
          />
        </div>

        {/* States and Validation */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            States and Validation
          </h4>
          <div className="space-y-4">
            <UpdateNotification
              title="Critical Security Update"
              message="This update includes important security fixes."
              onUpdateClick={handleUpdate}
            />
            <UpdateNotification
              title="Feature Update Available"
              message="New features are ready to enhance your experience."
              onLaterClick={handleLater}
            />
          </div>
          <div className="mt-4 text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
            Both "Later" and "Update Now" buttons are optional based on your
            needs
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
