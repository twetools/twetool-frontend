"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Pagination from "@/components/ui/pagination/Pagination";

export default function PaginationStates() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <ComponentCard title="Pagination States">
      <div className="space-y-8">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Interactive Example
          </h4>
          <div className="space-y-4">
            <Pagination
              totalPages={15}
              initialPage={currentPage}
              onPageChange={handlePageChange}
            />
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-gray-700 dark:text-gray-300">
                <strong>Current Page:</strong> {currentPage}
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                <strong>Total Pages:</strong> 15
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Edge Cases
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                First page (Previous disabled)
              </p>
              <Pagination totalPages={10} initialPage={1} />
            </div>
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Last page (Next disabled)
              </p>
              <Pagination totalPages={10} initialPage={10} />
            </div>
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Single page (Both disabled)
              </p>
              <Pagination totalPages={1} initialPage={1} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Ellipsis Behavior
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Middle pages with ellipsis
              </p>
              <Pagination totalPages={100} initialPage={50} />
            </div>
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Near beginning (no start ellipsis)
              </p>
              <Pagination totalPages={100} initialPage={3} />
            </div>
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Near end (no end ellipsis)
              </p>
              <Pagination totalPages={100} initialPage={98} />
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
