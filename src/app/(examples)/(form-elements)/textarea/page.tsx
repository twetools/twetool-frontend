"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import TextareaInputs from "./TextareaInputs";

export default function TextareaExamples() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Textarea Examples" />
      <div className="space-y-6">
        <TextareaInputs />
      </div>
    </div>
  );
}
