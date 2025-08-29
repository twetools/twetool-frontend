"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Pagination from "@/components/ui/pagination/Pagination";

export default function PaginationCustomization() {
  return (
    <ComponentCard title="Pagination Customization">
      <div className="space-y-8">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Custom Styling
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                With custom className
              </p>
              <Pagination
                totalPages={8}
                initialPage={4}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg"
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Component Properties
          </h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Available Props
            </h5>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <strong>totalPages:</strong> number - Total number of pages
              </div>
              <div>
                <strong>initialPage:</strong> number - Starting page (default:
                1)
              </div>
              <div>
                <strong>onPageChange:</strong> (page: number) =&gt; void - Page
                change callback
              </div>
              <div>
                <strong>variant:</strong> &quot;default&quot; |
                &quot;icon-only&quot; | &quot;text-with-icon&quot; - Display
                variant
              </div>
              <div>
                <strong>className:</strong> string - Additional CSS classes
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Usage Example
          </h4>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
              {`<Pagination
  totalPages={20}
  initialPage={1}
  variant="text-with-icon"
  onPageChange={(page) => {
    console.log('Page changed to:', page);
    // Handle page change logic
  }}
/>`}
            </pre>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
