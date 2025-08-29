"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import DataTable, { DataTableColumn } from "@/components/ui/tables/DataTable";
import MenuActions from "@/components/ui/tables/MenuActions";
import Button from "@/components/ui/button/Button";
import { ModalAlertInfo } from "@/components/ui/modal";
import { PlusIcon, DeleteIcon, EditIcon } from "@/icons";

// Sample data type for action demonstrations
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "available" | "out-of-stock" | "discontinued";
  createdAt: string;
}

export default function DataTableWithActions() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Laptop Pro 15",
      category: "Electronics",
      price: 1299.99,
      stock: 25,
      status: "available",
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      name: "Wireless Mouse",
      category: "Accessories",
      price: 29.99,
      stock: 0,
      status: "out-of-stock",
      createdAt: "2024-02-20",
    },
    {
      id: 3,
      name: "Smartphone X",
      category: "Electronics",
      price: 799.99,
      stock: 15,
      status: "available",
      createdAt: "2024-03-10",
    },
    {
      id: 4,
      name: "Old Model Phone",
      category: "Electronics",
      price: 199.99,
      stock: 5,
      status: "discontinued",
      createdAt: "2023-12-05",
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // Modal state for edit info
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Action handlers
  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const handleDelete = async (productId: number) => {
    // Simulate async operation
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setProducts((prev) => prev.filter((p) => p.id !== productId));
        setSelectedItems((prev) => prev.filter((id) => id !== productId));
        resolve();
      }, 500);
    });
  };

  const handleBulkDelete = () => {
    setProducts((prev) => prev.filter((p) => !selectedItems.includes(p.id)));
    setSelectedItems([]);
  };

  const handleAddNew = () => {
    setShowAddModal(true);
  };

  // Define columns with actions
  const columns: DataTableColumn<Product>[] = [
    {
      key: "name",
      label: "Product Name",
      sortable: true,
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
      render: (row) => `$${row.price.toFixed(2)}`,
    },
    {
      key: "stock",
      label: "Stock",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            row.stock > 10
              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              : row.stock > 0
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
              : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
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
              ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
              : "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
          }`}
        >
          {row.status.replace("-", " ")}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      sortable: false,
      align: "center",
      headerAlign: "center",
      render: (row) => (
        <MenuActions
          onEdit={() => handleEdit(row)}
          onDelete={handleDelete}
          deleteId={row.id}
          deleteConfirmTitle="Delete Product"
          deleteConfirmMessage={`Are you sure you want to delete "${row.name}"? This action cannot be undone.`}
        />
      ),
    },
  ];

  // Bulk actions component
  const bulkActions =
    selectedItems.length > 0 ? (
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {selectedItems.length} selected
        </span>
        <Button
          size="sm"
          variant="outline"
          startIcon={<DeleteIcon className="h-4 w-4" />}
          onClick={handleBulkDelete}
        >
          Delete Selected
        </Button>
      </div>
    ) : (
      <Button size="sm" startIcon={<PlusIcon />} onClick={handleAddNew}>
        Add Product
      </Button>
    );

  return (
    <ComponentCard title="Data Table with Actions">
      <div className="space-y-8">
        {/* Table with Row and Bulk Actions */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Row and Bulk Actions
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 mb-4">
            <strong>Features:</strong> Individual row actions (edit/delete),
            bulk operations, confirmation dialogs, info modals for actions
          </div>

          <DataTable
            data={products}
            columns={columns}
            searchPlaceholder="Search products..."
            defaultRowsPerPage={5}
            rowsPerPageOptions={[5, 10, 15]}
            actions={bulkActions}
            title="Product Management"
            desc="Manage your product inventory with actions"
          />
        </div>

        {/* Action Patterns */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Action Patterns
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Row Actions:</strong> MenuActions component with
              edit/delete and info modals
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Bulk Actions:</strong> Multi-select with batch operations
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Confirmations:</strong> Built-in delete confirmation
              dialogs
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Add Button:</strong> Primary action in table header
            </div>
          </div>
        </div>
      </div>

      {/* Edit Product Modal */}
      <ModalAlertInfo
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit Product"
        message={
          selectedProduct
            ? `You clicked edit for "${selectedProduct.name}" (ID: ${selectedProduct.id}). In a real application, this would open an edit form with the product details.`
            : "No product selected"
        }
        buttonText="Got it, thanks!"
      />

      {/* Add New Product Modal */}
      <ModalAlertInfo
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Product"
        message="You clicked the Add Product button. In a real application, this would open a form to create a new product with fields for name, category, price, and stock."
        buttonText="Understood!"
      />
    </ComponentCard>
  );
}
