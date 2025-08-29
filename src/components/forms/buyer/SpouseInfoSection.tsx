import React from "react";

import EmailField from "@/components/form-elements/input/EmailField";
import NameField from "@/components/form-elements/input/NameField";
import MobilePhoneField from "@/components/form-elements/phone/MobilePhoneField";
import BirthDateField from "@/components/form-elements/dates/BirthDateField";

interface SpouseInfoSectionProps {
  spouseFirstName: string;
  spouseMiddleName: string;
  spouseLastName: string;
  spouseNickname: string;
  spouseEmail: string;
  spouseMobilePhone: string;
  spouseBirthDate: string;
  onSpouseFirstNameChange: (value: string) => void;
  onSpouseMiddleNameChange: (value: string) => void;
  onSpouseLastNameChange: (value: string) => void;
  onSpouseNicknameChange: (value: string) => void;
  onSpouseEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSpouseMobilePhoneChange: (value: string) => void;
  onSpouseBirthDateChange: (dateString: string) => void;
  errors: { [key: string]: string };
  touchedFields?: { [key: string]: boolean }; // Track which fields have been interacted with
  autoFocusFirstField?: boolean; // Auto-focus the first field when in active tab
}

export default function SpouseInfoSection({
  spouseFirstName,
  spouseMiddleName,
  spouseLastName,
  spouseNickname,
  spouseEmail,
  spouseMobilePhone,
  spouseBirthDate,
  onSpouseFirstNameChange,
  onSpouseMiddleNameChange,
  onSpouseLastNameChange,
  onSpouseNicknameChange,
  onSpouseEmailChange,
  onSpouseMobilePhoneChange,
  onSpouseBirthDateChange,
  errors,
  touchedFields = {},
  autoFocusFirstField = false,
}: SpouseInfoSectionProps) {
  return (
    <>
      <NameField
        id="spouse_first_name"
        label="First Name"
        value={spouseFirstName}
        onChange={(e) => onSpouseFirstNameChange(e.target.value)}
        placeholder="Enter First Name"
        error={errors.spouse_first_name}
        hasValue={!!spouseFirstName?.trim()}
        hasBeenTouched={touchedFields.spouse_first_name}
        autoFocus={autoFocusFirstField}
      />

      <NameField
        id="spouse_middle_name"
        label="Middle Name"
        value={spouseMiddleName}
        onChange={(e) => onSpouseMiddleNameChange(e.target.value)}
        placeholder="Enter Middle Name"
        error={errors.spouse_middle_name}
        hasValue={!!spouseMiddleName?.trim()}
        hasBeenTouched={touchedFields.spouse_middle_name}
      />

      <NameField
        id="spouse_last_name"
        label="Last Name"
        value={spouseLastName}
        onChange={(e) => onSpouseLastNameChange(e.target.value)}
        placeholder="Enter Last Name"
        error={errors.spouse_last_name}
        className="sm:col-span-1"
        hasValue={!!spouseLastName?.trim()}
        hasBeenTouched={touchedFields.spouse_last_name}
      />

      <NameField
        id="spouse_nickname"
        label="Nickname"
        value={spouseNickname}
        onChange={(e) => onSpouseNicknameChange(e.target.value)}
        placeholder="Enter Nickname"
        error={errors.spouse_nickname}
        className="sm:col-span-1"
        hasValue={!!spouseNickname?.trim()}
        hasBeenTouched={touchedFields.spouse_nickname}
      />

      <MobilePhoneField
        id="spouse_mobile_phone"
        label="Mobile Phone"
        value={spouseMobilePhone}
        onChange={onSpouseMobilePhoneChange}
        copyable={true}
        error={errors.spouse_mobile_phone}
        hasValue={!!spouseMobilePhone?.trim()}
        hasBeenTouched={touchedFields.spouse_mobile_phone}
      />

      <EmailField
        id="spouse_email"
        label="Email Address"
        value={spouseEmail}
        onChange={onSpouseEmailChange}
        copyable={true}
        error={errors.spouse_email}
        className="sm:col-span-2"
        hasValue={!!spouseEmail?.trim()}
        hasBeenTouched={touchedFields.spouse_email}
      />

      <BirthDateField
        value={spouseBirthDate}
        onChange={onSpouseBirthDateChange}
        htmlFor="spouse_birth_date"
        error={errors.spouse_birth_date || ""}
      />
    </>
  );
}
