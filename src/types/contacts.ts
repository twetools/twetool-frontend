export interface Contact {
  id?: number;
  first_name: string; // Required field
  middle_name?: string | null;
  last_name: string; // Required field
  nickname?: string | null;
  email?: string | null;
  mobile_phone?: string | null;
  home_phone?: string | null;
  work_phone?: string | null;
  work_phone_ext?: string | null;
  birth_date?: string | Date;
  role_id?: number | null;
  client_type_id?: string | number;
  contact_source_id?: number | null;
  company_id?: number;
  primary_address_id?: number;
  spouse_first_name?: string;
  spouse_middle_name?: string;
  spouse_last_name?: string;
  spouse_nickname?: string;
  spouse_email?: string;
  spouse_mobile_phone?: string;
  spouse_birth_date?: string | Date;
  notes?: string | null;
  last_contact_date?: Date | string | null;
  created_at?: Date | string | null;
  buyer?: {
    stage_id?: number | null;
    status_id?: number | null;
  } | null;
  company?: {
    id: number;
    name: string;
  } | null;
  primary_address?: {
    id: number;
    street_address: string;
    city: string;
    state: string;
    zip_code: string;
  } | null;
}

export type Role = {
  id: number;
  name: string;
};

export type ContactType = {
  id: number;
  label: string;
};

export type Status = {
  id: number;
  name: string;
};

export type ContactSource = {
  id: number;
  label: string;
  category?: string | null;
  description?: string | null;
  active?: boolean;
};

export interface Address {
  id: number;
  street_address: string;
  unit_number?: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  address_type: string;
  latitude?: number;
  longitude?: number;
}

export interface Company {
  id: number;
  name: string;
  legal_name?: string;
  tax_id?: string;
  phone?: string;
  email?: string;
  website?: string;
  industry?: string;
  address_id?: number;
  notes?: string;
}

export interface Agent {
  id: number;
  contact_id: number;
  license_number?: string;
  license_state?: string;
  license_expiry?: Date;
  specialties?: string;
  years_experience?: number;
  commission_rate?: number;
  company_id?: number;
  office_address_id?: number;
}

export interface Vendor {
  id: number;
  contact_id: number;
  vendor_type_id?: number;
  license_number?: string;
  license_state?: string;
  license_expiry?: Date;
  service_area?: string;
  hourly_rate?: number;
  company_id?: number;
  business_address_id?: number;
}

export interface Property {
  id: number;
  mls_number?: string;
  address_id: number;
  property_type: string;
  bedrooms?: number;
  bathrooms?: number;
  square_feet?: number;
  lot_size?: number;
  year_built?: number;
  garage_spaces?: number;
  description?: string;
  listing_price?: number;
  list_date?: Date;
  status: string;
}

export interface Transaction {
  id: number;
  property_id: number;
  buyer_contact_id?: number;
  seller_contact_id?: number;
  buyer_agent_id?: number;
  seller_agent_id?: number;
  listing_agent_id?: number;
  transaction_type: string;
  offer_price?: number;
  sale_price?: number;
  earnest_money?: number;
  financing_type?: string;
  loan_amount?: number;
  down_payment?: number;
  closing_costs?: number;
  commission_rate?: number;
  status_id?: number;
  workflow_id?: number;
  contract_date?: Date;
  inspection_date?: Date;
  appraisal_date?: Date;
  financing_deadline?: Date;
  closing_date?: Date;
  possession_date?: Date;
}

export interface Showing {
  id: number;
  property_id: number;
  contact_id?: number;
  agent_id?: number;
  transaction_id?: number;
  scheduled_date: Date;
  duration_minutes?: number;
  status_id?: number;
  feedback?: string;
  notes?: string;
}

export interface Workflow {
  id: number;
  name: string;
  description?: string;
  workflow_type: string;
  steps: any; // JSON field
  active: boolean;
}

export interface WorkflowStep {
  id: number;
  workflow_id: number;
  step_order: number;
  step_name: string;
  description?: string;
  required: boolean;
  estimated_days?: number;
  dependencies?: any; // JSON field
}

export interface TransactionStatus {
  id: number;
  name: string;
  description?: string;
  status_type: string;
  color?: string;
  is_final: boolean;
  active: boolean;
}

export interface Valuation {
  id: number;
  property_id: number;
  valuation_type: string;
  value: number;
  valuation_date: Date;
  appraiser_name?: string;
  methodology?: string;
  confidence_level?: string;
  notes?: string;
  documents?: any; // JSON field
}

// Input type for creating contacts with validation
export interface ContactInput {
  first_name: string; // Required - must not be empty
  middle_name?: string;
  last_name: string; // Required - must not be empty
  nickname?: string;
  email?: string;
  mobile_phone?: string;
  home_phone?: string;
  work_phone?: string;
  work_phone_ext?: string;
  birth_date?: string | Date;
  role_id?: number;
  client_type_id?: string | number;
  contact_source_id?: number;
  company_id?: number;
  primary_address_id?: number;
  spouse_first_name?: string;
  spouse_middle_name?: string;
  spouse_last_name?: string;
  spouse_nickname?: string;
  spouse_email?: string;
  spouse_mobile_phone?: string;
  spouse_birth_date?: string | Date;
  notes?: string;
}

// Validation function for contact input
export function validateContactInput(data: any): ContactInput {
  if (!data.first_name || data.first_name.trim() === "") {
    throw new Error("First name is required");
  }
  if (!data.last_name || data.last_name.trim() === "") {
    throw new Error("Last name is required");
  }

  return {
    first_name: data.first_name.trim(),
    last_name: data.last_name.trim(),
    middle_name: data.middle_name?.trim() || undefined,
    nickname: data.nickname?.trim() || undefined,
    email: data.email?.trim() || undefined,
    mobile_phone: data.mobile_phone?.trim() || undefined,
    home_phone: data.home_phone?.trim() || undefined,
    work_phone: data.work_phone?.trim() || undefined,
    work_phone_ext: data.work_phone_ext?.trim() || undefined,
    birth_date: data.birth_date || undefined,
    role_id: data.role_id || undefined,
    client_type_id: data.client_type_id || undefined,
    contact_source_id: data.contact_source_id || undefined,
    company_id: data.company_id || undefined,
    primary_address_id: data.primary_address_id || undefined,
    spouse_first_name: data.spouse_first_name?.trim() || undefined,
    spouse_middle_name: data.spouse_middle_name?.trim() || undefined,
    spouse_last_name: data.spouse_last_name?.trim() || undefined,
    spouse_nickname: data.spouse_nickname?.trim() || undefined,
    spouse_email: data.spouse_email?.trim() || undefined,
    spouse_mobile_phone: data.spouse_mobile_phone?.trim() || undefined,
    spouse_birth_date: data.spouse_birth_date || undefined,
    notes: data.notes?.trim() || undefined,
  };
}
