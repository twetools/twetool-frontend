"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Popover from "@/components/ui/popovers/Popover";
import Button from "@/components/ui/button/Button";

export default function BasicPopovers() {
  return (
    <ComponentCard title="Basic Popovers">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <div className="flex flex-wrap items-center gap-4">
            <Popover
              position="top"
              trigger={<Button size="sm">Popover on Top</Button>}
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    Top Popover
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris facilisis congue justo nec facilisis.
                  </p>
                </div>
              </div>
            </Popover>

            <Popover
              position="bottom"
              trigger={<Button size="sm">Popover on Bottom</Button>}
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    Bottom Popover
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris facilisis congue justo nec facilisis.
                  </p>
                </div>
              </div>
            </Popover>

            <Popover
              position="right"
              trigger={<Button size="sm">Popover on Right</Button>}
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    Right Popover
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris facilisis congue justo nec facilisis.
                  </p>
                </div>
              </div>
            </Popover>

            <Popover
              position="left"
              trigger={<Button size="sm">Popover on Left</Button>}
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    Left Popover
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris facilisis congue justo nec facilisis.
                  </p>
                </div>
              </div>
            </Popover>
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800 mt-4">
            Popovers can be positioned on all four sides of the trigger element
          </div>
        </div>

        {/* States and Validation */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            States and Validation
          </h4>
          <div className="flex flex-wrap items-center gap-4">
            <Popover
              position="bottom"
              trigger={
                <Button variant="outline" size="sm">
                  Info Popover
                </Button>
              }
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    Information
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This popover contains important information for the user.
                  </p>
                </div>
              </div>
            </Popover>

            <Popover
              position="bottom"
              trigger={
                <Button variant="success" size="sm">
                  Success Popover
                </Button>
              }
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-green-200 bg-green-100 px-5 py-3 dark:border-green-700 dark:bg-green-800">
                  <h3 className="text-base font-semibold text-green-800 dark:text-green-100">
                    Success
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Operation completed successfully!
                  </p>
                </div>
              </div>
            </Popover>

            <Popover
              position="bottom"
              trigger={
                <Button variant="danger" size="sm">
                  Warning Popover
                </Button>
              }
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-red-200 bg-red-100 px-5 py-3 dark:border-red-700 dark:bg-red-800">
                  <h3 className="text-base font-semibold text-red-800 dark:text-red-100">
                    Warning
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Please review this action before proceeding.
                  </p>
                </div>
              </div>
            </Popover>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-4">
            Popovers support different variants and styling for various states
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
