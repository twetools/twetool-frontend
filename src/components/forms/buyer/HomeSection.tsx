import React from "react";

import HomePhoneField from "@/components/form-elements/phone/HomePhoneField";
import InputField from "@/components/form-elements/input/InputField";
import StateSelect from "@/components/form-elements/select/StateSelect";
import CountrySelect from "@/components/form-elements/select/CountrySelect";

interface HomeSectionProps {
  homePhone: string;
  streetAddress: string;
  unitNumber: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  onHomePhoneChange: (value: string) => void;
  onStreetAddressChange: (value: string) => void;
  onUnitNumberChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onStateChange: (value: string) => void;
  onZipCodeChange: (value: string) => void;
  onCountryChange: (value: string) => void;
  errors: { [key: string]: string };
  touchedFields: { [key: string]: boolean };
  autoFocusFirstField?: boolean; // Auto-focus the first field when in active tab
}

export default function HomeSection({
  homePhone,
  streetAddress,
  unitNumber,
  city,
  state,
  zipCode,
  country,
  onHomePhoneChange,
  onStreetAddressChange,
  onUnitNumberChange,
  onCityChange,
  onStateChange,
  onZipCodeChange,
  onCountryChange,
  errors,
  touchedFields,
  autoFocusFirstField = false,
}: HomeSectionProps) {
  return (
    <>
      <HomePhoneField
        id="home_phone"
        label="Home Phone"
        value={homePhone}
        onChange={onHomePhoneChange}
        copyable={true}
        error={errors.home_phone}
        hasValue={!!homePhone?.trim()}
        hasBeenTouched={touchedFields.home_phone}
        autoFocus={autoFocusFirstField}
      />

      {/* Address Fields */}
      <InputField
        id="street_address"
        name="street_address"
        label="Street Address"
        value={streetAddress}
        onChange={(e) => onStreetAddressChange(e.target.value)}
        placeholder="Enter street address"
        error={errors.street_address}
        className="sm:col-span-2"
        hasValue={!!streetAddress?.trim()}
        hasBeenTouched={touchedFields.street_address}
      />

      <InputField
        id="unit_number"
        name="unit_number"
        label="Unit/Apt Number"
        value={unitNumber}
        onChange={(e) => onUnitNumberChange(e.target.value)}
        placeholder="Unit, Apt, Suite"
        error={errors.unit_number}
        className="sm:col-span-1"
        hasValue={!!unitNumber?.trim()}
        hasBeenTouched={touchedFields.unit_number}
      />

      <InputField
        id="city"
        name="city"
        label="City"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        placeholder="Enter city"
        error={errors.city}
        className="sm:col-span-1"
        hasValue={!!city?.trim()}
        hasBeenTouched={touchedFields.city}
      />

      <StateSelect
        id="state"
        label="State"
        value={state}
        onChange={onStateChange}
        placeholder="Select state"
        error={errors.state}
        className="sm:col-span-1"
        hasValue={!!state?.trim()}
        hasBeenTouched={touchedFields.state}
      />

      <InputField
        id="zip_code"
        name="zip_code"
        label="ZIP Code"
        value={zipCode}
        onChange={(e) => onZipCodeChange(e.target.value)}
        placeholder="ZIP Code"
        error={errors.zip_code}
        hasValue={!!zipCode?.trim()}
        hasBeenTouched={touchedFields.zip_code}
      />

      <CountrySelect
        id="country"
        label="Country"
        value={country}
        onChange={onCountryChange}
        placeholder="Select country"
        defaultValue="US"
        error={errors.country}
        hasValue={!!country?.trim()}
        hasBeenTouched={touchedFields.country}
      />
    </>
  );
}
