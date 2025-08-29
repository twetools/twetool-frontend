"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import StateSelect from "@/components/form-elements/select/StateSelect";

export default function StateSelectExamples() {
  const [basicState, setBasicState] = useState<string>("");
  const [prefilledState, setPrefilledState] = useState<string>("CA");
  const [businessState, setBusinessState] = useState<string>("");
  const [shippingState, setShippingState] = useState<string>("");

  return (
    <ComponentCard title="State Select Examples">
      <div className="space-y-6">
        {/* Basic State Select Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic State Select Examples
          </h4>
          <div className="space-y-4">
            <StateSelect
              label="State"
              id="basic-state"
              placeholder="Select your state"
              value={basicState}
              onChange={setBasicState}
            />

            <StateSelect
              label="Business State"
              id="business-state"
              placeholder="Where is your business located?"
              value={businessState}
              onChange={setBusinessState}
            />

            <StateSelect
              label="Shipping State"
              id="shipping-state"
              placeholder="Shipping destination state"
              value={shippingState}
              onChange={setShippingState}
            />
          </div>
        </div>

        {/* Pre-filled and Controlled States */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Pre-filled and Controlled States
          </h4>
          <div className="space-y-4">
            <StateSelect
              label="California (Pre-filled)"
              id="prefilled-state"
              placeholder="Select your state"
              value={prefilledState}
              onChange={setPrefilledState}
            />

            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
              Selected State: {basicState || "None"} | Business State:{" "}
              {businessState || "None"} | Pre-filled: {prefilledState} |
              Shipping: {shippingState || "None"}
            </div>
          </div>
        </div>

        {/* Without Labels (Backward Compatibility) */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Without Labels (Legacy Support)
          </h4>
          <div className="space-y-4">
            <StateSelect
              id="no-label-state"
              placeholder="State dropdown without label"
              onChange={(value) => console.log("State selected:", value)}
            />

            <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
              Components work without labels for backward compatibility
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
