"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";

export default function BreadcrumbVariants() {
  const threeLayerItems = [
    { label: "Home", href: "/" },
    { label: "UI Components", href: "/ui-components" },
    { label: "Breadcrumbs" },
  ];

  return (
    <ComponentCard title="Breadcrumb Variants">
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Default Variant (Slash Separator)
          </h4>
          <Breadcrumb items={threeLayerItems} variant="default" />
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            With Home Icon
          </h4>
          <Breadcrumb items={threeLayerItems} variant="withIcon" />
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Dotted Separator
          </h4>
          <Breadcrumb items={threeLayerItems} variant="dotted" />
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Chevron Separator
          </h4>
          <Breadcrumb items={threeLayerItems} variant="chevron" />
        </div>
      </div>
    </ComponentCard>
  );
}
