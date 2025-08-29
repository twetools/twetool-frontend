"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import FileInput from "@/components/form-elements/input/FileInput";

interface JobApplicationForm {
  resume: File | null;
  coverLetter: File | null;
  portfolio: File[];
  references: File | null;
}

export default function FileInputFormPatterns() {
  const [form, setForm] = useState<JobApplicationForm>({
    resume: null,
    coverLetter: null,
    portfolio: [],
    references: null,
  });

  const [errors, setErrors] = useState({
    resume: "",
    coverLetter: "",
    portfolio: "",
    references: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    resume: false,
    coverLetter: false,
    portfolio: false,
    references: false,
  });

  const validateFile = (file: File | null, field: string): string => {
    if (!file) {
      if (field === "resume") return "Resume is required";
      return "";
    }

    // File size validation
    const maxSize = field === "portfolio" ? 10 * 1024 * 1024 : 5 * 1024 * 1024; // 10MB for portfolio, 5MB for others
    if (file.size > maxSize) {
      return `File size must be less than ${maxSize / (1024 * 1024)}MB`;
    }

    // File type validation
    const allowedTypes: { [key: string]: string[] } = {
      resume: [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ],
      coverLetter: [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ],
      portfolio: ["application/pdf", "image/jpeg", "image/png", "image/gif"],
      references: [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ],
    };

    if (allowedTypes[field] && !allowedTypes[field].includes(file.type)) {
      return `Invalid file type for ${field}`;
    }

    return "";
  };

  const validatePortfolio = (files: File[]): string => {
    if (files.length > 5) {
      return "Maximum 5 portfolio files allowed";
    }

    for (const file of files) {
      const error = validateFile(file, "portfolio");
      if (error) return error;
    }

    return "";
  };

  const handleFileChange =
    (field: keyof JobApplicationForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      setTouchedFields((prev) => ({ ...prev, [field]: true }));

      if (field === "portfolio") {
        const fileArray = files ? Array.from(files) : [];
        setForm((prev) => ({ ...prev, portfolio: fileArray }));

        const error = validatePortfolio(fileArray);
        setErrors((prev) => ({ ...prev, portfolio: error }));
      } else {
        const file = files?.[0] || null;
        setForm((prev) => ({ ...prev, [field]: file }));

        const error = validateFile(file, field);
        setErrors((prev) => ({ ...prev, [field]: error }));
      }
    };

  const formatFileList = (files: File[] | File | null): string => {
    if (!files) return "None";
    if (files instanceof File) return files.name;
    if (Array.isArray(files)) {
      return files.length > 0 ? files.map((f) => f.name).join(", ") : "None";
    }
    return "None";
  };

  const isFormValid = (): boolean => {
    return (
      Object.values(errors).every((error) => !error) &&
      form.resume !== null &&
      touchedFields.resume
    );
  };

  return (
    <ComponentCard title="File Input Form Patterns">
      <div className="space-y-8">
        {/* Real-world Form Example */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Job Application Form
          </h4>
          <div className="space-y-6">
            {/* Resume Upload - Required */}
            <div>
              <FileInput
                label="Resume/CV"
                name="resume"
                accept=".pdf,.doc,.docx"
                required={true}
                error={errors.resume}
                hasValue={!!form.resume}
                hasBeenTouched={touchedFields.resume}
                onChange={handleFileChange("resume")}
                hint="Required. PDF, DOC, or DOCX format. Maximum 5MB."
              />
            </div>

            {/* Cover Letter - Optional */}
            <div>
              <FileInput
                label="Cover Letter"
                name="cover-letter"
                accept=".pdf,.doc,.docx"
                error={errors.coverLetter}
                hasValue={!!form.coverLetter}
                hasBeenTouched={touchedFields.coverLetter}
                onChange={handleFileChange("coverLetter")}
                hint="Optional. PDF, DOC, or DOCX format. Maximum 5MB."
              />
            </div>

            {/* Portfolio - Multiple Files */}
            <div>
              <FileInput
                label="Portfolio"
                name="portfolio"
                accept=".pdf,image/*"
                multiple={true}
                error={errors.portfolio}
                hasValue={form.portfolio.length > 0}
                hasBeenTouched={touchedFields.portfolio}
                onChange={handleFileChange("portfolio")}
                hint="Optional. Images or PDF files. Maximum 5 files, 10MB each."
              />
            </div>

            {/* References */}
            <div>
              <FileInput
                label="References"
                name="references"
                accept=".pdf,.doc,.docx"
                error={errors.references}
                hasValue={!!form.references}
                hasBeenTouched={touchedFields.references}
                onChange={handleFileChange("references")}
                hint="Optional. Contact information for references. PDF, DOC, or DOCX format."
              />
            </div>
          </div>
        </div>

        {/* Form State Information */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Form State
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
            <div className="space-y-2">
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Resume:
                </strong>{" "}
                {formatFileList(form.resume)}
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Cover Letter:
                </strong>{" "}
                {formatFileList(form.coverLetter)}
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  Portfolio:
                </strong>{" "}
                {formatFileList(form.portfolio)} ({form.portfolio.length} files)
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  References:
                </strong>{" "}
                {formatFileList(form.references)}
              </div>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
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
                  Size Validation:
                </strong>{" "}
                Validate file sizes in JavaScript
              </li>
              <li>
                •{" "}
                <strong className="text-gray-900 dark:text-white">
                  User Feedback:
                </strong>{" "}
                Clear error messages and hints
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
                  Multiple Files:
                </strong>{" "}
                Support for single and multiple file selection
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
