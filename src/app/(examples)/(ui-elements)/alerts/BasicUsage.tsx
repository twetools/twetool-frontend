"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Alert from "@/components/ui/alert/Alert";

export default function BasicUsage() {
  return (
    <ComponentCard title="Basic Usage">
      <div className="space-y-4">
        <Alert
          variant="success"
          title="Success"
          message="This is a success alert message."
        />
        <Alert
          variant="error"
          title="Error"
          message="This is an error alert message."
        />
        <Alert
          variant="warning"
          title="Warning"
          message="This is a warning alert message."
        />
        <Alert
          variant="info"
          title="Info"
          message="This is an info alert message."
        />
      </div>
    </ComponentCard>
  );
}
