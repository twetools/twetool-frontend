"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Tooltip from "@/components/ui/tooltip/Tooltip";
import Button from "@/components/ui/button/Button";

export default function TooltipUseCases() {
  return (
    <ComponentCard title="Tooltip Use Cases">
      <div className="space-y-8">
        {/* Interactive Elements Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Interactive Elements
          </h4>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip content="Save your current work">
              <Button size="sm" variant="primary">
                Save
              </Button>
            </Tooltip>

            <Tooltip content="Cancel and discard changes">
              <Button size="sm" variant="outline">
                Cancel
              </Button>
            </Tooltip>

            <Tooltip content="Delete this item permanently">
              <Button size="sm" variant="danger">
                Delete
              </Button>
            </Tooltip>

            <Tooltip content="Download file as PDF">
              <Button size="sm" variant="outline">
                Download
              </Button>
            </Tooltip>
          </div>
        </div>

        {/* Icon Tooltips Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Icon Explanations
          </h4>
          <div className="flex items-center gap-6">
            <Tooltip content="Settings and preferences">
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </Tooltip>

            <Tooltip content="Help and documentation">
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </Tooltip>

            <Tooltip content="Add new item">
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Status Information Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Status Information
          </h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Tooltip content="Connection is stable and secure">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Online
                  </span>
                </div>
              </Tooltip>

              <Tooltip content="Processing your request, please wait">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Processing
                  </span>
                </div>
              </Tooltip>

              <Tooltip content="Connection failed, check your network">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Offline
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Form Help Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Form Field Help
          </h4>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Username
                  <Tooltip content="Must be 3-20 characters, letters and numbers only">
                    <span className="ml-1 text-blue-600 dark:text-blue-400 cursor-help">
                      ?
                    </span>
                  </Tooltip>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="Enter username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                  <Tooltip content="We'll never share your email with anyone else">
                    <span className="ml-1 text-blue-600 dark:text-blue-400 cursor-help">
                      ?
                    </span>
                  </Tooltip>
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="Enter email address"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
