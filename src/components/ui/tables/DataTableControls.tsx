import React from "react";
import SearchField from "@/components/ui/tables/SearchField";
import PaginationWithIcon from "@/components/ui/tables/PaginationWithIcon";

interface DataTableControlsProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  searchPlaceholder: string;
  actions?: React.ReactNode;
  addButton?: React.ReactNode;
  // Top pagination props
  showTopPagination?: boolean;
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

const DataTableControls: React.FC<DataTableControlsProps> = ({
  searchTerm,
  setSearchTerm,
  searchPlaceholder,
  actions,
  addButton,
  showTopPagination = false,
  totalPages = 0,
  currentPage = 1,
  onPageChange,
}) => {
  const hasTopPagination = showTopPagination && totalPages > 1 && onPageChange;

  return (
    <div className="pb-8 pl-4 pr-4 flex flex-col gap-3 border-b border-gray-200 dark:border-white/[0.05] sm:flex-row sm:items-center sm:justify-between">
      <SearchField
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={searchPlaceholder}
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {actions}
        {actions && (addButton || hasTopPagination) && (
          <div className="hidden sm:block w-px h-4 bg-gray-200 dark:bg-gray-700"></div>
        )}
        {addButton}
        {addButton && hasTopPagination && (
          <div className="hidden sm:block w-px h-4 bg-gray-200 dark:bg-gray-700"></div>
        )}
        {hasTopPagination && (
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

export default DataTableControls;
