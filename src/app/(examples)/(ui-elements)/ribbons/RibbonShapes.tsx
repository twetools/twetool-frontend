"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Ribbon from "@/components/ui/ribbons/Ribbon";

export default function RibbonShapes() {
  return (
    <ComponentCard title="Ribbon Shapes">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Shaped Ribbon
          </h4>
          <Ribbon variant="shaped" text="Popular">
            Lorem ipsum dolor sit amet consectetur. Eget nulla suscipit arcu
            rutrum amet vel nec fringilla vulputate. Sed aliquam fringilla
            vulputate imperdiet arcu natoque purus ac nec ultricies nulla
            ultrices.
          </Ribbon>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Shaped variant creates a classic ribbon effect with pointed edges
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Hover Ribbon
          </h4>
          <Ribbon
            variant="hover"
            text="Popular"
            animated={true}
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.679 2.2915L3.98828 11.6958H9.32224L9.32224 17.7082L16.013 8.30385L10.679 8.30385V2.2915Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            Lorem ipsum dolor sit amet consectetur. Eget nulla suscipit arcu
            rutrum amet vel nec fringilla vulputate. Sed aliquam fringilla
            vulputate imperdiet arcu natoque purus ac nec ultricies nulla
            ultrices.
          </Ribbon>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Hover variant reveals text and icon on card hover with smooth
            animation
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
