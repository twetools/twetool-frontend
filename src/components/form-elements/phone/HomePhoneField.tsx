import React from "react";
import PhoneField from "./PhoneField";
import { HomeIcon } from "@/icons"; // Replace with your actual home icon

const HomePhoneField: React.FC<
  Omit<React.ComponentProps<typeof PhoneField>, "fieldName" | "icon">
> = (props) => (
  <PhoneField
    {...props}
    fieldName="Home Phone"
    icon={<HomeIcon />}
  />
);

export default HomePhoneField;