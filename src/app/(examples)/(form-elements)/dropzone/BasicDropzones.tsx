"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Dropzone from "@/components/form-elements/dropzone/Dropzone";

export default function BasicDropzones() {
  const [uploadedFiles, setUploadedFiles] = useState<{
    images: File[];
    documents: File[];
    any: File[];
  }>({
    images: [],
    documents: [],
    any: [],
  });

  const handleFileUpload = (field: string) => (acceptedFiles: File[]) => {
    setUploadedFiles((prev) => ({ ...prev, [field]: acceptedFiles }));
  };

  const formatFileInfo = (files: File[]): string => {
    if (files.length === 0) return "No files uploaded";
    return files
      .map((file) => `${file.name} (${(file.size / 1024).toFixed(1)} KB)`)
      .join(", ");
  };

  return (
    <ComponentCard title="Basic Dropzones">
      <div className="space-y-8">
        {/* Basic Usage Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <div className="space-y-6">
            {/* Image Upload */}
            <div>
              <Dropzone
                label="Upload Images"
                onDrop={handleFileUpload("images")}
                accept={{
                  "image/png": [],
                  "image/jpeg": [],
                  "image/webp": [],
                  "image/svg+xml": [],
                }}
                multiple={true}
              />
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                <strong className="text-gray-900 dark:text-white">
                  Uploaded:
                </strong>{" "}
                {formatFileInfo(uploadedFiles.images)}
              </div>
            </div>

            {/* Document Upload */}
            <div>
              <Dropzone
                label="Upload Documents"
                onDrop={handleFileUpload("documents")}
                accept={{
                  "application/pdf": [],
                  "application/msword": [],
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                    [],
                  "text/plain": [],
                }}
                multiple={true}
              />
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                <strong className="text-gray-900 dark:text-white">
                  Uploaded:
                </strong>{" "}
                {formatFileInfo(uploadedFiles.documents)}
              </div>
            </div>

            {/* Any File Type */}
            <div>
              <Dropzone
                label="Upload Any Files"
                onDrop={handleFileUpload("any")}
                accept={{}}
                multiple={true}
              />
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                <strong className="text-gray-900 dark:text-white">
                  Uploaded:
                </strong>{" "}
                {formatFileInfo(uploadedFiles.any)}
              </div>
            </div>
          </div>
        </div>

        {/* File Restrictions Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            File Restrictions
          </h4>
          <div className="space-y-6">
            {/* Single File Only */}
            <div>
              <Dropzone
                label="Single File Upload"
                multiple={false}
                accept={{
                  "image/png": [],
                  "image/jpeg": [],
                }}
                hint="Only one file allowed. PNG or JPEG format."
              />
            </div>

            {/* Max 3 Files */}
            <div>
              <Dropzone
                label="Maximum 3 Files"
                maxFiles={3}
                accept={{
                  "image/*": [],
                }}
                hint="Maximum 3 image files allowed."
              />
            </div>

            {/* File Size Limit */}
            <div>
              <Dropzone
                label="Size Limited Upload"
                maxSize={1024 * 1024} // 1MB
                accept={{
                  "image/*": [],
                }}
                hint="Maximum file size: 1MB per file."
              />
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
