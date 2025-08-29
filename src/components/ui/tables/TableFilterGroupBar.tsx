import React from "react";
import Badge from "@/components/ui/badge/Badge";

export type TableFilterGroup = {
  key: string;
  label: string;
  count: number | undefined;
};

interface TableFilterGroupBarProps {
  groups: TableFilterGroup[];
  selectedGroup?: string | string[];
  onGroupChange?: (key: string) => void;
}

const TableFilterGroupBar: React.FC<TableFilterGroupBarProps> = ({
  groups,
  selectedGroup,
  onGroupChange,
}) => {
  // Support both string and array for selectedGroup
  const selectedKeys = Array.isArray(selectedGroup)
    ? selectedGroup
    : selectedGroup
    ? [selectedGroup]
    : [];

  return (
    <div className="flex gap-2 flex-wrap">
      {groups.map((group, idx) => {
        // Always show the first button (Show All), hide others with count 0 or undefined
        if (
          idx !== 0 &&
          (typeof group.count !== "number" || group.count === 0)
        ) {
          return null;
        }
        const isSelected = selectedKeys.includes(group.key);
        return (
          <button
            key={group.key}
            type="button"
            className={`px-3 py-1 rounded transition flex items-center gap-2
              ${
                isSelected
                  ? "bg-brand-500 text-white"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
              }
            `}
            onClick={() => onGroupChange?.(group.key)}
          >
            {group.label}
            {/* Use Badge for count display */}
            {typeof group.count === "number" && (
              <Badge
                variant={isSelected ? "solid" : "light"}
                color="primary"
                size="sm"
              >
                {group.count}
              </Badge>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default TableFilterGroupBar;
