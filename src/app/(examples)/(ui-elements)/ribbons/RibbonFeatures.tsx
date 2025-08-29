"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Ribbon from "@/components/ui/ribbons/Ribbon";

export default function RibbonFeatures() {
  return (
    <ComponentCard title="Ribbon Features & Usage">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            With Icons
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Ribbon
              variant="rounded"
              text="Featured"
              color="warning"
              icon={
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              }
            >
              Ribbon with star icon highlighting premium or featured content.
            </Ribbon>

            <Ribbon
              variant="shaped"
              text="Sale"
              color="danger"
              icon={
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              }
            >
              Sale ribbon with tag icon perfect for promotional content.
            </Ribbon>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Component Features
          </h4>
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
              <div>✅ Multiple variants (filled, rounded, shaped, hover)</div>
              <div>
                ✅ Color system integration (brand, success, warning, danger,
                info)
              </div>
              <div>✅ Icon support with flexible positioning</div>
              <div>✅ Hover animations and transitions</div>
              <div>✅ Dark mode compatibility</div>
              <div>✅ Responsive design patterns</div>
              <div>✅ Customizable text content</div>
              <div>✅ TypeScript interfaces</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Usage Guidelines
          </h4>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <p>
                • Use <strong>filled</strong> variant for dramatic corner
                banners
              </p>
              <p>
                • Use <strong>rounded</strong> variant for subtle left-side
                labels
              </p>
              <p>
                • Use <strong>shaped</strong> variant for classic ribbon
                appearance
              </p>
              <p>
                • Use <strong>hover</strong> variant for interactive reveals
              </p>
              <p>• Choose colors that match the content's semantic meaning</p>
              <p>• Keep text concise - ribbons work best with 1-2 words</p>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
