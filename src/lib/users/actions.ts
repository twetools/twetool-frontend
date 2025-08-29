// src/lib/Users/actions.ts
// Fetches User data from backend API for server components

export interface User {
  userID: number;
  name: string;
  email?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

export async function getAllUsers(): Promise<User[]> {
  // Use env variable for backend API base URL
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
  const res = await fetch(`${baseUrl}/api/users`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch Users");
  return res.json();
}
