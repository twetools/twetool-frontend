"use client";
import React, { useState } from "react";
import DataTable, { DataTableColumn } from "@/components/ui/tables/DataTable";
import AddButton from "@/components/ui/button/AddButton";
import NewAccount from "@/components/forms/account/NewAccount";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { UsersIcon } from "@/icons";

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

interface AccountsTableProps {
  accounts: Account[];
}

export default function AccountsTable({
  accounts: initialAccounts,
}: AccountsTableProps) {
  const columns: DataTableColumn<Account>[] = [
    //  { key: "accountID", label: "Account ID", sortable: true },
    { key: "name", label: "Name", sortable: true },
    { key: "contactName", label: "Contact Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    {
      key: "phone",
      label: "Phone",
      sortable: true,
      align: "center",
      headerAlign: "center",
    },
    // { key: "addressLine1", label: "Address Line 1", sortable: true },
    // { key: "addressLine2", label: "Address Line 2", sortable: true },
    { key: "city", label: "City", sortable: true },
    {
      key: "state",
      label: "State",
      sortable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      key: "zipCode",
      label: "Zip Code",
      sortable: true,
      headerAlign: "center",
      align: "center",
    },
    // { key: "taxID", label: "Tax ID", sortable: true },
    {
      key: "isActive",
      label: "Is Active",
      sortable: true,
      headerAlign: "center",
      align: "center",
      render: (row) => (row.isActive ? "Yes" : "No"),
    },
  ];

  const [accounts, setAccounts] = useState<Account[]>(initialAccounts);
  const [editAccount, setEditAccount] = useState<Account | null>(null);
  const [showNewAccount, setShowNewAccount] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchAccounts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/accounts");
      if (!res.ok) throw new Error("Failed to fetch accounts");
      const data = await res.json();
      setAccounts(data);
    } finally {
      setLoading(false);
    }
  };

  const handleRowClick = (row: Account) => {
    setEditAccount(row);
    setShowNewAccount(true);
  };

  const handleAddAccount = () => {
    setEditAccount(null);
    setShowNewAccount(true);
  };

  const handleClose = async () => {
    setShowNewAccount(false);
    await fetchAccounts();
  };

  if (showNewAccount) {
    return (
      <NewAccount
        account={editAccount ?? undefined}
        onClose={handleClose}
        showDeleteButton={!!editAccount}
        onSaved={handleClose}
        onDelete={handleClose}
      />
    );
  }

  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Accounts" icon={<UsersIcon />} />
      <DataTable
        data={accounts}
        columns={columns}
        addButton={
          <AddButton showIcon={true} size="sm" onClick={handleAddAccount}>
            Add Account
          </AddButton>
        }
        searchPlaceholder="Search accounts..."
        defaultRowsPerPage={5}
        rowsPerPageOptions={[5, 10, 15]}
        onRowClick={handleRowClick}
        isRowClickable={() => true}
        rowHoverClassName="hover:bg-brand-50 dark:hover:bg-brand-900/20"
        showCheckboxColumn={false}
      />
    </div>
  );
}
