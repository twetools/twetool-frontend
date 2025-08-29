"use client";

import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Spinner from "@/components/ui/spinners/Spinner";

const BasicSpinners: React.FC = () => {
  return (
    <ComponentCard title="Basic Spinners">
      <div className="space-y-8">
        {/* Primary Spinners */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Primary Spinners (Most Common)
          </h4>
          <div className="flex items-center gap-4">
            <Spinner size="xs" variant="primary" />
            <Spinner size="sm" variant="primary" />
            <Spinner size="md" variant="primary" />
            <Spinner size="lg" variant="primary" />
            <Spinner size="xl" variant="primary" />
          </div>
        </div>

        {/* Secondary Spinners */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Secondary Spinners (Segmented Style)
          </h4>
          <div className="flex items-center gap-4">
            <Spinner size="xs" variant="secondary" />
            <Spinner size="sm" variant="secondary" />
            <Spinner size="md" variant="secondary" />
            <Spinner size="lg" variant="secondary" />
            <Spinner size="xl" variant="secondary" />
          </div>
        </div>

        {/* Size Comparison */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Size Comparison
          </h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-end gap-6">
              <div className="text-center">
                <Spinner size="xs" variant="primary" />
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  XS (16px)
                </p>
              </div>
              <div className="text-center">
                <Spinner size="sm" variant="primary" />
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  SM (20px)
                </p>
              </div>
              <div className="text-center">
                <Spinner size="md" variant="primary" />
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  MD (24px)
                </p>
              </div>
              <div className="text-center">
                <Spinner size="lg" variant="primary" />
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  LG (32px)
                </p>
              </div>
              <div className="text-center">
                <Spinner size="xl" variant="primary" />
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  XL (40px)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
};

export default BasicSpinners;
