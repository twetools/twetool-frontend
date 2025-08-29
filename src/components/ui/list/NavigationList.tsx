"use client";
import React from "react";
import BaseList, { type BaseListProps } from "./BaseList";
import Link from "@/components/ui/links/Link";

export interface NavigationItem {
  id?: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  variant?: "default" | "colored" | "underline" | "opacity" | "opacityHover";
}

export interface NavigationListProps
  extends Omit<BaseListProps, "items" | "variant"> {
  items: NavigationItem[];
  horizontal?: boolean;
  linkVariant?:
    | "default"
    | "colored"
    | "underline"
    | "opacity"
    | "opacityHover";
}

// Specialized Navigation List component - uses Link components for navigation
const NavigationList: React.FC<NavigationListProps> = ({
  items,
  horizontal = false,
  linkVariant = "default",
  className = "",
  ...props
}) => {
  // Convert NavigationItems to ListItems with Link components
  const listItems = items.map((navItem) => ({
    id: navItem.id,
    content: navItem.disabled ? (
      <span className="text-sm text-gray-400 dark:text-gray-600 cursor-not-allowed">
        {navItem.label}
      </span>
    ) : (
      <Link
        href={navItem.href}
        variant={navItem.variant || linkVariant}
        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
      >
        {navItem.label}
      </Link>
    ),
    icon: navItem.icon,
    disabled: navItem.disabled,
  }));

  return (
    <BaseList
      {...props}
      items={listItems}
      variant={horizontal ? "horizontal" : "icon"}
      className={className}
    />
  );
};

export default NavigationList;
