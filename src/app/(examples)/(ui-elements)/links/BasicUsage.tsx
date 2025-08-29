"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Link from "@/components/ui/links/Link";

export default function BasicUsage() {
  return (
    <ComponentCard title="Basic Link Usage">
      <div className="space-y-4">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Default Links
          </h4>
          <div className="space-y-3">
            <div>
              <Link href="#">Default link</Link>
            </div>
            <div>
              <Link href="#" variant="default">
                Explicit default link
              </Link>
            </div>
            <div>
              <Link
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                External link
              </Link>
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Default links provide basic navigation functionality with standard
            styling
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            External Links
          </h4>
          <div className="space-y-3">
            <div>
              <Link
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Next.js
              </Link>
            </div>
            <div>
              <Link
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Tailwind CSS
              </Link>
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            External links automatically open in new tabs with proper security
            attributes
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
