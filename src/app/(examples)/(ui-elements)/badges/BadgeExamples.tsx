"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Badge from "@/components/ui/badge/Badge";

// Sample icons for demonstration
const CheckIcon = () => (
  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const XIcon = () => (
  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const StarIcon = () => (
  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function BadgeExamples() {
  const [selectedVariant, setSelectedVariant] = useState<"light" | "solid">(
    "light"
  );
  const [selectedColor, setSelectedColor] = useState<
    "primary" | "success" | "error" | "warning" | "info" | "light" | "dark"
  >("primary");
  const [selectedSize, setSelectedSize] = useState<"sm" | "md">("md");

  return (
    <ComponentCard title="Badges">
      <div className="space-y-8">
        {/* Basic Usage Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Basic Usage
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Default</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="error">Error</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="info">Info</Badge>
            <Badge color="light">Light</Badge>
            <Badge color="dark">Dark</Badge>
          </div>
        </div>

        {/* Variants Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Variants
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                Light Variant (Default)
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="light" color="primary">
                  Primary
                </Badge>
                <Badge variant="light" color="success">
                  Success
                </Badge>
                <Badge variant="light" color="error">
                  Error
                </Badge>
                <Badge variant="light" color="warning">
                  Warning
                </Badge>
                <Badge variant="light" color="info">
                  Info
                </Badge>
                <Badge variant="light" color="light">
                  Light
                </Badge>
                <Badge variant="light" color="dark">
                  Dark
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                Solid Variant
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="solid" color="primary">
                  Primary
                </Badge>
                <Badge variant="solid" color="success">
                  Success
                </Badge>
                <Badge variant="solid" color="error">
                  Error
                </Badge>
                <Badge variant="solid" color="warning">
                  Warning
                </Badge>
                <Badge variant="solid" color="info">
                  Info
                </Badge>
                <Badge variant="solid" color="light">
                  Light
                </Badge>
                <Badge variant="solid" color="dark">
                  Dark
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Sizes Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Sizes
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                Small Size
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Badge size="sm" color="primary">
                  Primary
                </Badge>
                <Badge size="sm" color="success">
                  Success
                </Badge>
                <Badge size="sm" color="error">
                  Error
                </Badge>
                <Badge size="sm" color="warning">
                  Warning
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                Medium Size (Default)
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Badge size="md" color="primary">
                  Primary
                </Badge>
                <Badge size="md" color="success">
                  Success
                </Badge>
                <Badge size="md" color="error">
                  Error
                </Badge>
                <Badge size="md" color="warning">
                  Warning
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Badges with Icons Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Badges with Icons
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                Start Icons
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Badge color="success" startIcon={<CheckIcon />}>
                  Completed
                </Badge>
                <Badge color="error" startIcon={<XIcon />}>
                  Failed
                </Badge>
                <Badge color="warning" startIcon={<StarIcon />}>
                  Featured
                </Badge>
                <Badge color="info" startIcon={<CheckIcon />}>
                  Verified
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                End Icons
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Badge color="success" endIcon={<CheckIcon />}>
                  Approved
                </Badge>
                <Badge color="error" endIcon={<XIcon />}>
                  Rejected
                </Badge>
                <Badge color="warning" endIcon={<StarIcon />}>
                  Premium
                </Badge>
                <Badge color="info" endIcon={<CheckIcon />}>
                  Validated
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                Both Icons
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  color="success"
                  startIcon={<CheckIcon />}
                  endIcon={<StarIcon />}
                >
                  Premium Plan
                </Badge>
                <Badge color="error" startIcon={<XIcon />} endIcon={<XIcon />}>
                  Disabled
                </Badge>
                <Badge
                  color="info"
                  startIcon={<StarIcon />}
                  endIcon={<CheckIcon />}
                >
                  Pro User
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Example Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Interactive Example
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Badge
                variant={selectedVariant}
                color={selectedColor}
                size={selectedSize}
                startIcon={
                  selectedColor === "success" ? <CheckIcon /> : undefined
                }
              >
                Interactive Badge
              </Badge>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Variant
                  </label>
                  <select
                    value={selectedVariant}
                    onChange={(e) =>
                      setSelectedVariant(
                        e.target.value as typeof selectedVariant
                      )
                    }
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="light">Light</option>
                    <option value="solid">Solid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Color
                  </label>
                  <select
                    value={selectedColor}
                    onChange={(e) =>
                      setSelectedColor(e.target.value as typeof selectedColor)
                    }
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="primary">Primary</option>
                    <option value="success">Success</option>
                    <option value="error">Error</option>
                    <option value="warning">Warning</option>
                    <option value="info">Info</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Size
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) =>
                      setSelectedSize(e.target.value as typeof selectedSize)
                    }
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Use Cases Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Common Use Cases
          </h3>
          <div className="space-y-6">
            {/* Status Indicators */}
            <div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                Status Indicators
              </h4>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Task #1234
                    </span>
                    <Badge color="success" size="sm" startIcon={<CheckIcon />}>
                      Completed
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Task #1235
                    </span>
                    <Badge color="warning" size="sm">
                      In Progress
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Task #1236
                    </span>
                    <Badge color="error" size="sm" startIcon={<XIcon />}>
                      Failed
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Task #1237
                    </span>
                    <Badge color="light" size="sm">
                      Pending
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories and Tags */}
            <div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                Categories and Tags
              </h4>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Blog Post: "Getting Started with React"
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="light" color="primary" size="sm">
                        React
                      </Badge>
                      <Badge variant="light" color="info" size="sm">
                        JavaScript
                      </Badge>
                      <Badge variant="light" color="success" size="sm">
                        Tutorial
                      </Badge>
                      <Badge variant="light" color="warning" size="sm">
                        Beginner
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Product: "Premium Dashboard"
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="solid"
                        color="warning"
                        size="sm"
                        startIcon={<StarIcon />}
                      >
                        Featured
                      </Badge>
                      <Badge variant="light" color="success" size="sm">
                        New
                      </Badge>
                      <Badge variant="light" color="info" size="sm">
                        Dashboard
                      </Badge>
                      <Badge variant="light" color="primary" size="sm">
                        Premium
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Roles and Permissions */}
            <div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                User Roles and Permissions
              </h4>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        John Doe
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        john@example.com
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="solid" color="primary" size="sm">
                        Admin
                      </Badge>
                      <Badge variant="light" color="success" size="sm">
                        Active
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Jane Smith
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        jane@example.com
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="light" color="info" size="sm">
                        Editor
                      </Badge>
                      <Badge variant="light" color="warning" size="sm">
                        Pending
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Mike Johnson
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        mike@example.com
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="light" color="light" size="sm">
                        Viewer
                      </Badge>
                      <Badge variant="light" color="error" size="sm">
                        Inactive
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Component Properties Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Component Properties
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="space-y-3 text-sm">
              <div>
                <strong className="text-gray-900 dark:text-white">
                  variant
                </strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (optional): "light" | "solid" (default: "light")
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">size</strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (optional): "sm" | "md" (default: "md")
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">color</strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (optional): "primary" | "success" | "error" | "warning" |
                  "info" | "light" | "dark" (default: "primary")
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  startIcon
                </strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (optional): React.ReactNode - Icon at the start
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  endIcon
                </strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (optional): React.ReactNode - Icon at the end
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  children
                </strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (required): React.ReactNode - Badge content
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  className
                </strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (optional): string - Additional CSS classes
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Compatibility Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Dark Mode Compatibility
          </h3>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Badge components are fully compatible with dark mode. All color
              variants automatically adjust their backgrounds and text colors to
              maintain optimal contrast and readability in both light and dark
              themes.
            </p>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
