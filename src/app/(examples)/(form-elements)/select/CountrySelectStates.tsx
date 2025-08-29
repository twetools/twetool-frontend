"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import CountrySelect from "@/components/form-elements/select/CountrySelect";

export default function CountrySelectStates() {
  const [normalCountry, setNormalCountry] = useState<string>("");
  const [errorCountry, setErrorCountry] = useState<string>("");
  const [disabledCountry] = useState<string>("US");
  const [requiredCountry, setRequiredCountry] = useState<string>("");
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
    setRequiredCountry(value);
    if (touchedFields.required) {
      validateRequired(value, "required");
    }
  };

  const handleRequiredBlur = () => {
    setTouchedFields((prev) => ({ ...prev, required: true }));
    validateRequired(requiredCountry, "required");
  };

  const handleErrorCountryChange = (value: string) => {
    setErrorCountry(value);
    // Simulate validation error for demonstration
    if (value === "CU") {
      setErrors((prev) => ({
        ...prev,
        error: "Cuba is not available for shipping",
      }));
    } else {
      setErrors((prev) => ({ ...prev, error: "" }));
    }
  };

  return (
    <ComponentCard title="Country Select States">
      <div className="space-y-8">
        {/* Basic States */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic States
          </h4>
          <div className="space-y-4">
            <CountrySelect
              label="Normal Country"
              id="normal-country"
              placeholder="Select your country"
              value={normalCountry}
              onChange={setNormalCountry}
            />

            <CountrySelect
              label="Disabled Country"
              id="disabled-country"
              placeholder="Select your country"
              value={disabledCountry}
              onChange={() => {}} // No-op for disabled
              disabled={true}
            />

            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
              Disabled country is pre-set to United States and cannot be changed
            </div>
          </div>
        </div>

        {/* Error States */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Error States
          </h4>
          <div className="space-y-4">
            <CountrySelect
              label="Country with Error"
              id="error-country"
              placeholder="Try selecting Cuba"
              value={errorCountry}
              onChange={handleErrorCountryChange}
              error={errors.error}
            />

            <div className="text-xs text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 p-2 rounded border border-orange-200 dark:border-orange-800">
              Try selecting Cuba to see error validation in action
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
              <CountrySelect
                label="Required Country"
                id="required-country"
                placeholder="This field is required"
                value={requiredCountry}
                onChange={handleRequiredChange}
                error={errors.required}
                required={true}
                hasValue={!!requiredCountry}
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
            <CountrySelect
              label="Country with Hint"
              id="hint-country"
              placeholder="Select your primary country"
              onChange={() => {}}
              hint="Choose the country where your business is primarily located"
            />
          </div>
        </div>

        {/* Popular Countries */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Popular Country Selections
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CountrySelect
              label="United States (Default)"
              id="us-country"
              placeholder="Select country"
              defaultValue="US"
              onChange={() => {}}
            />

            <CountrySelect
              label="Canada"
              id="ca-country"
              placeholder="Select country"
              defaultValue="CA"
              onChange={() => {}}
            />

            <CountrySelect
              label="United Kingdom"
              id="gb-country"
              placeholder="Select country"
              defaultValue="GB"
              onChange={() => {}}
            />

            <CountrySelect
              label="Australia"
              id="au-country"
              placeholder="Select country"
              defaultValue="AU"
              onChange={() => {}}
            />
          </div>
        </div>

        {/* Status Summary */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Current Country Values
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 space-y-1">
            <div>
              Normal Country:{" "}
              <span className="font-medium">
                {normalCountry || "Not selected"}
              </span>
            </div>
            <div>
              Error Country:{" "}
              <span className="font-medium">
                {errorCountry || "Not selected"}
              </span>
            </div>
            <div>
              Disabled Country:{" "}
              <span className="font-medium">{disabledCountry}</span> (Fixed)
            </div>
            <div>
              Required Country:{" "}
              <span className="font-medium">
                {requiredCountry || "Not selected"}
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
