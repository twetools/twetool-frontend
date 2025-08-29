"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Avatar from "@/components/ui/avatar/Avatar";

export default function StatusIndicators() {
  const sampleAvatar = "/images/user/user-01.jpg";

  return (
    <ComponentCard title="Status Indicators">
      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="text-center">
            <Avatar
              src={sampleAvatar}
              alt="Online User"
              status="online"
              size="large"
            />
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Online
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Green indicator
            </p>
          </div>
          <div className="text-center">
            <Avatar
              src={sampleAvatar}
              alt="Offline User"
              status="offline"
              size="large"
            />
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Offline
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Gray indicator
            </p>
          </div>
          <div className="text-center">
            <Avatar
              src={sampleAvatar}
              alt="Busy User"
              status="busy"
              size="large"
            />
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              Busy
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Yellow indicator
            </p>
          </div>
          <div className="text-center">
            <Avatar
              src={sampleAvatar}
              alt="No Status"
              status="none"
              size="large"
            />
            <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
              None
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              No indicator
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Combined with Different Sizes
          </h4>
          <div className="flex items-end gap-4">
            <Avatar
              src={sampleAvatar}
              alt="Small Online"
              status="online"
              size="small"
            />
            <Avatar
              src={sampleAvatar}
              alt="Medium Busy"
              status="busy"
              size="medium"
            />
            <Avatar
              src={sampleAvatar}
              alt="Large Offline"
              status="offline"
              size="large"
            />
            <Avatar
              src={sampleAvatar}
              alt="XLarge Online"
              status="online"
              size="xlarge"
            />
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
