"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Pagination from "@/components/ui/pagination/Pagination";

export default function PaginationVariants() {
  const [pages, setPages] = useState({
    textWithIcon: 1,
    iconOnly: 1,
    default: 1,
  });

  const handlePageChange = (variant: string) => (page: number) => {
    setPages((prev) => ({ ...prev, [variant]: page }));
  };

  return (
    <ComponentCard title="Pagination Variants">
      <div className="space-y-8">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Text with Icons
          </h4>
          <div className="space-y-2">
            <Pagination
              totalPages={10}
              initialPage={1}
              variant="text-with-icon"
              onPageChange={handlePageChange("textWithIcon")}
            />
            <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
              Always shows both text and icons
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Icon Only
          </h4>
          <div className="space-y-2">
            <Pagination
              totalPages={10}
              initialPage={1}
              variant="icon-only"
              onPageChange={handlePageChange("iconOnly")}
            />
            <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
              Compact design with icons only
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Default (Responsive)
          </h4>
          <div className="space-y-2">
            <Pagination
              totalPages={10}
              initialPage={1}
              variant="default"
              onPageChange={handlePageChange("default")}
            />
            <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
              Icons on mobile, text on desktop
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
