"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import List from "@/components/ui/list/List";
import type { ListItem } from "@/components/ui/list/List";

export default function BasicUsage() {
  // Sample list items
  const basicItems: ListItem[] = [
    { content: "Lorem ipsum dolor sit amet" },
    { content: "It is a long established fact that a reader" },
    { content: "Lorem ipsum dolor sit amet" },
    { content: "Contrary to popular belief" },
    { content: "There are many variations of passages" },
  ];

  return (
    <ComponentCard title="Basic List Types">
      <div className="space-y-6">
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Default List
          </h4>
          <List items={basicItems} variant="default" />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Default variant provides basic list styling without bullets or
            numbers
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Unordered List
          </h4>
          <List items={basicItems} variant="unordered" />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Unordered variant displays items with bullet points
          </div>
        </div>

        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Ordered List
          </h4>
          <List items={basicItems} variant="ordered" />
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-2">
            Ordered variant displays items with sequential numbers
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
