import React from "react";
import PageBreadCrumb from "@/components/common/PageBreadCrumb";
import BasicTooltips from "./BasicTooltips";
import TooltipPositioning from "./TooltipPositioning";
import TooltipThemes from "./TooltipThemes";
import TooltipUseCases from "./TooltipUseCases";

export default function TooltipPage() {
  return (
    <div className="space-y-6">
      <PageBreadCrumb pageTitle="Tooltip Examples" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicTooltips />
          <TooltipThemes />
        </div>

        <div className="space-y-6">
          <TooltipPositioning />
          <TooltipUseCases />
        </div>
      </div>
    </div>
  );
}
