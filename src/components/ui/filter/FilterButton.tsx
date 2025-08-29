import React, { useState } from "react";
import Button from "@/components/ui/button/Button";
import Badge from "@/components/ui/badge/Badge";

interface FilterButtonProps {
  label: string;
  count?: number;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  count,
  selected = false,
  onClick,
  className = "",
}) => {
  const [hovered, setHovered] = useState(false);

  // Determine badge color for each state
  let badgeClass = "";
  if (selected && hovered) {
    badgeClass = "bg-brand-800 text-brand-200 border border-transparent"; // darkest for selected+hover
  } else if (selected || hovered) {
    badgeClass = "bg-brand-600 text-brand-200 border border-transparent"; // dark for selected or hover
  }

  return (
    <Button
      type="button"
      variant={selected ? "primary" : "outline"}
      size="sm"
      className={`flex items-center gap-3 rounded-full px-3 py-1 ${className}`}

      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="p-2">{label}</span>
      {typeof count === "number" && (
        <Badge
          variant={selected || hovered ? "solid" : "light"}
          color="primary"
          size="sm"
          className={badgeClass}
        >
          {count}
        </Badge>
      )}
    </Button>
  );
};

export default FilterButton;
