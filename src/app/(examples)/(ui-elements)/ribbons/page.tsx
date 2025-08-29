"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicRibbons from "./BasicRibbons";
import RibbonShapes from "./RibbonShapes";
import RibbonColors from "./RibbonColors";
import RibbonFeatures from "./RibbonFeatures";

export default function RibbonsPage() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Ribbons" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicRibbons />
          <RibbonColors />
        </div>

        <div className="space-y-6">
          <RibbonShapes />
          <RibbonFeatures />
        </div>
      </div>
    </div>
  );
}
