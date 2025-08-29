"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Dropzone from "@/components/form-elements/dropzone/Dropzone";

interface ProjectSubmissionForm {
  projectFiles: File[];
  documentation: File[];
  screenshots: File[];
  assets: File[];
}

export default function DropzoneFormPatterns() {
  const [form, setForm] = useState<ProjectSubmissionForm>({
    projectFiles: [],
    documentation: [],
    screenshots: [],
    assets: [],
  });

  const [errors, setErrors] = useState({
    projectFiles: "",
    documentation: "",
    screenshots: "",
    assets: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    projectFiles: false,
    documentation: false,
    screenshots: false,
    assets: false,
  });

  const validateFiles = (files: File[], field: string): string => {
    if (field === "projectFiles" && files.length === 0) {
      return "Project files are required";
    }

    // File count validation
    const maxCounts: { [key: string]: number } = {
      projectFiles: 10,
      documentation: 5,
      screenshots: 8,
      assets: 15,
    };

    if (files.length > maxCounts[field]) {
      return `Maximum ${maxCounts[field]} files allowed`;
    }

    // File size validation
    const maxSizes: { [key: string]: number } = {
      projectFiles: 50 * 1024 * 1024, // 50MB
      documentation: 10 * 1024 * 1024, // 10MB
      screenshots: 5 * 1024 * 1024, // 5MB
      assets: 20 * 1024 * 1024, // 20MB
    };

    const oversizedFiles = files.filter((file) => file.size > maxSizes[field]);
    if (oversizedFiles.length > 0) {
      return `Files too large: ${oversizedFiles.map((f) => f.name).join(", ")}`;
    }

    // File type validation for specific fields
    if (field === "screenshots") {
      const nonImageFiles = files.filter(
        (file) => !file.type.startsWith("image/")
      );
      if (nonImageFiles.length > 0) {
        return `Only image files allowed for screenshots`;
      }
    }

    return "";
  };

  const handleFileUpload =
    (field: keyof ProjectSubmissionForm) => (acceptedFiles: File[]) => {
      setForm((prev) => ({ ...prev, [field]: acceptedFiles }));
      setTouchedFields((prev) => ({ ...prev, [field]: true }));

      const error = validateFiles(acceptedFiles, field);
      setErrors((prev) => ({ ...prev, [field]: error }));
    };

  const formatFileList = (files: File[]): string => {
    if (files.length === 0) return "None";
    return `${files.length} files (${(
      files.reduce((sum, file) => sum + file.size, 0) /
      (1024 * 1024)
    ).toFixed(1)} MB total)`;
  };

  const isFormValid = (): boolean => {
    return (
      Object.values(errors).every((error) => !error) &&
      form.projectFiles.length > 0 &&
      touchedFields.projectFiles
    );
  };

  const getTotalFiles = (): number => {
    return Object.values(form).reduce(
      (total, files) => total + files.length,
      0
    );
  };

  const getTotalSize = (): string => {
    const totalBytes = Object.values(form)
      .flat()
      .reduce((sum, file) => sum + file.size, 0);
    return (totalBytes / (1024 * 1024)).toFixed(1);
  };

  return (
    <ComponentCard title="Dropzone Form Patterns">
      <div className="space-y-8">
        {/* Real-world Form Example */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Project Submission Form
          </h4>
          <div className="space-y-6">
            {/* Project Files - Required */}
            <div>
              <Dropzone
                label="Project Files"
                required={true}
                error={errors.projectFiles}
                hasValue={form.projectFiles.length > 0}
                hasBeenTouched={touchedFields.projectFiles}
                onDrop={handleFileUpload("projectFiles")}
                accept={{
                  "application/zip": [],
                  "application/x-rar-compressed": [],
                  "application/x-tar": [],
                  "text/plain": [],
                  "application/json": [],
                  "text/javascript": [],
                  "text/css": [],
                  "text/html": [],
                }}
                maxFiles={10}
                maxSize={50 * 1024 * 1024} // 50MB
                hint="Required. Upload your project files (ZIP, RAR, TAR, or source files). Max 10 files, 50MB each."
              />
            </div>

            {/* Documentation */}
            <div>
              <Dropzone
                label="Documentation"
                error={errors.documentation}
                hasValue={form.documentation.length > 0}
                hasBeenTouched={touchedFields.documentation}
                onDrop={handleFileUpload("documentation")}
                accept={{
                  "application/pdf": [],
                  "application/msword": [],
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                    [],
                  "text/markdown": [],
                  "text/plain": [],
                }}
                maxFiles={5}
                maxSize={10 * 1024 * 1024} // 10MB
                hint="Optional. Project documentation (PDF, DOC, DOCX, MD, TXT). Max 5 files, 10MB each."
              />
            </div>

            {/* Screenshots */}
            <div>
              <Dropzone
                label="Screenshots"
                error={errors.screenshots}
                hasValue={form.screenshots.length > 0}
                hasBeenTouched={touchedFields.screenshots}
                onDrop={handleFileUpload("screenshots")}
                accept={{
                  "image/png": [],
                  "image/jpeg": [],
                  "image/webp": [],
                  "image/gif": [],
                }}
                maxFiles={8}
                maxSize={5 * 1024 * 1024} // 5MB
                hint="Optional. Project screenshots (PNG, JPG, WebP, GIF). Max 8 files, 5MB each."
              />
            </div>

            {/* Assets */}
            <div>
              <Dropzone
                label="Additional Assets"
                error={errors.assets}
                hasValue={form.assets.length > 0}
                hasBeenTouched={touchedFields.assets}
                onDrop={handleFileUpload("assets")}
                accept={{}}
                maxFiles={15}
                maxSize={20 * 1024 * 1024} // 20MB
                hint="Optional. Any additional project assets. Max 15 files, 20MB each."
              />
            </div>
          </div>
        </div>

        {/* Form State Information */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Submission Summary
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
            <div className="space-y-2">
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Project Files:
                </strong>{" "}
                {formatFileList(form.projectFiles)}
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Documentation:
                </strong>{" "}
                {formatFileList(form.documentation)}
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Screenshots:
                </strong>{" "}
                {formatFileList(form.screenshots)}
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Assets:
                </strong>{" "}
                {formatFileList(form.assets)}
              </div>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
                <strong className="text-gray-900 dark:text-white">
                  Total Files:
                </strong>{" "}
                {getTotalFiles()}
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Total Size:
                </strong>{" "}
                {getTotalSize()} MB
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Form Valid:
                </strong>
                <span
                  className={`ml-1 ${
                    isFormValid()
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {isFormValid() ? "Yes" : "No"}
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Active Errors:
                </strong>{" "}
                {Object.entries(errors)
                  .filter(([_, error]) => error)
                  .map(([field, _]) => field)
                  .join(", ") || "None"}
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Best Practices Demonstrated
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-200 dark:border-blue-800">
            <ul className="space-y-1">
              <li>
                •{" "}
                <strong className="text-gray-900 dark:text-white">
                  File Type Validation:
                </strong>{" "}
                Restrict file types using accept attribute
              </li>
              <li>
                •{" "}
                <strong className="text-gray-900 dark:text-white">
                  Size Limits:
                </strong>{" "}
                Different size limits per field type
              </li>
              <li>
                •{" "}
                <strong className="text-gray-900 dark:text-white">
                  Count Limits:
                </strong>{" "}
                Maximum file count per upload area
              </li>
              <li>
                •{" "}
                <strong className="text-gray-900 dark:text-white">
                  User Feedback:
                </strong>{" "}
                Clear error messages and upload status
              </li>
              <li>
                •{" "}
                <strong className="text-gray-900 dark:text-white">
                  Progressive Enhancement:
                </strong>{" "}
                Works without JavaScript
              </li>
              <li>
                •{" "}
                <strong className="text-gray-900 dark:text-white">
                  Drag & Drop:
                </strong>{" "}
                Intuitive file upload experience
              </li>
              <li>
                •{" "}
                <strong className="text-gray-900 dark:text-white">
                  Form Integration:
                </strong>{" "}
                Proper validation and state management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
