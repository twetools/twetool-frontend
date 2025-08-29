"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Popover from "@/components/ui/popovers/Popover";
import Button from "@/components/ui/button/Button";
import Link from "@/components/ui/links/Link";
import { UserIcon, SettingsIcon, InfoIcon } from "@/icons";

export default function PopoverVariations() {
  return (
    <ComponentCard title="Popover Variations">
      <div className="space-y-8">
        {/* Different Trigger Types */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Different Trigger Types
          </h4>
          <div className="flex flex-wrap items-center gap-4">
            <Popover
              position="top"
              trigger={
                <Button
                  size="sm"
                  variant="ghost"
                  startIcon={<UserIcon className="h-5 w-5" />}
                >
                  <span className="sr-only">User</span>
                </Button>
              }
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    Icon Trigger
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This popover is triggered by an icon button.
                  </p>
                </div>
              </div>
            </Popover>

            <Popover
              position="top"
              trigger={
                <Link
                  href="#"
                  variant="colored"
                  color="primary"
                  className="no-underline hover:underline"
                >
                  Text Link Trigger
                </Link>
              }
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    Link Trigger
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This popover is triggered by a text link.
                  </p>
                </div>
              </div>
            </Popover>

            <Popover
              position="top"
              trigger={
                <Button
                  size="sm"
                  variant="primary"
                  startIcon={<SettingsIcon className="h-5 w-5" />}
                >
                  <span className="sr-only">Settings</span>
                </Button>
              }
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    Avatar Trigger
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This popover is triggered by an avatar or circular element.
                  </p>
                </div>
              </div>
            </Popover>

            <Popover
              position="top"
              trigger={
                <Button size="sm" variant="outline" startIcon={<InfoIcon />}>
                  Custom Element
                </Button>
              }
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    Custom Trigger
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This popover is triggered by a custom composite element.
                  </p>
                </div>
              </div>
            </Popover>
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800 mt-4">
            Popovers can be triggered by any React element - buttons, icons,
            links, or custom components
          </div>
        </div>

        {/* Size Variations */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Size and Width Variations
          </h4>
          <div className="flex flex-wrap items-center gap-4">
            <Popover
              position="bottom"
              trigger={
                <Button size="sm" variant="primary">
                  Compact Popover
                </Button>
              }
            >
              <div className="w-64">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    Compact Size
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Smaller popover for brief content.
                  </p>
                </div>
              </div>
            </Popover>

            <Popover
              position="bottom"
              trigger={
                <Button size="sm" variant="primary">
                  Wide Popover
                </Button>
              }
            >
              <div className="w-96">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                    Wide Layout
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    This popover has a wider layout to accommodate more content
                    or complex layouts with multiple columns or sections.
                  </p>
                </div>
              </div>
            </Popover>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-4">
            Popover width can be customized by wrapping content in divs with
            specific width classes
          </div>
        </div>

        {/* Help and Tooltip Style */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Help and Information Style
          </h4>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Username
              </span>
              <Popover
                position="top"
                trigger={
                  <InfoIcon className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 cursor-pointer" />
                }
              >
                <div className="w-72">
                  <div className="p-3">
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      <strong className="text-gray-900 dark:text-white">
                        Username Requirements:
                      </strong>
                      <br />
                      • 3-20 characters
                      <br />
                      • Letters, numbers, and underscores only
                      <br />
                      • Must start with a letter
                      <br />• Case sensitive
                    </p>
                  </div>
                </div>
              </Popover>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                API Key
              </span>
              <Popover
                position="top"
                trigger={
                  <InfoIcon className="h-5 w-5 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer" />
                }
              >
                <div className="w-80">
                  <div className="relative rounded-t-xl border-b border-blue-200 bg-blue-100 px-4 py-2 dark:border-blue-700 dark:bg-blue-800">
                    <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-100">
                      API Key Information
                    </h3>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                      Your API key provides secure access to our services.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-xs">
                      <strong className="text-gray-900 dark:text-white">
                        Security Tips:
                      </strong>
                      <br />
                      • Never share your API key
                      <br />
                      • Regenerate if compromised
                      <br />• Use environment variables
                    </div>
                  </div>
                </div>
              </Popover>
            </div>
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800 mt-4">
            Small info icons next to form labels provide contextual help without
            cluttering the interface
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
