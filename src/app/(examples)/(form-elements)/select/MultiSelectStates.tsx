"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import MultiSelect from "@/components/form-elements/select/MultiSelect";

interface Option {
  value: string;
  text: string;
  selected: boolean;
}

export default function MultiSelectStates() {
  const [errorSelected, setErrorSelected] = useState<string[]>([]);
  const [disabledSelected, setDisabledSelected] = useState<string[]>([
    "active",
    "pending",
  ]);
  const [requiredSelected, setRequiredSelected] = useState<string[]>([]);
  const [validSelected, setValidSelected] = useState<string[]>([
    "option1",
    "option3",
  ]);
  const [isTouched, setIsTouched] = useState<boolean>(false);

  // Sample options data
  const options: Option[] = [
    { value: "option1", text: "Option 1", selected: false },
    { value: "option2", text: "Option 2", selected: false },
    { value: "option3", text: "Option 3", selected: false },
    { value: "option4", text: "Option 4", selected: false },
  ];

  const statuses: Option[] = [
    { value: "active", text: "Active", selected: false },
    { value: "inactive", text: "Inactive", selected: false },
    { value: "pending", text: "Pending", selected: false },
    { value: "suspended", text: "Suspended", selected: false },
  ];

  const departments: Option[] = [
    { value: "hr", text: "Human Resources", selected: false },
    { value: "finance", text: "Finance", selected: false },
    { value: "engineering", text: "Engineering", selected: false },
    { value: "marketing", text: "Marketing", selected: false },
    { value: "sales", text: "Sales", selected: false },
  ];

  const handleRequiredChange = (selected: string[]) => {
    setRequiredSelected(selected);
    setIsTouched(true);
  };

  return (
    <ComponentCard title="MultiSelect States & Validation">
      <div className="space-y-8">
        {/* Error States */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Error & Validation States
          </h4>
          <div className="space-y-6">
            <MultiSelect
              label="Error State"
              id="error-multiselect"
              options={options}
              defaultSelected={errorSelected}
              onChange={setErrorSelected}
              error="At least one option is required"
              required={true}
              hasValue={errorSelected.length > 0}
              hasBeenTouched={true}
              placeholder="Select options to clear error"
            />

            <MultiSelect
              label="Required Field"
              id="required-multiselect"
              options={departments}
              defaultSelected={requiredSelected}
              onChange={handleRequiredChange}
              error={
                isTouched && requiredSelected.length === 0
                  ? "Please select at least one department"
                  : ""
              }
              required={true}
              hasValue={requiredSelected.length > 0}
              hasBeenTouched={isTouched}
              placeholder="Select departments"
              hint="Required field - validation triggers after first interaction"
            />

            <MultiSelect
              label="Valid Selection"
              id="valid-multiselect"
              options={options}
              defaultSelected={validSelected}
              onChange={setValidSelected}
              hasValue={validSelected.length > 0}
              hasBeenTouched={true}
              placeholder="Valid state"
              hint="This selection is valid"
            />
          </div>
        </div>

        {/* Disabled State */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Disabled State
          </h4>
          <MultiSelect
            label="Disabled MultiSelect"
            id="disabled-multiselect"
            options={statuses}
            defaultSelected={disabledSelected}
            onChange={setDisabledSelected}
            disabled={true}
            placeholder="Disabled multiselect"
            hint="This field is disabled and cannot be modified"
          />
        </div>

        {/* Current State Display */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Current States
          </h4>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
              <div>
                <strong>Error Selected:</strong>{" "}
                {errorSelected.length
                  ? `[${errorSelected.join(", ")}]`
                  : "None"}
              </div>
              <div>
                <strong>Required Selected:</strong>{" "}
                {requiredSelected.length
                  ? `[${requiredSelected.join(", ")}]`
                  : "None"}
              </div>
              <div>
                <strong>Valid Selected:</strong>{" "}
                {validSelected.length
                  ? `[${validSelected.join(", ")}]`
                  : "None"}
              </div>
              <div>
                <strong>Disabled Selected:</strong>{" "}
                {disabledSelected.length
                  ? `[${disabledSelected.join(", ")}]`
                  : "None"}
              </div>
              <div className="pt-2 text-gray-600 dark:text-gray-400">
                Interact with the multiselects above to see state changes
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
