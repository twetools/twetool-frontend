"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import InputField from "@/components/form-elements/input/InputField";
import NotesField from "@/components/form-elements/input/NotesField";
import TextareaField from "@/components/form-elements/input/TextareaField";
import { EnvelopeIcon } from "@/icons";

export default function InputStates() {
  const [notes, setNotes] = useState<string>("");
  const [customTextarea, setCustomTextarea] = useState<string>("");

  return (
    <ComponentCard title="Input States & Variations">
      <div className="space-y-6">
        {/* State Examples */}
        <InputField
          label="Success State"
          id="success-input"
          placeholder="Success state"
          value="Valid input"
          success={true}
          hint="This field is valid"
          readOnly
        />

        <InputField
          label="Error State"
          id="error-input"
          placeholder="Error state"
          value="Invalid input"
          error="This field has an error"
          readOnly
        />

        <InputField
          label="Disabled State"
          id="disabled-input"
          placeholder="Disabled state"
          value="Disabled input"
          disabled={true}
        />

        <InputField
          label="Read-only State"
          id="readonly-input"
          placeholder="Read-only state"
          value="Read-only input"
          readOnly={true}
        />

      </div>
    </ComponentCard>
  );
}
