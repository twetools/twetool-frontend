"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Ribbon from "@/components/ui/ribbons/Ribbon";

export default function BasicRibbons() {
  return (
    <ComponentCard title="Basic Ribbon Types">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Filled Ribbon
          </h4>
          <Ribbon variant="filled" text="New">
            Lorem ipsum dolor sit amet consectetur. Eget nulla suscipit arcu
            rutrum amet vel nec fringilla vulputate. Sed aliquam fringilla
            vulputate imperdiet arcu natoque purus ac nec ultricies nulla
            ultrices.
          </Ribbon>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Filled variant creates a diagonal banner effect across the corner
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Rounded Ribbon
          </h4>
          <Ribbon variant="rounded" text="Popular">
            Lorem ipsum dolor sit amet consectetur. Eget nulla suscipit arcu
            rutrum amet vel nec fringilla vulputate. Sed aliquam fringilla
            vulputate imperdiet arcu natoque purus ac nec ultricies nulla
            ultrices.
          </Ribbon>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Rounded variant provides a smooth edge extending from the left
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
