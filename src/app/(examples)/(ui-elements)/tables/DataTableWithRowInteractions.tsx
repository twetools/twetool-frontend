"use client";

import React, { useState } from "react";
import DataTable from "@/components/ui/tables/DataTable";
import type { DataTableColumn } from "@/components/ui/tables/DataTable";

// Simple Badge component for the example
const Badge = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <span className={className}>{children}</span>;

// Sample data type for contact interaction
interface Contact {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive" | "pending";
  lastContact: string;
  priority: "high" | "medium" | "low";
  clickable: boolean;
}

// Sample data
const contactData: Contact[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "active",
    lastContact: "2024-01-15",
    priority: "high",
    clickable: true,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    status: "pending",
    lastContact: "2024-01-14",
    priority: "medium",
    clickable: true,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    status: "inactive",
    lastContact: "2024-01-10",
    priority: "low",
    clickable: false, // This row won't be clickable
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@example.com",
    status: "active",
    lastContact: "2024-01-16",
    priority: "high",
    clickable: true,
  },
  {
    id: 5,
    name: "Edward Wilson",
    email: "edward@example.com",
    status: "pending",
    lastContact: "2024-01-13",
    priority: "medium",
    clickable: true,
  },
];

// Badge component for status
const StatusBadge = ({ status }: { status: Contact["status"] }) => {
  const variants = {
    active:
      "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
    inactive: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
    pending:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
  };

  return (
    <Badge
      className={`${variants[status]} px-2 py-1 text-xs font-medium rounded-full`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

// Priority Badge component
const PriorityBadge = ({ priority }: { priority: Contact["priority"] }) => {
  const variants = {
    high: "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300",
    medium:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300",
    low: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300",
  };

  return (
    <Badge
      className={`${variants[priority]} px-2 py-1 text-xs font-medium rounded-full`}
    >
      {priority.toUpperCase()}
    </Badge>
  );
};

export default function DataTableWithRowInteractions() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [actionLog, setActionLog] = useState<string[]>([]);

  // Column definitions
  const columns: DataTableColumn<Contact>[] = [
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
      key: "status",
      label: "Status",
      sortable: true,
      render: (contact) => <StatusBadge status={contact.status} />,
    },
    {
      key: "lastContact",
      label: "Last Contact",
      sortable: true,
      render: (contact) => new Date(contact.lastContact).toLocaleDateString(),
    },
    {
      key: "priority",
      label: "Priority",
      sortable: true,
      render: (contact) => <PriorityBadge priority={contact.priority} />,
    },
    {
      key: "clickable",
      label: "Clickable",
      render: (contact) => (
        <span className={contact.clickable ? "text-green-600" : "text-red-600"}>
          {contact.clickable ? "✓" : "✗"}
        </span>
      ),
    },
  ];

  // Handle row click
  const handleRowClick = (contact: Contact) => {
    setSelectedContact(contact);
    const timestamp = new Date().toLocaleTimeString();
    setActionLog((prev) => [
      `${timestamp}: Clicked on ${contact.name} (ID: ${contact.id})`,
      ...prev.slice(0, 4), // Keep only last 5 entries
    ]);
  };

  // Determine if row should be clickable
  const isRowClickable = (contact: Contact) => {
    return contact.clickable;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          DataTable with Row Interactions
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Example demonstrating clickable rows with conditional interaction
          based on data properties. Rows with clickable=true will show hover
          effects and respond to clicks.
        </p>
      </div>

      {/* DataTable with row interactions */}
      <DataTable
        data={contactData}
        columns={columns}
        searchPlaceholder="Search contacts..."
        defaultRowsPerPage={10}
        onRowClick={handleRowClick}
        isRowClickable={isRowClickable}
        rowHoverClassName="hover:bg-brand-50 dark:hover:bg-brand-900/20"
      />

      {/* Selected Contact Display */}
      {selectedContact && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Selected Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Name</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {selectedContact.name}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Email</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {selectedContact.email}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Status</p>
              <StatusBadge status={selectedContact.status} />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Priority
              </p>
              <PriorityBadge priority={selectedContact.priority} />
            </div>
          </div>
        </div>
      )}

      {/* Action Log */}
      {actionLog.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Recent Actions
          </h3>
          <div className="space-y-1">
            {actionLog.map((action, index) => (
              <p
                key={index}
                className="text-sm text-gray-600 dark:text-gray-300 font-mono"
              >
                {action}
              </p>
            ))}
          </div>
          <button
            onClick={() => setActionLog([])}
            className="mt-2 text-sm text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
          >
            Clear Log
          </button>
        </div>
      )}

      {/* Usage Example */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
          Implementation Notes
        </h3>
        <div className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
          <p>
            <strong>onRowClick:</strong> Function called when a clickable row is
            clicked
          </p>
          <p>
            <strong>isRowClickable:</strong> Function that determines if a row
            should be interactive
          </p>
          <p>
            <strong>rowHoverClassName:</strong> CSS classes applied to clickable
            rows on hover
          </p>
          <p>
            <strong>Visual Cues:</strong> Clickable rows show cursor-pointer and
            hover effects
          </p>
        </div>
      </div>
    </div>
  );
}
