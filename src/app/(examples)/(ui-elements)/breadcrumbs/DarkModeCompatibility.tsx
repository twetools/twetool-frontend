"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";

export default function DarkModeCompatibility() {
  return (
    <ComponentCard title="Dark Mode Compatibility">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Breadcrumb components automatically adapt to dark mode with
          appropriate text colors, separators, and hover states. All variants
          maintain their visual hierarchy and accessibility in both light and
          dark themes.
        </p>
      </div>
    </ComponentCard>
  );
}
