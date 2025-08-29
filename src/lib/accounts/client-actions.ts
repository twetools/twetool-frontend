// Client-side actions for accounts (delete, update, etc.)
export async function deleteAccount(accountID: number): Promise<void> {
  const res = await fetch(`/api/accounts/${accountID}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete account");
}
