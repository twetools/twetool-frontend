import { getAllAccounts } from "@/lib/accounts/actions";
import AccountsTable from "./AccountsTable";

export const metadata = {
  title: "Accounts | twetool",
  description: "This is the Accounts page for twetool.",
};

export default async function AccountsPage() {
  const accounts = await getAllAccounts();
  return <AccountsTable accounts={accounts} />;
}
