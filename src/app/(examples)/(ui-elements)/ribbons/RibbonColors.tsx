"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Ribbon from "@/components/ui/ribbons/Ribbon";

export default function RibbonColors() {
  return (
    <ComponentCard title="Ribbon Colors">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Color Variants
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Ribbon variant="rounded" color="brand" text="Brand">
              Brand color ribbon using the primary theme color for consistent
              branding.
            </Ribbon>

            <Ribbon variant="rounded" color="success" text="Success">
              Success color ribbon perfect for highlighting positive actions or
              achievements.
            </Ribbon>

            <Ribbon variant="rounded" color="warning" text="Warning">
              Warning color ribbon ideal for drawing attention to important
              information.
            </Ribbon>

            <Ribbon variant="rounded" color="danger" text="Alert">
              Danger color ribbon for critical alerts or urgent notifications.
            </Ribbon>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Available colors: brand, success, warning, danger, info - each with
            semantic meaning
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Different Shapes with Colors
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Ribbon variant="filled" color="info" text="Info">
              Info color with filled variant creates a striking diagonal effect.
            </Ribbon>

            <Ribbon variant="shaped" color="success" text="Featured">
              Shaped variant with success color for highlighting featured
              content.
            </Ribbon>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
