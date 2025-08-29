"use client";
import React, { useState } from "react";

import Button from "@/components/ui/button/Button";
import ComponentCard from "@/components/common/ComponentCard";
import {
  ModalAlert,
  ModalAlertConfirm,
  ModalAlertDanger,
  ModalAlertInfo,
  ModalAlertSuccess,
  ModalAlertWarning,
} from "@/components/ui/modal";

export default function ModalAlerts() {
  // Basic Modal Alert states
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showInfoAlert, setShowInfoAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);
  const [showDangerAlert, setShowDangerAlert] = useState(false);

  // Confirmation Modal states
  const [showConfirmSave, setShowConfirmSave] = useState(false);
  const [showConfirmAlert, setShowConfirmAlert] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Action handlers - realistic implementations
  const handleConfirmAction = () => {
    setShowConfirmAlert(false);
    console.log("User confirmed the action");
    // In real implementation: perform the confirmed action
  };

  const handleCancelAction = () => {
    setShowConfirmAlert(false);
    console.log("User cancelled the action");
    // In real implementation: handle cancellation
  };

  const handleDeleteAction = () => {
    setShowDeleteConfirm(false);
    console.log("Item deleted");
    // In real implementation: perform delete operation
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirm(false);
    console.log("Delete cancelled");
    // In real implementation: handle cancellation
  };

  const handleSaveChanges = () => {
    setShowConfirmSave(false);
    console.log("Changes saved");
    // In real implementation: save the changes
  };

  const handleDiscardChanges = () => {
    setShowConfirmSave(false);
    console.log("Changes discarded");
    // In real implementation: discard changes
  };

  return (
    <ComponentCard title="Modal Alerts">
      <div className="space-y-12">
        {/* Basic Alert Types */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Basic Alert Types
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="primary"
              onClick={() => setShowSuccessAlert(true)}
              className="w-full bg-success-500 hover:bg-success-600 text-white"
            >
              Show Success
            </Button>
            <Button
              variant="primary"
              onClick={() => setShowInfoAlert(true)}
              className="w-full bg-blue-light-500 hover:bg-blue-light-600 text-white"
            >
              Show Info
            </Button>
            <Button
              variant="primary"
              onClick={() => setShowWarningAlert(true)}
              className="w-full bg-warning-500 hover:bg-warning-600 text-white"
            >
              Show Warning
            </Button>
            <Button
              variant="primary"
              onClick={() => setShowDangerAlert(true)}
              className="w-full bg-error-500 hover:bg-error-600 text-white"
            >
              Show Danger
            </Button>
          </div>
        </div>

        {/* Confirmation Dialogs */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Confirmation Dialogs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="primary" onClick={() => setShowConfirmSave(true)}>
              Save Changes?
            </Button>

            <Button
              variant="primary"
              onClick={() => setShowConfirmAlert(true)}
              className="w-full bg-warning-500 hover:bg-warning-600 text-white"
            >
              Confirm Warning
            </Button>
            <Button
              variant="primary"
              onClick={() => setShowDeleteConfirm(true)}
              className="w-full bg-error-500 hover:bg-error-600 text-white"
            >
              Delete Item
            </Button>
          </div>
        </div>
      </div>

      {/* Basic Modal Alerts */}
      <ModalAlertSuccess
        isOpen={showSuccessAlert}
        onClose={() => setShowSuccessAlert(false)}
        title="Success!"
        message="Your action has been completed successfully. Everything is working perfectly."
      />

      <ModalAlertInfo
        isOpen={showInfoAlert}
        onClose={() => setShowInfoAlert(false)}
        title="Information"
        message="Here's some important information you should know about this feature."
      />

      <ModalAlertWarning
        isOpen={showWarningAlert}
        onClose={() => setShowWarningAlert(false)}
        title="Warning"
        message="Please be careful with this action. It may have unintended consequences."
      />

      <ModalAlertDanger
        isOpen={showDangerAlert}
        onClose={() => setShowDangerAlert(false)}
        title="Error"
        message="Something went wrong. Please check your input and try again."
      />

      {/* Confirmation Dialogs */}
      <ModalAlertConfirm
        isOpen={showConfirmAlert}
        onClose={() => setShowConfirmAlert(false)}
        title="Confirm Warning"
        message="Are you sure you want to proceed with this action? This cannot be undone."
        onConfirm={handleConfirmAction}
        onCancel={handleCancelAction}
        variant="warning"
        confirmText="Proceed"
        cancelText="Cancel"
      />

      <ModalAlertConfirm
        isOpen={showConfirmSave}
        onClose={() => setShowConfirmSave(false)}
        title="Save Changes?"
        message="Are you sure you want to save your changes? This action cannot be undone."
        onConfirm={handleSaveChanges}
        onCancel={handleDiscardChanges}
        variant="info"
        confirmText="Save"
        cancelText="Don't Save"
      />

      <ModalAlertConfirm
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        title="Delete Item"
        message="Are you sure you want to delete this item? This action cannot be undone."
        onConfirm={handleDeleteAction}
        onCancel={handleDeleteCancel}
        variant="danger"
        confirmText="Delete"
        cancelText="Close"
      />
    </ComponentCard>
  );
}
