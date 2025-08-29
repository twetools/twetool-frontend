"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Badge from "@/components/ui/badge/Badge";

export default function BadgeVariants() {
  const colors = [
    "primary",
    "success",
    "error",
    "warning",
    "info",
    "light",
    "dark",
  ] as const;

  return (
    <ComponentCard title="Badge Variants">
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Light Variant (Default)
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            {colors.map((color) => (
              <Badge key={color} variant="light" color={color}>
                {color}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Solid Variant
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            {colors.map((color) => (
              <Badge key={color} variant="solid" color={color}>
                {color}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
