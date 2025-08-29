"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicUsage from "./BasicUsage";
import ProgressBarSizes from "./ProgressBarSizes";
import ProgressBarWithLabels from "./ProgressBarWithLabels";
import InteractiveProgress from "./InteractiveProgress";
import RealWorldExamples from "./RealWorldExamples";
import DarkModeCompatibility from "./DarkModeCompatibility";

export default function ProgressBarElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Progress Bar Examples" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicUsage />
          <ProgressBarSizes />
          <RealWorldExamples />
        </div>
        <div className="space-y-6">
          <ProgressBarWithLabels />
          <InteractiveProgress />
          <DarkModeCompatibility />
        </div>
      </div>
    </div>
  );
}
