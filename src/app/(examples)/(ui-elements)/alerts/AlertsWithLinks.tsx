"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Alert from "@/components/ui/alert/Alert";

export default function AlertsWithLinks() {
  return (
    <ComponentCard title="Alerts with Links">
      <div className="space-y-4">
        <Alert
          variant="success"
          title="Success with Link"
          message="This is a success alert with a link to learn more."
          showLink={true}
          linkHref="#"
          linkText="View details"
        />
        <Alert
          variant="error"
          title="Error with Documentation"
          message="Something went wrong. Check our documentation for troubleshooting steps."
          showLink={true}
          linkHref="#"
          linkText="Read documentation"
        />
        <Alert
          variant="warning"
          title="Warning with Action"
          message="Your trial is expiring soon. Upgrade your plan to continue using all features."
          showLink={true}
          linkHref="#"
          linkText="Upgrade now"
        />
        <Alert
          variant="info"
          title="Info with More Details"
          message="We've updated our privacy policy to better protect your data."
          showLink={true}
          linkHref="#"
          linkText="Read policy"
        />
      </div>
    </ComponentCard>
  );
}
