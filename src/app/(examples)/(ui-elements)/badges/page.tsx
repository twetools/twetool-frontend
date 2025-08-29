"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicUsage from "./BasicUsage";
import BadgeVariants from "./BadgeVariants";
import BadgeSizes from "./BadgeSizes";
import BadgeWithIcons from "./BadgeWithIcons";
import ComponentProperties from "./ComponentProperties";
import DarkModeCompatibility from "./DarkModeCompatibility";

export default function BadgeElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Badge Examples" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicUsage />
          <BadgeVariants />
          <BadgeSizes />
        </div>
        <div className="space-y-6">
          <BadgeWithIcons />
          <ComponentProperties />
          <DarkModeCompatibility />
        </div>
      </div>
    </div>
  );
}
