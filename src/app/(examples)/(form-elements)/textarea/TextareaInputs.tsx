"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import NotesField from "@/components/form-elements/input/NotesField";
import TextareaField from "@/components/form-elements/input/TextareaField";
import { EnvelopeIcon } from "@/icons";

export default function InputStates() {
  const [notes, setNotes] = useState<string>("");
  const [customTextarea, setCustomTextarea] = useState<string>("");

  return (
    <ComponentCard title="Textarea Inputs">
      <div className="space-y-6">
        {/* Textarea Examples */}
        <NotesField
          label="Notes"
          id="notes-field"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Enter your notes here..."
        />

        <TextareaField
          label="Custom Textarea"
          id="custom-textarea"
          placeholder="Custom textarea with icon"
          value={customTextarea}
          onChange={(e) => setCustomTextarea(e.target.value)}
          leftIcon={<EnvelopeIcon className="h-5 w-5" />}
          rows={3}
        />
      </div>
    </ComponentCard>
  );
}
