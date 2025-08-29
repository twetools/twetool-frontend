"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import FileInput from "@/components/form-elements/input/FileInput";

export default function BasicFileInputs() {
  const [selectedFiles, setSelectedFiles] = useState<{
    single: File | null;
    multiple: File[];
    images: File[];
  }>({
    single: null,
    multiple: [],
    images: [],
  });

  const handleFileChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files) return;

      if (field === "single") {
        setSelectedFiles((prev) => ({ ...prev, single: files[0] || null }));
      } else {
        const fileArray = Array.from(files);
        setSelectedFiles((prev) => ({ ...prev, [field]: fileArray }));
      }
    };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const displayFiles = (files: File[] | File | null): string => {
    if (!files) return "No files selected";
    if (files instanceof File)
      return `${files.name} (${formatFileSize(files.size)})`;
    if (Array.isArray(files) && files.length > 0) {
      return files
        .map((file) => `${file.name} (${formatFileSize(file.size)})`)
        .join(", ");
    }
    return "No files selected";
  };

  return (
    <ComponentCard title="Basic File Inputs">
      <div className="space-y-8">
        {/* Basic Usage Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <div className="space-y-6">
            {/* Single File Upload */}
            <div>
              <FileInput
                label="Upload File"
                name="single-file"
                onChange={handleFileChange("single")}
              />
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                <strong className="text-gray-900 dark:text-white">
                  Selected:
                </strong>{" "}
                {displayFiles(selectedFiles.single)}
              </div>
            </div>

            {/* Multiple Files Upload */}
            <div>
              <FileInput
                label="Upload Multiple Files"
                name="multiple-files"
                multiple={true}
                onChange={handleFileChange("multiple")}
              />
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                <strong className="text-gray-900 dark:text-white">
                  Selected:
                </strong>{" "}
                {displayFiles(selectedFiles.multiple)}
              </div>
            </div>

            {/* Image Files Only */}
            <div>
              <FileInput
                label="Upload Images"
                name="image-files"
                accept="image/*"
                multiple={true}
                onChange={handleFileChange("images")}
              />
              <div className="mt-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
                <strong className="text-gray-900 dark:text-white">
                  Selected:
                </strong>{" "}
                {displayFiles(selectedFiles.images)}
              </div>
            </div>
          </div>
        </div>

        {/* File Type Restrictions Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            File Type Restrictions
          </h4>
          <div className="space-y-6">
            {/* Documents Only */}
            <div>
              <FileInput
                label="Documents (.pdf, .doc, .docx)"
                name="documents"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
            </div>

            {/* Spreadsheets Only */}
            <div>
              <FileInput
                label="Spreadsheets (.xlsx, .csv)"
                name="spreadsheets"
                accept=".xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv"
              />
            </div>

            {/* Audio Files Only */}
            <div>
              <FileInput label="Audio Files" name="audio" accept="audio/*" />
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
