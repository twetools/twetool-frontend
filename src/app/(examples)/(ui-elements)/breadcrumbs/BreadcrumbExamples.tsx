"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";

// Individual Example Components for better visual separation
const BasicUsageExample = () => {
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
};

const VariantsExample = () => {
  const twoLayerItems = [
    { label: "Home", href: "/" },
    { label: "UI Components" },
  ];

  const threeLayerItems = [
    { label: "Home", href: "/" },
    { label: "UI Components", href: "/ui-components" },
    { label: "Breadcrumbs" },
  ];

  return (
    <ComponentCard title="Variants">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Default Variant
          </h4>
          <div className="space-y-3">
            <Breadcrumb items={twoLayerItems} variant="default" />
            <Breadcrumb items={threeLayerItems} variant="default" />
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            With Home Icon
          </h4>
          <div className="space-y-3">
            <Breadcrumb items={twoLayerItems} variant="withIcon" />
            <Breadcrumb items={threeLayerItems} variant="withIcon" />
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Dotted Separator
          </h4>
          <div className="space-y-3">
            <Breadcrumb items={twoLayerItems} variant="dotted" />
            <Breadcrumb items={threeLayerItems} variant="dotted" />
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Chevron Separator
          </h4>
          <div className="space-y-3">
            <Breadcrumb items={twoLayerItems} variant="chevron" />
            <Breadcrumb items={threeLayerItems} variant="chevron" />
          </div>
        </div>
      </div>
    </ComponentCard>
  );
};

const InteractiveExample = () => {
  const [selectedVariant, setSelectedVariant] = useState<
    "default" | "withIcon" | "dotted" | "chevron"
  >("default");

  const fourLayerItems = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Projects", href: "/dashboard/projects" },
    { label: "Project Details" },
  ];

  return (
    <ComponentCard title="Interactive Example">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Choose variant:
          </label>
          <div className="flex gap-2 mb-4">
            {(["default", "withIcon", "dotted", "chevron"] as const).map(
              (variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-3 py-1 rounded text-sm ${
                    selectedVariant === variant
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {variant}
                </button>
              )
            )}
          </div>
          <Breadcrumb items={fourLayerItems} variant={selectedVariant} />
        </div>
      </div>
    </ComponentCard>
  );
};

const EcommerceExample = () => {
  return (
    <ComponentCard title="E-commerce Navigation">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Product Category Page:
          </p>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: "Electronics", href: "/shop/electronics" },
              { label: "Smartphones" },
            ]}
            variant="chevron"
          />
        </div>
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Product Detail Page:
          </p>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: "Electronics", href: "/shop/electronics" },
              {
                label: "Smartphones",
                href: "/shop/electronics/smartphones",
              },
              { label: "iPhone 15 Pro" },
            ]}
            variant="chevron"
          />
        </div>
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Deep Category Navigation:
          </p>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "E-commerce", href: "/ecommerce" },
              { label: "Products", href: "/ecommerce/products" },
              { label: "Categories", href: "/ecommerce/products/categories" },
              { label: "Electronics" },
            ]}
            variant="chevron"
          />
        </div>
      </div>
    </ComponentCard>
  );
};

const DashboardExample = () => {
  return (
    <ComponentCard title="Dashboard Navigation">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Settings Page:
          </p>
          <Breadcrumb
            items={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Settings", href: "/dashboard/settings" },
              { label: "User Profile" },
            ]}
            variant="withIcon"
          />
        </div>
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Analytics Deep Dive:
          </p>
          <Breadcrumb
            items={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Analytics", href: "/dashboard/analytics" },
              { label: "Reports", href: "/dashboard/analytics/reports" },
              { label: "Monthly Sales" },
            ]}
            variant="withIcon"
          />
        </div>
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            User Management:
          </p>
          <Breadcrumb
            items={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Admin", href: "/dashboard/admin" },
              { label: "Users", href: "/dashboard/admin/users" },
              { label: "User Profile" },
            ]}
            variant="withIcon"
          />
        </div>
      </div>
    </ComponentCard>
  );
};

const FileSystemExample = () => {
  return (
    <ComponentCard title="File System Navigation">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Deep folder structure:
          </p>
          <Breadcrumb
            items={[
              { label: "Documents", href: "/documents" },
              { label: "Projects", href: "/documents/projects" },
              { label: "Website", href: "/documents/projects/website" },
              { label: "Assets", href: "/documents/projects/website/assets" },
              { label: "images" },
            ]}
            variant="dotted"
          />
        </div>
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Configuration path:
          </p>
          <Breadcrumb
            items={[
              { label: "System", href: "/system" },
              { label: "Config", href: "/system/config" },
              { label: "database.json" },
            ]}
            variant="dotted"
          />
        </div>
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Source code path:
          </p>
          <Breadcrumb
            items={[
              { label: "src", href: "/src" },
              { label: "components", href: "/src/components" },
              { label: "ui", href: "/src/components/ui" },
              { label: "breadcrumb", href: "/src/components/ui/breadcrumb" },
              { label: "Breadcrumb.tsx" },
            ]}
            variant="dotted"
          />
        </div>
      </div>
    </ComponentCard>
  );
};

const CRMExample = () => {
  return (
    <ComponentCard title="CRM Application Navigation">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Contact Management:
          </p>
          <Breadcrumb
            items={[
              { label: "CRM", href: "/crm" },
              { label: "Contacts", href: "/crm/contacts" },
              { label: "John Doe", href: "/crm/contacts/123" },
              { label: "Edit Profile" },
            ]}
            variant="chevron"
          />
        </div>
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Pipeline Management:
          </p>
          <Breadcrumb
            items={[
              { label: "CRM", href: "/crm" },
              { label: "Pipeline", href: "/crm/pipeline" },
              { label: "Deals", href: "/crm/pipeline/deals" },
              { label: "Property Sale - 123 Main St" },
            ]}
            variant="chevron"
          />
        </div>
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            Property Details:
          </p>
          <Breadcrumb
            items={[
              { label: "CRM", href: "/crm" },
              { label: "Properties", href: "/crm/properties" },
              { label: "Residential", href: "/crm/properties/residential" },
              { label: "123 Main Street", href: "/crm/properties/456" },
              { label: "Documents" },
            ]}
            variant="default"
          />
        </div>
      </div>
    </ComponentCard>
  );
};

export default function BreadcrumbExamples() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <BasicUsageExample />
      <VariantsExample />
      <InteractiveExample />
      <EcommerceExample />
      <DashboardExample />
      <FileSystemExample />
      <CRMExample />
    </div>
  );
}
