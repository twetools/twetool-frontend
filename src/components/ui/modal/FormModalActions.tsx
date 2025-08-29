import React from "react";
import CancelButton from "@/components/ui/button/CancelButton";
import SaveButton from "@/components/ui/button/SaveButton";

interface FormModalActionsProps {
  onClose?: () => void;
  onSave?: () => void;
  saveLabel?: string;
  showClose?: boolean;
  showSave?: boolean;
  showSaveIcon?: boolean;
  children?: React.ReactNode;
  isLoading?: boolean;
}

const FormModalActions: React.FC<FormModalActionsProps> = ({
  onClose,
  onSave,
  saveLabel = "Save Changes",
  showClose = true,
  showSave = true,
  showSaveIcon = true,
  children,
  isLoading = false,
}) => {
  return (
    <div className="mt-8 flex justify-between items-center">
      <div className="flex items-center">{children}</div>
      <div className="flex items-center space-x-3">
        {showClose && onClose && <CancelButton onClick={onClose} />}
        {showSave && onSave && (
          <SaveButton
            onClick={onSave}
            type="submit"
            loading={isLoading}
            showIcon={showSaveIcon}
          >
            {saveLabel}
          </SaveButton>
        )}
      </div>
    </div>
  );
};

export default FormModalActions;
