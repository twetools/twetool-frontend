"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Select from "@/components/form-elements/select/Select";

export default function SelectFormPatterns() {
  const [contactSource, setContactSource] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [status, setStatus] = useState<string>("active");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touchedFields, setTouchedFields] = useState<{
    [key: string]: boolean;
  }>({});

  // Sample data matching what would come from forms
  const contactSources = [
    { value: "1", label: "Website" },
    { value: "2", label: "Referral" },
    { value: "3", label: "Social Media" },
    { value: "4", label: "Cold Call" },
    { value: "5", label: "Email Campaign" },
  ];

  const roles = [
    { value: "1", label: "Lead" },
    { value: "2", label: "Prospect" },
    { value: "3", label: "Client" },
    { value: "4", label: "Partner" },
  ];

  const statuses = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "pending", label: "Pending" },
  ];

  const handleContactSourceChange = (value: string) => {
    setContactSource(value);
    setTouchedFields((prev) => ({ ...prev, contact_source: true }));
    if (errors.contact_source) {
      setErrors((prev) => ({ ...prev, contact_source: "" }));
    }
  };

  const handleRoleChange = (value: string) => {
    setRole(value);
    setTouchedFields((prev) => ({ ...prev, role: true }));
    if (errors.role) {
      setErrors((prev) => ({ ...prev, role: "" }));
    }
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
    setTouchedFields((prev) => ({ ...prev, status: true }));
    if (errors.status) {
      setErrors((prev) => ({ ...prev, status: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!contactSource?.trim()) {
      newErrors.contact_source = "Contact source is required";
    }

    if (!role?.trim()) {
      newErrors.role = "Role is required";
    }

    if (!status?.trim()) {
      newErrors.status = "Status is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <ComponentCard title="Form Integration Patterns">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            These examples show Select components as they would appear in actual
            forms, with proper validation, state management, and user
            interaction patterns.
          </p>
          <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
            All Select components automatically include dropdown icons for
            visual consistency across forms
          </div>
        </div>

        {/* Form Fields Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Form Fields with Validation
          </h4>
          <div className="space-y-4">
            {/* Contact Source - Required with validation */}
            <Select
              id="contact_source"
              name="contact_source"
              label="Contact Source"
              options={contactSources}
              placeholder="Select contact source"
              value={contactSource}
              onChange={handleContactSourceChange}
              error={errors.contact_source}
              required={true}
              hasValue={!!contactSource?.trim()}
              hasBeenTouched={touchedFields.contact_source}
              hint="How did this contact find you?"
            />

            {/* Role - Required with validation */}
            <Select
              id="role"
              name="role"
              label="Role"
              options={roles}
              placeholder="Select a role"
              value={role}
              onChange={handleRoleChange}
              error={errors.role}
              required={true}
              hasValue={!!role?.trim()}
              hasBeenTouched={touchedFields.role}
            />

            {/* Status - Pre-selected default */}
            <Select
              id="status"
              name="status"
              label="Status"
              options={statuses}
              placeholder="Select status"
              value={status}
              onChange={handleStatusChange}
              error={errors.status}
              required={true}
              hasValue={!!status?.trim()}
              hasBeenTouched={touchedFields.status}
              hint="Current status of this contact"
            />
          </div>
        </div>

        {/* Form Actions and State */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Form Actions and State
          </h4>

          {/* Action button to demonstrate validation */}
          <div className="space-y-4">
            <button
              type="button"
              onClick={validateForm}
              className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/20 text-sm font-medium"
            >
              Validate Form
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Click to test validation on required fields
            </p>

            {/* Form state display */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Current Form State:
              </h5>
              <pre className="text-xs text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                {`Contact Source: ${contactSource || "Not selected"}
Role: ${role || "Not selected"}
Status: ${status}
Touched: ${JSON.stringify(touchedFields)}
Errors: ${JSON.stringify(errors)}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
