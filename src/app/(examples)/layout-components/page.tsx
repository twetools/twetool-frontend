"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ModalExamples from "./ModalExamples";
import CardExamples from "./CardExamples";

export default function LayoutComponents() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Layout Components" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ModalExamples />
        </div>
        <div className="space-y-6">
          <CardExamples />
        </div>
      </div>
    </div>
  );
}
