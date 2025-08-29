"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PhoneField from "@/components/form-elements/phone/PhoneField";

export default function PhoneInputs() {
  const [phoneValues, setPhoneValues] = useState({
    basic: "",
    mobile: "(555) 123-4567",
    required: "",
    error: "(555) 000-0000",
    disabled: "(555) 555-5555",
    readOnly: "(555) 111-2222",
  });

  const [touchedFields, setTouchedFields] = useState<{
    [key: string]: boolean;
  }>({});

  const [errors, setErrors] = useState<{ [key: string]: string }>({
    error: "Invalid phone number format",
    required: "Phone number is required",
  });

  const handlePhoneChange = (field: string) => (value: string) => {
    setPhoneValues((prev) => ({ ...prev, [field]: value }));
    setTouchedFields((prev) => ({ ...prev, [field]: true }));

    // Clear errors when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <ComponentCard title="Phone Inputs">
      <div className="space-y-8">
        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PhoneField
              label="Basic Phone"
              value={phoneValues.basic}
              onChange={handlePhoneChange("basic")}
              placeholder="Enter phone number"
              hint="Basic phone field with default icon"
            />

            <PhoneField
              label="Phone with Copy"
              value={phoneValues.mobile}
              onChange={handlePhoneChange("mobile")}
              placeholder="Enter phone number"
              copyable={true}
              hint="Click the copy icon to copy the number"
            />
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            States and Validation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PhoneField
              label="Required Phone"
              value={phoneValues.required}
              onChange={handlePhoneChange("required")}
              placeholder="Enter phone number"
              required={true}
              error={
                touchedFields.required && !phoneValues.required
                  ? errors.required
                  : false
              }
              hint="Required field with validation"
            />

            <PhoneField
              label="Error State"
              value={phoneValues.error}
              onChange={handlePhoneChange("error")}
              placeholder="Enter phone number"
              error={errors.error}
              hint="Field with error state"
            />
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Special States
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PhoneField
              label="Read-only Field"
              value={phoneValues.readOnly}
              onChange={handlePhoneChange("readOnly")}
              readOnly={true}
              copyable={true}
              hint="Read-only field with copy functionality"
            />

            <PhoneField
              label="Disabled Field"
              value={phoneValues.disabled}
              onChange={handlePhoneChange("disabled")}
              disabled={true}
              hint="Disabled state"
            />
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
