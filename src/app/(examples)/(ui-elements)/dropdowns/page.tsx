"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicDropdowns from "./BasicDropdowns";
import DropdownsWithIcons from "./DropdownsWithIcons";
import DropdownsWithDividers from "./DropdownsWithDividers";
import DropdownPositioning from "./DropdownPositioning";

export default function DropdownElements() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Dropdown Examples" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicDropdowns />
          <DropdownsWithDividers />
        </div>

        <div className="space-y-6">
          <DropdownsWithIcons />
          <DropdownPositioning />
        </div>
      </div>
    </div>
  );
}
