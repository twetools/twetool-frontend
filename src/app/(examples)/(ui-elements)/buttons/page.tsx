"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ButtonExamples from "./ButtonExamples";
import SpecializedButtons from "./SpecializedButtons";

export default function ButtonsPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Button Examples" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ButtonExamples />
        </div>
        <div className="space-y-6">
          <SpecializedButtons />
        </div>
      </div>
    </div>
  );
}
