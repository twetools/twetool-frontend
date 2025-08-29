"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import ProgressBar from "@/components/ui/progress-bar/ProgressBar";

export default function ProgressBarSizes() {
  return (
    <ComponentCard title="Progress Bar Sizes">
      <div className="space-y-8">
        {/* Size Variations */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Size Options
          </h4>
          <div className="space-y-4 max-w-sm">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Small (sm)
              </p>
              <ProgressBar progress={65} size="sm" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Medium (md)
              </p>
              <ProgressBar progress={65} size="md" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Large (lg)
              </p>
              <ProgressBar progress={65} size="lg" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Extra Large (xl)
              </p>
              <ProgressBar progress={65} size="xl" />
            </div>
          </div>
        </div>

        {/* Size Comparison */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Side by Side Comparison
          </h4>
          <div className="space-y-3 max-w-sm">
            <ProgressBar progress={75} size="sm" />
            <ProgressBar progress={75} size="md" />
            <ProgressBar progress={75} size="lg" />
            <ProgressBar progress={75} size="xl" />
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
