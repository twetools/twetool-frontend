"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import DataTable, { DataTableColumn } from "@/components/ui/tables/DataTable";
import type { TableFilterGroup } from "@/components/ui/tables/TableFilterGroupBar";

// Sample data type for filtering demonstrations
interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  salary: number;
  experience: number;
  status: "active" | "inactive" | "onLeave";
  hireDate: string;
}

export default function DataTableWithFiltering() {
  const [employees] = useState<Employee[]>([
    {
      id: 1,
      name: "Alice Johnson",
      department: "Engineering",
      position: "Senior Developer",
      salary: 95000,
      experience: 5,
      status: "active",
      hireDate: "2020-01-15",
    },
    {
      id: 2,
      name: "Bob Smith",
      department: "Marketing",
      position: "Marketing Manager",
      salary: 75000,
      experience: 3,
      status: "active",
      hireDate: "2022-03-20",
    },
    {
      id: 3,
      name: "Carol Davis",
      department: "Engineering",
      position: "Frontend Developer",
      salary: 80000,
      experience: 4,
      status: "onLeave",
      hireDate: "2021-05-10",
    },
    {
      id: 4,
      name: "David Wilson",
      department: "Sales",
      position: "Sales Representative",
      salary: 55000,
      experience: 2,
      status: "active",
      hireDate: "2023-07-12",
    },
    {
      id: 5,
      name: "Emma Brown",
      department: "HR",
      position: "HR Specialist",
      salary: 65000,
      experience: 6,
      status: "inactive",
      hireDate: "2019-11-05",
    },
    {
      id: 6,
      name: "Frank Miller",
      department: "Engineering",
      position: "Backend Developer",
      salary: 88000,
      experience: 7,
      status: "active",
      hireDate: "2018-09-15",
    },
  ]);

  const [selectedGroup, setSelectedGroup] = useState<string>("all");

  // Define filter groups based on departments and status
  const filterGroups: TableFilterGroup[] = [
    { key: "all", label: "All Employees", count: employees.length },
    {
      key: "engineering",
      label: "Engineering",
      count: employees.filter((e) => e.department === "Engineering").length,
    },
    {
      key: "marketing",
      label: "Marketing",
      count: employees.filter((e) => e.department === "Marketing").length,
    },
    {
      key: "sales",
      label: "Sales",
      count: employees.filter((e) => e.department === "Sales").length,
    },
    {
      key: "hr",
      label: "HR",
      count: employees.filter((e) => e.department === "HR").length,
    },
    {
      key: "active",
      label: "Active",
      count: employees.filter((e) => e.status === "active").length,
    },
    {
      key: "inactive",
      label: "Inactive",
      count: employees.filter((e) => e.status === "inactive").length,
    },
    {
      key: "onLeave",
      label: "On Leave",
      count: employees.filter((e) => e.status === "onLeave").length,
    },
  ];

  // Filter data based on selected group
  const filteredEmployees = employees.filter((employee) => {
    switch (selectedGroup) {
      case "engineering":
        return employee.department === "Engineering";
      case "marketing":
        return employee.department === "Marketing";
      case "sales":
        return employee.department === "Sales";
      case "hr":
        return employee.department === "HR";
      case "active":
        return employee.status === "active";
      case "inactive":
        return employee.status === "inactive";
      case "onLeave":
        return employee.status === "onLeave";
      default:
        return true;
    }
  });

  const handleGroupChange = (key: string) => {
    setSelectedGroup(key);
  };

  // Define columns
  const columns: DataTableColumn<Employee>[] = [
    {
      key: "name",
      label: "Employee",
      sortable: true,
    },
    {
      key: "department",
      label: "Department",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            row.department === "Engineering"
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
              : row.department === "Marketing"
              ? "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
              : row.department === "Sales"
              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              : "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400"
          }`}
        >
          {row.department}
        </span>
      ),
    },
    {
      key: "position",
      label: "Position",
      sortable: true,
    },
    {
      key: "salary",
      label: "Salary",
      sortable: true,
      align: "right",
      headerAlign: "right",
      render: (row) => `$${row.salary.toLocaleString()}`,
    },
    {
      key: "experience",
      label: "Experience",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) => `${row.experience} years`,
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      align: "center",
      headerAlign: "center",
      render: (row) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            row.status === "active"
              ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              : row.status === "inactive"
              ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
          }`}
        >
          {row.status === "onLeave" ? "On Leave" : row.status}
        </span>
      ),
    },
  ];

  return (
    <ComponentCard title="Data Table with Filtering">
      <div className="space-y-8">
        {/* Table with Filter Groups */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Filter Groups and Categories
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700 mb-4">
            <strong>Features:</strong> Category-based filtering, count badges,
            multiple filter criteria
          </div>

          <DataTable
            data={filteredEmployees}
            columns={columns}
            searchPlaceholder="Search employees..."
            defaultRowsPerPage={5}
            rowsPerPageOptions={[5, 10, 15]}
            title="Employee Directory"
            desc="Browse employees by department and status"
            groups={filterGroups}
            selectedGroup={selectedGroup}
            onGroupChange={handleGroupChange}
          />
        </div>

        {/* Filter Information */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Filter Information
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Current Filter:</strong>{" "}
              {filterGroups.find((g) => g.key === selectedGroup)?.label}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Showing:</strong> {filteredEmployees.length} of{" "}
              {employees.length} employees
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Filter Groups:</strong> Department and status based
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
              <strong>Count Badges:</strong> Shows items per category
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
