"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Tooltip from "@/components/ui/tooltip/Tooltip";
import Button from "@/components/ui/button/Button";
import Link from "@/components/ui/links/Link";

export default function BasicTooltips() {
  return (
    <ComponentCard title="Basic Tooltips">
      <div className="space-y-8">
        {/* Basic Usage Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <div className="flex items-center gap-6">
            <Tooltip content="This is a basic tooltip">
              <Button size="sm">Hover me</Button>
            </Tooltip>

            <Tooltip content="Another tooltip example">
              <Link
                href="#"
                variant="colored"
                color="info"
                className="cursor-help"
              >
                Text with tooltip
              </Link>
            </Tooltip>
          </div>
        </div>

        {/* Content Variations Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Content Variations
          </h4>
          <div className="flex items-center gap-6">
            <Tooltip content="Short">
              <Button size="sm">Short tooltip</Button>
            </Tooltip>

            <Tooltip content="This is a longer tooltip message that provides more detailed information">
              <Button size="sm">Long tooltip</Button>
            </Tooltip>

            <Tooltip content="Tooltip with special characters: !@#$%^&*()">
              <Button size="sm">Special chars</Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
