"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import DataTable, { DataTableColumn } from "@/components/ui/tables/DataTable";

// Sample data type for demonstrations
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  joinDate: string;
  lastLogin?: string;
}

interface BasicDataTableProps {
  showCheckboxColumn?: boolean;
}

export default function BasicDataTable({
  showCheckboxColumn,
}: BasicDataTableProps) {
  // Sample data
  const [users] = useState<User[]>([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "Admin",
      status: "active",
      joinDate: "2024-01-15",
      lastLogin: "2025-07-25",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      role: "User",
      status: "active",
      joinDate: "2024-02-20",
      lastLogin: "2025-07-24",
    },
    {
      id: 3,
      name: "Mike Davis",
      email: "mike.davis@example.com",
      role: "Editor",
      status: "inactive",
      joinDate: "2024-03-10",
      lastLogin: "2025-07-20",
    },
    {
      id: 4,
      name: "Lisa Brown",
      email: "lisa.brown@example.com",
      role: "User",
      status: "active",
      joinDate: "2024-04-05",
    },
    {
      id: 5,
      name: "Tom Wilson",
      email: "tom.wilson@example.com",
      role: "Editor",
      status: "active",
      joinDate: "2024-05-12",
      lastLogin: "2025-07-23",
    },
  ]);

  // Define columns for the basic table
  const columns: DataTableColumn<User>[] = [
    {
      key: "name",
      label: "Name",
      sortable: true,
    },
    {
      key: "email",
      label: "Email",
      sortable: true,
    },
    {
      key: "role",
      label: "Role",
      sortable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            row.status === "active"
              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      key: "joinDate",
      label: "Join Date",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) => new Date(row.joinDate).toLocaleDateString(),
    },
  ];

  return (
    <ComponentCard title="Basic Data Table">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 mb-4">
            <strong>Features:</strong> Built-in search, pagination, sorting, and
            responsive design
          </div>

          <DataTable
            data={users}
            columns={columns}
            searchPlaceholder="Search users..."
            defaultRowsPerPage={5}
            rowsPerPageOptions={[5, 10, 15]}
            showCheckboxColumn={showCheckboxColumn}
          />
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Key Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>✓ Responsive Design:</strong> Horizontal scroll on small
              screens
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>✓ Built-in Search:</strong> Global search across all
              columns
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>✓ Sortable Columns:</strong> Click headers to sort data
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>✓ Pagination:</strong> Configurable rows per page
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
