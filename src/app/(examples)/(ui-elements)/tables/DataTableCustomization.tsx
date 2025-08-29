"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import DataTable, { DataTableColumn } from "@/components/ui/tables/DataTable";

// Sample data type for customization demonstrations
interface Task {
  id: number;
  title: string;
  assignee: string;
  priority: "low" | "medium" | "high";
  status: "todo" | "in-progress" | "review" | "done";
  dueDate: string;
  tags: string[];
  progress: number;
}

export default function DataTableCustomization() {
  const [tasks] = useState<Task[]>([
    {
      id: 1,
      title: "Design new landing page",
      assignee: "Sarah Wilson",
      priority: "high",
      status: "in-progress",
      dueDate: "2025-07-30",
      tags: ["design", "frontend", "marketing"],
      progress: 75,
    },
    {
      id: 2,
      title: "Implement user authentication",
      assignee: "Mike Johnson",
      priority: "high",
      status: "review",
      dueDate: "2025-07-28",
      tags: ["backend", "security"],
      progress: 90,
    },
    {
      id: 3,
      title: "Write API documentation",
      assignee: "Lisa Brown",
      priority: "medium",
      status: "todo",
      dueDate: "2025-08-05",
      tags: ["documentation", "api"],
      progress: 0,
    },
    {
      id: 4,
      title: "Fix responsive issues",
      assignee: "Tom Davis",
      priority: "medium",
      status: "in-progress",
      dueDate: "2025-08-02",
      tags: ["frontend", "css", "responsive"],
      progress: 45,
    },
    {
      id: 5,
      title: "Database optimization",
      assignee: "Alex Chen",
      priority: "low",
      status: "done",
      dueDate: "2025-07-25",
      tags: ["backend", "performance"],
      progress: 100,
    },
  ]);

  const [compactMode, setCompactMode] = useState(false);
  const [showProgress, setShowProgress] = useState(true);

  // Progress bar component
  const ProgressBar = ({ progress }: { progress: number }) => (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div
        className={`h-2 rounded-full transition-all duration-300 ${
          progress >= 100
            ? "bg-green-500"
            : progress >= 75
            ? "bg-blue-500"
            : progress >= 50
            ? "bg-yellow-500"
            : progress >= 25
            ? "bg-orange-500"
            : "bg-red-500"
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );

  // Tag component
  const Tag = ({ tag }: { tag: string }) => (
    <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 rounded">
      {tag}
    </span>
  );

  // Define columns with heavy customization
  const columns: DataTableColumn<Task>[] = [
    {
      key: "title",
      label: "Task",
      sortable: true,
      render: (row) => (
        <div className={compactMode ? "space-y-1" : "space-y-2"}>
          <div className="font-medium text-gray-900 dark:text-white">
            {row.title}
          </div>
          <div className="flex flex-wrap gap-1">
            {row.tags.slice(0, compactMode ? 2 : 3).map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
            {row.tags.length > (compactMode ? 2 : 3) && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                +{row.tags.length - (compactMode ? 2 : 3)} more
              </span>
            )}
          </div>
        </div>
      ),
    },
    {
      key: "assignee",
      label: "Assignee",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) => (
        <div className="text-center">
          <div className="font-medium text-gray-900 dark:text-white">
            {row.assignee}
          </div>
          {!compactMode && (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {row.status.replace("-", " ")}
            </div>
          )}
        </div>
      ),
    },
    {
      key: "priority",
      label: "Priority",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            row.priority === "high"
              ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
              : row.priority === "medium"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
              : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
          }`}
        >
          {row.priority}
        </span>
      ),
    },
    {
      key: "progress",
      label: "Progress",
      sortable: true,
      align: "center",
      headerAlign: "center",
      hidden: !showProgress,
      render: (row) => (
        <div className="space-y-1">
          <ProgressBar progress={row.progress} />
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            {row.progress}%
          </div>
        </div>
      ),
    },
    {
      key: "dueDate",
      label: "Due Date",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) => {
        const dueDate = new Date(row.dueDate);
        const today = new Date();
        const isOverdue = dueDate < today && row.status !== "done";
        const isDueSoon =
          dueDate <= new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000);

        return (
          <div className="text-center">
            <div
              className={`text-sm ${
                isOverdue
                  ? "text-red-600 dark:text-red-400 font-medium"
                  : isDueSoon
                  ? "text-yellow-600 dark:text-yellow-400 font-medium"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {dueDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </div>
            {(isOverdue || isDueSoon) && (
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {isOverdue ? "Overdue" : "Due soon"}
              </div>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <ComponentCard title="Data Table Customization">
      <div className="space-y-8">
        {/* Customization Controls */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Customization Options
          </h4>
          <div className="flex flex-wrap gap-4 mb-4">
            <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                checked={compactMode}
                onChange={(e) => setCompactMode(e.target.checked)}
                className="rounded border-gray-300 dark:border-gray-600"
              />
              Compact mode
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                checked={showProgress}
                onChange={(e) => setShowProgress(e.target.checked)}
                className="rounded border-gray-300 dark:border-gray-600"
              />
              Show progress column
            </label>
          </div>
        </div>

        {/* Customized Table */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Highly Customized Table
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 mb-4">
            <strong>Features:</strong> Custom progress bars, conditional
            styling, tag components, due date indicators
          </div>

          <DataTable
            data={tasks}
            columns={columns}
            searchPlaceholder="Search tasks..."
            defaultRowsPerPage={5}
            rowsPerPageOptions={[5, 10, 15]}
            title="Project Tasks"
            desc="Task management with custom visualizations"
            className={compactMode ? "compact-table" : ""}
          />
        </div>

        {/* Customization Features */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Customization Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Progress Bars:</strong> Visual progress indicators with
              color coding
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Tag Components:</strong> Styled category/label indicators
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Conditional Styling:</strong> Color changes based on data
              values
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Dynamic Columns:</strong> Show/hide columns based on
              settings
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Compact Mode:</strong> Adjustable density and spacing
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Date Indicators:</strong> Smart highlighting for due dates
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
