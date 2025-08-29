"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Dropzone from "@/components/form-elements/dropzone/Dropzone";

export default function DropzoneStates() {
  const [formState, setFormState] = useState({
    requiredFiles: [] as File[],
    optionalFiles: [] as File[],
  });

  const [errors, setErrors] = useState({
    requiredFiles: "",
    optionalFiles: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    requiredFiles: false,
    optionalFiles: false,
  });

  const handleFileUpload = (field: string) => (acceptedFiles: File[]) => {
    setFormState((prev) => ({ ...prev, [field]: acceptedFiles }));
    setTouchedFields((prev) => ({ ...prev, [field]: true }));

    // Validate required field
    if (field === "requiredFiles") {
      if (acceptedFiles.length === 0) {
        setErrors((prev) => ({
          ...prev,
          requiredFiles: "At least one file is required",
        }));
      } else {
        setErrors((prev) => ({ ...prev, requiredFiles: "" }));
      }
    }

    // File size validation for optional field
    if (field === "optionalFiles") {
      const maxSize = 2 * 1024 * 1024; // 2MB
      const oversizedFiles = acceptedFiles.filter(
        (file) => file.size > maxSize
      );
      if (oversizedFiles.length > 0) {
        setErrors((prev) => ({
          ...prev,
          optionalFiles: `Files too large: ${oversizedFiles
            .map((f) => f.name)
            .join(", ")}`,
        }));
      } else {
        setErrors((prev) => ({ ...prev, optionalFiles: "" }));
      }
    }
  };

  const getCurrentState = () => {
    const states = [];

    if (touchedFields.requiredFiles) {
      if (errors.requiredFiles) {
        states.push("Required Files: Error");
      } else if (formState.requiredFiles.length > 0) {
        states.push("Required Files: Valid");
      }
    } else {
      states.push("Required Files: Untouched");
    }

    if (touchedFields.optionalFiles) {
      if (errors.optionalFiles) {
        states.push("Optional Files: Error");
      } else if (formState.optionalFiles.length > 0) {
        states.push("Optional Files: Valid");
      } else {
        states.push("Optional Files: Empty (Valid)");
      }
    } else {
      states.push("Optional Files: Untouched");
    }

    return states.join(", ");
  };

  return (
    <ComponentCard title="Dropzone States">
      <div className="space-y-8">
        {/* States and Validation Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            States and Validation
          </h4>
          <div className="space-y-6">
            {/* Required Field with Error */}
            <div>
              <Dropzone
                label="Required File Upload"
                required={true}
                error={errors.requiredFiles}
                hasValue={formState.requiredFiles.length > 0}
                hasBeenTouched={touchedFields.requiredFiles}
                onDrop={handleFileUpload("requiredFiles")}
                accept={{
                  "image/*": [],
                  "application/pdf": [],
                }}
                hint="This field is required. Please upload at least one file."
              />
            </div>

            {/* Optional Field with Size Validation */}
            <div>
              <Dropzone
                label="Optional File Upload"
                error={errors.optionalFiles}
                hasValue={formState.optionalFiles.length > 0}
                hasBeenTouched={touchedFields.optionalFiles}
                onDrop={handleFileUpload("optionalFiles")}
                maxSize={2 * 1024 * 1024} // 2MB
                accept={{
                  "image/*": [],
                }}
                hint="Maximum file size: 2MB per file"
              />
            </div>

            {/* Disabled State */}
            <div>
              <Dropzone
                label="Disabled File Upload"
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
              <Dropzone
                label="Profile Photo"
                accept={{
                  "image/jpeg": [],
                  "image/png": [],
                }}
                multiple={false}
                maxSize={5 * 1024 * 1024} // 5MB
                hint="Upload your profile photo. JPG or PNG format, max 5MB."
              />
            </div>

            {/* Document Collection */}
            <div>
              <Dropzone
                label="Supporting Documents"
                accept={{
                  "application/pdf": [],
                  "application/msword": [],
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                    [],
                }}
                maxFiles={5}
                hint="Upload up to 5 supporting documents (PDF, DOC, DOCX)"
              />
            </div>

            {/* Media Gallery */}
            <div>
              <Dropzone
                label="Media Gallery"
                accept={{
                  "image/*": [],
                  "video/mp4": [],
                  "video/webm": [],
                }}
                hint="Upload images and videos for your gallery"
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
                  Required Files:
                </strong>{" "}
                {formState.requiredFiles.length} files
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Optional Files:
                </strong>{" "}
                {formState.optionalFiles.length} files
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
