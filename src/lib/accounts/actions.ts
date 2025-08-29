// src/lib/accounts/actions.ts
// Fetches account data from backend API for server components

export interface Account {
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
  isActive?: boolean;
}

export async function getAllAccounts(): Promise<Account[]> {
  // Adjust the URL if your API endpoint is different
  const res = await fetch("http://localhost:5000/api/accounts", {
    // Next.js server components: revalidate on every request
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch accounts");
  return res.json();
}
