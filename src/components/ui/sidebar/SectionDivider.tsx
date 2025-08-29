import React from "react";
import Badge from "@/components/ui/badge/Badge";

interface SectionDividerProps {
  label: string;
  showDevBadge?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  label,
  showDevBadge,
}) => {
  return (
    <div className="flex items-center mb-4 pt-2">
      <span className="bg-white dark:bg-gray-900 text-gray-400 text-xs uppercase tracking-wide flex items-center gap-2 z-10 leading-5 h-5 px-4">
        {label}
        {showDevBadge && (
          <span className="text-sm leading-none normal-case">
            <Badge color="primary" size="sm">
              dev
            </Badge>
          </span>
        )}
      </span>
      <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
    </div>
  );
};

export default SectionDivider;
