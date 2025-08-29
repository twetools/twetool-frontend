"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Radio from "@/components/form-elements/input/Radio";

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = useState<string>("option2");
  const [selectedContact, setSelectedContact] = useState<string>("email");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleContactChange = (value: string) => {
    setSelectedContact(value);
  };

  return (
    <ComponentCard title="Radio Buttons">
      <div className="space-y-8">
        {/* Basic States */}
        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic States
          </h3>
          <div className="flex flex-wrap items-center gap-8">
            <Radio
              id="radio1"
              name="group1"
              value="option1"
              checked={selectedValue === "option1"}
              onChange={handleRadioChange}
              label="Default"
            />
            <Radio
              id="radio2"
              name="group1"
              value="option2"
              checked={selectedValue === "option2"}
              onChange={handleRadioChange}
              label="Selected"
            />
            <Radio
              id="radio3"
              name="group1"
              value="option3"
              checked={selectedValue === "option3"}
              onChange={handleRadioChange}
              label="Disabled"
              disabled={true}
            />
          </div>
        </div>

        {/* Real Use Case Example */}
        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Contact Preference
          </h3>
          <div className="flex flex-wrap items-center gap-6">
            <Radio
              id="contact1"
              name="contactGroup"
              value="email"
              checked={selectedContact === "email"}
              onChange={handleContactChange}
              label="Email"
            />
            <Radio
              id="contact2"
              name="contactGroup"
              value="phone"
              checked={selectedContact === "phone"}
              onChange={handleContactChange}
              label="Phone"
            />
            <Radio
              id="contact3"
              name="contactGroup"
              value="text"
              checked={selectedContact === "text"}
              onChange={handleContactChange}
              label="Text Message"
            />
          </div>
        </div>

        {/* Form Integration Example */}
        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Form Integration
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <strong>Selected Value:</strong> {selectedValue}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Contact Preference:</strong> {selectedContact}
            </p>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
