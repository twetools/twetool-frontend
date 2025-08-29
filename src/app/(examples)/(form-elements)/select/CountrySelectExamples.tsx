"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import CountrySelect from "@/components/form-elements/select/CountrySelect";

export default function CountrySelectExamples() {
  const [basicCountry, setBasicCountry] = useState<string>("");
  const [prefilledCountry, setPrefilledCountry] = useState<string>("US");
  const [businessCountry, setBusinessCountry] = useState<string>("");
  const [shippingCountry, setShippingCountry] = useState<string>("");

  return (
    <ComponentCard title="Country Select Examples">
      <div className="space-y-6">
        {/* Basic Country Select Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Country Select Examples
          </h4>
          <div className="space-y-4">
            <CountrySelect
              label="Country"
              id="basic-country"
              placeholder="Select your country"
              value={basicCountry}
              onChange={setBasicCountry}
            />

            <CountrySelect
              label="Business Country"
              id="business-country"
              placeholder="Where is your business located?"
              value={businessCountry}
              onChange={setBusinessCountry}
            />
          </div>
        </div>

        {/* Pre-filled Country Examples */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Pre-filled Country Examples
          </h4>
          <div className="space-y-4">
            <CountrySelect
              label="Default Country (US)"
              id="prefilled-country"
              placeholder="Select country"
              value={prefilledCountry}
              onChange={setPrefilledCountry}
            />

            <CountrySelect
              label="Shipping Country"
              id="shipping-country"
              placeholder="Select shipping country"
              value={shippingCountry}
              onChange={setShippingCountry}
              hint="Choose the country where items will be shipped"
            />
          </div>
        </div>

        {/* Controlled vs Uncontrolled Examples */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Controlled vs Uncontrolled
          </h4>
          <div className="space-y-4">
            <CountrySelect
              label="Controlled Country"
              id="controlled-country"
              placeholder="This is controlled by React state"
              value={basicCountry}
              onChange={setBasicCountry}
            />

            <CountrySelect
              label="Uncontrolled Country"
              id="uncontrolled-country"
              placeholder="This manages its own state"
              defaultValue="CA"
              onChange={(value) =>
                console.log("Uncontrolled changed to:", value)
              }
            />
          </div>
        </div>

        {/* Legacy Support (without label) */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Legacy Support (Without BaseFormControl)
          </h4>
          <div className="space-y-4">
            <CountrySelect
              id="legacy-country"
              placeholder="Legacy implementation without BaseFormControl"
              onChange={() => {}}
            />

            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
              Legacy support: Works without label for backward compatibility
            </div>
          </div>
        </div>

        {/* Current Values Display */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Current Country Values
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 space-y-1">
            <div>
              Basic Country:{" "}
              <span className="font-medium">
                {basicCountry || "Not selected"}
              </span>
            </div>
            <div>
              Pre-filled Country:{" "}
              <span className="font-medium">{prefilledCountry}</span>
            </div>
            <div>
              Business Country:{" "}
              <span className="font-medium">
                {businessCountry || "Not selected"}
              </span>
            </div>
            <div>
              Shipping Country:{" "}
              <span className="font-medium">
                {shippingCountry || "Not selected"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
