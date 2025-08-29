import React from "react";

import Select from "@/components/form-elements/select/Select";

interface StatusAndRoleSectionProps {
  status: string;
  role: string;
  stage: string;
  onStatusChange: (value: string) => void;
  onRoleChange: (value: string) => void;
  onStageChange: (value: string) => void;
  buyer_statuses: { id: number; name: string; in_pipeline?: boolean }[];
  roles: { id: number; name: string; in_pipeline?: boolean }[];
  stages: {
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
  clientTypes?: { id: number; label: string }[];
  clientType?: string;
  errors: { [key: string]: string };
  touchedFields: { [key: string]: boolean };
}

export default function StatusAndRoleSection({
  status,
  role,
  stage,
  onStatusChange,
  onRoleChange,
  onStageChange,
  buyer_statuses,
  roles,
  stages,
  leadStages = [],
  clientTypes = [],
  clientType,
  errors,
  touchedFields,
}: StatusAndRoleSectionProps) {
  // Only allow "Active" and "Inactive" buyer_statuses for buyers
  const allowedStatusNames = ["active", "inactive"];
  const filteredbuyer_statuses = buyer_statuses.filter((statusItem) =>
    allowedStatusNames.includes(statusItem.name.toLowerCase())
  );

  // Filter roles to only those with in_pipeline true
  const filteredRoles = roles.filter((roleItem) => roleItem.in_pipeline);

  // Determine which stages to show based on role and client_type
  const selectedRole = roles.find((r) => String(r.id) === role);
  const selectedClientType = clientTypes.find(
    (ct) => String(ct.id) === clientType
  );

  const shouldShowLeadStages = selectedRole?.name.toLowerCase() === "lead";
  const shouldShowBuyerStages =
    selectedRole?.name.toLowerCase() === "client" &&
    selectedClientType?.label.toLowerCase() === "buyer";

  // Select appropriate stages based on role and type
  let availableStages: {
    id: number;
    label: string;
    description?: string | null;
    active: boolean;
  }[] = [];

  if (shouldShowLeadStages) {
    availableStages = leadStages.filter((stage) => stage.active);
  } else if (shouldShowBuyerStages) {
    availableStages = stages.filter((stage) => stage.active);
  }
  // For other combinations, no stages are available

  return (
    <>
      <Select
        id="client_status_id"
        name="client_status_id"
        label="Status"
        options={filteredbuyer_statuses.map((statusItem) => ({
          value: String(statusItem.id),
          label: statusItem.name,
        }))}
        placeholder="Select status"
        onChange={onStatusChange}
        value={status}
        error={errors.status_id}
        required={true}
        hasValue={!!status?.trim()}
        hasBeenTouched={touchedFields.status_id}
        className="bg-white dark:bg-gray-900"
      />

      <Select
        id="role_id"
        name="role_id"
        label="Role"
        options={filteredRoles.map((roleItem) => ({
          value: String(roleItem.id),
          label: roleItem.name,
        }))}
        placeholder="Select a role"
        onChange={onRoleChange}
        value={role}
        error={errors.role_id}
        required={true}
        hasValue={!!role?.trim()}
        hasBeenTouched={touchedFields.role_id}
        className="bg-white dark:bg-gray-900"
      />

      <Select
        id="stage_id"
        name="stage_id"
        label="Stage"
        options={availableStages.map((stageItem) => ({
          value: String(stageItem.id),
          label: stageItem.label,
        }))}
        placeholder="Select stage"
        onChange={onStageChange}
        value={stage}
        error={errors.stage_id}
        required={true}
        hasValue={!!stage?.trim()}
        hasBeenTouched={touchedFields.stage_id}
        className="bg-white dark:bg-gray-900"
      />
    </>
  );
}
