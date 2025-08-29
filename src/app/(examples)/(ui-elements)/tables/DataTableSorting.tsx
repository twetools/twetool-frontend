"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import DataTable, { DataTableColumn } from "@/components/ui/tables/DataTable";

// Sample data type for sorting demonstrations
interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  status: "completed" | "pending" | "cancelled";
}

export default function DataTableSorting() {
  const [transactions] = useState<Transaction[]>([
    {
      id: 1,
      date: "2025-07-25",
      description: "Office Supplies Purchase",
      amount: -150.0,
      type: "expense",
      category: "Office",
      status: "completed",
    },
    {
      id: 2,
      date: "2025-07-24",
      description: "Client Payment - Project Alpha",
      amount: 2500.0,
      type: "income",
      category: "Revenue",
      status: "completed",
    },
    {
      id: 3,
      date: "2025-07-23",
      description: "Software License Renewal",
      amount: -299.99,
      type: "expense",
      category: "Software",
      status: "pending",
    },
    {
      id: 4,
      date: "2025-07-22",
      description: "Consulting Services",
      amount: 1200.0,
      type: "income",
      category: "Services",
      status: "completed",
    },
    {
      id: 5,
      date: "2025-07-21",
      description: "Team Lunch",
      amount: -85.5,
      type: "expense",
      category: "Meals",
      status: "cancelled",
    },
    {
      id: 6,
      date: "2025-07-20",
      description: "Monthly Retainer",
      amount: 3000.0,
      type: "income",
      category: "Revenue",
      status: "completed",
    },
    {
      id: 7,
      date: "2025-07-19",
      description: "Marketing Campaign",
      amount: -750.0,
      type: "expense",
      category: "Marketing",
      status: "pending",
    },
  ]);

  // Define columns with various sorting behaviors
  const columns: DataTableColumn<Transaction>[] = [
    {
      key: "date",
      label: "Date",
      sortable: true,
      align: "left",
      headerAlign: "left",
      render: (row) =>
        new Date(row.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
    },
    {
      key: "description",
      label: "Description",
      sortable: true,
      render: (row) => (
        <div>
          <div className="font-medium text-gray-900 dark:text-white">
            {row.description}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {row.category}
          </div>
        </div>
      ),
    },
    {
      key: "amount",
      label: "Amount",
      sortable: true,
      align: "right",
      headerAlign: "right",
      render: (row) => (
        <span
          className={`font-medium ${
            row.amount > 0
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {row.amount > 0 ? "+" : ""}${Math.abs(row.amount).toFixed(2)}
        </span>
      ),
    },
    {
      key: "type",
      label: "Type",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            row.type === "income"
              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {row.type}
        </span>
      ),
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
            row.status === "completed"
              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              : row.status === "pending"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
              : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      key: "id",
      label: "ID",
      sortable: true,
      align: "center",
      headerAlign: "center",
      hidden: true, // Hidden by default to show hidden column feature
    },
  ];

  // Visible columns toggle for demonstration
  const [showHiddenColumns, setShowHiddenColumns] = useState(false);
  const visibleColumns = columns.map((col) => ({
    ...col,
    hidden: col.key === "id" ? !showHiddenColumns : col.hidden,
  }));

  return (
    <ComponentCard title="Data Table Sorting">
      <div className="space-y-8">
        {/* Sorting Demonstration */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Column Sorting
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 mb-4">
            <strong>Features:</strong> Click column headers to sort, automatic
            date/number detection, ascending/descending indicators
          </div>

          <div className="mb-4">
            <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                checked={showHiddenColumns}
                onChange={(e) => setShowHiddenColumns(e.target.checked)}
                className="rounded border-gray-300 dark:border-gray-600"
              />
              Show ID column (hidden column demo)
            </label>
          </div>

          <DataTable
            data={transactions}
            columns={visibleColumns}
            searchPlaceholder="Search transactions..."
            defaultRowsPerPage={7}
            rowsPerPageOptions={[5, 7, 10]}
            title="Transaction History"
            desc="Financial transactions with multi-column sorting"
          />
        </div>

        {/* Sorting Information */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Sorting Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Date Sorting:</strong> Intelligent date comparison for
              chronological order
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Number Sorting:</strong> Proper numerical comparison for
              amounts
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>String Sorting:</strong> Alphabetical sorting for text
              columns
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Visual Indicators:</strong> Arrow icons show sort
              direction
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Column Alignment:</strong> Left, center, right alignment
              options
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Hidden Columns:</strong> Optional column visibility
              control
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
