"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Link from "@/components/ui/links/Link";

export default function InteractiveExamples() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <ComponentCard title="Interactive Link Examples">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Click Counter Example
          </h4>
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Click the link below to test functionality:
            </p>
            <div className="space-y-2">
              <div>
                <Link
                  href="#"
                  variant="colored"
                  color="primary"
                  onClick={handleClick}
                >
                  Interactive link (clicked {clickCount} times)
                </Link>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Links maintain full Next.js functionality with proper navigation
                and state management.
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Navigation Examples
          </h4>
          <div className="space-y-3">
            <div>
              <Link href="#section1" variant="colored" color="info">
                Navigate to Section 1
              </Link>
            </div>
            <div>
              <Link href="#section2" variant="colored" color="success">
                Navigate to Section 2
              </Link>
            </div>
            <div>
              <Link href="/dashboard" variant="colored" color="primary">
                Go to Dashboard
              </Link>
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Links support both internal navigation and anchor links within the
            same page
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Functional State Examples
          </h4>
          <div className="space-y-3">
            <div>
              <Link
                href="#"
                variant="colored"
                color="warning"
                onClick={() => alert("Link clicked!")}
              >
                Show Alert Link
              </Link>
            </div>
            <div>
              <Link
                href="#"
                variant="underline"
                color="danger"
                onClick={() => console.log("Action performed")}
              >
                Console Log Link
              </Link>
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Links can trigger custom actions while maintaining accessibility
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
