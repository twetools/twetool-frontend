"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import {
  DropdownItem,
  DropdownDivider,
  DropdownButton,
} from "@/components/ui/dropdown";
import { SettingsIcon, EditIcon, InfoIcon, UserCircleIcon } from "@/icons";

export default function DropdownsWithDividers() {
  return (
    <ComponentCard title="Dropdowns with Dividers">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <DropdownButton
            label="Grouped Actions"
            className="relative inline-block"
          >
            <DropdownItem icon={<UserCircleIcon />}>Edit Profile</DropdownItem>
            <DropdownItem icon={<EditIcon />}>Edit</DropdownItem>
            <DropdownDivider />
            <DropdownItem icon={<SettingsIcon />}>Settings</DropdownItem>
            <DropdownDivider />
            <DropdownItem icon={<InfoIcon />}>Support</DropdownItem>
            <DropdownItem variant="destructive">Sign Out</DropdownItem>
          </DropdownButton>
        </div>

        {/* States and Validation */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            States and Validation
          </h4>
          <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
            Use DropdownDivider to group related actions and separate
            destructive actions
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
