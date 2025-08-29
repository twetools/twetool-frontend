"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import DateField from "@/components/form-elements/dates/DateField";

export default function DateInputs() {
  const [basicDate, setBasicDate] = useState<string>("");
  const [mmddDate, setMmddDate] = useState<string>("");
  const [ddmmDate, setDdmmDate] = useState<string>("");
  const [isoDate, setIsoDate] = useState<string>("");
  const [autoFormatDisabled, setAutoFormatDisabled] = useState<string>("");

  return (
    <ComponentCard title="Basic Date Inputs">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <div className="space-y-4">
            <DateField
              label="Standard Date Field"
              value={basicDate}
              onChange={setBasicDate}
              placeholder="MM/DD/YYYY"
            />

            <DateField
              label="Read-only Date"
              value="2025-07-15"
              readonly={true}
              placeholder="Cannot be changed"
            />
          </div>
        </div>

        {/* Auto-formatting Examples */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Auto-formatting Features
          </h4>
          <div className="space-y-4">
            <DateField
              label="MM/DD/YYYY Format (Auto-formatting enabled)"
              value={mmddDate}
              onChange={setMmddDate}
              dateFormat="MM/DD/YYYY"
              placeholder="Type: 07252025 → 07/25/2025"
            />

            <DateField
              label="DD/MM/YYYY Format (Auto-formatting enabled)"
              value={ddmmDate}
              onChange={setDdmmDate}
              dateFormat="DD/MM/YYYY"
              placeholder="Type: 25072025 → 25/07/2025"
            />

            <DateField
              label="YYYY-MM-DD Format (Auto-formatting enabled)"
              value={isoDate}
              onChange={setIsoDate}
              dateFormat="YYYY-MM-DD"
              placeholder="Type: 20250725 → 2025-07-25"
            />

            <DateField
              label="Auto-formatting Disabled"
              value={autoFormatDisabled}
              onChange={setAutoFormatDisabled}
              autoFormat={false}
              placeholder="Manual typing only"
            />
          </div>
        </div>

        {/* Current Values Display */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Current Values (always YYYY-MM-DD format)
          </h4>
          <div className="space-y-2">
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <div>
                <strong>Basic:</strong> {basicDate || "Empty"}
              </div>
              <div>
                <strong>MM/DD/YYYY:</strong> {mmddDate || "Empty"}
              </div>
              <div>
                <strong>DD/MM/YYYY:</strong> {ddmmDate || "Empty"}
              </div>
              <div>
                <strong>YYYY-MM-DD:</strong> {isoDate || "Empty"}
              </div>
              <div>
                <strong>No Auto-format:</strong> {autoFormatDisabled || "Empty"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
