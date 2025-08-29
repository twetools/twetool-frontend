"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PhoneInputs from "./PhoneInputs";
import SpecializedPhoneInputs from "./SpecializedPhoneInputs"

export default function PhoneElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Phone Examples" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <PhoneInputs />
        </div>
        <div className="space-y-6">
          <SpecializedPhoneInputs />
        </div>
      </div>
    </div>
  );
}
