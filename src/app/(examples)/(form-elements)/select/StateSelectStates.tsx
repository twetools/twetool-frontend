"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import StateSelect from "@/components/form-elements/select/StateSelect";

export default function StateSelectStates() {
  const [normalState, setNormalState] = useState<string>("");
  const [errorState, setErrorState] = useState<string>("");
  const [disabledState] = useState<string>("TX");
  const [requiredState, setRequiredState] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touchedFields, setTouchedFields] = useState<{
    [key: string]: boolean;
  }>({});

  // Validation logic
  const validateRequired = (value: string, fieldName: string) => {
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, [fieldName]: "This field is required" }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, [fieldName]: "" }));
      return true;
    }
  };

  const handleRequiredChange = (value: string) => {
    setRequiredState(value);
    if (touchedFields.required) {
      validateRequired(value, "required");
    }
  };

  const handleRequiredBlur = () => {
    setTouchedFields((prev) => ({ ...prev, required: true }));
    validateRequired(requiredState, "required");
  };

  const handleErrorStateChange = (value: string) => {
    setErrorState(value);
    // Simulate validation error for demonstration
    if (value === "FL") {
      setErrors((prev) => ({
        ...prev,
        error: "Florida is not available for this service",
      }));
    } else {
      setErrors((prev) => ({ ...prev, error: "" }));
    }
  };

  return (
    <ComponentCard title="State Dropdown States">
      <div className="space-y-8">
        {/* Basic States */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic States
          </h4>
          <div className="space-y-4">
            <StateSelect
              label="Normal State"
              id="normal-state"
              placeholder="Select your state"
              value={normalState}
              onChange={setNormalState}
            />

            <StateSelect
              label="Disabled State"
              id="disabled-state"
              placeholder="Select your state"
              value={disabledState}
              onChange={() => {}} // No-op for disabled
              disabled={true}
            />

            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
              Disabled state is pre-set to Texas and cannot be changed
            </div>
          </div>
        </div>

        {/* Error States */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Error States
          </h4>
          <div className="space-y-4">
            <StateSelect
              label="State with Error"
              id="error-state"
              placeholder="Try selecting Florida"
              value={errorState}
              onChange={handleErrorStateChange}
              error={errors.error}
            />

            <div className="text-xs text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 p-2 rounded border border-orange-200 dark:border-orange-800">
              Try selecting Florida to see error validation in action
            </div>
          </div>
        </div>

        {/* Required Field Validation */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Required Field Validation
          </h4>
          <div className="space-y-4">
            <div>
              <StateSelect
                label="Required State"
                id="required-state"
                placeholder="This field is required"
                value={requiredState}
                onChange={handleRequiredChange}
                error={errors.required}
                required={true}
                hasValue={!!requiredState}
                hasBeenTouched={touchedFields.required}
              />
              <button
                type="button"
                onClick={handleRequiredBlur}
                className="mt-2 text-xs text-blue-600 dark:text-blue-400 underline"
              >
                Click to trigger validation
              </button>
            </div>

            <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
              Required fields show validation errors when empty and touched
            </div>
          </div>
        </div>

        {/* Hint and Help Text */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            With Hints and Help Text
          </h4>
          <div className="space-y-4">
            <StateSelect
              label="State with Hint"
              id="hint-state"
              placeholder="Select your primary state"
              onChange={() => {}}
              hint="Choose the state where your business is primarily located"
            />
          </div>
        </div>

        {/* Status Summary */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Current State Values
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 space-y-1">
            <div>
              Normal State:{" "}
              <span className="font-medium">
                {normalState || "Not selected"}
              </span>
            </div>
            <div>
              Error State:{" "}
              <span className="font-medium">
                {errorState || "Not selected"}
              </span>
            </div>
            <div>
              Disabled State:{" "}
              <span className="font-medium">{disabledState}</span> (Fixed)
            </div>
            <div>
              Required State:{" "}
              <span className="font-medium">
                {requiredState || "Not selected"}
              </span>
            </div>
            <div>
              Has Errors:{" "}
              <span className="font-medium">
                {Object.values(errors).some((error) => error) ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
