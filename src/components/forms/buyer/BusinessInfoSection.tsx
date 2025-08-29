import React, { ChangeEvent } from "react";

import InputField from "@/components/form-elements/input/InputField";
import WorkPhoneField from "@/components/form-elements/phone/WorkPhoneField";

interface BusinessInfoSectionProps {
  companyName: string;
  workPhone: string;
  onCompanyNameChange: (value: string) => void;
  onWorkPhoneChange: (value: string) => void;
  errors: { [key: string]: string };
  touchedFields: { [key: string]: boolean };
  autoFocusFirstField?: boolean; // Auto-focus the first field when in active tab
}

export default function BusinessInfoSection({
  companyName,
  workPhone,
  onCompanyNameChange,
  onWorkPhoneChange,
  errors,
  touchedFields,
  autoFocusFirstField = false,
}: BusinessInfoSectionProps) {
  return (
    <>
      <InputField
        id="company_name"
        name="company_name"
        label="Company Name"
        value={companyName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onCompanyNameChange(e.target.value)
        }
        placeholder="Enter company name"
        copyable={true}
        error={errors.company_name}
        hasValue={!!companyName?.trim()}
        hasBeenTouched={touchedFields.company_name}
        autoFocus={autoFocusFirstField}
      />

      <WorkPhoneField
        id="work_phone"
        label="Work Phone"
        value={workPhone}
        onChange={onWorkPhoneChange}
        copyable={true}
        error={errors.work_phone}
        hasValue={!!workPhone?.trim()}
        hasBeenTouched={touchedFields.work_phone}
      />
    </>
  );
}
