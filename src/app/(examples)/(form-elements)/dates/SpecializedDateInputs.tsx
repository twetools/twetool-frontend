"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import DateField from "@/components/form-elements/dates/DateField";
import BirthDateField from "@/components/form-elements/dates/BirthDateField";
import CreatedDateField from "@/components/form-elements/dates/CreatedDateField";
import LastContactDateField from "@/components/form-elements/dates/LastContactDateField";
import LastUpdatedDate from "@/components/form-elements/dates/LastUpdatedDate";

export default function SpecializedDateInputs() {
  const [lastContactDate, setLastContactDate] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [lastUpdatedDate, setLastUpdatedDate] = useState<string>("");
  const [isNewRecord, setIsNewRecord] = useState<boolean>(true);

  // Simulate existing record data
  const existingCreatedDate = "2025-07-01";
  const existingUpdatedDate = "2025-07-15";

  return (
    <ComponentCard title="Specialized Date Components">
      <div className="space-y-8">
        <BirthDateField
          value={birthDate}
          onChange={setBirthDate}
          className="sm:col-span-1"
        />

        <LastContactDateField
          value={lastContactDate}
          onChange={setLastContactDate}
          className="sm:col-span-1"
        />
      </div>
    </ComponentCard>
  );
}
