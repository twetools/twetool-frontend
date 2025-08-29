import React from "react";
import BaseForm from "@/components/forms/base/BaseForm";
import NameField from "@/components/form-elements/input/NameField";
import EmailField from "@/components/form-elements/input/EmailField";
import HomePhoneField from "@/components/form-elements/phone/HomePhoneField";
import StateSelect from "@/components/form-elements/select/StateSelect";
import InputField from "@/components/form-elements/input/InputField";
import { UserIcon } from "@/icons";
import { deleteUser } from "@/lib/users/client-actions";

export interface NewUserProps {
  user?: {
    userID: number;
    name: string;
    email?: string;
    phone?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  };
  onClose: () => void;
  onSaved?: () => void;
  showDeleteButton?: boolean;
  onDelete?: () => void;
}

export default function NewUser({
  user,
  onClose,
  onSaved,
  showDeleteButton = false,
  onDelete,
}: NewUserProps) {
  // Save handler for create/update
  const handleSave = async (form: any) => {
    const basePayload = {
      Name: form.name,
      Email: form.email,
      Phone: form.phone,
      AddressLine1: form.addressLine1,
      AddressLine2: form.addressLine2,
      City: form.city,
      State: form.state,
      ZipCode: form.zipCode,
    };
    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
    let res;
    if (!form.userID) {
      res = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(basePayload),
      });
    } else {
      res = await fetch(`${baseUrl}/api/users/${form.userID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(basePayload),
      });
    }
    if (!res.ok) throw new Error("Failed to save user.");
    if (onSaved) onSaved();
  };

  // Delete handler
  const handleDelete = async (form: any) => {
    if (form.userID) {
      await deleteUser(form.userID);
    }
    if (onDelete) onDelete();
    onClose();
  };

  return (
    <BaseForm
      initialData={{
        userID: user?.userID || 0,
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        addressLine1: user?.addressLine1 || "",
        addressLine2: user?.addressLine2 || "",
        city: user?.city || "",
        state: user?.state || "",
        zipCode: user?.zipCode || "",
      }}
      onSave={handleSave}
      onDelete={showDeleteButton ? handleDelete : undefined}
      onClose={onClose}
      renderFields={(form, errors, handleChange) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NameField
            id="name"
            label="Account Name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Enter account name"
            error={errors.name}
            hasValue={!!form.name?.trim()}
            hasBeenTouched={!!form.name}
          />
          <EmailField
            id="email"
            label="Email Address"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter email"
            error={errors.email}
            hasValue={!!form.email?.trim()}
            hasBeenTouched={!!form.email}
          />
          <HomePhoneField
            id="phone"
            label="Phone"
            value={form.phone}
            onChange={(val) => handleChange("phone", val)}
            error={errors.phone}
            hasValue={!!form.phone?.trim()}
            hasBeenTouched={!!form.phone}
          />
          <InputField
            id="address_line_1"
            name="addressLine1"
            label="Address Line 1"
            value={form.addressLine1}
            onChange={(e) => handleChange("addressLine1", e.target.value)}
            placeholder="Enter address line 1"
            error={errors.addressLine1}
            hasValue={!!form.addressLine1?.trim()}
            hasBeenTouched={!!form.addressLine1}
          />
          <InputField
            id="address_line_2"
            name="addressLine2"
            label="Address Line 2"
            value={form.addressLine2}
            onChange={(e) => handleChange("addressLine2", e.target.value)}
            placeholder="Enter address line 2"
            error={errors.addressLine2}
            hasValue={!!form.addressLine2?.trim()}
            hasBeenTouched={!!form.addressLine2}
          />
          <InputField
            id="city"
            name="city"
            label="City"
            value={form.city}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="Enter city"
            error={errors.city}
            hasValue={!!form.city?.trim()}
            hasBeenTouched={!!form.city}
          />
          <StateSelect
            id="state"
            label="State"
            value={form.state}
            onChange={(val) => handleChange("state", val)}
            placeholder="Select state"
            error={errors.state}
            hasValue={!!form.state?.trim()}
            hasBeenTouched={!!form.state}
          />
          <InputField
            id="zip_code"
            name="zipCode"
            label="ZIP Code"
            value={form.zipCode}
            onChange={(e) => handleChange("zipCode", e.target.value)}
            placeholder="ZIP Code"
            error={errors.zipCode}
            hasValue={!!form.zipCode?.trim()}
            hasBeenTouched={!!form.zipCode}
          />
        </div>
      )}
      showDeleteButton={showDeleteButton}
      isEdit={!!user}
      title={user ? "Edit User" : "New User"}
      icon={<UserIcon className="h-6 w-6 text-brand-500 dark:text-brand-400" />}
    />
  );
}
