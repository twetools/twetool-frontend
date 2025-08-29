"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Alert from "@/components/ui/alert/Alert";

export default function CommonUseCases() {
  return (
    <ComponentCard title="Common Use Cases">
      <div className="space-y-4">
        <Alert
          variant="success"
          title="Form Submitted Successfully"
          message="Your contact information has been updated and saved to your profile."
          showLink={true}
          linkHref="#"
          linkText="View profile"
        />
        <Alert
          variant="error"
          title="Validation Error"
          message="Please fix the following errors before submitting the form."
          showLink={true}
          linkHref="#"
          linkText="Show errors"
        />
        <Alert
          variant="warning"
          title="Unsaved Changes"
          message="You have unsaved changes that will be lost if you navigate away from this page."
          showLink={true}
          linkHref="#"
          linkText="Save changes"
        />
        <Alert
          variant="info"
          title="System Maintenance"
          message="We'll be performing scheduled maintenance tonight from 11 PM to 1 AM EST."
          showLink={true}
          linkHref="#"
          linkText="Learn more"
        />
      </div>
    </ComponentCard>
  );
}
