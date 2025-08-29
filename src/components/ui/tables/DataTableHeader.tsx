import React from "react";
import { TableFilterGroup } from "./TableFilterGroupBar";
import FilterBar from "@/components/ui/filter/FilterBar";

interface DataTableHeaderProps {
  title?: string;
  icon?: React.ReactNode;
  desc?: string;
  children?: React.ReactNode;
  groups?: TableFilterGroup[];
  selectedGroup?: string | string[];
  onGroupChange?: (key: string) => void;
}

const DataTableHeader: React.FC<DataTableHeaderProps> = ({
  title,
  icon,
  desc,
  children,
  groups = [],
  selectedGroup,
  onGroupChange,
}) => (
  <div className="px-6 py-4 flex flex-col gap-3 border border-b-0 border-gray-100 dark:border-white/[0.05]">
    {title && (
      <div className="flex items-center gap-3">
        {icon && (
          <span className="flex-shrink-0 w-6 h-6 text-brand-500 dark:text-brand-400 [&>svg]:w-full [&>svg]:h-full">
            {icon}
          </span>
        )}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
      </div>
    )}
    {groups.length > 0 && (
      <div className="flex items-center justify-between">
        <FilterBar
          groups={groups}
          selectedKeys={
            Array.isArray(selectedGroup)
              ? selectedGroup
              : selectedGroup
              ? [selectedGroup]
              : []
          }
          onGroupChange={onGroupChange as (key: string) => void}
        />
      </div>
    )}
    {children}
  </div>
);

export default DataTableHeader;
