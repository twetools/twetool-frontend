"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";

export default function DarkModeCompatibility() {
  return (
    <ComponentCard title="Dark Mode Compatibility">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Avatar components are fully compatible with dark mode. Status
          indicators automatically adjust their border colors, and all text
          elements follow the established dark mode color scheme.
        </p>
      </div>
    </ComponentCard>
  );
}
