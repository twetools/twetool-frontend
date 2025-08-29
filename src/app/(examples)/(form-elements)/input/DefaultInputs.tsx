"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import InputField from "@/components/form-elements/input/InputField";
import { UserIcon } from "@/icons";

export default function DefaultInputs() {
  const [basicInput, setBasicInput] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [creditCard, setCreditCard] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Simple email validation - only validates format if email is entered
  const validateEmail = (value: string) => {
    if (!value.trim()) {
      // Empty email is valid (not required)
      return "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? "" : "Please enter a valid email address";
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Validate on change
    const error = validateEmail(value);
    setErrors((prev) => ({ ...prev, email: error }));
  };

  return (
    <ComponentCard title="Default Inputs">
      <div className="space-y-6">
        {/* Basic InputField Usage */}
        <InputField
          label="Input"
          id="basic-input"
          value={basicInput}
          onChange={(e) => setBasicInput(e.target.value)}
        />
        <InputField
          label="Input with Placeholder"
          id="placeholder-input"
          placeholder="Basic input field"
          value={basicInput}
          onChange={(e) => setBasicInput(e.target.value)}
        />

        {/* InputField with Icon */}

        <InputField
          label="Input with Custom Icon"
          id="icon-input"
          placeholder="Input with custom icon"
          value={basicInput}
          onChange={(e) => setBasicInput(e.target.value)}
          leftIcon={<UserIcon className="h-5 w-5" />}
        />
      </div>
    </ComponentCard>
  );
}
