"use client";
import React from "react";
import BaseList, { type ListItem, type BaseListProps } from "./BaseList";

export interface IconListProps extends Omit<BaseListProps, "variant"> {
  items: ListItem[];
  horizontal?: boolean;
}

// Specialized Icon List component - always uses icon variant
const IconList: React.FC<IconListProps> = ({
  items,
  horizontal = false,
  className = "",
  ...props
}) => {
  return (
    <BaseList
      {...props}
      items={items}
      variant={horizontal ? "horizontal" : "icon"}
      className={className}
    />
  );
};

export default IconList;
