"use client";
import React, { useState } from "react";
import DataTable, { DataTableColumn } from "@/components/ui/tables/DataTable";
import AddButton from "@/components/ui/button/AddButton";
import NewUser from "@/components/forms/user/NewUser";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { UsersIcon } from "@/icons";

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

interface UserTableProps {
  users: User[];
}

export default function UserTable({ users: initialUsers }: UserTableProps) {
  const columns: DataTableColumn<User>[] = [
    {
      key: "userID",
      label: "User ID",
      sortable: true,
      headerAlign: "center",
      align: "center",
    },
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    {
      key: "phone",
      label: "Phone",
      sortable: true,
      headerAlign: "center",
      align: "center",
    },
    { key: "addressLine1", label: "Address Line 1", sortable: true },
    { key: "addressLine2", label: "Address Line 2", sortable: true },
    { key: "city", label: "City", sortable: true },
    { key: "state", label: "State", sortable: true },
    {
      key: "zipCode",
      label: "Zip Code",
      sortable: true,
      headerAlign: "center",
      align: "center",
    },
  ];

  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [showNewUser, setShowNewUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";
      const res = await fetch(`${baseUrl}/api/users`);
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
    } finally {
      setLoading(false);
    }
  };

  const handleRowClick = (row: User) => {
    setEditUser(row);
    setShowNewUser(true);
  };

  const handleAddUser = () => {
    setEditUser(null);
    setShowNewUser(true);
  };

  const handleClose = async () => {
    setShowNewUser(false);
    await fetchUsers();
  };

  if (showNewUser) {
    return (
      <NewUser
        user={editUser ?? undefined}
        onClose={handleClose}
        showDeleteButton={!!editUser}
        onSaved={handleClose}
        onDelete={handleClose}
      />
    );
  }
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Users" icon={<UsersIcon />} />
      <DataTable
        data={users}
        columns={columns}
        addButton={
          <AddButton showIcon={true} size="sm" onClick={handleAddUser}>
            Add User
          </AddButton>
        }
        searchPlaceholder="Search Users..."
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
