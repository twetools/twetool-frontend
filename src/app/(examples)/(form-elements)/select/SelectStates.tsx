"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Select from "@/components/form-elements/select/Select";

export default function SelectStates() {
  const [errorSelect, setErrorSelect] = useState<string>("");
  const [disabledSelect, setDisabledSelect] = useState<string>("active");
  const [touchedSelect, setTouchedSelect] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);

  // Sample options data
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const statuses = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "pending", label: "Pending" },
  ];

  const handleTouchedSelectChange = (value: string) => {
    setTouchedSelect(value);
    setIsTouched(true);
  };

  return (
    <ComponentCard title="Select States & Validation">
      <div className="space-y-6">
        {/* Error and Disabled States */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Error and Disabled States
          </h4>
          <div className="space-y-4">
            <Select
              label="Error State"
              id="error-select"
              options={options}
              placeholder="Select with error"
              value={errorSelect}
              onChange={setErrorSelect}
              error="This field is required"
              required={true}
              hasValue={!!errorSelect?.trim()}
              hasBeenTouched={true}
            />

            <Select
              label="Disabled State"
              id="disabled-select"
              options={statuses}
              placeholder="Disabled select"
              value={disabledSelect}
              onChange={setDisabledSelect}
              disabled={true}
            />
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800 mt-2">
            Dropdown icons remain visible in all states (error, disabled,
            focused) for consistent UX
          </div>
        </div>

        {/* Validation and Success Examples */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Validation Examples
          </h4>
          <div className="space-y-4">
            <Select
              label="Validation Example"
              id="touched-select"
              options={options}
              placeholder="Select an option to see validation"
              value={touchedSelect}
              onChange={handleTouchedSelectChange}
              error={
                isTouched && !touchedSelect ? "Please select an option" : ""
              }
              required={true}
              hasValue={!!touchedSelect?.trim()}
              hasBeenTouched={isTouched}
              hint="Required field - validation triggers after first interaction"
            />

            <Select
              label="Valid Selection"
              id="success-select"
              options={options}
              placeholder="Valid state"
              value="option2"
              onChange={() => {}} // Read-only for demo
              hasValue={true}
              hasBeenTouched={true}
              hint="This selection is valid"
            />
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
