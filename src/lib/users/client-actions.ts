// Client-side actions for users (delete, update, etc.)
export async function deleteUser(userID: number): Promise<void> {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
  const res = await fetch(`${baseUrl}/api/users/${userID}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete user");
}
