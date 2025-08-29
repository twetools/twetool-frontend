"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import ToggleSwitch from "@/components/form-elements/input/ToggleSwitch";

export default function ToggleSwitchExamples() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledBlue, setIsEnabledBlue] = useState(true);
  const [isEnabledGray, setIsEnabledGray] = useState(false);
  const [isEnabledDisabled, setIsEnabledDisabled] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ComponentCard title="Toggle Switch">
      <div className="space-y-8">
        {/* Basic States */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic States
          </h4>
          <div className="flex flex-wrap items-center gap-8">
            <ToggleSwitch
              checked={isEnabled}
              onChange={setIsEnabled}
              label="Default"
            />
            <ToggleSwitch
              checked={isEnabledBlue}
              onChange={setIsEnabledBlue}
              label="Enabled"
              color="blue"
            />
            <ToggleSwitch
              checked={isEnabledGray}
              onChange={setIsEnabledGray}
              label="Gray Theme"
              color="gray"
            />
            <ToggleSwitch
              checked={isEnabledDisabled}
              onChange={setIsEnabledDisabled}
              disabled
              label="Disabled"
            />
          </div>
        </div>

        {/* Real Use Case Examples */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Settings Panel
          </h4>
          <div className="space-y-4">
            <ToggleSwitch
              checked={notifications}
              onChange={setNotifications}
              label="Push Notifications"
              id="notifications"
            />
            <ToggleSwitch
              checked={emailAlerts}
              onChange={setEmailAlerts}
              label="Email Alerts"
              id="email-alerts"
            />
            <ToggleSwitch
              checked={darkMode}
              onChange={setDarkMode}
              label="Dark Mode"
              id="dark-mode"
              color="gray"
            />
          </div>
        </div>

        {/* Form Integration Example */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Form Integration
          </h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Notifications:</strong>{" "}
              {notifications ? "Enabled" : "Disabled"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Email Alerts:</strong>{" "}
              {emailAlerts ? "Enabled" : "Disabled"}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Dark Mode:</strong> {darkMode ? "Enabled" : "Disabled"}
            </p>
          </div>
        </div>

        {/* Size and Accessibility */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Accessibility Features
          </h4>
          <div className="space-y-3">
            <ToggleSwitch
              checked={isEnabled}
              onChange={setIsEnabled}
              label="Keyboard accessible (Tab + Space)"
              id="keyboard-toggle"
            />
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Try tabbing to the toggle and pressing Space to activate
            </p>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
