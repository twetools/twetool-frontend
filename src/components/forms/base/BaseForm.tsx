import React, { useState } from "react";
import SaveButton from "@/components/ui/button/SaveButton";
import CancelButton from "@/components/ui/button/CancelButton";
import Button from "@/components/ui/button/Button";
import ModalAlertConfirm from "@/components/ui/modal/ModalAlertConfirm";
import { DeleteIcon } from "@/icons";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

export interface BaseFormProps<T> {
  initialData: T;
  onSave: (data: T) => Promise<void>;
  onDelete?: (data: T) => Promise<void>;
  onClose: () => void;
  renderFields: (
    form: T,
    errors: { [key: string]: string },
    handleChange: (name: string, value: any) => void
  ) => React.ReactNode;
  showDeleteButton?: boolean;
  isEdit?: boolean;
  title?: string;
  icon?: React.ReactNode;
}

export default function BaseForm<T extends { [key: string]: any }>({
  initialData,
  onSave,
  onDelete,
  onClose,
  renderFields,
  showDeleteButton = false,
  isEdit = false,
  title = "",
  icon,
}: BaseFormProps<T>) {
  const [form, setForm] = useState<T>(initialData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSaving, setIsSaving] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleChange = (name: string, value: any) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave(form);
      setIsSaving(false);
    } catch (e: any) {
      setIsSaving(false);
      setErrors((prev) => ({
        ...prev,
        form: e.message || "Unexpected error saving.",
      }));
    }
  };

  const handleDelete = async () => {
    setShowDeleteConfirm(false);
    if (onDelete) {
      try {
        await onDelete(form);
      } catch (e) {}
    }
    onClose();
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <PageBreadcrumb pageTitle={title || ""} icon={icon} />
      </div>
      <div className="max-w-3xl mx-auto bg-white dark:bg-white/[0.03] rounded-xl shadow pt-8 pb-6 px-6 py-6 space-y-8">
        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-8">
            {renderFields(form, errors, handleChange)}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {showDeleteButton && onDelete && (
                <Button
                  variant="ghost"
                  size="sm"
                  startIcon={<DeleteIcon />}
                  onClick={() => setShowDeleteConfirm(true)}
                  className="text-red-600"
                  type="button"
                >
                  Delete User
                </Button>
              )}
            </div>
            <div className="flex items-center space-x-3">
              <CancelButton onClick={onClose} />
              <SaveButton onClick={handleSave} loading={isSaving}>
                Save
              </SaveButton>
            </div>
          </div>
        </div>
        {showDeleteConfirm && (
          <ModalAlertConfirm
            isOpen={showDeleteConfirm}
            onClose={() => setShowDeleteConfirm(false)}
            title="Delete Account"
            message={
              form.name
                ? `Are you sure you want to delete ${form.name}? This action cannot be undone.`
                : "Are you sure you want to delete this account? This action cannot be undone."
            }
            onConfirm={handleDelete}
            onCancel={() => setShowDeleteConfirm(false)}
            confirmText="Delete"
            cancelText="Cancel"
            variant="danger"
          />
        )}
      </div>
    </>
  );
}
