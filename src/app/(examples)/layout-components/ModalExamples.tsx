"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import FormModal from "@/components/ui/modal/FormModal";
import { BuyerIcon } from "@/icons";

export default function ModalExamples() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsLoadingModalOpen(false);
  };

  return (
    <ComponentCard title="Modal Examples">
      <div className="space-y-8">
        {/* Basic Modal Usage */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Basic Modal Usage
          </h3>
          <div className="space-y-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors"
            >
              Open Basic Modal
            </button>

            <button
              onClick={() => setIsLoadingModalOpen(true)}
              className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors ml-4"
            >
              Open Loading Modal
            </button>
          </div>
        </div>

        {/* Modal States */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Modal States
          </h3>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p>• Basic modal with save functionality</p>
            <p>• Loading state during save operations</p>
            <p>• Custom icons and titles</p>
            <p>• Responsive width management</p>
          </div>
        </div>

        {/* Basic Modal */}
        <FormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Example Modal"
          subTitle="Demonstrating modal usage"
          icon={<BuyerIcon />}
          onSave={() => {
            console.log("Save clicked");
            setIsModalOpen(false);
          }}
          className="max-w-2xl"
        >
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              This is an example of using the FormModal component from the
              pre-built components library.
            </p>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Modal Features
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Customizable width with className prop</li>
                <li>• Save and cancel actions</li>
                <li>• Loading states</li>
                <li>• Custom icons and titles</li>
              </ul>
            </div>
          </div>
        </FormModal>

        {/* Loading Modal */}
        <FormModal
          isOpen={isLoadingModalOpen}
          onClose={() => setIsLoadingModalOpen(false)}
          title="Loading Example"
          subTitle="Modal with loading state"
          icon={<BuyerIcon />}
          onSave={handleSave}
          isLoading={isLoading}
          className="max-w-lg"
        >
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              This modal demonstrates the loading state functionality.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Click save to see the loading state in action.
            </p>
          </div>
        </FormModal>
      </div>
    </ComponentCard>
  );
}
