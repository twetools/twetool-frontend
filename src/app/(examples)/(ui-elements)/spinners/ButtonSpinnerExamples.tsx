"use client";

import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Button from "@/components/ui/button/Button";
import Spinner from "@/components/ui/spinners/Spinner";

export default function ButtonSpinnerExamples() {
  const [loadingStates, setLoadingStates] = useState({
    primary: false,
    outline: false,
    ghost: false,
  });

  const handleClick = (type: keyof typeof loadingStates) => {
    setLoadingStates((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [type]: false }));
    }, 2000);
  };

  return (
    <ComponentCard title="Button Spinner Examples">
      <div className="space-y-8">
        {/* Button + Text Examples (Like Spinner 4) */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-4">
            Buttons with Spinner + Text
          </h4>
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              startIcon={
                <svg
                  className="w-4 h-4 animate-spin text-white"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.25"
                  />
                  <path
                    d="M18 10C18 5.58172 14.4183 2 10 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            >
              Loading...
            </Button>

            <Button
              variant="outline"
              size="sm"
              startIcon={
                <svg
                  className="w-4 h-4 animate-spin text-blue-500"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.25"
                  />
                  <path
                    d="M18 10C18 5.58172 14.4183 2 10 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            >
              Loading...
            </Button>

            <Button
              variant="ghost"
              size="sm"
              startIcon={
                <svg
                  className="w-4 h-4 animate-spin text-gray-600"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.25"
                  />
                  <path
                    d="M18 10C18 5.58172 14.4183 2 10 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
            >
              Loading...
            </Button>
          </div>
        </div>

        {/* Interactive Loading States */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-4">
            Interactive Loading States
          </h4>
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleClick("primary")}
              startIcon={
                loadingStates.primary ? (
                  <svg
                    className="w-4 h-4 animate-spin text-white"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="12.56 12.56"
                      strokeDashoffset="12.56"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : undefined
              }
            >
              {loadingStates.primary ? "Processing..." : "Primary Action"}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleClick("outline")}
              startIcon={
                loadingStates.outline ? (
                  <svg
                    className="w-4 h-4 animate-spin text-blue-500"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="12.56 12.56"
                      strokeDashoffset="12.56"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : undefined
              }
            >
              {loadingStates.outline ? "Loading..." : "Secondary Action"}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleClick("ghost")}
              startIcon={
                loadingStates.ghost ? (
                  <svg
                    className="w-4 h-4 animate-spin text-gray-600"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="12.56 12.56"
                      strokeDashoffset="12.56"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : undefined
              }
            >
              {loadingStates.ghost ? "Saving..." : "Save Draft"}
            </Button>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
