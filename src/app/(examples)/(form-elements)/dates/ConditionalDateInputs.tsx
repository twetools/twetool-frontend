"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import CreatedDateField from "@/components/form-elements/dates/CreatedDateField";
import LastUpdatedDate from "@/components/form-elements/dates/LastUpdatedDate";

export default function ConditionalDateInputs() {
  const [lastContactDate, setLastContactDate] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [lastUpdatedDate, setLastUpdatedDate] = useState<string>("");
  const [isNewRecord, setIsNewRecord] = useState<boolean>(true);

  // Simulate existing record data
  const existingCreatedDate = "2025-07-01";
  const existingUpdatedDate = "2025-07-15";

  return (
    <ComponentCard title="Conditional Date Components">
      <div className="space-y-8">
        {/* Toggle to demonstrate new vs existing record behavior */}
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isNewRecord}
              onChange={(e) => setIsNewRecord(e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Simulate New Record (CreatedDate and LastUpdatedDate will be
              hidden when empty)
            </span>
          </label>
        </div>

        <div className="space-y-6">
          {/* CreatedDateField - Conditional visibility for new records */}
          <div className="space-y-3">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              <strong className="font-semibold text-gray-900 dark:text-white">
                CreatedDateField:
              </strong>{" "}
              Hidden for new records without values. Shows when editing existing
              records.
            </div>
            <CreatedDateField
              value={isNewRecord ? "" : existingCreatedDate}
              isNewRecord={isNewRecord}
              className="sm:col-span-1"
            />
            {isNewRecord && (
              <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
                ↑ Hidden because isNewRecord=true and no value set
              </div>
            )}
          </div>

          {/* LastUpdatedDate - Conditional visibility for new records and empty values */}
          <div className="space-y-3">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              <strong className="font-semibold text-gray-900 dark:text-white">
                LastUpdatedDate:
              </strong>{" "}
              Hidden for new records OR when value is empty. Only shows when
              editing existing records with update timestamps.
            </div>
            <LastUpdatedDate
              value={isNewRecord ? "" : existingUpdatedDate}
              onChange={setLastUpdatedDate}
              isNewRecord={isNewRecord}
              className="sm:col-span-1"
            />
            {isNewRecord && (
              <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
                ↑ Hidden because isNewRecord=true or no value
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Usage Patterns
        </h3>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
            When to use conditional visibility:
          </h4>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong className="text-gray-900 dark:text-white">
                  New Buyer Modal:
                </strong>{" "}
                CreatedDate and LastUpdatedDate are hidden
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong className="text-gray-900 dark:text-white">
                  Edit Buyer Modal:
                </strong>{" "}
                Both fields show with actual database values
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong className="text-gray-900 dark:text-white">
                  Form sections:
                </strong>{" "}
                Pass isNewRecord prop to control visibility
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong className="text-gray-900 dark:text-white">
                  Database integration:
                </strong>{" "}
                Fields auto-populate from server data
              </span>
            </li>
          </ul>

          <h4 className="font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
            Implementation:
          </h4>
          <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 font-mono text-sm border border-gray-200 dark:border-gray-600">
            <pre className="text-gray-800 dark:text-gray-200">{`<CreatedDateField
  value={contact?.created_at}
  isNewRecord={!contact?.id}
/>

<LastUpdatedDate
  value={contact?.updated_at}
  isNewRecord={!contact?.id}
/>`}</pre>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
