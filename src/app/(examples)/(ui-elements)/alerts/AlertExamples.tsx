"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Alert from "@/components/ui/alert/Alert";

export default function AlertExamples() {
  const [linkText, setLinkText] = useState("Learn more");

  return (
    <ComponentCard title="Alerts">
      <div className="space-y-8">
        {/* Basic Usage Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Basic Usage
          </h3>
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
        </div>

        {/* Alerts with Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Alerts with Links
          </h3>
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
        </div>

        {/* Usage Examples Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Common Use Cases
          </h3>
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
        </div>

        {/* Component Properties Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Component Properties
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="space-y-3 text-sm">
              <div>
                <strong className="text-gray-900 dark:text-white">
                  variant
                </strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (required): "success" | "error" | "warning" | "info"
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">title</strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (required): string - The alert title
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  message
                </strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (required): string - The alert message
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  showLink
                </strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (optional): boolean - Whether to show the link
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  linkHref
                </strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (optional): string - Link URL
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  linkText
                </strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (optional): string - Link text
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Compatibility Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Dark Mode Compatibility
          </h3>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              All alert variants are fully compatible with dark mode and
              automatically adjust their colors and contrast for optimal
              readability in both light and dark themes.
            </p>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
