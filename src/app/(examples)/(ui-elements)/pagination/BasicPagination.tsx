"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Pagination from "@/components/ui/pagination/Pagination";

export default function BasicPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Page changed to ${page}`);
  };

  return (
    <ComponentCard title="Basic Pagination">
      <div className="space-y-8">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Standard Usage
          </h4>
          <div className="space-y-4">
            <Pagination
              totalPages={10}
              initialPage={1}
              onPageChange={handlePageChange}
            />
            <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
              Current page: {currentPage}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Different Page Counts
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Few pages (5 total)
              </p>
              <Pagination totalPages={5} initialPage={3} />
            </div>
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Many pages (50 total)
              </p>
              <Pagination totalPages={50} initialPage={25} />
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
