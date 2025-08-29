import React, { useEffect, useMemo, useState, useRef } from "react";

import {
  PersonalInfoSection,
  SpouseInfoSection,
  HomeSection,
  BusinessInfoSection,
  StatusAndRoleSection,
  NotesSection,
} from "@/components/forms/buyer";
import Button from "@/components/ui/button/Button";
import CancelButton from "@/components/ui/button/CancelButton";
import SaveButton from "@/components/ui/button/SaveButton";
import ModalAlertConfirm from "@/components/ui/modal/ModalAlertConfirm";
import Tab from "@/components/ui/tabs/Tab";
import { BuyerIcon, DeleteIcon, LabIcon } from "@/icons";
import { createContact, updateContact } from "@/lib/contacts/actions";
import { useDevMode } from "@/context/DevModeContext";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import type { ClientType } from "@/types/client";

type Status = {
  id: number;
  name: string;
  in_pipeline?: boolean;
};

interface Role {
  id: number;
  name: string;
  in_pipeline?: boolean;
}

interface NewBuyerProps {
  onClose: () => void;
  onSaved?: () => void;
  showDeleteButton?: boolean;
  onDelete?: () => void;
  roles: Role[];
  clientTypes: ClientType[];
  buyer_statuses: Status[];
  contactSources: { id: number; label: string }[];
  buyerStages: {
    id: number;
    label: string;
    description?: string | null;
    active: boolean;
  }[];
  leadStages?: {
    id: number;
    label: string;
    description?: string | null;
    active: boolean;
  }[];
  contact?: {
    id?: number;
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    nickname?: string;
    email?: string;
    mobile_phone?: string;
    home_phone?: string;
    work_phone?: string;
    company_id?: number;
    primary_address_id?: number;
    birth_date?: string | Date;
    spouse_first_name?: string;
    spouse_middle_name?: string;
    spouse_last_name?: string;
    spouse_nickname?: string;
    spouse_email?: string;
    spouse_mobile_phone?: string;
    spouse_birth_date?: string | Date;
    contact_source_id?: number | string;
    notes?: string;
    role_id?: number | string;
    client_type_id?: number | string;
    stage_id?: number | string;
    lead_stage_id?: number | string;
    status_id?: number | string;
    last_contact_date?: string | Date;
    created_at?: string | Date | null;
    updated_at?: string | Date | null;
    // Address fields
    primary_address?: {
      street_address?: string;
      unit_number?: string;
      city?: string;
      state?: string;
      zip_code?: string;
      country?: string;
    } | null;
  };
}

type BuyerForm = {
  first_name: string;
  middle_name: string;
  last_name: string;
  nickname: string;
  email: string;
  mobile_phone: string;
  home_phone: string;
  work_phone: string;
  company_id: string;
  primary_address_id: string;
  birth_date: string;
  spouse_first_name: string;
  spouse_middle_name: string;
  spouse_last_name: string;
  spouse_nickname: string;
  spouse_email: string;
  spouse_mobile_phone: string;
  spouse_birth_date: string;
  contact_source_id: string;
  notes: string;
  role_id: string;
  client_type_id: string;
  status_id: string;
  stage_id: string;
  last_contact_date?: Date | undefined;
  created_at: string;
  updated_at: string;
  // Address fields
  street_address: string;
  unit_number: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
};

export default function NewBuyer({
  onClose,
  onSaved,
  showDeleteButton = false,
  onDelete,
  roles,
  clientTypes,
  buyer_statuses,
  contactSources,
  buyerStages,
  leadStages = [],
  contact,
}: NewBuyerProps) {
  // Only allow "Active" and "Inactive" buyer_statuses for buyers
  const allowedStatusNames = ["active", "inactive"];
  const filteredBuyerStatuses = buyer_statuses.filter((status) =>
    allowedStatusNames.includes(status.name.toLowerCase())
  );
  // Default to "Active" status
  const defaultStatus =
    filteredBuyerStatuses.find((s) => s.name.toLowerCase() === "active") ||
    filteredBuyerStatuses[0];
  const defaultRole = roles.find((r) => r.name.toLowerCase() === "lead");
  // Find the "Buyer" contact type (case-insensitive)
  const buyerType = clientTypes.find(
    (type) => type.label.toLowerCase() === "buyer"
  );
  const buyerTypeId = buyerType ? String(buyerType.id) : "";

  // Find the default stage (id=1)
  const defaultStage = buyerStages.find((stage) => stage.id === 1);

  // Memoize today's date to prevent infinite re-renders
  const today = useMemo(() => new Date(), []);

  // Form auto-focus functionality
  const formRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("personal");
  const isNewRecord = !contact?.id;

  // Handle tab changes and trigger auto-focus for new records
  const handleTabChange = (key: string) => {
    setActiveTab(key);

    // For new records, focus the first field in the newly selected tab
    if (isNewRecord) {
      // Small delay to ensure tab content is rendered
      setTimeout(() => {
        if (formRef.current) {
          const tabContent = formRef.current.querySelector(
            `[data-tab-content="${key}"]`
          );
          if (tabContent) {
            const firstInput = tabContent.querySelector<HTMLElement>(
              'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled])'
            );
            firstInput?.focus();
          }
        }
      }, 100);
    }
  };

  // Focus first field on initial load for new records
  useEffect(() => {
    if (isNewRecord && activeTab === "personal") {
      setTimeout(() => {
        if (formRef.current) {
          const firstTabContent = formRef.current.querySelector(
            `[data-tab-content="personal"]`
          );
          if (firstTabContent) {
            const firstInput = firstTabContent.querySelector<HTMLElement>(
              'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled])'
            );
            firstInput?.focus();
          }
        }
      }, 200);
    }
  }, [isNewRecord, activeTab]);

  const [form, setForm] = useState<BuyerForm>({
    first_name: "",
    middle_name: "",
    last_name: "",
    nickname: "",
    email: "",
    mobile_phone: "",
    home_phone: "",
    work_phone: "",
    company_id: "",
    primary_address_id: "",
    birth_date: "",
    spouse_first_name: "",
    spouse_middle_name: "",
    spouse_last_name: "",
    spouse_nickname: "",
    spouse_email: "",
    spouse_mobile_phone: "",
    spouse_birth_date: "",
    contact_source_id: "",
    notes: "",
    role_id: "",
    client_type_id: "",
    status_id: defaultStatus ? String(defaultStatus.id) : "",
    stage_id: defaultStage
      ? String(defaultStage.id)
      : buyerStages.length > 0
      ? String(buyerStages[0].id)
      : "",
    last_contact_date: today,
    created_at: "",
    updated_at: "",
    // Address fields
    street_address: "",
    unit_number: "",
    city: "",
    state: "",
    zip_code: "",
    country: "US",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touchedFields, setTouchedFields] = useState<{
    [key: string]: boolean;
  }>({});
  const [isSaving, setIsSaving] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Development mode context
  const { enabled: isDevMode } = useDevMode();

  // Error handling context
  const { handleFormError } = useErrorHandler();

  // Development only: Create dummy record for testing
  const createDummyRecord = () => {
    console.log("Creating dummy buyer record for testing purposes...");

    // Populate form with dummy data directly
    setForm({
      first_name: "A_Test",
      last_name: "Buyer",
      nickname: "TestBuyer",
      middle_name: "Demo",
      email: "test.buyer@example.com",
      mobile_phone: "(555) 123-4567",
      home_phone: "(555) 987-6543",
      work_phone: "(555) 456-7890",
      company_id: "",
      primary_address_id: "",
      birth_date: "1985-01-15",
      spouse_first_name: "Jane",
      spouse_middle_name: "Test",
      spouse_last_name: "Buyer",
      spouse_nickname: "JaneBuyer",
      spouse_email: "jane.buyer@example.com",
      spouse_mobile_phone: "(555) 234-5678",
      spouse_birth_date: "1987-03-20",
      contact_source_id:
        contactSources.length > 0 ? String(contactSources[0].id) : "",
      notes:
        "Dummy buyer record created for testing purposes - includes comprehensive test data for all form fields.",
      role_id: defaultRole
        ? String(defaultRole.id)
        : roles.length > 0
        ? String(roles[0].id)
        : "",
      client_type_id: buyerTypeId,
      status_id: defaultStatus ? String(defaultStatus.id) : "",
      stage_id: defaultStage
        ? String(defaultStage.id)
        : buyerStages.length > 0
        ? String(buyerStages[0].id)
        : "",
      last_contact_date: today,
      created_at: "",
      updated_at: "",
      // Address fields
      street_address: "123 Test Street",
      unit_number: "Apt 4B",
      city: "Test City",
      state: "CA",
      zip_code: "90210",
      country: "US",
    });

    // Clear any existing errors
    setErrors({});

    console.log("Dummy buyer data populated in form successfully");
  };

  useEffect(() => {
    let parsedDate: Date | undefined = undefined;
    if (contact?.last_contact_date) {
      const d = new Date(contact.last_contact_date);
      parsedDate = isNaN(d.getTime()) ? undefined : d;
    }

    if (contact) {
      setForm({
        first_name: contact.first_name ?? "",
        middle_name: contact.middle_name ?? "",
        last_name: contact.last_name ?? "",
        nickname: contact.nickname ?? "",
        email: contact.email ?? "",
        mobile_phone: contact.mobile_phone ?? "",
        home_phone: contact.home_phone ?? "",
        work_phone: contact.work_phone ?? "",
        company_id:
          contact.company_id != null ? String(contact.company_id) : "",
        primary_address_id:
          contact.primary_address_id != null
            ? String(contact.primary_address_id)
            : "",
        birth_date: contact.birth_date
          ? new Date(contact.birth_date).toISOString().split("T")[0]
          : "",
        spouse_first_name: contact.spouse_first_name ?? "",
        spouse_middle_name: contact.spouse_middle_name ?? "",
        spouse_last_name: contact.spouse_last_name ?? "",
        spouse_nickname: contact.spouse_nickname ?? "",
        spouse_email: contact.spouse_email ?? "",
        spouse_mobile_phone: contact.spouse_mobile_phone ?? "",
        spouse_birth_date: contact.spouse_birth_date
          ? new Date(contact.spouse_birth_date).toISOString().split("T")[0]
          : "",
        contact_source_id:
          contact.contact_source_id != null
            ? String(contact.contact_source_id)
            : "",
        notes: contact.notes ?? "",
        role_id: contact.role_id != null ? String(contact.role_id) : "",
        client_type_id: buyerTypeId,
        status_id:
          contact.status_id != null
            ? String(contact.status_id)
            : defaultStatus
            ? String(defaultStatus.id)
            : "",
        stage_id: (() => {
          // Determine which stage value to use based on role
          const selectedRole = roles.find((r) => r.id === contact.role_id);

          if (selectedRole?.name.toLowerCase() === "lead") {
            // For leads, use lead_stage_id if available
            return contact.lead_stage_id != null
              ? String(contact.lead_stage_id)
              : leadStages.length > 0
              ? String(leadStages[0].id)
              : "";
          } else {
            // For other roles (like buyer clients), use stage_id
            return contact.stage_id != null
              ? String(contact.stage_id)
              : defaultStage
              ? String(defaultStage.id)
              : buyerStages.length > 0
              ? String(buyerStages[0].id)
              : "";
          }
        })(),
        last_contact_date: parsedDate,
        created_at: contact.created_at
          ? new Date(contact.created_at).toISOString().split("T")[0]
          : "",
        updated_at: contact.updated_at
          ? new Date(contact.updated_at).toISOString().split("T")[0]
          : "",
        // Address fields
        street_address: contact.primary_address?.street_address ?? "",
        unit_number: contact.primary_address?.unit_number ?? "",
        city: contact.primary_address?.city ?? "",
        state: contact.primary_address?.state ?? "",
        zip_code: contact.primary_address?.zip_code ?? "",
        country: contact.primary_address?.country ?? "US",
      });
    } else {
      setForm({
        first_name: "",
        middle_name: "",
        last_name: "",
        nickname: "",
        email: "",
        mobile_phone: "",
        home_phone: "",
        work_phone: "",
        company_id: "",
        primary_address_id: "",
        birth_date: "",
        spouse_first_name: "",
        spouse_middle_name: "",
        spouse_last_name: "",
        spouse_nickname: "",
        spouse_email: "",
        spouse_mobile_phone: "",
        spouse_birth_date: "",
        contact_source_id: "",
        notes: "",
        role_id: defaultRole ? String(defaultRole.id) : "",
        client_type_id: buyerTypeId,
        status_id: defaultStatus ? String(defaultStatus.id) : "",
        stage_id: defaultStage
          ? String(defaultStage.id)
          : buyerStages.length > 0
          ? String(buyerStages[0].id)
          : "",
        last_contact_date: today,
        created_at: "",
        updated_at: "",
        // Address fields
        street_address: "",
        unit_number: "",
        city: "",
        state: "",
        zip_code: "",
        country: "US",
      });
    }
    setErrors({});
    setTouchedFields({});
  }, [
    contact,
    defaultRole,
    defaultStatus,
    buyerTypeId,
    defaultStage,
    buyerStages,
    today,
  ]);

  // Helper function to mark field as touched
  const markFieldAsTouched = (fieldName: string) => {
    setTouchedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
    markFieldAsTouched(name);
  };

  const handleRoleChange = (value: string) => {
    setForm((prev) => ({ ...prev, role_id: value }));
    setErrors((prev) => ({ ...prev, role_id: "" }));
    markFieldAsTouched("role_id");
  };

  const handleStageChange = (value: string) => {
    setForm((prev) => ({ ...prev, stage_id: value }));
    setErrors((prev) => ({ ...prev, stage_id: "" }));
    markFieldAsTouched("stage_id");
  };

  const handleStatusChange = (value: string) => {
    setForm((prev) => ({ ...prev, status_id: value }));
    setErrors((prev) => ({ ...prev, status_id: "" }));
    markFieldAsTouched("status_id");
  };

  const handleContactSourceChange = (value: string) => {
    setForm((prev) => ({ ...prev, contact_source_id: value }));
    setErrors((prev) => ({ ...prev, contact_source_id: "" }));
    markFieldAsTouched("contact_source_id");
  };

  // Add a handler for Nickname
  const handleNicknameChange = (value: string) => {
    setForm((prev) => ({ ...prev, nickname: value }));
    setErrors((prev) => ({ ...prev, nickname: "" }));
    markFieldAsTouched("nickname");
  };

  // Add a handler for MobilePhoneField
  const handleMobilePhoneChange = (val: string) => {
    setForm((prev) => ({ ...prev, mobile_phone: val }));
    setErrors((prev) => ({ ...prev, mobile_phone: "" }));
    markFieldAsTouched("mobile_phone");
  };

  // Add a handler for HomePhoneField
  const handleHomePhoneChange = (val: string) => {
    setForm((prev) => ({ ...prev, home_phone: val }));
    setErrors((prev) => ({ ...prev, home_phone: "" }));
    markFieldAsTouched("home_phone");
  };

  // Add a handler for WorkPhoneField
  const handleWorkPhoneChange = (val: string) => {
    setForm((prev) => ({ ...prev, work_phone: val }));
    setErrors((prev) => ({ ...prev, work_phone: "" }));
    markFieldAsTouched("work_phone");
  };

  // Add a handler for EmailField
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, email: e.target.value }));
    setErrors((prev) => ({ ...prev, email: "" }));
    markFieldAsTouched("email");
  };

  // Add handler for DatePicker
  const handleLastContactDateChange = (dateString: string) => {
    if (dateString) {
      // Parse the ISO date string back to a Date object for the form state
      const date = new Date(dateString + "T12:00:00"); // Add noon time to avoid timezone issues
      setForm((prev) => ({
        ...prev,
        last_contact_date: date,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        last_contact_date: undefined,
      }));
    }
  };

  // Add handlers for spouse fields
  const handleSpouseEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, spouse_email: e.target.value }));
    setErrors((prev) => ({ ...prev, spouse_email: "" }));
    markFieldAsTouched("spouse_email");
  };

  const handleSpouseMobilePhoneChange = (val: string) => {
    setForm((prev) => ({ ...prev, spouse_mobile_phone: val }));
    setErrors((prev) => ({ ...prev, spouse_mobile_phone: "" }));
    markFieldAsTouched("spouse_mobile_phone");
  };

  const handleSpouseBirthDateChange = (dateString: string) => {
    setForm((prev) => ({
      ...prev,
      spouse_birth_date: dateString,
    }));
    setErrors((prev) => ({ ...prev, spouse_birth_date: "" }));
    markFieldAsTouched("spouse_birth_date");
  };

  const handleBirthDateChange = (dateString: string) => {
    setForm((prev) => ({
      ...prev,
      birth_date: dateString,
    }));
    setErrors((prev) => ({ ...prev, birth_date: "" }));
    markFieldAsTouched("birth_date");
  };

  // Add handlers for spouse name fields
  const handleSpouseFirstNameChange = (value: string) => {
    setForm((prev) => ({ ...prev, spouse_first_name: value }));
    setErrors((prev) => ({ ...prev, spouse_first_name: "" }));
    markFieldAsTouched("spouse_first_name");
  };

  const handleSpouseMiddleNameChange = (value: string) => {
    setForm((prev) => ({ ...prev, spouse_middle_name: value }));
    setErrors((prev) => ({ ...prev, spouse_middle_name: "" }));
    markFieldAsTouched("spouse_middle_name");
  };

  const handleSpouseLastNameChange = (value: string) => {
    setForm((prev) => ({ ...prev, spouse_last_name: value }));
    setErrors((prev) => ({ ...prev, spouse_last_name: "" }));
    markFieldAsTouched("spouse_last_name");
  };

  const handleSpouseNicknameChange = (value: string) => {
    setForm((prev) => ({ ...prev, spouse_nickname: value }));
    setErrors((prev) => ({ ...prev, spouse_nickname: "" }));
    markFieldAsTouched("spouse_nickname");
  };

  // Address field handlers
  const handleStreetAddressChange = (value: string) => {
    setForm((prev) => ({ ...prev, street_address: value }));
    setErrors((prev) => ({ ...prev, street_address: "" }));
    markFieldAsTouched("street_address");
  };

  const handleUnitNumberChange = (value: string) => {
    setForm((prev) => ({ ...prev, unit_number: value }));
    setErrors((prev) => ({ ...prev, unit_number: "" }));
    markFieldAsTouched("unit_number");
  };

  const handleCityChange = (value: string) => {
    setForm((prev) => ({ ...prev, city: value }));
    setErrors((prev) => ({ ...prev, city: "" }));
    markFieldAsTouched("city");
  };

  const handleStateChange = (value: string) => {
    setForm((prev) => ({ ...prev, state: value }));
    setErrors((prev) => ({ ...prev, state: "" }));
    markFieldAsTouched("state");
  };

  const handleZipCodeChange = (value: string) => {
    setForm((prev) => ({ ...prev, zip_code: value }));
    setErrors((prev) => ({ ...prev, zip_code: "" }));
    markFieldAsTouched("zip_code");
  };

  const handleCountryChange = (value: string) => {
    setForm((prev) => ({ ...prev, country: value }));
    setErrors((prev) => ({ ...prev, country: "" }));
    markFieldAsTouched("country");
  };

  const handleCompanyNameChange = (value: string) => {
    setForm((prev) => ({ ...prev, company_id: value }));
    setErrors((prev) => ({ ...prev, company_id: "" }));
    markFieldAsTouched("company_id");
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, notes: e.target.value }));
    setErrors((prev) => ({ ...prev, notes: "" }));
    markFieldAsTouched("notes");
  };

  // Delete handlers following examples pattern
  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteConfirm(false);
    // Call onDelete callback
    if (onDelete) {
      onDelete();
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.first_name.trim())
      newErrors.first_name = "First name is required.";
    if (!form.last_name.trim()) newErrors.last_name = "Last name is required.";
    return newErrors;
  };

  const handleSave = async () => {
    if (isSaving) return;
    setIsSaving(true);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSaving(false);
      return;
    }

    // Determine stage field based on role and client type
    const selectedRole = roles.find((r) => r.id === Number(form.role_id));
    const selectedClientType = clientTypes.find(
      (c) => c.id === Number(form.client_type_id)
    );

    let stageData: { lead_stage_id?: string; stage_id?: string } = {};

    if (selectedRole?.name.toLowerCase() === "lead") {
      // For leads, use lead_stage_id
      stageData.lead_stage_id = form.stage_id;
    } else if (
      selectedRole?.name.toLowerCase() === "client" &&
      selectedClientType?.label.toLowerCase() === "buyer"
    ) {
      // For buyer clients, use stage_id (for buyer.stage_id)
      stageData.stage_id = form.stage_id;
    }
    // Other combinations: no stage assignment

    // Prepare contact data (including last_contact_date)
    const contactData = {
      first_name: form.first_name,
      middle_name: form.middle_name,
      last_name: form.last_name,
      nickname: form.nickname,
      email: form.email,
      mobile_phone: form.mobile_phone,
      home_phone: form.home_phone,
      work_phone: form.work_phone,
      company_id: form.company_id ? Number(form.company_id) : undefined,
      primary_address_id: form.primary_address_id
        ? Number(form.primary_address_id)
        : undefined,
      birth_date: form.birth_date
        ? typeof form.birth_date === "string"
          ? form.birth_date
          : (() => {
              const d = form.birth_date as Date;
              return d instanceof Date && !isNaN(d.getTime())
                ? d.toISOString().split("T")[0]
                : undefined;
            })()
        : undefined,
      spouse_first_name: form.spouse_first_name,
      spouse_middle_name: form.spouse_middle_name,
      spouse_last_name: form.spouse_last_name,
      spouse_nickname: form.spouse_nickname,
      spouse_email: form.spouse_email,
      spouse_mobile_phone: form.spouse_mobile_phone,
      spouse_birth_date: form.spouse_birth_date
        ? typeof form.spouse_birth_date === "string"
          ? form.spouse_birth_date
          : (() => {
              const d = form.spouse_birth_date as Date;
              return d instanceof Date && !isNaN(d.getTime())
                ? d.toISOString().split("T")[0]
                : undefined;
            })()
        : undefined,
      contact_source_id: form.contact_source_id
        ? Number(form.contact_source_id)
        : undefined,
      role_id: form.role_id ? Number(form.role_id) : undefined,
      client_type_id: form.client_type_id
        ? Number(form.client_type_id)
        : undefined,
      status_id: form.status_id ? Number(form.status_id) : undefined,
      // (removed duplicate company_id, primary_address_id, contact_source_id)
      notes: form.notes,
      ...stageData, // Add the appropriate stage field based on role/client type
      last_contact_date: (() => {
        const d = form.last_contact_date as Date;
        if (d instanceof Date && !isNaN(d.getTime())) {
          return d.toISOString().split("T")[0];
        }
        if (typeof form.last_contact_date === "string") {
          return form.last_contact_date;
        }
        return undefined;
      })(),
      created_at: form.created_at
        ? typeof form.created_at === "string"
          ? form.created_at
          : (() => {
              const d = form.created_at as Date;
              return d instanceof Date && !isNaN(d.getTime())
                ? d.toISOString().split("T")[0]
                : undefined;
            })()
        : undefined,
      updated_at: form.updated_at
        ? typeof form.updated_at === "string"
          ? form.updated_at
          : (() => {
              const d = form.updated_at as Date;
              return d instanceof Date && !isNaN(d.getTime())
                ? d.toISOString().split("T")[0]
                : undefined;
            })()
        : undefined,
      // Address: send as nested object for backend EF upsert
      primary_address: {
        street_address: form.street_address,
        unit_number: form.unit_number,
        city: form.city,
        state: form.state,
        zip_code: form.zip_code,
        country: form.country,
      },
    };

    let contactId = contact?.id;

    const success = await handleFormError(
      async () => {
        if (contactId) {
          await updateContact(contactId, contactData);
        } else {
          const newContact = await createContact(contactData);
          contactId = newContact.id;
        }
      },
      contact?.id ? "update" : "create",
      "buyer"
    );

    if (success) {
      onSaved?.();
    }

    setIsSaving(false);
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="space-y-6" ref={formRef}>
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Tab
          items={[
            {
              key: "personal",
              title: "Personal",
              content: (
                <div
                  className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4"
                  data-tab-content="personal"
                >
                  <PersonalInfoSection
                    firstName={form.first_name}
                    middleName={form.middle_name}
                    lastName={form.last_name}
                    nickname={form.nickname}
                    email={form.email}
                    mobilePhone={form.mobile_phone}
                    birthDate={form.birth_date}
                    lastContactDate={form.last_contact_date}
                    createdAt={form.created_at}
                    updatedAt={form.updated_at}
                    contactSource={form.contact_source_id}
                    onFirstNameChange={(value: string) => {
                      setForm({ ...form, first_name: value });
                      setErrors((prev) => ({ ...prev, first_name: "" }));
                      markFieldAsTouched("first_name");
                    }}
                    onMiddleNameChange={(value: string) => {
                      setForm({ ...form, middle_name: value });
                      setErrors((prev) => ({ ...prev, middle_name: "" }));
                      markFieldAsTouched("middle_name");
                    }}
                    onLastNameChange={(value: string) => {
                      setForm({ ...form, last_name: value });
                      setErrors((prev) => ({ ...prev, last_name: "" }));
                      markFieldAsTouched("last_name");
                    }}
                    onNicknameChange={handleNicknameChange}
                    onEmailChange={handleEmailChange}
                    onMobilePhoneChange={handleMobilePhoneChange}
                    onBirthDateChange={handleBirthDateChange}
                    onLastContactDateChange={handleLastContactDateChange}
                    onCreatedAtChange={(dateString: string) => {
                      setForm((prev) => ({ ...prev, created_at: dateString }));
                      setErrors((prev) => ({ ...prev, created_at: "" }));
                      markFieldAsTouched("created_at");
                    }}
                    onLastUpdatedAtChange={(dateString: string) => {
                      setForm((prev) => ({ ...prev, updated_at: dateString }));
                      setErrors((prev) => ({ ...prev, updated_at: "" }));
                      markFieldAsTouched("updated_at");
                    }}
                    onContactSourceChange={handleContactSourceChange}
                    contactSources={contactSources.map((source) => ({
                      value: String(source.id),
                      label: source.label,
                    }))}
                    errors={errors}
                    touchedFields={touchedFields}
                    isNewRecord={!contact?.id}
                    autoFocusFirstField={
                      isNewRecord && activeTab === "personal"
                    }
                  />
                </div>
              ),
            },
            {
              key: "spouse",
              title: "Spouse",
              content: (
                <div
                  className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4"
                  data-tab-content="spouse"
                >
                  <SpouseInfoSection
                    spouseFirstName={form.spouse_first_name}
                    spouseMiddleName={form.spouse_middle_name}
                    spouseLastName={form.spouse_last_name}
                    spouseNickname={form.spouse_nickname}
                    spouseEmail={form.spouse_email}
                    spouseMobilePhone={form.spouse_mobile_phone}
                    spouseBirthDate={form.spouse_birth_date}
                    onSpouseFirstNameChange={handleSpouseFirstNameChange}
                    onSpouseMiddleNameChange={handleSpouseMiddleNameChange}
                    onSpouseLastNameChange={handleSpouseLastNameChange}
                    onSpouseNicknameChange={handleSpouseNicknameChange}
                    onSpouseEmailChange={handleSpouseEmailChange}
                    onSpouseMobilePhoneChange={handleSpouseMobilePhoneChange}
                    onSpouseBirthDateChange={handleSpouseBirthDateChange}
                    errors={errors}
                    touchedFields={touchedFields}
                    autoFocusFirstField={isNewRecord && activeTab === "spouse"}
                  />
                </div>
              ),
            },
            {
              key: "home",
              title: "Home",
              content: (
                <div
                  className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4"
                  data-tab-content="home"
                >
                  <HomeSection
                    homePhone={form.home_phone}
                    streetAddress={form.street_address}
                    unitNumber={form.unit_number}
                    city={form.city}
                    state={form.state}
                    zipCode={form.zip_code}
                    country={form.country}
                    onHomePhoneChange={handleHomePhoneChange}
                    onStreetAddressChange={handleStreetAddressChange}
                    onUnitNumberChange={handleUnitNumberChange}
                    onCityChange={handleCityChange}
                    onStateChange={handleStateChange}
                    onZipCodeChange={handleZipCodeChange}
                    onCountryChange={handleCountryChange}
                    errors={errors}
                    touchedFields={touchedFields}
                    autoFocusFirstField={isNewRecord && activeTab === "home"}
                  />
                </div>
              ),
            },
            {
              key: "business",
              title: "Business",
              content: (
                <div
                  className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4"
                  data-tab-content="business"
                >
                  <BusinessInfoSection
                    companyName={form.company_id}
                    workPhone={form.work_phone}
                    onCompanyNameChange={handleCompanyNameChange}
                    onWorkPhoneChange={handleWorkPhoneChange}
                    errors={errors}
                    touchedFields={touchedFields}
                    autoFocusFirstField={
                      isNewRecord && activeTab === "business"
                    }
                  />
                </div>
              ),
            },
            {
              key: "status",
              title: "Status",
              content: (
                <div
                  className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-4"
                  data-tab-content="status"
                >
                  <StatusAndRoleSection
                    status={form.status_id}
                    role={form.role_id}
                    stage={form.stage_id}
                    onStatusChange={handleStatusChange}
                    onRoleChange={handleRoleChange}
                    onStageChange={handleStageChange}
                    buyer_statuses={filteredBuyerStatuses}
                    roles={
                      Array.isArray(roles) &&
                      roles.length > 0 &&
                      Object.prototype.hasOwnProperty.call(
                        roles[0],
                        "inPipeline"
                      )
                        ? roles.map((r: any) => ({
                            ...r,
                            in_pipeline: r.in_pipeline ?? r.inPipeline,
                          }))
                        : roles
                    }
                    stages={buyerStages}
                    leadStages={leadStages}
                    clientTypes={clientTypes}
                    clientType={form.client_type_id}
                    errors={errors}
                    touchedFields={touchedFields}
                  />
                </div>
              ),
            },
            {
              key: "notes",
              title: "Notes",
              content: (
                <div
                  className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-1"
                  data-tab-content="notes"
                >
                  <NotesSection
                    notes={form.notes}
                    onNotesChange={handleNotesChange}
                    errors={errors}
                    touchedFields={touchedFields}
                    autoFocusFirstField={isNewRecord && activeTab === "notes"}
                  />
                </div>
              ),
            },
          ]}
          defaultActiveKey="personal"
          onChange={handleTabChange}
        />

        {/* Action Buttons */}
        <div className="mt-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {showDeleteButton && contact?.id && (
              <Button
                variant="ghost"
                size="sm"
                startIcon={<DeleteIcon />}
                onClick={handleDeleteClick}
              >
                Delete Buyer
              </Button>
            )}
            {/* Development Mode: Create Test Data Button - Only show when adding new buyer */}
            {isDevMode && !contact?.id && (
              <Button
                size="sm"
                variant="outline"
                startIcon={<LabIcon />}
                onClick={createDummyRecord}
              >
                Create Test Data
              </Button>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <CancelButton onClick={handleCancel} />
            <SaveButton onClick={handleSave} loading={isSaving} showIcon={true}>
              {contact?.id ? "Save Changes" : "Add Buyer"}
            </SaveButton>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <ModalAlertConfirm
        isOpen={showDeleteConfirm}
        onClose={handleCancelDelete}
        title="Delete Buyer"
        message={
          contact
            ? `Are you sure you want to delete ${
                `${contact.first_name ?? ""} ${
                  contact.last_name ?? ""
                }`.trim() || "this buyer"
              }? This action cannot be undone.`
            : "Are you sure you want to delete this buyer? This action cannot be undone."
        }
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
      />
    </div>
  );
}
