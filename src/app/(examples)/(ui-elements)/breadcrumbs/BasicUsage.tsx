"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";

export default function BasicUsage() {
  const twoLayerItems = [
    { label: "Home", href: "/" },
    { label: "UI Components" },
  ];

  const threeLayerItems = [
    { label: "Home", href: "/" },
    { label: "UI Components", href: "/ui-components" },
    { label: "Breadcrumbs" },
  ];

  const fourLayerItems = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Projects", href: "/dashboard/projects" },
    { label: "Project Details" },
  ];

  return (
    <ComponentCard title="Basic Usage">
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Two levels:
          </p>
          <Breadcrumb items={twoLayerItems} />
        </div>
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Three levels:
          </p>
          <Breadcrumb items={threeLayerItems} />
        </div>
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Four levels:
          </p>
          <Breadcrumb items={fourLayerItems} />
        </div>
      </div>
    </ComponentCard>
  );
}
