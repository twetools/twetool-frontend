"use client";
import React, { useState } from "react";
import * as Icons from "@/icons";
import Popover from "@/components/ui/popovers/Popover";

// Dynamically generate file name from icon name (e.g., AnalyticsIcon -> analytics.svg)
function getFileName(iconName: string) {
  // Remove 'Icon' suffix, convert to kebab-case, add .svg
  const base = iconName.replace(/Icon$/, "");
  return (
    base
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
      .toLowerCase() + ".svg"
  );
}

const iconNames = Object.keys(Icons).filter((name) => name.endsWith("Icon"));

type IconComponentType = React.ComponentType<{ className?: string }>;

// 5 icons per row
const iconsPerRow = 5;
const getPopoverPlacement = (index: number) => {
  const row = Math.floor(index / iconsPerRow);
  if (row === 0) return "bottom";
  if (row >= Math.floor((iconNames.length - 1) / iconsPerRow)) return "top";
  return "top";
};

export default function IconCatalogPage() {
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-app flex flex-col py-8">
      <div className="w-full max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white text-left">
          Icon Catalog
        </h2>
        <div className="grid grid-cols-6 gap-4" style={{ minHeight: "400px" }}>
          {iconNames.map((iconName, idx) => {
            const Icon = (Icons as Record<string, IconComponentType>)[iconName];
            const fileName = getFileName(iconName);
            const importString = `import { ${iconName} } from "@/icons";`;
            // Only render popover if openPopover is null or this icon is open
            return (
              <Popover
                key={iconName}
                position={getPopoverPlacement(idx)}
                trigger={
                  <div
                    className="flex flex-col items-center justify-center bg-app-box border border-app-box-border rounded-lg transition hover:border-blue-500 cursor-pointer w-32 h-32 mx-auto my-auto"
                    onClick={() => setOpenPopover(iconName)}
                  >
                    <div className="flex items-center justify-center flex-1 w-full h-full">
                      <Icon className="text-blue-400 max-w-8 max-h-8 mx-auto my-auto" />
                    </div>
                    <span className="text-xs text-gray-100 font-mono text-center truncate w-28 mb-3 mt-1">
                      {iconName}
                    </span>
                  </div>
                }
              >
                {openPopover === iconName && (
                  <div className="rounded-lg bg-gray-900 border border-gray-700 shadow-lg px-5 py-4 min-w-[240px] max-w-[280px] space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-blue-400 block mb-1">
                        Import Name
                      </span>
                      <div className="text-base font-mono text-white mb-2">
                        {iconName}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-400 block mb-1">
                        File Name
                      </span>
                      <div className="text-sm font-mono text-blue-200 mb-2">
                        {fileName ? (
                          fileName
                        ) : (
                          <span className="italic text-gray-500">N/A</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-400 mr-2">
                        Import
                      </span>
                      <button
                        type="button"
                        className="px-2 py-1 h-7 text-xs font-medium rounded bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(importString);
                          setOpenPopover(null);
                        }}
                      >
                        Copy Import
                      </button>
                      <div className="text-xs font-mono text-gray-300 mt-1">
                        {importString}
                      </div>
                    </div>
                  </div>
                )}
              </Popover>
            );
          })}
        </div>
        <div className="mt-8 text-xs text-gray-400">
          <div className="inline-block bg-gray-800/80 border border-gray-700 rounded px-4 py-2">
            <span className="font-semibold text-blue-400">Note:</span> This
            catalog is generated from all icon exports in{" "}
            <span className="font-mono">@/icons/index.tsx</span>.<br />
            File names are inferred automatically (e.g.,{" "}
            <span className="font-mono">AnalyticsIcon</span> →{" "}
            <span className="font-mono">analytics.svg</span>).
            <br />
            All icons are from{" "}
            <a
              href="https://tabler.io/icons"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              Tabler Icons
            </a>{" "}
            and are available in <span className="font-mono">@/icons</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
