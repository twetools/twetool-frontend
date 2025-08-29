"use client";
import React, { useState, useMemo } from "react";

import DataTableBody from "@/components/ui/tables/DataTableBody";
import Checkbox from "@/components/form-elements/input/Checkbox";
import DataTableControls from "@/components/ui/tables/DataTableControls";
import DataTableHeader from "@/components/ui/tables/DataTableHeader";
import DataTablePagination from "@/components/ui/tables/DataTablePagination";
import type { TableFilterGroup } from "@/components/ui/tables/TableFilterGroupBar";

// Helper function to extract text content from React elements
function extractTextFromReactElement(element: any): string {
  if (typeof element === "string") return element;
  if (typeof element === "number") return element.toString();
  if (element == null) return "";

  // Handle React elements
  if (React.isValidElement(element)) {
    const props = element.props as any;

    // If it has children, recursively extract text from children
    if (props?.children) {
      if (Array.isArray(props.children)) {
        return props.children
          .map((child: any) => extractTextFromReactElement(child))
          .join(" ")
          .trim();
      } else {
        return extractTextFromReactElement(props.children);
      }
    }

    // If it's a simple element with text content, try to extract it
    if (typeof props?.children === "string") {
      return props.children;
    }

    // For elements without children, return empty string
    return "";
  }

  // For other types, convert to string
  return String(element);
}

export type DataTableColumn<T> = {
  key: keyof T | string;
  label: React.ReactNode;
  sortable?: boolean;
  render?: (row: T, rowIdx?: number) => React.ReactNode;
  className?: string;
  headerClassName?: string;
  hidden?: boolean;
  align?: "left" | "center" | "right";
  headerAlign?: "left" | "center" | "right";
};

interface DataTableProps<T> {
  selectableRows?: boolean;
  showCheckboxColumn?: boolean; // New prop to control checkbox column visibility
  selectedRows?: T[] | number[];
  onSelectedRowsChange?: (selected: T[] | number[]) => void;
  data: T[];
  columns: DataTableColumn<T>[];
  searchPlaceholder?: string;
  rowsPerPageOptions?: number[];
  defaultRowsPerPage?: number;
  actions?: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  desc?: string;
  addButton?: React.ReactNode;
  groups?: TableFilterGroup[];
  selectedGroup?: string | string[];
  onGroupChange?: (key: string) => void;
  // Row interaction props
  onRowClick?: (row: T) => void;
  isRowClickable?: (row: T) => boolean;
  rowHoverClassName?: string;
  // Pagination display options
  showTopPagination?: boolean; // Show pagination controls above the table in addition to below
}

function DataTable<T>({
  data,
  columns,
  searchPlaceholder = "Search...",
  rowsPerPageOptions = [10, 25, 50, 75, 100],
  defaultRowsPerPage = 10,
  actions,
  className = "",
  title,
  icon,
  desc,
  addButton,
  groups = [],
  selectedGroup,
  onGroupChange,
  onRowClick,
  isRowClickable,
  rowHoverClassName = "hover:bg-brand-50 dark:hover:bg-brand-900/20",
  showTopPagination = false,
  selectableRows = true,
  selectedRows,
  onSelectedRowsChange,
  showCheckboxColumn = true, // Default to true for backward compatibility
}: DataTableProps<T>) {
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState<string>(columns[0]?.key as string);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState("");
  // Selection state
  const [selectedRowIndexes, setSelectedRowIndexes] = useState<number[]>([]);

  // Filtering and sorting logic
  const filteredAndSortedData = useMemo(() => {
    const filtered = data.filter((item: T) =>
      columns
        .map((col) => {
          const value = item[col.key as keyof T];
          if (value == null) return "";
          if (typeof value === "string") return value;
          if (typeof value === "number") return value.toString();
          if (value instanceof Date) return value.toLocaleDateString();
          return "";
        })
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    filtered.sort((a: T, b: T) => {
      // Find the column definition for the current sort key
      const column = columns.find((col) => col.key === sortKey);

      let aValue: any;
      let bValue: any;

      // If column has a render function, use the rendered value for sorting
      if (column?.render) {
        // Get the rendered value as string for sorting
        const aRendered = column.render(a);
        const bRendered = column.render(b);

        // Extract text content from rendered values (including React elements)
        aValue = extractTextFromReactElement(aRendered);
        bValue = extractTextFromReactElement(bRendered);
      } else {
        // Use the raw field value
        aValue = a[sortKey as keyof T];
        bValue = b[sortKey as keyof T];
      }

      if (aValue == null || aValue === "-") return 1;
      if (bValue == null || bValue === "-") return -1;

      // Date comparison
      if (
        aValue instanceof Date ||
        bValue instanceof Date ||
        sortKey.toLowerCase().includes("date") ||
        sortKey === "created_at"
      ) {
        const aTime = aValue
          ? new Date(aValue as unknown as string).getTime()
          : 0;
        const bTime = bValue
          ? new Date(bValue as unknown as string).getTime()
          : 0;
        return sortOrder === "asc" ? aTime - bTime : bTime - aTime;
      }

      const aStr = String(aValue).toLowerCase();
      const bStr = String(bValue).toLowerCase();
      if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
      if (aStr > bStr) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [data, columns, sortKey, sortOrder, searchTerm]);

  const totalPages = Math.ceil(filteredAndSortedData.length / rowsPerPage);

  const currentData = filteredAndSortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalEntries = filteredAndSortedData.length;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalEntries);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowsPerPageChange = (value: string): void => {
    const newRowsPerPage = parseInt(value, 10);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  // Filter out hidden columns for rendering
  const visibleColumns = columns.filter((col) => !col.hidden);

  // Selection logic
  const allRowsSelected =
    selectedRowIndexes.length === currentData.length && currentData.length > 0;
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRowIndexes(currentData.map((_, idx) => idx));
    } else {
      setSelectedRowIndexes([]);
    }
    if (typeof onSelectedRowsChange === "function") {
      onSelectedRowsChange(checked ? currentData : []);
    }
  };
  const handleSelectRow = (rowIdx: number, checked: boolean) => {
    let newSelected;
    if (checked) {
      newSelected = [...selectedRowIndexes, rowIdx];
    } else {
      newSelected = selectedRowIndexes.filter((i) => i !== rowIdx);
    }
    setSelectedRowIndexes(newSelected);
    if (typeof onSelectedRowsChange === "function") {
      onSelectedRowsChange(newSelected.map((i) => currentData[i]));
    }
  };

  // Add checkbox column if selectableRows and showCheckboxColumn are true
  const columnsWithCheckbox =
    selectableRows && showCheckboxColumn
      ? [
          {
            key: "__checkbox__",
            label: (
              <Checkbox
                checked={allRowsSelected}
                onChange={handleSelectAll}
                aria-label="Select all rows"
              />
            ),
            sortable: false,
            className: "w-8",
            headerClassName: "w-8",
            render: (_row: T, rowIdx?: number) => (
              <Checkbox
                checked={
                  typeof rowIdx === "number" &&
                  selectedRowIndexes.includes(rowIdx)
                }
                onChange={(checked) =>
                  typeof rowIdx === "number" && handleSelectRow(rowIdx, checked)
                }
                onClick={(e) => e.stopPropagation()}
                aria-label={
                  typeof rowIdx === "number"
                    ? `Select row ${rowIdx + 1}`
                    : "Select row"
                }
              />
            ),
            align: "center" as const,
            headerAlign: "center" as const,
          },
          ...visibleColumns,
        ]
      : visibleColumns;

  return (
    <div
      className={`datatable-wrapper overflow-hidden rounded-t-xl rounded-b-xl bg-white dark:bg-white/[0.03] ${className}`}
    >
      <DataTableHeader
        title={title}
        icon={icon}
        desc={desc}
        groups={groups}
        selectedGroup={selectedGroup}
        onGroupChange={onGroupChange}
      />

      <DataTableControls
        actions={actions}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchPlaceholder={searchPlaceholder}
        addButton={addButton}
        showTopPagination={showTopPagination}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* Table */}
      <DataTableBody
        data={currentData}
        columns={columnsWithCheckbox}
        sortKey={sortKey}
        sortOrder={sortOrder}
        onSort={handleSort}
        onRowClick={onRowClick}
        isRowClickable={isRowClickable}
        rowHoverClassName={rowHoverClassName}
      />

      <DataTablePagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalEntries={totalEntries}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        handleRowsPerPageChange={handleRowsPerPageChange}
      />
    </div>
  );
}

export default DataTable;
