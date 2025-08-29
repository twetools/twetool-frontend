"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicFileInputs from "./BasicFileInputs";
import FileInputStates from "./FileInputStates";
import FileInputFormPatterns from "./FileInputFormPatterns";

export default function FileInputExamples() {
  return (
    <div>
      <PageBreadcrumb pageTitle="File Input Examples" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicFileInputs />
          <FileInputStates />
        </div>
        <div className="space-y-6">
          <FileInputFormPatterns />
        </div>
      </div>
    </div>
  );
}
