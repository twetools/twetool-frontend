"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import ProgressBar from "@/components/ui/progress-bar/ProgressBar";

export default function BasicUsage() {
  return (
    <ComponentCard title="Basic Usage">
      <div className="space-y-8">
        {/* Default Progress Bars */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Default Progress Bars
          </h4>
          <div className="space-y-4 max-w-sm">
            <ProgressBar progress={25} />
            <ProgressBar progress={55} />
            <ProgressBar progress={85} />
          </div>
        </div>

        {/* Progress States */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Progress States
          </h4>
          <div className="space-y-4 max-w-sm">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Starting: 0%
              </p>
              <ProgressBar progress={0} />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                In Progress: 45%
              </p>
              <ProgressBar progress={45} />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Complete: 100%
              </p>
              <ProgressBar progress={100} />
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
