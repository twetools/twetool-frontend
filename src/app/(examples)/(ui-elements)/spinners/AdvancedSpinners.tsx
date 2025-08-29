"use client";

import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Spinner from "@/components/ui/spinners/Spinner";
import LoadingSpinner from "@/components/ui/spinners/LoadingSpinner";

export default function AdvancedSpinners() {
  return (
    <ComponentCard title="Advanced Spinner Examples">
      <div className="space-y-8">
        {/* Loading Context Examples */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-4">
            Loading Context Examples
          </h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <Spinner size="sm" variant="primary" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Processing your request...
              </span>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <Spinner size="sm" variant="secondary" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Uploading files...
              </span>
            </div>
          </div>
        </div>

        {/* LoadingSpinner Component */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-4">
            Loading Spinner (Dual Circle Design)
          </h4>
          <div className="flex items-center gap-6">
            <LoadingSpinner size="sm" />
            <LoadingSpinner size="md" />
            <LoadingSpinner size="lg" />
          </div>
        </div>

        {/* Full Page Loading Examples */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-4">
            Full Page Loading States
          </h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Spinner size="lg" variant="primary" />
              <div className="text-center">
                <h5 className="font-medium text-gray-900 dark:text-white">
                  Loading your dashboard
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Please wait while we prepare your data
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Loading States */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-4">
            Card Loading States
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center h-24">
                <div className="text-center space-y-3">
                  <Spinner size="md" variant="primary" />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Loading chart data
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center h-24">
                <div className="text-center space-y-3">
                  <Spinner size="md" variant="secondary" />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Loading table data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
