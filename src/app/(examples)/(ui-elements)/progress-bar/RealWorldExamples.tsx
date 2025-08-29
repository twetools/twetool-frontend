"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import ProgressBar from "@/components/ui/progress-bar/ProgressBar";

export default function RealWorldExamples() {
  return (
    <ComponentCard title="Real World Examples">
      <div className="space-y-8">
        {/* Task Completion */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Task Completion
          </h4>
          <div className="space-y-4 max-w-sm">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Lead Generation
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  8/10 calls
                </span>
              </div>
              <ProgressBar progress={80} size="sm" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Property Listings
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  12/15 photos
                </span>
              </div>
              <ProgressBar progress={80} size="sm" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Client Follow-ups
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  3/20 contacts
                </span>
              </div>
              <ProgressBar progress={15} size="sm" />
            </div>
          </div>
        </div>

        {/* Goal Tracking */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Monthly Goals
          </h4>
          <div className="space-y-4 max-w-sm">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Sales Target
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  $450K / $500K
                </span>
              </div>
              <ProgressBar progress={90} size="md" label="outside" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  New Clients
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  18 / 25 clients
                </span>
              </div>
              <ProgressBar progress={72} size="md" label="outside" />
            </div>
          </div>
        </div>

        {/* System Status */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            System Resources
          </h4>
          <div className="space-y-4 max-w-sm">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Storage Used
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  8.2 GB / 10 GB
                </span>
              </div>
              <ProgressBar progress={82} size="sm" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  API Quota
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  3,200 / 5,000 calls
                </span>
              </div>
              <ProgressBar progress={64} size="sm" />
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
