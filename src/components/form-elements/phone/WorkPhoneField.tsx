import React from "react";
import PhoneField from "./PhoneField";
import { WorkIcon } from "@/icons"; // Replace with your actual work/office icon

const WorkPhoneField: React.FC<
  Omit<React.ComponentProps<typeof PhoneField>, "fieldName" | "icon">
> = (props) => (
  <PhoneField
    {...props}
    fieldName="Work Phone"
    icon={<WorkIcon />}
  />
);

export default WorkPhoneField;
