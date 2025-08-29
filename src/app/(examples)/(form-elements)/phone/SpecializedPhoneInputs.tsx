"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import MobilePhoneField from "@/components/form-elements/phone/MobilePhoneField";
import HomePhoneField from "@/components/form-elements/phone/HomePhoneField";
import WorkPhoneField from "@/components/form-elements/phone/WorkPhoneField";

export default function PhoneInputs() {
  const [phoneValues, setPhoneValues] = useState({
    basic: "",
    mobile: "(555) 123-4567",
    home: "",
    work: "(555) 987-6543",
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
    <ComponentCard title="Specialized Phone Inputs">
      <div className="space-y-8">
        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MobilePhoneField
              label="Mobile Phone"
              value={phoneValues.mobile}
              onChange={handlePhoneChange("mobile")}
              placeholder="(555) 123-4567"
              hint="Mobile phone with device icon"
            />
            <HomePhoneField
              label="Home Phone"
              value={phoneValues.home}
              onChange={handlePhoneChange("home")}
              placeholder="(555) 123-4567"
              hint="Home phone with house icon"
            />
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            States and Validation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <WorkPhoneField
              label="Work Phone"
              value={phoneValues.work}
              onChange={handlePhoneChange("work")}
              placeholder="(555) 123-4567"
              hint="Work phone with briefcase icon"
            />
            <MobilePhoneField
              label="Required Mobile Phone"
              value={phoneValues.required}
              onChange={handlePhoneChange("required")}
              placeholder="(555) 123-4567"
              required={true}
              error={
                touchedFields.required && !phoneValues.required
                  ? errors.required
                  : false
              }
              hint="Required field with validation"
            />
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Special States
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <WorkPhoneField
              label="Read-only Work Phone"
              value={phoneValues.readOnly}
              onChange={handlePhoneChange("readOnly")}
              readOnly={true}
              copyable={true}
              hint="Read-only field with copy functionality"
            />
            <HomePhoneField
              label="Disabled Home Phone"
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
