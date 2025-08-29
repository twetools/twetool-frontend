import React from "react";

import BirthDateField from "@/components/form-elements/dates/BirthDateField";
import EmailField from "@/components/form-elements/input/EmailField";
import NameField from "@/components/form-elements/input/NameField";
import MobilePhoneField from "@/components/form-elements/phone/MobilePhoneField";
import LastContactDateField from "@/components/form-elements/dates/LastContactDateField";
import CreatedDateField from "@/components/form-elements/dates/CreatedDateField";
import LastUpdatedDate from "@/components/form-elements/dates/LastUpdatedDate";
import Select from "@/components/form-elements/select/Select";

interface PersonalInfoSectionProps {
  firstName: string;
  middleName: string;
  lastName: string;
  nickname: string;
  email: string;
  mobilePhone: string;
  birthDate: string;
  lastContactDate: Date | undefined;
  createdAt: string;
  updatedAt: string;
  contactSource: string;
  onFirstNameChange: (value: string) => void;
  onMiddleNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onNicknameChange: (value: string) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMobilePhoneChange: (value: string) => void;
  onBirthDateChange: (dateString: string) => void;
  onLastContactDateChange: (dateString: string) => void;
  onCreatedAtChange?: (dateString: string) => void;
  onLastUpdatedAtChange?: (dateString: string) => void;
  onContactSourceChange: (value: string) => void;
  contactSources: { value: string; label: string }[];
  errors: { [key: string]: string };
  touchedFields?: { [key: string]: boolean }; // Track which fields have been interacted with
  isNewRecord?: boolean; // Whether this is a new record being created
  autoFocusFirstField?: boolean; // Auto-focus the first field for new records
}

export default function PersonalInfoSection({
  firstName,
  middleName,
  lastName,
  nickname,
  email,
  mobilePhone,
  birthDate,
  lastContactDate,
  createdAt,
  updatedAt,
  contactSource,
  onFirstNameChange,
  onMiddleNameChange,
  onLastNameChange,
  onNicknameChange,
  onEmailChange,
  onMobilePhoneChange,
  onBirthDateChange,
  onLastContactDateChange,
  onCreatedAtChange,
  onLastUpdatedAtChange,
  onContactSourceChange,
  contactSources,
  errors,
  touchedFields = {},
  isNewRecord = false,
  autoFocusFirstField = false,
}: PersonalInfoSectionProps) {
  return (
    <>
      <NameField
        id="first_name"
        label="First Name"
        value={firstName}
        onChange={(e) => onFirstNameChange(e.target.value)}
        placeholder="Enter First Name"
        error={errors.first_name}
        required={true}
        hasValue={!!firstName?.trim()}
        hasBeenTouched={touchedFields.first_name}
        autoFocus={autoFocusFirstField && isNewRecord}
      />

      <NameField
        id="middle_name"
        label="Middle Name"
        value={middleName}
        onChange={(e) => onMiddleNameChange(e.target.value)}
        placeholder="Enter Middle Name"
        error={errors.middle_name}
        hasValue={!!middleName?.trim()}
        hasBeenTouched={touchedFields.middle_name}
      />

      <NameField
        id="last_name"
        label="Last Name"
        value={lastName}
        onChange={(e) => onLastNameChange(e.target.value)}
        placeholder="Enter Last Name"
        error={errors.last_name}
        required={true}
        hasValue={!!lastName?.trim()}
        hasBeenTouched={touchedFields.last_name}
      />

      <NameField
        id="nickname"
        label="Nickname"
        value={nickname}
        onChange={(e) => onNicknameChange(e.target.value)}
        placeholder="Enter Nickname"
        error={errors.nickname}
        className="sm:col-span-1"
        hasValue={!!nickname?.trim()}
        hasBeenTouched={touchedFields.nickname}
      />

      <MobilePhoneField
        id="mobile_phone"
        label="Mobile Phone"
        value={mobilePhone}
        onChange={onMobilePhoneChange}
        copyable={true}
        error={errors.mobile_phone}
        className="sm:col-span-1"
        hasValue={!!mobilePhone?.trim()}
        hasBeenTouched={touchedFields.mobile_phone}
      />

      <EmailField
        id="email"
        label="Email Address"
        value={email}
        onChange={onEmailChange}
        copyable={true}
        error={errors.email}
        className="sm:col-span-2"
        hasValue={!!email?.trim()}
        hasBeenTouched={touchedFields.email}
      />

      <Select
        id="contact_source"
        name="contact_source"
        label="Contact Source"
        options={contactSources.map((source) => ({
          value: String(source.value),
          label: source.label,
        }))}
        placeholder="Select contact source"
        onChange={onContactSourceChange}
        value={contactSource}
        error={errors.contact_source_id}
        required={true}
        hasValue={!!contactSource?.trim()}
        hasBeenTouched={touchedFields.contact_source_id}
        className="bg-white dark:bg-gray-900 sm:col-span-2"
      />

      <BirthDateField
        value={birthDate}
        onChange={onBirthDateChange}
        htmlFor="birth_date"
        error={errors.birth_date || ""}
        className="sm:col-span-1"
      />
      <LastContactDateField
        value={lastContactDate}
        onChange={onLastContactDateChange}
        className="sm:col-span-1"
        error={errors.last_contact_date || ""}
      />

      <LastUpdatedDate
        value={updatedAt}
        onChange={onLastUpdatedAtChange}
        htmlFor="updated_at"
        className="sm:col-span-1"
        isNewRecord={isNewRecord}
      />
      <CreatedDateField
        value={createdAt}
        onChange={onCreatedAtChange}
        htmlFor="created_at"
        className="sm:col-span-1"
        error={errors.created_at || ""}
        isNewRecord={isNewRecord}
      />
    </>
  );
}
