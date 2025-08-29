"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DefaultSelects from "./DefaultSelects";
import SelectStates from "./SelectStates";
import SelectFormPatterns from "./SelectFormPatterns";
import MultiSelectExamples from "./MultiSelectExamples";
import MultiSelectStates from "./MultiSelectStates";
import MultiSelectFormPatterns from "./MultiSelectFormPatterns";
import StateSelectExamples from "./StateSelectExamples";
import StateSelectStates from "./StateSelectStates";
import CountrySelectExamples from "./CountrySelectExamples";
import CountrySelectStates from "./CountrySelectStates";

export default function SelectElements() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Select Examples" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultSelects />
          <SelectFormPatterns />
          <MultiSelectExamples />
          <MultiSelectFormPatterns />
          <StateSelectExamples />
          <CountrySelectExamples />
        </div>
        <div className="space-y-6">
          <SelectStates />
          <MultiSelectStates />
          <StateSelectStates />
          <CountrySelectStates />
        </div>
      </div>
    </div>
  );
}
