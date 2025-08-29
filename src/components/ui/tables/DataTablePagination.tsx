import React from "react";
import PaginationWithIcon from "@/components/ui/tables/PaginationWithIcon";
import ShowEntries from "@/components/ui/tables/ShowEntries";

interface DataTablePaginationProps {
  startIndex: number;
  endIndex: number;
  totalEntries: number;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  handleRowsPerPageChange: (value: string) => void;
}

const DataTablePagination: React.FC<DataTablePaginationProps> = ({
  startIndex,
  endIndex,
  totalEntries,
  totalPages,
  currentPage,
  onPageChange,
  rowsPerPage,
  rowsPerPageOptions,
  handleRowsPerPageChange,
}) => {
  return (
    <div className="border border-t-0 border-gray-100 py-3 px-4 dark:border-white/[0.05]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Left side: Per page control and showing info */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <ShowEntries
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={rowsPerPageOptions}
            handleRowsPerPageChange={handleRowsPerPageChange}
          />
          <div className="hidden sm:block w-px h-4 bg-gray-200 dark:bg-gray-700"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing {startIndex + 1} to {endIndex} of {totalEntries} entries
          </p>
        </div>

        {/* Right side: Pagination */}
        {totalPages > 1 && (
          <PaginationWithIcon
            totalPages={totalPages}
            initialPage={currentPage}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default DataTablePagination;
