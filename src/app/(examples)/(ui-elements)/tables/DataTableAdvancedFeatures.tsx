"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import DataTable, { DataTableColumn } from "@/components/ui/tables/DataTable";
import Button from "@/components/ui/button/Button";
import { CopyIcon, PipelineIcon, ArrowRightIcon } from "@/icons";

// Sample data type for advanced features
interface Order {
  id: number;
  orderNumber: string;
  customer: string;
  items: number;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  priority: "low" | "medium" | "high" | "urgent";
  orderDate: string;
  estimatedDelivery?: string;
  notes?: string;
}

export default function DataTableAdvancedFeatures() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      orderNumber: "ORD-2025-0001",
      customer: "Acme Corporation",
      items: 3,
      total: 1250.0,
      status: "processing",
      priority: "high",
      orderDate: "2025-07-20",
      estimatedDelivery: "2025-07-28",
      notes: "Rush order - customer needs by end of week",
    },
    {
      id: 2,
      orderNumber: "ORD-2025-0002",
      customer: "Tech Solutions Inc",
      items: 1,
      total: 599.99,
      status: "shipped",
      priority: "medium",
      orderDate: "2025-07-21",
      estimatedDelivery: "2025-07-26",
    },
    {
      id: 3,
      orderNumber: "ORD-2025-0003",
      customer: "Global Industries",
      items: 5,
      total: 2100.0,
      status: "pending",
      priority: "urgent",
      orderDate: "2025-07-22",
      estimatedDelivery: "2025-07-30",
      notes: "Large order - verify inventory before processing",
    },
    {
      id: 4,
      orderNumber: "ORD-2025-0004",
      customer: "StartUp Co",
      items: 2,
      total: 750.0,
      status: "delivered",
      priority: "low",
      orderDate: "2025-07-18",
      estimatedDelivery: "2025-07-25",
    },
    {
      id: 5,
      orderNumber: "ORD-2025-0005",
      customer: "Enterprise Corp",
      items: 8,
      total: 3200.0,
      status: "cancelled",
      priority: "medium",
      orderDate: "2025-07-19",
      notes: "Customer cancelled due to budget constraints",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  // Simulated data refresh
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // In real app, this would fetch fresh data
    }, 1000);
  };

  // Simulated export
  const handleExport = () => {
    alert("Export functionality would generate CSV/Excel file");
  };

  // Custom actions toolbar
  const customActions = (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant="outline"
        startIcon={<ArrowRightIcon className="h-4 w-4" />}
        onClick={handleRefresh}
        disabled={isLoading}
      >
        {isLoading ? "Refreshing..." : "Refresh"}
      </Button>
      <Button
        size="sm"
        variant="outline"
        startIcon={<CopyIcon className="h-4 w-4" />}
        onClick={handleExport}
      >
        Export
      </Button>
      <Button
        size="sm"
        variant="outline"
        startIcon={<PipelineIcon className="h-4 w-4" />}
        onClick={() => alert("Advanced filtering modal would open")}
      >
        Advanced Filter
      </Button>
    </div>
  );

  // Complex column definitions with custom rendering
  const columns: DataTableColumn<Order>[] = [
    {
      key: "orderNumber",
      label: "Order",
      sortable: true,
      render: (row) => (
        <div>
          <div className="font-medium text-gray-900 dark:text-white">
            {row.orderNumber}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(row.orderDate).toLocaleDateString()}
          </div>
        </div>
      ),
    },
    {
      key: "customer",
      label: "Customer",
      sortable: true,
      render: (row) => (
        <div>
          <div className="font-medium text-gray-900 dark:text-white">
            {row.customer}
          </div>
          {row.notes && (
            <div className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[200px]">
              {row.notes}
            </div>
          )}
        </div>
      ),
    },
    {
      key: "items",
      label: "Items",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) => (
        <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
          {row.items}
        </span>
      ),
    },
    {
      key: "total",
      label: "Total",
      sortable: true,
      align: "right",
      headerAlign: "right",
      render: (row) => (
        <div className="text-right">
          <div className="font-medium text-gray-900 dark:text-white">
            ${row.total.toFixed(2)}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            ${(row.total / row.items).toFixed(2)}/item
          </div>
        </div>
      ),
    },
    {
      key: "priority",
      label: "Priority",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            row.priority === "urgent"
              ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
              : row.priority === "high"
              ? "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400"
              : row.priority === "medium"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
              : "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
          }`}
        >
          {row.priority}
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
        <div className="text-center">
          <span
            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
              row.status === "delivered"
                ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                : row.status === "shipped"
                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                : row.status === "processing"
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                : row.status === "pending"
                ? "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
            }`}
          >
            {row.status}
          </span>
          {row.estimatedDelivery &&
            row.status !== "delivered" &&
            row.status !== "cancelled" && (
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                ETA: {new Date(row.estimatedDelivery).toLocaleDateString()}
              </div>
            )}
        </div>
      ),
    },
  ];

  return (
    <ComponentCard title="Advanced Data Table Features">
      <div className="space-y-8">
        {/* Advanced Table */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Complex Data with Custom Actions
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 mb-4">
            <strong>Features:</strong> Multi-line cells, custom actions toolbar,
            conditional rendering, tooltips
          </div>

          <DataTable
            data={orders}
            columns={columns}
            searchPlaceholder="Search orders..."
            defaultRowsPerPage={5}
            rowsPerPageOptions={[5, 10, 20]}
            actions={customActions}
            title="Order Management"
            desc="Comprehensive order tracking and management"
          />
        </div>

        {/* Feature Summary */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Advanced Features Demonstrated
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Multi-line Cells:</strong> Primary and secondary
              information in single cells
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Custom Actions:</strong> Refresh, export, and advanced
              filtering buttons
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Conditional Rendering:</strong> Show different content
              based on data
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Status Indicators:</strong> Color-coded badges for quick
              recognition
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Calculated Fields:</strong> Dynamic calculations (price
              per item)
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Loading States:</strong> Button disabled states during
              operations
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
