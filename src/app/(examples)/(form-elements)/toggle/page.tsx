"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ToggleSwitchExamples from "./ToggleSwitchExamples";

export default function ToggleExamples() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Toggle Switch Examples" />
      <div className="space-y-6">
        <ToggleSwitchExamples />
      </div>
    </div>
  );
}
