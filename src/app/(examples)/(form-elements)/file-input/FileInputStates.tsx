"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import FileInput from "@/components/form-elements/input/FileInput";

export default function FileInputStates() {
  const [formState, setFormState] = useState({
    requiredFile: null as File | null,
    optionalFile: null as File | null,
  });

  const [errors, setErrors] = useState({
    requiredFile: "",
    optionalFile: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    requiredFile: false,
    optionalFile: false,
  });

  const handleFileChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null;

      setFormState((prev) => ({ ...prev, [field]: file }));
      setTouchedFields((prev) => ({ ...prev, [field]: true }));

      // Validate required field
      if (field === "requiredFile") {
        if (!file) {
          setErrors((prev) => ({
            ...prev,
            requiredFile: "This field is required",
          }));
        } else {
          setErrors((prev) => ({ ...prev, requiredFile: "" }));
        }
      }

      // File size validation for optional field
      if (field === "optionalFile" && file) {
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
          setErrors((prev) => ({
            ...prev,
            optionalFile: "File size must be less than 5MB",
          }));
        } else {
          setErrors((prev) => ({ ...prev, optionalFile: "" }));
        }
      }
    };

  const getCurrentState = () => {
    const states = [];

    if (touchedFields.requiredFile) {
      if (errors.requiredFile) {
        states.push("Required File: Error");
      } else if (formState.requiredFile) {
        states.push("Required File: Valid");
      }
    } else {
      states.push("Required File: Untouched");
    }

    if (touchedFields.optionalFile) {
      if (errors.optionalFile) {
        states.push("Optional File: Error");
      } else if (formState.optionalFile) {
        states.push("Optional File: Valid");
      } else {
        states.push("Optional File: Empty (Valid)");
      }
    } else {
      states.push("Optional File: Untouched");
    }

    return states.join(", ");
  };

  return (
    <ComponentCard title="File Input States">
      <div className="space-y-8">
        {/* States and Validation Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            States and Validation
          </h4>
          <div className="space-y-6">
            {/* Required Field with Error */}
            <div>
              <FileInput
                label="Required File Upload"
                name="required-file"
                required={true}
                error={errors.requiredFile}
                hasValue={!!formState.requiredFile}
                hasBeenTouched={touchedFields.requiredFile}
                onChange={handleFileChange("requiredFile")}
                hint="This field is required. Please select a file."
              />
            </div>

            {/* Optional Field with Size Validation */}
            <div>
              <FileInput
                label="Optional File Upload"
                name="optional-file"
                error={errors.optionalFile}
                hasValue={!!formState.optionalFile}
                hasBeenTouched={touchedFields.optionalFile}
                onChange={handleFileChange("optionalFile")}
                hint="Maximum file size: 5MB"
              />
            </div>

            {/* Disabled State */}
            <div>
              <FileInput
                label="Disabled File Upload"
                name="disabled-file"
                disabled={true}
                hint="This field is currently disabled"
              />
            </div>
          </div>
        </div>

        {/* Common Use Cases Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Common Use Cases
          </h4>
          <div className="space-y-6">
            {/* Profile Photo Upload */}
            <div>
              <FileInput
                label="Profile Photo"
                name="profile-photo"
                accept="image/jpeg,image/png,image/gif"
                hint="Accepted formats: JPG, PNG, GIF. Maximum size: 2MB"
              />
            </div>

            {/* Document Upload */}
            <div>
              <FileInput
                label="Resume/CV"
                name="resume"
                accept=".pdf,.doc,.docx"
                required={true}
                hint="Upload your resume in PDF, DOC, or DOCX format"
              />
            </div>

            {/* Bulk File Upload */}
            <div>
              <FileInput
                label="Project Files"
                name="project-files"
                multiple={true}
                hint="Select multiple files for your project"
              />
            </div>
          </div>
        </div>

        {/* Current State Display */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Current Form State
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
            <div className="space-y-1">
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Current State:
                </strong>{" "}
                {getCurrentState()}
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Required File:
                </strong>{" "}
                {formState.requiredFile?.name || "None selected"}
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Optional File:
                </strong>{" "}
                {formState.optionalFile?.name || "None selected"}
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Has Errors:
                </strong>{" "}
                {Object.values(errors).some((error) => error) ? "Yes" : "No"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
