"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicPopovers from "./BasicPopovers";
import PopoversWithContent from "./PopoversWithContent";
import PopoverVariations from "./PopoverVariations";

export default function PopoversPage() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Popover Examples" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicPopovers />
          <PopoverVariations />
        </div>

        <div className="space-y-6">
          <PopoversWithContent />
        </div>
      </div>
    </div>
  );
}
