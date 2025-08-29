"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import MultiSelect from "@/components/form-elements/select/MultiSelect";

interface Option {
  value: string;
  text: string;
  selected: boolean;
}

export default function MultiSelectExamples() {
  const [basicSelected, setBasicSelected] = useState<string[]>([]);
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([
    "marketing",
  ]);
  const [skillsSelected, setSkillsSelected] = useState<string[]>([]);
  const [rolesSelected, setRolesSelected] = useState<string[]>([
    "admin",
    "editor",
  ]);

  // Sample options data
  const basicOptions: Option[] = [
    { value: "option1", text: "Option 1", selected: false },
    { value: "option2", text: "Option 2", selected: false },
    { value: "option3", text: "Option 3", selected: false },
    { value: "option4", text: "Option 4", selected: false },
    { value: "option5", text: "Option 5", selected: false },
  ];

  const categories: Option[] = [
    { value: "marketing", text: "Marketing", selected: false },
    { value: "sales", text: "Sales", selected: false },
    { value: "development", text: "Development", selected: false },
    { value: "design", text: "Design", selected: false },
    { value: "support", text: "Support", selected: false },
  ];

  const skills: Option[] = [
    { value: "javascript", text: "JavaScript", selected: false },
    { value: "typescript", text: "TypeScript", selected: false },
    { value: "react", text: "React", selected: false },
    { value: "node", text: "Node.js", selected: false },
    { value: "python", text: "Python", selected: false },
    { value: "design", text: "UI/UX Design", selected: false },
    {
      value: "project-management",
      text: "Project Management",
      selected: false,
    },
  ];

  const roles: Option[] = [
    { value: "admin", text: "Administrator", selected: false },
    { value: "editor", text: "Editor", selected: false },
    { value: "viewer", text: "Viewer", selected: false },
    { value: "contributor", text: "Contributor", selected: false },
    { value: "guest", text: "Guest", selected: false },
  ];

  return (
    <ComponentCard title="Basic MultiSelect">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Basic Usage
          </h4>
          <div className="space-y-6">
            <MultiSelect
              label="Basic MultiSelect"
              id="basic-multiselect"
              options={basicOptions}
              defaultSelected={basicSelected}
              onChange={setBasicSelected}
              placeholder="Select multiple options"
            />

            <MultiSelect
              label="Pre-selected Options"
              id="preselected-multiselect"
              options={categories}
              defaultSelected={categoriesSelected}
              onChange={setCategoriesSelected}
              placeholder="Choose categories"
              hint="Marketing is pre-selected"
            />
          </div>
        </div>

        {/* Real Use Cases */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Common Use Cases
          </h4>
          <div className="space-y-6">
            <MultiSelect
              label="Skills & Technologies"
              id="skills-multiselect"
              options={skills}
              defaultSelected={skillsSelected}
              onChange={setSkillsSelected}
              placeholder="Select your skills"
              hint="Choose all technologies you're experienced with"
            />

            <MultiSelect
              label="User Roles"
              id="roles-multiselect"
              options={roles}
              defaultSelected={rolesSelected}
              onChange={setRolesSelected}
              placeholder="Assign roles"
              hint="Admin and Editor roles are pre-assigned"
            />
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
