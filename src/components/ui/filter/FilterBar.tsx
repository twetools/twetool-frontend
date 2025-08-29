import React from "react";
import FilterButton from "./FilterButton";

export type FilterBarGroup = {
  key: string;
  label: string;
  count?: number;
};

interface FilterBarProps {
  groups: FilterBarGroup[];
  selectedKeys: string[];
  onGroupChange: (key: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  groups,
  selectedKeys,
  onGroupChange,
}) => (
  <div className="flex gap-2 flex-wrap">
    {groups.map((group, idx) => {
      // Always show the first button (Show All), hide others with count 0 or undefined
      if (idx !== 0 && (typeof group.count !== "number" || group.count === 0)) {
        return null;
      }
      return (
        <FilterButton
          key={group.key}
          label={group.label}
          count={group.count}
          selected={selectedKeys.includes(group.key)}
          onClick={() => onGroupChange(group.key)}
        />
      );
    })}
  </div>
);

export default FilterBar;
