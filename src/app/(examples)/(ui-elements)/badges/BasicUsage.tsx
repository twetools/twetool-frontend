"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Badge from "@/components/ui/badge/Badge";

export default function BasicUsage() {
  return (
    <ComponentCard title="Basic Usage">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>Default</Badge>
        <Badge variant="solid">Solid</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="error">Error</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="info">Info</Badge>
      </div>
    </ComponentCard>
  );
}
