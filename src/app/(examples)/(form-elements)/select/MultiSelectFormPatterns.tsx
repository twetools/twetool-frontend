"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import MultiSelect from "@/components/form-elements/select/MultiSelect";

interface Option {
  value: string;
  text: string;
  selected: boolean;
}

export default function MultiSelectFormPatterns() {
  const [interests, setInterests] = useState<string[]>([]);
  const [permissions, setPermissions] = useState<string[]>(["read"]);
  const [notifications, setNotifications] = useState<string[]>(["email"]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touchedFields, setTouchedFields] = useState<{
    [key: string]: boolean;
  }>({});

  // Sample data matching what would come from forms
  const interestOptions: Option[] = [
    { value: "real-estate", text: "Real Estate Investment", selected: false },
    {
      value: "property-management",
      text: "Property Management",
      selected: false,
    },
    { value: "commercial", text: "Commercial Properties", selected: false },
    { value: "residential", text: "Residential Properties", selected: false },
    { value: "development", text: "Property Development", selected: false },
    { value: "flipping", text: "House Flipping", selected: false },
    { value: "rental", text: "Rental Properties", selected: false },
  ];

  const permissionOptions: Option[] = [
    { value: "read", text: "View Properties", selected: false },
    { value: "write", text: "Edit Properties", selected: false },
    { value: "delete", text: "Delete Properties", selected: false },
    { value: "admin", text: "Admin Access", selected: false },
    { value: "reports", text: "Generate Reports", selected: false },
    { value: "manage-users", text: "Manage Users", selected: false },
  ];

  const notificationOptions: Option[] = [
    { value: "email", text: "Email Notifications", selected: false },
    { value: "sms", text: "SMS Alerts", selected: false },
    { value: "push", text: "Push Notifications", selected: false },
    { value: "weekly-digest", text: "Weekly Digest", selected: false },
    { value: "market-updates", text: "Market Updates", selected: false },
    { value: "new-listings", text: "New Listings", selected: false },
  ];

  const handleInterestsChange = (selected: string[]) => {
    setInterests(selected);
    setTouchedFields((prev) => ({ ...prev, interests: true }));
    if (errors.interests) {
      setErrors((prev) => ({ ...prev, interests: "" }));
    }
  };

  const handlePermissionsChange = (selected: string[]) => {
    setPermissions(selected);
    setTouchedFields((prev) => ({ ...prev, permissions: true }));
    if (errors.permissions) {
      setErrors((prev) => ({ ...prev, permissions: "" }));
    }
  };

  const handleNotificationsChange = (selected: string[]) => {
    setNotifications(selected);
    setTouchedFields((prev) => ({ ...prev, notifications: true }));
    if (errors.notifications) {
      setErrors((prev) => ({ ...prev, notifications: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (interests.length === 0) {
      newErrors.interests = "Please select at least one area of interest";
    }

    if (permissions.length === 0) {
      newErrors.permissions = "At least one permission must be selected";
    }

    if (notifications.length === 0) {
      newErrors.notifications = "Please select your notification preferences";
    }

    setErrors(newErrors);
    setTouchedFields({
      interests: true,
      permissions: true,
      notifications: true,
    });

    return Object.keys(newErrors).length === 0;
  };

  return (
    <ComponentCard title="Form Integration Patterns">
      <div className="space-y-8">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          These examples show MultiSelect components as they would appear in
          actual forms, with proper validation, state management, and user
          interaction patterns.
        </div>

        {/* User Interests - Required with validation */}
        <MultiSelect
          id="interests"
          name="interests"
          label="Areas of Interest"
          options={interestOptions}
          defaultSelected={interests}
          onChange={handleInterestsChange}
          error={errors.interests}
          required={true}
          hasValue={interests.length > 0}
          hasBeenTouched={touchedFields.interests}
          placeholder="Select your areas of interest"
          hint="Choose all areas that interest you"
        />

        {/* User Permissions - Required with default */}
        <MultiSelect
          id="permissions"
          name="permissions"
          label="User Permissions"
          options={permissionOptions}
          defaultSelected={permissions}
          onChange={handlePermissionsChange}
          error={errors.permissions}
          required={true}
          hasValue={permissions.length > 0}
          hasBeenTouched={touchedFields.permissions}
          placeholder="Select user permissions"
          hint="View permission is pre-selected for all users"
        />

        {/* Notification Preferences - Optional with pre-selected */}
        <MultiSelect
          id="notifications"
          name="notifications"
          label="Notification Preferences"
          options={notificationOptions}
          defaultSelected={notifications}
          onChange={handleNotificationsChange}
          error={errors.notifications}
          required={false}
          hasValue={notifications.length > 0}
          hasBeenTouched={touchedFields.notifications}
          placeholder="Choose notification types"
          hint="Select how you'd like to receive updates"
        />

        {/* Action button to demonstrate validation */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={validateForm}
            className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/20 text-sm font-medium"
          >
            Validate Form
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Click to test validation on required fields
          </p>
        </div>

        {/* Form state display */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            Current Form State:
          </h4>
          <pre className="text-xs text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
            {`Interests: ${
              interests.length ? `[${interests.join(", ")}]` : "None"
            }
Permissions: ${permissions.length ? `[${permissions.join(", ")}]` : "None"}
Notifications: ${
              notifications.length ? `[${notifications.join(", ")}]` : "None"
            }
Touched: ${JSON.stringify(touchedFields)}
Errors: ${JSON.stringify(errors)}`}
          </pre>
        </div>

        {/* Usage Guidelines */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="text-sm font-medium text-blue-900 dark:text-blue-300 mb-2">
            MultiSelect Usage Guidelines:
          </h4>
          <div className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
            <div>✓ Use for selecting multiple related options from a list</div>
            <div>✓ Ideal for tags, categories, permissions, or preferences</div>
            <div>✓ Provide clear labels and helpful hints</div>
            <div>
              ✓ Show validation errors immediately after user interaction
            </div>
            <div>
              ✓ Consider pre-selecting sensible defaults where appropriate
            </div>
            <div>✓ Use disabled state for read-only scenarios</div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
