import { ReactNode } from "react";

export type SubNavItem = {
  name: string;
  path: string;
  icon?: ReactNode;
  proOnly?: boolean;
  newOnly?: boolean;
  devOnly?: boolean;
};

export type NavItem = {
  name: string;
  icon: ReactNode;
  path?: string;
  devOnly?: boolean;
  subItems?: SubNavItem[];
};

export type NavSection = {
  title: string;
  devOnly?: boolean;
  items: NavItem[];
};
