import React, { ChangeEvent } from "react";

import NotesField from "@/components/form-elements/input/NotesField";

interface NotesSectionProps {
  notes: string;
  onNotesChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  errors: { [key: string]: string };
  touchedFields: { [key: string]: boolean };
  autoFocusFirstField?: boolean; // Auto-focus the first field when in active tab
}

export default function NotesSection({
  notes,
  onNotesChange,
  errors,
  touchedFields,
  autoFocusFirstField = false,
}: NotesSectionProps) {
  return (
    <NotesField
      name="notes"
      label="Notes"
      value={notes}
      onChange={onNotesChange}
      placeholder="Buyer Notes..."
      rows={4}
      error={errors.notes}
      className="sm:col-span-3"
      hasValue={!!notes?.trim()}
      hasBeenTouched={touchedFields.notes}
      autoFocus={autoFocusFirstField}
    />
  );
}
