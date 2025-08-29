import React, { useState } from "react";
import InputField from "@/components/form-elements/input/InputField";
import NameField from "@/components/form-elements/input/NameField";
import EmailField from "@/components/form-elements/input/EmailField";
import HomePhoneField from "@/components/form-elements/phone/HomePhoneField";
import StateSelect from "@/components/form-elements/select/StateSelect";
import CountrySelect from "@/components/form-elements/select/CountrySelect";
import Checkbox from "@/components/form-elements/input/Checkbox";
import SaveButton from "@/components/ui/button/SaveButton";
import CancelButton from "@/components/ui/button/CancelButton";
import Button from "@/components/ui/button/Button";
import { DeleteIcon } from "@/icons";
import ModalAlertConfirm from "@/components/ui/modal/ModalAlertConfirm";
import { deleteAccount } from "@/lib/accounts/client-actions";
import { UserIcon } from "@/icons";

export interface NewAccountProps {
  account?: {
    accountID: number;
    name: string;
    contactName?: string;
    email?: string;
    phone?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    taxID?: string;
    country?: string;
    isActive?: boolean;
  };
  onClose: () => void;
  onSaved?: () => void;
  showDeleteButton?: boolean;
  onDelete?: () => void;
}

export default function NewAccount({
  account,
  onClose,
  onSaved,
  showDeleteButton = false,
  onDelete,
}: NewAccountProps) {
  const [form, setForm] = useState({
    accountID: account?.accountID || 0,
    name: account?.name || "",
    contactName: account?.contactName || "",
    email: account?.email || "",
    phone: account?.phone || "",
    addressLine1: account?.addressLine1 || "",
    addressLine2: account?.addressLine2 || "",
    city: account?.city || "",
    state: account?.state || "",
    zipCode: account?.zipCode || "",
    taxID: account?.taxID || "",
    country: account?.country || "US",
    is_active: account?.isActive || false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Map frontend camelCase to backend PascalCase
      const basePayload = {
        Name: form.name,
        ContactName: form.contactName,
        Email: form.email,
        Phone: form.phone,
        AddressLine1: form.addressLine1,
        AddressLine2: form.addressLine2,
        City: form.city,
        State: form.state,
        ZipCode: form.zipCode,
        TaxID: form.taxID,
        Country: form.country,
        IsActive: form.is_active,
      };
      let res;
      if (!form.accountID) {
        // Create new account (include AccountID for POST if needed)
        const payload = { ...basePayload };
        res = await fetch("/api/accounts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        // Update existing account (do NOT send AccountID in body)
        res = await fetch(`/api/accounts/${form.accountID}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(basePayload),
        });
      }
      if (!res.ok) {
        // Try to parse error message
        let errorMsg = "Failed to save account.";
        try {
          const err = await res.json();
          if (err && err.error) errorMsg = err.error;
        } catch {}
        setErrors((prev) => ({ ...prev, form: errorMsg }));
        setIsSaving(false);
        return;
      }
      setIsSaving(false);
      if (onSaved) onSaved();
    } catch (e) {
      setIsSaving(false);
      setErrors((prev) => ({
        ...prev,
        form: "Unexpected error saving account.",
      }));
    }
  };

  const handleConfirmDelete = async () => {
    setShowDeleteConfirm(false);
    if (form.accountID) {
      try {
        await deleteAccount(form.accountID);
      } catch (e) {
        // TODO: handle error (show error modal or toast)
      }
    }
    // Always close modal after delete, matching NewBuyer pattern
    if (onClose) onClose();
  };

  return (
    <>
      <div className="max-w-3xl mx-auto flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <UserIcon className="h-6 w-6 text-brand-500 dark:text-brand-400" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
            {form.accountID ? "Edit Account" : "New Account"}
          </h2>
        </div>
        <nav className="flex items-center" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li>
              <a
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
              >
                Home
                <svg
                  className="stroke-current"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {form.accountID ? "Edit Account" : "New Account"}
            </li>
          </ol>
        </nav>
      </div>
      <div className="max-w-3xl mx-auto bg-white dark:bg-white/[0.03] rounded-xl shadow p-6 space-y-8">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NameField
              id="name"
              label="Account Name"
              value={form.name}
              onChange={(e) => {
                const value = e.target.value;
                setForm((prev) => ({ ...prev, name: value }));
                setErrors((prev) => ({ ...prev, name: "" }));
              }}
              placeholder="Enter account name"
              error={errors.name}
              hasValue={!!form.name?.trim()}
              hasBeenTouched={!!form.name}
            />
            <NameField
              id="contact_name"
              label="Contact Name"
              value={form.contactName}
              onChange={(e) => {
                const value = e.target.value;
                setForm((prev) => ({ ...prev, contactName: value }));
                setErrors((prev) => ({ ...prev, contactName: "" }));
              }}
              placeholder="Enter contact name"
              error={errors.contactName}
              hasValue={!!form.contactName?.trim()}
              hasBeenTouched={!!form.contactName}
            />
            <EmailField
              id="email"
              label="Email Address"
              value={form.email}
              onChange={(e) => {
                const value = e.target.value;
                setForm((prev) => ({ ...prev, email: value }));
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              placeholder="Enter email"
              error={errors.email}
              hasValue={!!form.email?.trim()}
              hasBeenTouched={!!form.email}
            />
            <HomePhoneField
              id="phone"
              label="Phone"
              value={form.phone}
              onChange={(val) => setForm((prev) => ({ ...prev, phone: val }))}
              error={errors.phone}
              hasValue={!!form.phone?.trim()}
              hasBeenTouched={!!form.phone}
            />
            <InputField
              id="address_line_1"
              name="addressLine1"
              label="Address Line 1"
              value={form.addressLine1}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              placeholder="Enter city"
              error={errors.city}
              hasValue={!!form.city?.trim()}
              hasBeenTouched={!!form.city}
            />
            <StateSelect
              id="state"
              label="State"
              value={form.state}
              onChange={(val) => setForm((prev) => ({ ...prev, state: val }))}
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
              onChange={handleChange}
              placeholder="ZIP Code"
              error={errors.zipCode}
              hasValue={!!form.zipCode?.trim()}
              hasBeenTouched={!!form.zipCode}
            />
            <CountrySelect
              id="country"
              label="Country"
              value={form.country || "US"}
              onChange={(val) => setForm((prev) => ({ ...prev, country: val }))}
              placeholder="Select country"
              error={errors.country}
              hasValue={!!form.country?.trim()}
              hasBeenTouched={!!form.country}
            />
            <InputField
              id="tax_id"
              name="taxID"
              label="Tax ID"
              value={form.taxID}
              onChange={handleChange}
              placeholder="Tax ID"
              error={errors.taxID}
              hasValue={!!form.taxID?.trim()}
              hasBeenTouched={!!form.taxID}
            />
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox
                label="Is Active"
                name="is_active"
                checked={form.is_active}
                onChange={(checked: boolean) =>
                  handleChange({
                    target: {
                      name: "is_active",
                      value: checked,
                      type: "checkbox",
                      checked,
                    },
                  } as any)
                }
              />
            </div>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {showDeleteButton && (
                <Button
                  variant="ghost"
                  size="sm"
                  startIcon={<DeleteIcon />}
                  onClick={handleDelete}
                  className="text-red-600"
                >
                  Delete Account
                </Button>
              )}
            </div>
            <div className="flex items-center space-x-3">
              <CancelButton onClick={onClose} />
              <SaveButton onClick={handleSave} loading={isSaving}>
                Save
              </SaveButton>
            </div>
          </div>
        </div>
        <ModalAlertConfirm
          isOpen={showDeleteConfirm}
          onClose={() => setShowDeleteConfirm(false)}
          title="Delete Account"
          message={
            form.name
              ? `Are you sure you want to delete ${form.name}? This action cannot be undone.`
              : "Are you sure you want to delete this account? This action cannot be undone."
          }
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowDeleteConfirm(false)}
          confirmText="Delete"
          cancelText="Cancel"
          variant="danger"
        />
      </div>
    </>
  );
}
