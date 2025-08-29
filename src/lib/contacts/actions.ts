// Delete a contact by ID
export async function deleteContact(id: number): Promise<void> {
  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
  const url = `${API_BASE.replace(/\/$/, "")}/api/contact/${id}`;
  try {
    const res = await fetch(url, {
      method: "DELETE",
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed to delete contact: ${res.status} ${res.statusText} - ${errorText}`
      );
    }
    // No content expected on success
    return;
  } catch (error: any) {
    throw new Error(
      `Network error while deleting contact: ${error?.message || error}`
    );
  }
}
// Example: Fetch all contacts from the backend API
export async function getAllContacts(): Promise<Contact[]> {
  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
  const url = `${API_BASE.replace(/\/$/, "")}/api/contact`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed to fetch contacts: ${res.status} ${res.statusText} - ${errorText}`
      );
    }
    return res.json();
  } catch (error: any) {
    throw new Error(
      `Network error while fetching contacts: ${error?.message || error}`
    );
  }
}
// Lookup data stubs (replace with real API calls or data as needed)
export async function getRoles() {
  // Matches contact_role table
  return [
    { id: 1, name: "Lead", inPipeline: true },
    { id: 2, name: "Client", inPipeline: true },
    { id: 3, name: "Vendor", inPipeline: false },
    { id: 4, name: "Referral", inPipeline: false },
  ];
}

export async function getBuyerStatuses() {
  // Matches buyer_status table
  return [
    { id: 1, name: "Active", inPipeline: true },
    { id: 2, name: "Inactive", inPipeline: true },
    { id: 3, name: "Under Contract", inPipeline: true },
    { id: 4, name: "Closed", inPipeline: false },
    { id: 5, name: "Terminated", inPipeline: false },
  ];
}

export async function getClientTypes() {
  // Matches client_type table
  return [
    { id: 1, label: "Buyer", description: "Interested in purchasing property" },
    { id: 2, label: "Seller", description: "Looking to sell property" },
  ];
}

export async function getContactSources() {
  // Matches contact_source table
  return [
    {
      id: 1,
      label: "Website",
      category: "Digital",
      description: "Organic website inquiries",
      active: true,
    },
    {
      id: 2,
      label: "Referral",
      category: "Personal",
      description: "Client or professional referrals",
      active: true,
    },
    {
      id: 3,
      label: "Social Media",
      category: "Digital",
      description: "Social media platforms",
      active: true,
    },
    {
      id: 4,
      label: "Open House",
      category: "Event",
      description: "Open house attendees",
      active: true,
    },
    {
      id: 5,
      label: "Cold Call",
      category: "Outbound",
      description: "Cold calling campaigns",
      active: true,
    },
    {
      id: 6,
      label: "Advertisement",
      category: "Marketing",
      description: "Paid advertising campaigns",
      active: true,
    },
    {
      id: 7,
      label: "Walk-in",
      category: "Direct",
      description: "Direct office visits",
      active: true,
    },
  ];
}

export async function getBuyerStages() {
  // Matches buyer_stage table
  return [
    {
      id: 1,
      label: "Engaged",
      position: 1,
      description: "Buyer agreement signed; ready to begin formal process",
      active: true,
    },
    {
      id: 2,
      label: "Needs Assessment",
      position: 2,
      description: "Understanding buyer requirements and preferences",
      active: true,
    },
    {
      id: 3,
      label: "Property Showing",
      position: 3,
      description: "Actively showing properties to buyer",
      active: true,
    },
    {
      id: 4,
      label: "Offer Preparation",
      position: 4,
      description: "Preparing and submitting offers",
      active: true,
    },
    {
      id: 5,
      label: "Under Contract",
      position: 5,
      description: "Offer accepted, transaction in progress",
      active: true,
    },
    {
      id: 6,
      label: "Closing",
      position: 6,
      description: "Final stages before transaction completion",
      active: true,
    },
    {
      id: 7,
      label: "Closed",
      position: 7,
      description: "Transaction successfully completed",
      active: true,
    },
    {
      id: 8,
      label: "Follow-up",
      position: 8,
      description: "Post-transaction relationship maintenance",
      active: true,
    },
  ];
}

export async function getLeadStages() {
  // Matches lead_stage table
  return [
    {
      id: 1,
      label: "New Lead",
      position: 1,
      description: "Initial contact or inquiry",
      active: true,
    },
    {
      id: 2,
      label: "Qualified",
      position: 2,
      description: "Lead has been qualified and shows genuine interest",
      active: true,
    },
    {
      id: 3,
      label: "Nurturing",
      position: 3,
      description: "Ongoing communication and relationship building",
      active: true,
    },
    {
      id: 4,
      label: "Ready to Convert",
      position: 4,
      description: "Lead is ready to become an active client",
      active: true,
    },
    {
      id: 5,
      label: "Converted",
      position: 5,
      description: "Lead has become an active client",
      active: true,
    },
    {
      id: 6,
      label: "Lost",
      position: 6,
      description: "Lead did not convert and is no longer active",
      active: false,
    },
  ];
}

import type { ContactInput, Contact } from "@/types/contacts";

// Utility: Convert object keys to PascalCase for .NET backend
function toPascalCaseKey(key: string): string {
  return key
    .replace(/(^|_)([a-z])/g, (_, __, c) => c.toUpperCase()) // snake_case to PascalCase
    .replace(
      /([A-Z])([A-Z]+)([a-z])/g,
      (_, a, b, c) => a + b.toLowerCase() + c
    ); // handle ALLCAPS
}

function mapKeysToPascalCase(obj: any): any {
  if (Array.isArray(obj)) return obj.map(mapKeysToPascalCase);
  if (obj && typeof obj === "object") {
    const mapped: any = {};
    for (const [k, v] of Object.entries(obj)) {
      // Only map own properties
      if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;
      const pascalKey = toPascalCaseKey(k);
      mapped[pascalKey] = mapKeysToPascalCase(v);
    }
    return mapped;
  }
  return obj;
}

export async function createContact(data: ContactInput): Promise<Contact> {
  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
  const url = `${API_BASE.replace(/\/$/, "")}/api/contact`;
  try {
    // Defensive: Remove/omit any field with empty string, undefined, or null (prevents all similar backend validation errors)
    let pascalData = mapKeysToPascalCase({ ...data });
    for (const key of Object.keys(pascalData)) {
      if (
        pascalData[key] === "" ||
        pascalData[key] === undefined ||
        pascalData[key] === null
      ) {
        delete pascalData[key];
      }
    }
    // Defensive: Required fields check
    if (!pascalData.FirstName) {
      throw new Error("First name is required");
    }
    if (!pascalData.LastName) {
      throw new Error("Last name is required");
    }
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pascalData),
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed to create contact: ${res.status} ${res.statusText} - ${errorText}`
      );
    }
    return res.json();
  } catch (error: any) {
    throw new Error(
      `Network error while creating contact: ${error?.message || error}`
    );
  }
}

export async function updateContact(
  id: number,
  data: Partial<ContactInput>
): Promise<Contact> {
  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
  const url = `${API_BASE.replace(/\/$/, "")}/api/contact/${id}`;
  try {
    // Defensive: Remove/omit any field with empty string, undefined, or null (prevents all similar backend validation errors)
    let pascalData = mapKeysToPascalCase({ ...data });
    // Always include Id property for backend validation
    pascalData.Id = id;
    for (const key of Object.keys(pascalData)) {
      if (
        pascalData[key] === "" ||
        pascalData[key] === undefined ||
        pascalData[key] === null
      ) {
        delete pascalData[key];
      }
    }
    // Defensive: Required fields check
    if (!pascalData.FirstName) {
      throw new Error("First name is required");
    }
    if (!pascalData.LastName) {
      throw new Error("Last name is required");
    }
    // Send flat object (not wrapped)
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pascalData),
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed to update contact: ${res.status} ${res.statusText} - ${errorText}`
      );
    }
    // Handle 204 No Content (no JSON body)
    if (res.status === 204) {
      return { id } as Contact;
    }
    return res.json();
  } catch (error: any) {
    throw new Error(
      `Network error while updating contact: ${error?.message || error}`
    );
  }
}
