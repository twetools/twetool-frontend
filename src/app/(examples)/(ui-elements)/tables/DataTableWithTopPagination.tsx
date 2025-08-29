"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import DataTable, { DataTableColumn } from "@/components/ui/tables/DataTable";

// Sample data type for pagination demonstrations
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "available" | "out-of-stock" | "discontinued";
  lastUpdated: string;
}

export default function DataTableWithTopPagination() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Professional Wireless Headphones",
      category: "Electronics",
      price: 299.99,
      stock: 45,
      status: "available",
      lastUpdated: "2025-07-25",
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      category: "Furniture",
      price: 449.99,
      stock: 12,
      status: "available",
      lastUpdated: "2025-07-24",
    },
    {
      id: 3,
      name: "Smart Home Security Camera",
      category: "Electronics",
      price: 189.99,
      stock: 0,
      status: "out-of-stock",
      lastUpdated: "2025-07-23",
    },
    {
      id: 4,
      name: "Premium Yoga Mat",
      category: "Fitness",
      price: 79.99,
      stock: 28,
      status: "available",
      lastUpdated: "2025-07-22",
    },
    {
      id: 5,
      name: "Stainless Steel Water Bottle",
      category: "Accessories",
      price: 24.99,
      stock: 150,
      status: "available",
      lastUpdated: "2025-07-21",
    },
    {
      id: 6,
      name: "Bluetooth Speaker Set",
      category: "Electronics",
      price: 159.99,
      stock: 8,
      status: "available",
      lastUpdated: "2025-07-20",
    },
    {
      id: 7,
      name: "Adjustable Standing Desk",
      category: "Furniture",
      price: 699.99,
      stock: 5,
      status: "available",
      lastUpdated: "2025-07-19",
    },
    {
      id: 8,
      name: "Vintage Leather Wallet",
      category: "Accessories",
      price: 89.99,
      stock: 0,
      status: "discontinued",
      lastUpdated: "2025-07-18",
    },
    {
      id: 9,
      name: "Gaming Mechanical Keyboard",
      category: "Electronics",
      price: 199.99,
      stock: 22,
      status: "available",
      lastUpdated: "2025-07-17",
    },
    {
      id: 10,
      name: "Organic Cotton Bedding Set",
      category: "Home",
      price: 129.99,
      stock: 35,
      status: "available",
      lastUpdated: "2025-07-16",
    },
    {
      id: 11,
      name: "Portable Phone Charger",
      category: "Electronics",
      price: 39.99,
      stock: 75,
      status: "available",
      lastUpdated: "2025-07-15",
    },
    {
      id: 12,
      name: "Ceramic Coffee Mug Set",
      category: "Home",
      price: 49.99,
      stock: 60,
      status: "available",
      lastUpdated: "2025-07-14",
    },
    {
      id: 13,
      name: "Professional Art Supplies Kit",
      category: "Art",
      price: 249.99,
      stock: 18,
      status: "available",
      lastUpdated: "2025-07-13",
    },
    {
      id: 14,
      name: "Smart Fitness Tracker",
      category: "Electronics",
      price: 179.99,
      stock: 0,
      status: "out-of-stock",
      lastUpdated: "2025-07-12",
    },
    {
      id: 15,
      name: "Bamboo Kitchen Utensil Set",
      category: "Home",
      price: 34.99,
      stock: 90,
      status: "available",
      lastUpdated: "2025-07-11",
    },
  ]);

  // Define columns for the product table
  const columns: DataTableColumn<Product>[] = [
    {
      key: "name",
      label: "Product Name",
      sortable: true,
      render: (row) => (
        <div>
          <div className="font-medium text-gray-900 dark:text-white">
            {row.name}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            ID: {row.id}
          </div>
        </div>
      ),
    },
    {
      key: "category",
      label: "Category",
      sortable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      key: "price",
      label: "Price",
      sortable: true,
      align: "right",
      headerAlign: "right",
      render: (row) => (
        <span className="font-medium text-gray-900 dark:text-white">
          ${row.price.toFixed(2)}
        </span>
      ),
    },
    {
      key: "stock",
      label: "Stock",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) => (
        <span
          className={`font-medium ${
            row.stock === 0
              ? "text-red-600 dark:text-red-400"
              : row.stock < 10
              ? "text-yellow-600 dark:text-yellow-400"
              : "text-green-600 dark:text-green-400"
          }`}
        >
          {row.stock}
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
            row.status === "available"
              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              : row.status === "out-of-stock"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
              : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {row.status === "available"
            ? "Available"
            : row.status === "out-of-stock"
            ? "Out of Stock"
            : "Discontinued"}
        </span>
      ),
    },
    {
      key: "lastUpdated",
      label: "Last Updated",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) =>
        new Date(row.lastUpdated).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
    },
  ];

  return (
    <ComponentCard title="DataTable with Top Pagination">
      <div className="space-y-8">
        {/* Top Pagination Demonstration */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Dual Pagination Layout
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 mb-4">
            <strong>Features:</strong> Optional top pagination appears inline
            with search controls, bottom pagination remains in standard location
            for optimal user experience
          </div>

          <DataTable
            data={products}
            columns={columns}
            searchPlaceholder="Search products..."
            defaultRowsPerPage={5}
            rowsPerPageOptions={[3, 5, 7]}
            title="Product Inventory"
            desc="Product catalog with dual pagination controls"
            showTopPagination={true}
          />
        </div>

        {/* Comparison with Standard Layout */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Standard Layout (Bottom Only)
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 mb-4">
            <strong>Default Behavior:</strong> When showTopPagination is false
            (default), only bottom pagination is displayed
          </div>

          <DataTable
            data={products}
            columns={columns}
            searchPlaceholder="Search products..."
            defaultRowsPerPage={5}
            rowsPerPageOptions={[3, 5, 7]}
            title="Product Inventory (Standard)"
            desc="Same data with standard single pagination"
            showTopPagination={false}
          />
        </div>

        {/* Implementation Information */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Implementation Details
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Top Pagination:</strong> Appears horizontally aligned with
              search field, automatically hidden when not needed (single page)
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Bottom Pagination:</strong> Standard location with
              additional controls like "Show entries" and entry count
              information
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Responsive Design:</strong> Both pagination controls adapt
              to screen size and maintain visual consistency
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Synchronized State:</strong> Both pagination controls stay
              in sync and provide identical navigation functionality
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
