"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicDropzones from "./BasicDropzones";
import DropzoneStates from "./DropzoneStates";
import DropzoneFormPatterns from "./DropzoneFormPatterns";

export default function DropzoneExamples() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Dropzone Examples" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicDropzones />
          <DropzoneStates />
        </div>
        <div className="space-y-6">
          <DropzoneFormPatterns />
        </div>
      </div>
    </div>
  );
}
