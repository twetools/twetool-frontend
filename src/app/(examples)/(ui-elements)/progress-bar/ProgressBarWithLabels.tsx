"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import ProgressBar from "@/components/ui/progress-bar/ProgressBar";

export default function ProgressBarWithLabels() {
  return (
    <ComponentCard title="Progress Bar with Labels">
      <div className="space-y-8">
        {/* Outside Labels */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Outside Labels
          </h4>
          <div className="space-y-4 max-w-sm">
            <ProgressBar progress={40} label="outside" />
            <ProgressBar progress={70} label="outside" />
            <ProgressBar progress={90} label="outside" />
          </div>
        </div>

        {/* Inside Labels */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Inside Labels
          </h4>
          <div className="space-y-4 max-w-sm">
            <ProgressBar progress={25} size="lg" label="inside" />
            <ProgressBar progress={60} size="lg" label="inside" />
            <ProgressBar progress={85} size="lg" label="inside" />
          </div>
        </div>

        {/* Mixed Label Sizes */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Labels with Different Sizes
          </h4>
          <div className="space-y-4 max-w-sm">
            <ProgressBar progress={50} size="md" label="outside" />
            <ProgressBar progress={50} size="lg" label="inside" />
            <ProgressBar progress={50} size="xl" label="inside" />
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
