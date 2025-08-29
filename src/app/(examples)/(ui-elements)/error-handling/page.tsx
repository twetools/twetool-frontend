import React from "react";
import PageBreadCrumb from "@/components/common/PageBreadCrumb";
import ErrorHandlingExamples from "./ErrorHandlingExamples";

export default function ErrorHandlingPage() {
  return (
    <div className="space-y-6">
      <PageBreadCrumb pageTitle="Error Handling Examples" />

      <div className="grid grid-cols-1 gap-6">
        <ErrorHandlingExamples />
      </div>
    </div>
  );
}
