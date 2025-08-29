"use client";

import { useDevMode } from "@/context/DevModeContext";
import { CodeBracketIcon, NoSymbolIcon } from "@heroicons/react/24/outline";

export default function DevModeToggle() {
  const { enabled, toggle } = useDevMode();

  return (
    <button
      onClick={toggle}
      aria-pressed={enabled}
      title="Toggle Developer Mode"
      className={`inline-flex items-center justify-center w-10 h-10 rounded-lg font-medium gap-2 transition
        ${
          enabled
            ? "bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600"
            : "bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
        }
        disabled:bg-brand-300
      `}
      style={{ minWidth: 40, minHeight: 40 }}
    >
      {enabled ? (
        <CodeBracketIcon className="w-5 h-5" />
      ) : (
        <NoSymbolIcon className="w-5 h-5" />
      )}
    </button>
  );
}
