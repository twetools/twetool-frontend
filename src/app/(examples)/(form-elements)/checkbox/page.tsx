"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import CheckboxComponents from "./CheckboxComponents";

export default function CheckboxExamples() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Checkbox Examples" />
      <div className="space-y-6">
        <CheckboxComponents />
      </div>
    </div>
  );
}
