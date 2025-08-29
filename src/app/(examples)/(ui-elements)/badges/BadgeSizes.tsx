"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Badge from "@/components/ui/badge/Badge";

export default function BadgeSizes() {
  return (
    <ComponentCard title="Badge Sizes">
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Small Size
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            <Badge size="sm" color="primary">
              Small Primary
            </Badge>
            <Badge size="sm" color="success">
              Small Success
            </Badge>
            <Badge size="sm" color="error">
              Small Error
            </Badge>
            <Badge size="sm" color="warning">
              Small Warning
            </Badge>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Medium Size (Default)
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            <Badge size="md" color="primary">
              Medium Primary
            </Badge>
            <Badge size="md" color="success">
              Medium Success
            </Badge>
            <Badge size="md" color="error">
              Medium Error
            </Badge>
            <Badge size="md" color="warning">
              Medium Warning
            </Badge>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Size Comparison
          </h4>
          <div className="flex items-center gap-3">
            <Badge size="sm" color="info">
              Small
            </Badge>
            <Badge size="md" color="info">
              Medium
            </Badge>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
