import React, { useState } from "react";
import { EditIcon, DeleteIcon } from "@/icons";
import { ModalAlertConfirm } from "@/components/ui/modal";

export interface MenuActionsProps {
  onEdit?: () => void;
  onDelete?: (id: number) => Promise<void>;
  deleteId?: number;
  deleteConfirmTitle?: string;
  deleteConfirmMessage?: string;
  onDeleteSuccess?: () => void;
  onDeleteError?: (error: any) => void;
}

const MenuActions: React.FC<MenuActionsProps> = ({
  onEdit,
  onDelete,
  deleteId,
  deleteConfirmTitle = "Delete Item",
  deleteConfirmMessage = "Are you sure you want to delete this item? This action cannot be undone.",
  onDeleteSuccess,
  onDeleteError,
}) => {
  // Modal state management following examples pattern
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Handler functions following examples pattern
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent row click from triggering
    setShowDeleteConfirm(true);
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent row click from triggering
    if (onEdit) {
      onEdit();
    }
  };

  const handleConfirmDelete = async () => {
    if (onDelete && deleteId !== undefined) {
      try {
        await onDelete(deleteId);
        setShowDeleteConfirm(false);
        // Call success callback if provided
        if (onDeleteSuccess) {
          onDeleteSuccess();
        }
      } catch (error) {
        setShowDeleteConfirm(false);
        // Call error callback if provided
        if (onDeleteError) {
          onDeleteError(error);
        }
      }
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
    console.log("Delete cancelled");
  };

  console.log("MenuActions rendered with deleteId:", deleteId); // Debug log

  return (
    <>
      <div className="flex items-center justify-center w-full gap-2">
        <button
          className="text-gray-500 hover:text-brand-500 dark:text-gray-400 dark:hover:text-brand-400"
          onClick={handleEditClick}
          aria-label="Edit"
          type="button"
        >
          <EditIcon className="w-6 h-6" />
        </button>
        <button
          className="text-gray-500 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500"
          onClick={handleDeleteClick}
          aria-label="Delete"
          type="button"
        >
          <DeleteIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Delete Confirmation Modal - Following examples pattern */}
      <ModalAlertConfirm
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        title={deleteConfirmTitle}
        message={deleteConfirmMessage}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        variant="danger"
        confirmText="Delete"
        cancelText="Cancel"
      />
    </>
  );
};

export default MenuActions;
