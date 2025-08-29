"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicUsage from "./BasicUsage";
import AvatarSizes from "./AvatarSizes";
import StatusIndicators from "./StatusIndicators";
import ComponentProperties from "./ComponentProperties";
import DarkModeCompatibility from "./DarkModeCompatibility";

export default function AvatarElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Avatar Examples" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicUsage />
          <AvatarSizes />
          <ComponentProperties />
        </div>
        <div className="space-y-6">
          <StatusIndicators />
          <DarkModeCompatibility />
        </div>
      </div>
    </div>
  );
}
