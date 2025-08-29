import type { NavItem, SubNavItem } from "@/types/nav";

export function filterNavItems(items: NavItem[], devMode: boolean): NavItem[] {
  return items
    .filter((item) => !item.devOnly || devMode)
    .map((item) => ({
      ...item,
      subItems: item.subItems?.filter(
        (sub): sub is SubNavItem => !sub.devOnly || devMode
      ),
    }));
}
