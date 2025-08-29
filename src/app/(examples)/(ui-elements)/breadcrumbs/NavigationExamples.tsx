"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";

export default function NavigationExamples() {
  const ecommerceItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/products/electronics" },
    { label: "Smartphones" },
  ];

  const adminItems = [
    { label: "Dashboard", href: "/admin" },
    { label: "Users", href: "/admin/users" },
    { label: "User Profile" },
  ];

  const docsItems = [
    { label: "Documentation", href: "/docs" },
    { label: "Components", href: "/docs/components" },
    { label: "UI Elements", href: "/docs/components/ui" },
    { label: "Breadcrumbs" },
  ];

  return (
    <ComponentCard title="Navigation Examples">
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            E-commerce Navigation
          </h4>
          <Breadcrumb items={ecommerceItems} variant="chevron" />
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Admin Panel
          </h4>
          <Breadcrumb items={adminItems} variant="withIcon" />
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Documentation Site
          </h4>
          <Breadcrumb items={docsItems} variant="dotted" />
        </div>
      </div>
    </ComponentCard>
  );
}
