"use client";
import React from "react";

import { Modal } from "@/components/ui/modal";
import FormModalActions from "@/components/ui/modal/FormModalActions";
import FormModalContent from "@/components/ui/modal/FormModalContent";
import FormModalHeader from "@/components/ui/modal/FormModalHeader";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subTitle?: string;
  children: React.ReactNode;
  onSave?: () => void;
  saveLabel?: string;
  showFooter?: boolean;
  className?: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
  additionalActions?: React.ReactNode;
}

const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  title,
  subTitle,
  children,
  onSave,
  saveLabel = "Save Changes",
  showFooter = true,
  className = "",
  isLoading = false,
  icon,
  additionalActions,
}) => {
  // Prevent double submit
  const handleSave = () => {
    if (!isLoading) {
      onSave?.();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={className || "max-w-[584px] p-5 lg:p-10"}
    >
      <FormModalHeader title={title} subTitle={subTitle} icon={icon} />
      <FormModalContent isOpen={isOpen} onSubmit={handleSubmit}>
        {children}
        {showFooter && (
          <FormModalActions
            onClose={onClose}
            onSave={handleSave}
            saveLabel={saveLabel}
            isLoading={isLoading}
          >
            {additionalActions}
          </FormModalActions>
        )}
      </FormModalContent>
    </Modal>
  );
};

export default FormModal;
