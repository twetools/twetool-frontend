"use client";
import React from "react";
import BaseList, { type ListItem, type BaseListProps } from "./BaseList";

// Export types for external use
export type { ListItem } from "./BaseList";

export interface ListProps extends BaseListProps {
  // Add any additional props specific to the main List component
  // For example, form integration capabilities like the InputField pattern
}

// Main List component - can be extended with form integration capabilities
const List: React.FC<ListProps> = (props) => {
  return <BaseList {...props} />;
};

export default List;
