"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicUsage from "./BasicUsage";
import BreadcrumbVariants from "./BreadcrumbVariants";
import NavigationExamples from "./NavigationExamples";
import ComponentProperties from "./ComponentProperties";
import DarkModeCompatibility from "./DarkModeCompatibility";

export default function BreadcrumbElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Breadcrumb Examples" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicUsage />
          <BreadcrumbVariants />
          <ComponentProperties />
        </div>
        <div className="space-y-6">
          <NavigationExamples />
          <DarkModeCompatibility />
        </div>
      </div>
    </div>
  );
}
