"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import { DropdownItem, DropdownButton } from "@/components/ui/dropdown";

export default function BasicDropdowns() {
  return (
    <ComponentCard title="Basic Dropdowns">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <DropdownButton
            label="Basic Actions"
            className="relative inline-block"
          >
            <DropdownItem>Edit</DropdownItem>
            <DropdownItem>Duplicate</DropdownItem>
            <DropdownItem>Archive</DropdownItem>
            <DropdownItem variant="destructive">Delete</DropdownItem>
          </DropdownButton>
        </div>

        {/* States and Validation */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            States and Validation
          </h4>
          <div className="flex flex-wrap gap-4">
            <DropdownButton label="Standard" className="relative inline-block">
              <DropdownItem>Standard Item</DropdownItem>
              <DropdownItem>Another Item</DropdownItem>
            </DropdownButton>
            <DropdownButton
              label="With Destructive"
              className="relative inline-block"
            >
              <DropdownItem>Safe Action</DropdownItem>
              <DropdownItem variant="destructive">Delete</DropdownItem>
            </DropdownButton>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
