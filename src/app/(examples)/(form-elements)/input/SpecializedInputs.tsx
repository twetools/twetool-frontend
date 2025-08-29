"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import EmailField from "@/components/form-elements/input/EmailField";
import NameField from "@/components/form-elements/input/NameField";
import CreditCardField from "@/components/form-elements/input/CreditCardField";
import WebsiteField from "@/components/form-elements/input/WebsiteField";
import PasswordField from "@/components/form-elements/input/PasswordField";
import TimeField from "@/components/form-elements/input/TimeField";

export default function SpecializedInputs() {
  const [website, setWebsite] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [creditCard, setCreditCard] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [time24, setTime24] = useState<string>("");
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

  // Simple website validation - only validates format if website is entered
  const validateWebsite = (value: string) => {
    if (!value.trim()) {
      // Empty website is valid (not required)
      return "";
    }

    const websiteRegex =
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    return websiteRegex.test(value) ? "" : "Please enter a valid website URL";
  };

  // Simple password validation - only validates format if password is entered
  const validatePassword = (value: string) => {
    if (!value.trim()) {
      // Empty password is valid (not required)
      return "";
    }

    if (value.length < 6) {
      return "Password must be at least 6 characters";
    }

    return "";
  };

  // Simple time validation - only validates format if time is entered
  const validateTime = (value: string, format24Hour: boolean = false) => {
    if (!value.trim()) {
      // Empty time is valid (not required)
      return "";
    }

    if (format24Hour) {
      // For 24-hour format using HTML5 time input, value is in HH:MM format
      const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
      if (!timeRegex.test(value.trim())) {
        return "Please select a valid time";
      }
    } else {
      // For 12-hour format, allow partial input and AM/PM
      const timeAmPmRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;
      const timeOnlyRegex = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/;

      if (
        !timeAmPmRegex.test(value.trim()) &&
        !timeOnlyRegex.test(value.trim())
      ) {
        return "Please enter time in HH:MM AM/PM format";
      }
    }

    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Validate on change
    const error = validateEmail(value);
    setErrors((prev) => ({ ...prev, email: error }));
  };

  const handleWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWebsite(value);

    // Validate on change
    const error = validateWebsite(value);
    setErrors((prev) => ({ ...prev, website: error }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    // Validate on change
    const error = validatePassword(value);
    setErrors((prev) => ({ ...prev, password: error }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTime(value);

    // Validate on change
    const error = validateTime(value, false); // 12-hour format
    setErrors((prev) => ({ ...prev, time: error }));
  };

  const handleTime24Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTime24(value);

    // Validate on change
    const error = validateTime(value, true); // 24-hour format
    setErrors((prev) => ({ ...prev, time24: error }));
  };

  return (
    <ComponentCard title="Specialized Inputs">
      <div className="space-y-6">
        <NameField
          label="Full Name"
          id="name-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="NameField"
        />

        <EmailField
          label="Email Address"
          id="email-field"
          value={email}
          onChange={handleEmailChange}
          error={errors.email}
          placeholder="Validates format only if entered - not required"
          hint="Valid format required only if you enter an email"
        />

        <WebsiteField
          label="Website URL"
          id="website-field"
          value={website}
          onChange={handleWebsiteChange}
          error={errors.website}
          placeholder="Enter a website URL"
          hint="Supports http://, https://, and www. Auto-adds https:// if missing"
        />

        <CreditCardField
          label="Credit Card Number"
          id="credit-card-field"
          value={creditCard}
          onChange={(e) => setCreditCard(e.target.value)}
          placeholder="Auto-formats as you type: 1234 5678 9012 3456"
          hint="Automatically formats with spaces for readability"
        />

        <PasswordField
          label="Password"
          id="password-field"
          value={password}
          onChange={handlePasswordChange}
          error={errors.password}
          placeholder="Enter your password"
          hint="Click the eye icon to toggle visibility. Minimum 6 characters"
        />

        <TimeField
          label="Time (12-hour)"
          id="time-field"
          value={time}
          onChange={handleTimeChange}
          error={errors.time}
          placeholder="Enter time with AM/PM"
          hint="12-hour format with AM/PM. Type 'A' for AM or 'P' for PM"
          format24Hour={false}
        />

        <TimeField
          label="Time (24-hour)"
          id="time24-field"
          value={time24}
          onChange={handleTime24Change}
          error={errors.time24}
          placeholder="Select time"
          hint="24-hour format using browser time picker for better UX"
          format24Hour={true}
        />
      </div>
    </ComponentCard>
  );
}
