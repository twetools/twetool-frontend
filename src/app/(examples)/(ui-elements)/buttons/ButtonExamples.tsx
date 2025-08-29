"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Button from "@/components/ui/button/Button";
import {
  CalendarIcon,
  PlusIcon,
  SaveIcon,
  DeleteIcon,
  EditIcon,
  CopyIcon,
  SettingsIcon,
  UserIcon,
  EnvelopeIcon,
} from "@/icons";

export default function ButtonExamples() {
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});

  const handleButtonClick = (buttonId: string) => {
    setLoadingStates((prev) => ({ ...prev, [buttonId]: true }));

    // Simulate async operation
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [buttonId]: false }));
    }, 2000);
  };

  return (
    <ComponentCard title="Button Examples">
      <div className="space-y-8">
        {/* Basic Buttons */}
        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sizes */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Button Sizes
              </h4>
              <div className="flex items-center gap-3">
                <Button size="sm" variant="primary">
                  Small
                </Button>
                <Button size="md" variant="primary">
                  Medium
                </Button>
              </div>
            </div>

            {/* Variants */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Button Variants
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="sm">
                  Primary
                </Button>
                <Button variant="outline" size="sm">
                  Outline
                </Button>
                <Button variant="ghost" size="sm">
                  Ghost
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons with Icons */}
        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Buttons with Icons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Start Icons */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Left Icons
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Button startIcon={<PlusIcon />} variant="primary" size="sm">
                    Add Item
                  </Button>
                  <Button startIcon={<EditIcon />} variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    startIcon={<UserIcon className="h-5 w-5" />}
                    variant="ghost"
                    size="sm"
                  >
                    Profile
                  </Button>
                </div>
              </div>
            </div>

            {/* End Icons */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Right Icons
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Button endIcon={<SaveIcon />} variant="primary" size="sm">
                    Save
                  </Button>
                  <Button endIcon={<CopyIcon />} variant="outline" size="sm">
                    Copy
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    endIcon={<CalendarIcon className="h-5 w-5" />}
                    variant="ghost"
                    size="sm"
                  >
                    Schedule
                  </Button>
                  <Button
                    endIcon={<EnvelopeIcon className="h-5 w-5" />}
                    variant="outline"
                    size="sm"
                  >
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Action Buttons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Success and Danger */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Success & Danger
              </h4>
              <div className="flex items-center gap-3">
                <Button variant="success" size="sm" startIcon={<SaveIcon />}>
                  Save Changes
                </Button>
                <Button variant="danger" size="sm" startIcon={<DeleteIcon />}>
                  Delete Item
                </Button>
              </div>
            </div>

            {/* Loading States */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Loading States
              </h4>
              <div className="flex items-center gap-3">
                <Button
                  loading={loadingStates.save}
                  onClick={() => handleButtonClick("save")}
                  variant="primary"
                  size="sm"
                >
                  {loadingStates.save ? "Saving..." : "Save Data"}
                </Button>
                <Button
                  loading={loadingStates.submit}
                  onClick={() => handleButtonClick("submit")}
                  variant="outline"
                  size="sm"
                >
                  {loadingStates.submit ? "Processing..." : "Submit Form"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Button States */}
        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Button States
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Disabled States */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Disabled States
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" disabled size="sm">
                  Disabled Primary
                </Button>
                <Button variant="outline" disabled size="sm">
                  Disabled Outline
                </Button>
                <Button variant="ghost" disabled size="sm">
                  Disabled Ghost
                </Button>
              </div>
            </div>

            {/* Icon Only Buttons */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Icon Only Buttons
              </h4>
              <div className="flex items-center gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  startIcon={<EditIcon />}
                  aria-label="Edit item"
                >
                  <span className="sr-only">Edit</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  startIcon={<DeleteIcon />}
                  aria-label="Delete item"
                >
                  <span className="sr-only">Delete</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  startIcon={<CopyIcon />}
                  aria-label="Copy item"
                >
                  <span className="sr-only">Copy</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
