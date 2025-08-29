"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DateInputs from "./DateInputs";
import SpecializedDateInputs from "./SpecializedDateInputs";
import ConditionalDateInputs from "./ConditionalDateInputs";

export default function DateElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Date Examples" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DateInputs />
          <SpecializedDateInputs />
        </div>
        <div className="space-y-6">
          <ConditionalDateInputs />
        </div>
      </div>
    </div>
  );
}
