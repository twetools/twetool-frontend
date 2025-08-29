"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import { DropdownItem, DropdownButton } from "@/components/ui/dropdown";
import {
  SettingsIcon,
  InfoIcon,
  PlusIcon,
  UserCircleIcon,
  EditIcon,
} from "@/icons";

export default function DropdownsWithIcons() {
  return (
    <ComponentCard title="Dropdowns with Icons">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <div className="flex flex-wrap gap-4">
            <DropdownButton
              label="Add New Item"
              startIcon={<PlusIcon />}
              className="relative inline-block"
            >
              <DropdownItem>Create Contact</DropdownItem>
              <DropdownItem>Create Property</DropdownItem>
              <DropdownItem>Create Lead</DropdownItem>
            </DropdownButton>

            <DropdownButton
              label="Settings"
              endIcon={<SettingsIcon />}
              className="relative inline-block"
            >
              <DropdownItem>Profile Settings</DropdownItem>
              <DropdownItem>Account Settings</DropdownItem>
              <DropdownItem>Privacy Settings</DropdownItem>
            </DropdownButton>
          </div>
        </div>

        {/* States and Validation */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            States and Validation
          </h4>
          <DropdownButton label="Actions" className="relative inline-block">
            <DropdownItem icon={<UserCircleIcon />}>Edit Profile</DropdownItem>
            <DropdownItem icon={<EditIcon />}>Edit</DropdownItem>
            <DropdownItem icon={<SettingsIcon />}>Settings</DropdownItem>
            <DropdownItem icon={<InfoIcon />}>Support</DropdownItem>
          </DropdownButton>
          <div className="mt-4 text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
            Icons provide visual context and improve usability
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
