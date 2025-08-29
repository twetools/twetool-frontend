"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Link from "@/components/ui/links/Link";

export default function OpacityVariants() {
  return (
    <ComponentCard title="Opacity Link Variants">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Static Opacity
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Opacity 10
              </p>
              <Link href="#" variant="opacity" opacity={10}>
                Link 10%
              </Link>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Opacity 25
              </p>
              <Link href="#" variant="opacity" opacity={25}>
                Link 25%
              </Link>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Opacity 50
              </p>
              <Link href="#" variant="opacity" opacity={50}>
                Link 50%
              </Link>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Opacity 75
              </p>
              <Link href="#" variant="opacity" opacity={75}>
                Link 75%
              </Link>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Opacity 100
              </p>
              <Link href="#" variant="opacity" opacity={100}>
                Link 100%
              </Link>
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Static opacity variants create subtle visual hierarchy
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Hover Opacity Effects
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Hover 10
              </p>
              <Link href="#" variant="opacityHover" opacity={10}>
                Hover 10%
              </Link>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Hover 25
              </p>
              <Link href="#" variant="opacityHover" opacity={25}>
                Hover 25%
              </Link>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Hover 50
              </p>
              <Link href="#" variant="opacityHover" opacity={50}>
                Hover 50%
              </Link>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Hover 75
              </p>
              <Link href="#" variant="opacityHover" opacity={75}>
                Hover 75%
              </Link>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Hover 100
              </p>
              <Link href="#" variant="opacityHover" opacity={100}>
                Hover 100%
              </Link>
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Hover opacity variants provide interactive feedback on mouse over
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
