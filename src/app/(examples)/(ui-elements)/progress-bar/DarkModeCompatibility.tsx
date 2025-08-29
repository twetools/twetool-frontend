"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import ProgressBar from "@/components/ui/progress-bar/ProgressBar";

export default function DarkModeCompatibility() {
  return (
    <ComponentCard title="Dark Mode Compatibility">
      <div className="space-y-8">
        {/* Dark Mode Features */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Automatic Dark Mode Support
          </h4>
          <div className="space-y-4 max-w-sm">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Background automatically adjusts
              </p>
              <ProgressBar progress={65} size="md" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Labels remain readable
              </p>
              <ProgressBar progress={45} size="lg" label="outside" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Inside text contrasts properly
              </p>
              <ProgressBar progress={75} size="xl" label="inside" />
            </div>
          </div>
        </div>

        {/* Visual Indicators */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Theme Adaptation
          </h4>
          <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-200 dark:border-blue-800">
            <p className="mb-2">
              <strong>Light Mode:</strong> Gray background (bg-gray-200) with
              brand color progress
            </p>
            <p className="mb-2">
              <strong>Dark Mode:</strong> Dark gray background (bg-gray-700)
              with lighter brand color
            </p>
            <p>
              <strong>Text:</strong> Automatically switches between
              gray-700/gray-300 for optimal contrast
            </p>
          </div>
        </div>

        {/* Accessibility */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Accessibility Features
          </h4>
          <div className="space-y-3 max-w-sm">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                High contrast ratios maintained
              </p>
              <ProgressBar progress={85} size="lg" label="inside" />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Progress bars maintain WCAG contrast guidelines in both light and
              dark themes
            </p>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
