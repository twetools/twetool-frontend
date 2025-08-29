"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DefaultInputs from "./DefaultInputs";
import SpecializedInputs from "./SpecializedInputs";
import InputStates from "./InputStates";

export default function InputElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Input Examples" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
          <InputStates />
        </div>
        <div className="space-y-6">
          <SpecializedInputs />
        </div>
      </div>
    </div>
  );
}
