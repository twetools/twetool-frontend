"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicUsage from "./BasicUsage";
import AlertsWithLinks from "./AlertsWithLinks";
import CommonUseCases from "./CommonUseCases";
import ComponentProperties from "./ComponentProperties";
import DarkModeCompatibility from "./DarkModeCompatibility";

export default function AlertElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Alert Examples" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicUsage />
          <CommonUseCases />
          <ComponentProperties />
        </div>
        <div className="space-y-6">
          <AlertsWithLinks />
          <DarkModeCompatibility />
        </div>
      </div>
    </div>
  );
}
