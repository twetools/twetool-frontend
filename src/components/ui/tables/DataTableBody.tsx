import React from "react";
import Checkbox from "@/components/form-elements/input/Checkbox";
import DataTableSortButton from "@/components/ui/tables/DataTableSortButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/tables";
import type { DataTableColumn } from "@/components/ui/tables/DataTable";

interface DataTableBodyProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  sortKey: string;
  sortOrder: "asc" | "desc";
  onSort: (key: string) => void;
  // Row interaction props
  onRowClick?: (row: T) => void;
  isRowClickable?: (row: T) => boolean;
  rowHoverClassName?: string;
}

function DataTableBody<T>({
  data,
  columns,
  sortKey,
  sortOrder,
  onSort,
  onRowClick,
  isRowClickable,
  rowHoverClassName = "hover:bg-brand-50 dark:hover:bg-brand-900/20",
}: DataTableBodyProps<T>) {
  // Filter out hidden columns for rendering
  const visibleColumns = columns.filter((col) => !col.hidden);

  return (
    <div className="max-w-full overflow-x-auto custom-scrollbar">
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              {visibleColumns.map((col) => (
                <TableCell
                  key={col.key as string}
                  isHeader
                  className={`datatable-header px-4 py-3 border border-gray-100 dark:border-white/[0.05] whitespace-nowrap ${
                    sortKey === col.key
                      ? "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      : ""
                  } ${col.headerClassName ?? col.className ?? ""} ${
                    col.headerAlign === "center"
                      ? "text-center"
                      : col.headerAlign === "right"
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  {col.sortable !== false ? (
                    <DataTableSortButton
                      isActive={sortKey === col.key}
                      sortOrder={sortOrder}
                      onSort={() => onSort(col.key as string)}
                      align={col.headerAlign}
                    >
                      {col.label}
                    </DataTableSortButton>
                  ) : (
                    <span
                      className={`font-medium text-theme-xs uppercase w-full ${
                        col.headerAlign === "center"
                          ? "text-center"
                          : col.headerAlign === "right"
                          ? "text-right"
                          : "text-left"
                      } text-gray-700 dark:text-gray-400`}
                    >
                      {col.label}
                    </span>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIdx) => {
              const isClickable = isRowClickable ? isRowClickable(row) : false;

              return (
                <TableRow
                  key={rowIdx}
                  className={
                    isClickable
                      ? `cursor-pointer transition-colors duration-200 ${rowHoverClassName}`
                      : ""
                  }
                  onClick={() => isClickable && onRowClick && onRowClick(row)}
                >
                  {visibleColumns.map((col, colIdx) => (
                    <TableCell
                      key={col.key as string}
                      className={`datatable-cell px-4 py-4 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-white/90 whitespace-nowrap ${
                        col.className ?? ""
                      } ${
                        col.align === "center"
                          ? "text-center"
                          : col.align === "right"
                          ? "text-right"
                          : "text-left"
                      }`}
                    >
                      {col.render
                        ? col.render(row, rowIdx)
                        : row[col.key as keyof T] != null
                        ? String(row[col.key as keyof T])
                        : "-"}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default DataTableBody;
