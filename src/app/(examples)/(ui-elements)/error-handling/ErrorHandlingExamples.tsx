"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Button from "@/components/ui/button/Button";
import InputField from "@/components/form-elements/input/InputField";
import FormField from "@/components/form-elements/form/FormField";
import {
  ModalAlertDanger,
  ModalAlertWarning,
  ModalAlertInfo,
  ModalAlertConfirm,
} from "@/components/ui/modal";

export default function ErrorHandlingExamples() {
  const [testInput, setTestInput] = useState("");

  // Modal visibility states - following ModalAlerts.tsx pattern
  const [showFormError, setShowFormError] = useState(false);
  const [showValidationError, setShowValidationError] = useState(false);
  const [showPermissionError, setShowPermissionError] = useState(false);
  const [showNetworkError, setShowNetworkError] = useState(false);
  const [showCustomError, setShowCustomError] = useState(false);
  const [showConfirmAction, setShowConfirmAction] = useState(false);

  // Action handlers - following ModalAlerts.tsx pattern
  const handleConfirmAction = () => {
    setShowConfirmAction(false);
    console.log("User confirmed the action");
    // In real implementation: perform the confirmed action
  };

  const handleCancelAction = () => {
    setShowConfirmAction(false);
    console.log("User cancelled the action");
    // In real implementation: handle cancellation
  };

  return (
    <ComponentCard title="Error Handling Examples">
      <div className="space-y-12">
        {/* Error Types */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Error Types
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="primary"
              onClick={() => setShowFormError(true)}
              className="w-full bg-error-500 hover:bg-error-600 text-white"
            >
              Form Error
            </Button>
            <Button
              variant="primary"
              onClick={() => setShowValidationError(true)}
              className="w-full bg-warning-500 hover:bg-warning-600 text-white"
            >
              Validation Error
            </Button>
            <Button
              variant="primary"
              onClick={() => setShowPermissionError(true)}
              className="w-full bg-warning-500 hover:bg-warning-600 text-white"
            >
              Permission Error
            </Button>
            <Button
              variant="primary"
              onClick={() => setShowNetworkError(true)}
              className="w-full bg-error-500 hover:bg-error-600 text-white"
            >
              Network Error
            </Button>
          </div>
        </div>

        {/* Additional Error Types */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Additional Error Scenarios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="primary"
              onClick={() => setShowCustomError(true)}
              className="w-full bg-blue-light-500 hover:bg-blue-light-600 text-white"
            >
              Custom Error
            </Button>
            <Button
              variant="primary"
              onClick={() => setShowConfirmAction(true)}
              className="w-full bg-warning-500 hover:bg-warning-600 text-white"
            >
              Confirm Action
            </Button>
          </div>
        </div>

        {/* Usage Pattern Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Integration Example
          </h3>
          <div className="space-y-4">
            <FormField label="Test Input" htmlFor="test-input">
              <InputField
                type="text"
                name="test-input"
                value={testInput}
                onChange={(e) => setTestInput(e.target.value)}
                placeholder="Enter test value"
              />
            </FormField>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Implementation Pattern:
              </h4>
              <pre className="text-xs text-gray-700 dark:text-gray-300 overflow-auto">
                {`// State management
const [showError, setShowError] = useState(false);

// Trigger error
const handleError = () => {
  setShowError(true);
};

// Modal component
<ModalAlertDanger
  isOpen={showError}
  onClose={() => setShowError(false)}
  title="Error"
  message="Something went wrong..."
/>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Error Features Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Features
          </h3>
          <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-start space-x-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>
                Consistent modal-based error display using ModalAlertConfirm
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Global error boundary to catch React errors</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>
                Automatic error message formatting for common error types
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span></span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Network error detection and appropriate messaging</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>
                Form-specific error handling with context-aware messages
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Alert Components - following ModalAlerts.tsx pattern */}
      <ModalAlertDanger
        isOpen={showFormError}
        onClose={() => setShowFormError(false)}
        title="Operation Failed"
        message="Failed to create buyer. Please check your input and try again."
      />

      <ModalAlertWarning
        isOpen={showValidationError}
        onClose={() => setShowValidationError(false)}
        title="Validation Error"
        message="Email: Please enter a valid email address."
      />

      <ModalAlertWarning
        isOpen={showPermissionError}
        onClose={() => setShowPermissionError(false)}
        title="Permission Denied"
        message="You don't have permission to delete this record. Please contact your administrator."
      />

      <ModalAlertDanger
        isOpen={showNetworkError}
        onClose={() => setShowNetworkError(false)}
        title="Network Error"
        message="Unable to connect to the server. Please check your internet connection and try again."
      />

      <ModalAlertInfo
        isOpen={showCustomError}
        onClose={() => setShowCustomError(false)}
        title="Custom Error"
        message="This is a custom error message with specific details about what went wrong."
      />

      <ModalAlertConfirm
        isOpen={showConfirmAction}
        onClose={() => setShowConfirmAction(false)}
        title="Confirm Action"
        message="Are you sure you want to proceed with this action? This cannot be undone."
        onConfirm={handleConfirmAction}
        onCancel={handleCancelAction}
        variant="warning"
        confirmText="Proceed"
        cancelText="Cancel"
      />
    </ComponentCard>
  );
}
