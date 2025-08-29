"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import { CookieConsent } from "@/components/ui/notification";

export default function CookieConsentExamples() {
  const handleCookieSettings = () => {
    console.log("Cookie Settings clicked");
  };

  const handleDenyAll = () => {
    console.log("Deny All clicked");
  };

  const handleAcceptAll = () => {
    console.log("Accept All clicked");
  };

  return (
    <ComponentCard title="Cookie Consent">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <CookieConsent
            message="By clicking on 'Accept', you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts."
            onCookieSettings={handleCookieSettings}
            onDenyAll={handleDenyAll}
            onAcceptAll={handleAcceptAll}
          />
        </div>

        {/* States and Validation */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            States and Validation
          </h4>
          <CookieConsent
            message="Simple cookie consent without settings option."
            onDenyAll={handleDenyAll}
            onAcceptAll={handleAcceptAll}
          />
          <div className="mt-4 text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
            Cookie Settings button is optional and only appears when provided
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
