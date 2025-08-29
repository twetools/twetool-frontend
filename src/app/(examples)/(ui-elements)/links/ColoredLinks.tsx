"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Link from "@/components/ui/links/Link";

export default function ColoredLinks() {
  return (
    <ComponentCard title="Colored Link Variants">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Primary Colors
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <Link href="#" variant="colored" color="primary">
                  Primary link
                </Link>
              </div>
              <div>
                <Link href="#" variant="colored" color="secondary">
                  Secondary link
                </Link>
              </div>
              <div>
                <Link href="#" variant="colored" color="success">
                  Success link
                </Link>
              </div>
              <div>
                <Link href="#" variant="colored" color="danger">
                  Danger link
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <Link href="#" variant="colored" color="warning">
                  Warning link
                </Link>
              </div>
              <div>
                <Link href="#" variant="colored" color="info">
                  Info link
                </Link>
              </div>
              <div>
                <Link href="#" variant="colored" color="light">
                  Light link
                </Link>
              </div>
              <div>
                <Link href="#" variant="colored" color="dark">
                  Dark link
                </Link>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Colored variants provide semantic meaning and visual hierarchy
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
