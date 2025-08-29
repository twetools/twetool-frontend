import { getAllUsers } from "@/lib/users/actions";
import UserTable from "./UserTable";

export const metadata = {
  title: "Users | twetool",
  description: "This is the Users page for twetool.",
};

export default async function UsersPage() {
  const users = await getAllUsers();
  return <UserTable users={users} />;
}
