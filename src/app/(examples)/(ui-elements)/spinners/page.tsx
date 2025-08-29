"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicSpinners from "./BasicSpinners";
import AdvancedSpinners from "./AdvancedSpinners";
import ButtonSpinnerExamples from "./ButtonSpinnerExamples";

export default function SpinnersPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Spinner Examples" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicSpinners />
          <ButtonSpinnerExamples />
        </div>
        <div className="space-y-6">
          <AdvancedSpinners />
        </div>
      </div>
    </div>
  );
}
