"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import DateField from "@/components/form-elements/dates/DateField";

export default function DateInputs() {
  const [dateField, setDateField] = useState<string>("");

  return (
    <ComponentCard title="Dates">
      <div className="space-y-6">
        <DateField
          label="Date Field"
          value={dateField}
          onChange={setDateField}
        />
      </div>
    </ComponentCard>
  );
}
