"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import AddButton from "@/components/ui/button/AddButton";
import SaveButton from "@/components/ui/button/SaveButton";
import CancelButton from "@/components/ui/button/CancelButton";
import CloseButton from "@/components/ui/button/CloseButton";

export default function SpecializedButtons() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAdd = () => {
    console.log("Add button clicked");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const handleSave = () => {
    console.log("Save button clicked");
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  const handleClose = () => {
    console.log("Close button clicked");
  };

  return (
    <ComponentCard title="Specialized Buttons">
      <div className="space-y-8">
        {/* Action Buttons */}
        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Pre-built Action Buttons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Actions */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Primary Actions
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <AddButton onClick={handleAdd} showIcon={true} size="sm">
                    Add New Contact
                  </AddButton>
                  <AddButton onClick={handleAdd} showIcon={true} size="sm">
                    Add Property
                  </AddButton>
                </div>
                <div className="flex items-center gap-3">
                  <SaveButton onClick={handleSave} showIcon={true} size="sm">
                    Save Changes
                  </SaveButton>
                  <SaveButton onClick={handleSave} showIcon={false} size="sm">
                    Quick Save
                  </SaveButton>
                </div>
              </div>
            </div>

            {/* Secondary Actions */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Secondary Actions
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CancelButton onClick={handleCancel} showIcon={false}>
                    Cancel Operation
                  </CancelButton>
                  <CancelButton onClick={handleCancel} showIcon={false}>
                    Discard
                  </CancelButton>
                </div>
                <div className="flex items-center gap-3">
                  <CloseButton onClick={handleClose}>Close Modal</CloseButton>
                  <CloseButton onClick={handleClose}>Done</CloseButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Specialized Buttons */}
        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Contextual Button Patterns
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Actions */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Contact Management
              </h4>
              <div className="space-y-3">
                <AddButton onClick={handleAdd} showIcon={true}>
                  Add Contact
                </AddButton>
                <div className="flex items-center gap-2">
                  <SaveButton onClick={handleSave} showIcon={true}>
                    Save Contact
                  </SaveButton>
                  <CancelButton onClick={handleCancel} showIcon={false}>
                    Cancel
                  </CancelButton>
                </div>
              </div>
            </div>

            {/* Property Actions */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Property Management
              </h4>
              <div className="space-y-3">
                <AddButton onClick={handleAdd} showIcon={true}>
                  Add Property
                </AddButton>
                <div className="flex items-center gap-2">
                  <SaveButton onClick={handleSave} showIcon={true}>
                    Save Property
                  </SaveButton>
                  <CancelButton onClick={handleCancel} showIcon={false}>
                    Cancel
                  </CancelButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Button Patterns */}
        <div>
          <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Form Button Patterns
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Modal Form Actions */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Modal Form Actions
              </h4>
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex justify-end items-center gap-3">
                  <CancelButton onClick={handleCancel} showIcon={false}>
                    Cancel
                  </CancelButton>
                  <SaveButton onClick={handleSave} showIcon={true}>
                    Save & Close
                  </SaveButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Status Alert */}
        {showAlert && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Button action completed successfully!
            </p>
          </div>
        )}
      </div>
    </ComponentCard>
  );
}
