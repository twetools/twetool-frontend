"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Link from "@/components/ui/links/Link";

export default function UnderlineLinks() {
  return (
    <ComponentCard title="Underlined Link Variants">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Underlined Colors
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <Link href="#" variant="underline" color="primary">
                  Primary underlined
                </Link>
              </div>
              <div>
                <Link href="#" variant="underline" color="secondary">
                  Secondary underlined
                </Link>
              </div>
              <div>
                <Link href="#" variant="underline" color="success">
                  Success underlined
                </Link>
              </div>
              <div>
                <Link href="#" variant="underline" color="danger">
                  Danger underlined
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <Link href="#" variant="underline" color="warning">
                  Warning underlined
                </Link>
              </div>
              <div>
                <Link href="#" variant="underline" color="info">
                  Info underlined
                </Link>
              </div>
              <div>
                <Link href="#" variant="underline" color="light">
                  Light underlined
                </Link>
              </div>
              <div>
                <Link href="#" variant="underline" color="dark">
                  Dark underlined
                </Link>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Underlined variants provide emphasis while maintaining text flow
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Dark Mode Examples
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <Link href="#" variant="underline" color="light">
                  Light in dark mode
                </Link>
              </div>
              <div>
                <Link href="#" variant="underline" color="primary">
                  Primary in dark mode
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <Link href="#" variant="underline" color="info">
                  Info in dark mode
                </Link>
              </div>
              <div>
                <Link href="#" variant="underline" color="warning">
                  Warning in dark mode
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
