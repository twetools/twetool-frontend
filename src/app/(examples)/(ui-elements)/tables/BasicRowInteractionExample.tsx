"use client";

import React, { useState } from "react";
import DataTable from "@/components/ui/tables/DataTable";
import type { DataTableColumn } from "@/components/ui/tables/DataTable";

// Sample data type
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

// Sample data
const productData: Product[] = [
  {
    id: 1,
    name: "Laptop Pro",
    price: 1299,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 25,
    category: "Electronics",
    inStock: true,
  },
  { id: 3, name: "Coffee Mug", price: 12, category: "Kitchen", inStock: false },
  {
    id: 4,
    name: "Desk Chair",
    price: 199,
    category: "Furniture",
    inStock: true,
  },
  {
    id: 5,
    name: "Monitor",
    price: 299,
    category: "Electronics",
    inStock: false,
  },
];

export default function BasicRowInteractionExample() {
  const [clickedProduct, setClickedProduct] = useState<Product | null>(null);

  // Column definitions
  const columns: DataTableColumn<Product>[] = [
    { key: "name", label: "Product Name", sortable: true },
    { key: "category", label: "Category", sortable: true },
    {
      key: "price",
      label: "Price",
      sortable: true,
      render: (product) => `$${product.price}`,
      align: "right",
    },
    {
      key: "inStock",
      label: "Stock Status",
      render: (product) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            product.inStock
              ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
              : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Basic Row Interaction Example
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Simple example with clickable rows. Only products in stock can be
          clicked.
        </p>
      </div>

      <DataTable
        data={productData}
        columns={columns}
        defaultRowsPerPage={5}
        onRowClick={(product) => setClickedProduct(product)}
        isRowClickable={(product) => product.inStock}
        rowHoverClassName="hover:bg-blue-50 dark:hover:bg-blue-900/20"
      />

      {clickedProduct && (
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100">
            You clicked: {clickedProduct.name}
          </h3>
          <p className="text-blue-700 dark:text-blue-200 text-sm">
            Price: ${clickedProduct.price} | Category: {clickedProduct.category}
          </p>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          Code Example
        </h3>
        <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
          {`<DataTable
  data={productData}
  columns={columns}
  onRowClick={(product) => setClickedProduct(product)}
  isRowClickable={(product) => product.inStock}
  rowHoverClassName="hover:bg-blue-50 dark:hover:bg-blue-900/20"
/>`}
        </pre>
      </div>
    </div>
  );
}
