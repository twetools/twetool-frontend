"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import RadioButtons from "./RadioButtons";

export default function RadioExamples() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Radio Button Examples" />
      <div className="space-y-6">
        <RadioButtons />
      </div>
    </div>
  );
}
