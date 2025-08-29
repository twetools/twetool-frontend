"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Badge from "@/components/ui/badge/Badge";

// Sample icons for demonstration
const CheckIcon = () => (
  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const XIcon = () => (
  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const StarIcon = () => (
  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function BadgeWithIcons() {
  return (
    <ComponentCard title="Badges with Icons">
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Start Icons
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            <Badge color="success" startIcon={<CheckIcon />}>
              Completed
            </Badge>
            <Badge color="error" startIcon={<XIcon />}>
              Failed
            </Badge>
            <Badge color="warning" startIcon={<StarIcon />}>
              Featured
            </Badge>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            End Icons
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            <Badge color="primary" endIcon={<CheckIcon />}>
              Verified
            </Badge>
            <Badge color="info" endIcon={<StarIcon />}>
              Premium
            </Badge>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Both Icons
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            <Badge
              color="success"
              startIcon={<CheckIcon />}
              endIcon={<StarIcon />}
            >
              Approved
            </Badge>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Icons with Different Sizes
          </h4>
          <div className="flex items-center gap-3">
            <Badge size="sm" color="success" startIcon={<CheckIcon />}>
              Small
            </Badge>
            <Badge size="md" color="success" startIcon={<CheckIcon />}>
              Medium
            </Badge>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
