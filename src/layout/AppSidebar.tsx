"use client";
import React, { useEffect, useRef, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { useDevMode } from "@/context/DevModeContext";
import Badge from "@/components/ui/badge/Badge";
import type { NavItem, NavSection } from "@/types/nav";

import {
  AnalyticsIcon,
  DashboardIcon,
  DocumentsIcon,
  EnvelopeIcon,
  FinancialIcon,
  HomeIcon,
  NetworkIcon,
  PropertiesIcon,
  FeedbackIcon,
  SupportIcon,
  TasksIcon,
  UsersIcon,
  AuthIcon,
  FormElementsIcon,
  PageIcon,
  TableIcon,
  UIElementsIcon,
  DropdownIcon,
  HorizontalDotsIcon,
} from "@/icons";

// Reusable badge components
const DevBadge: React.FC<{ size?: "sm" | "md" }> = ({ size = "sm" }) => (
  <Badge color="primary" size={size === "sm" ? "sm" : undefined}>
    DEV
  </Badge>
);
const NewBadge: React.FC<{ size?: "sm" | "md" }> = ({ size = "sm" }) => (
  <Badge color="success" size={size === "sm" ? "sm" : undefined}>
    NEW
  </Badge>
);

const ProBadge: React.FC<{ size?: "sm" | "md" }> = ({ size = "sm" }) => (
  <Badge color="warning" size={size === "sm" ? "sm" : undefined}>
    PRO
  </Badge>
);

const menuSection: NavSection = {
  title: "Menu",
  items: [
    {
      name: "Home",
      icon: <HomeIcon />,
      path: "/",
      devOnly: false,
    },
    {
      name: "Admin",
      icon: <DashboardIcon />,
      devOnly: false,
      subItems: [
        {
          name: "Users",
          path: "/users",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Comps",
          path: "/",
          devOnly: true,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Tax Records",
          path: "/",
          devOnly: true,
          proOnly: false,
          newOnly: true,
        },
      ],
    },
    {
      name: "Email",
      icon: <EnvelopeIcon />,
      devOnly: true,
      subItems: [
        {
          name: "Inbox",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Conversations",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Drafts",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Sent",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Templates",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
      ],
    },

    {
      name: "Network",
      icon: <NetworkIcon />,
      devOnly: true,
      subItems: [
        {
          name: "Agents",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Vendors",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Companies",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
      ],
    },
    {
      name: "Analytics",
      icon: <AnalyticsIcon />,
      devOnly: true,
      subItems: [
        {
          name: "Market Trends",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Performance Metrics",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "ROI Calculator",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
      ],
    },
    {
      name: "Financials",
      icon: <FinancialIcon />,
      devOnly: true,
      subItems: [
        {
          name: "Commissions",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Expenses",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Payouts",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
      ],
    },
    {
      name: "Documents",
      icon: <DocumentsIcon />,
      devOnly: true,
      subItems: [
        {
          name: "Contracts",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Amendments",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Uploads",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Templates",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
      ],
    },
  ],
};

const supportSection = {
  title: "Support",
  devOnly: true,
  items: [
    {
      name: "Feedback",
      icon: <FeedbackIcon />,
      devOnly: true,
      subItems: [
        {
          name: "Suggestions",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Bug Report",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Feature Request",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
      ],
    },
    {
      name: "Support",
      icon: <SupportIcon />,
      devOnly: false,
      subItems: [
        {
          name: "FAQs",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Live Chat",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Documentation",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Tutorials",
          path: "/",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
      ],
    },
  ],
};

const examplesSection = {
  title: "Examples",
  devOnly: true,
  items: [
    {
      name: "Authentication",
      icon: <AuthIcon className="w-6 h-6" />,
      subItems: [
        { name: "Sign In", path: "/signin", proOnly: false },
        { name: "Sign Up", path: "/signup", proOnly: false },
        { name: "Reset Password", path: "/reset-password", proOnly: true },
        {
          name: "Two Step Verification",
          path: "/two-step-verification",
          proOnly: true,
        },
      ],
    },

    {
      name: "Form Elements",
      icon: <FormElementsIcon className="w-6 h-6" />,
      subItems: [
        {
          name: "Checkbox",
          path: "/checkbox",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
        {
          name: "Dates",
          path: "/dates",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
        {
          name: "Dropzone",
          path: "/dropzone",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
        {
          name: "File Input",
          path: "/file-input",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
        {
          name: "Input",
          path: "/input",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
        {
          name: "Phone",
          path: "/phone",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
        {
          name: "Radio",
          path: "/radio",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
        {
          name: "Select",
          path: "/select",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
        {
          name: "Textarea",
          path: "/textarea",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
        {
          name: "Toggle",
          path: "/toggle",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
      ],
    },

    {
      name: "Pages",
      icon: <PageIcon />,
      subItems: [
        // { name: "File Manager", path: "/file-manager", proOnly: true },
        // { name: "Pricing Tables", path: "/pricing-tables", proOnly: true },
        // { name: "Faqs", path: "/faq", proOnly: true },
        { name: "Blank Page", path: "/blank", proOnly: true },
        // { name: "404 Error", path: "/error-404", proOnly: true },
        // { name: "500 Error", path: "/error-500", proOnly: true },
        // { name: "503 Error", path: "/error-503", proOnly: true },
        // { name: "Coming Soon", path: "/coming-soon", proOnly: true },
        // { name: "Maintenance", path: "/maintenance", proOnly: true },
        // { name: "Success", path: "/success", proOnly: true },
      ],
    },

    {
      name: "UI Elements",
      icon: <UIElementsIcon className="w-6 h-6" />,
      subItems: [
        {
          name: "Alerts",
          path: "/alerts",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },

        {
          name: "Avatars",
          path: "/avatars",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },

        {
          name: "Badges",
          path: "/badges",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },

        {
          name: "Breadcrumbs",
          path: "/breadcrumbs",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },

        {
          name: "Buttons",
          path: "/buttons",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },

        {
          name: "Buttons Group",
          path: "/buttons-group",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },

        {
          name: "Dropdowns",
          path: "/dropdowns",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },

        {
          name: "Errors",
          path: "/error-handling",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Icons",
          path: "/icons",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },

        {
          name: "Links",
          path: "/links",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },

        {
          name: "Lists",
          path: "/list",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },

        {
          name: "Modals",
          path: "/modals",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
        {
          name: "Notification",
          path: "/notification",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Pagination",
          path: "/pagination",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Progress Bar",
          path: "/progress-bar",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Ribbons",
          path: "/ribbons",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
        {
          name: "Spinners",
          path: "/spinners",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
        {
          name: "Tables",
          path: "/tables",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },

        {
          name: "Tabs",
          path: "/tabs",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
        {
          name: "Tooltips",
          path: "/tooltip",
          devOnly: false,
          proOnly: false,
          newOnly: true,
        },
        {
          name: "Popovers",
          path: "/popovers",
          devOnly: false,
          proOnly: false,
          newOnly: false,
        },
      ],
    },
  ],
};

const othersSection = {
  title: "Support",
  devOnly: true,
  items: [],
};

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();
  const { enabled: devMode } = useDevMode();

  const filteredMainNavItems = menuSection.items
    .filter((item) => !item.devOnly || devMode)
    .map((item) => ({
      ...item,
      subItems: item.subItems?.filter((sub) => !sub.devOnly || devMode),
    }));

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "examples" | "support" | "others"
  ) => (
    <ul className="flex flex-col gap-4 mt-3">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group  ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={` ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className="menu-item-text inline-flex items-center gap-2 text-sm">
                  <span>{nav.name}</span>
                  <span className="flex gap-1">
                    {nav.devOnly && (
                      <span className="normal-case text-xs leading-none">
                        <DevBadge />
                      </span>
                    )}
                  </span>
                </span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <DropdownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text inline-flex items-center gap-2 text-sm">
                    <span>{nav.name}</span>
                    <span className="flex gap-1">
                      {nav.devOnly && <DevBadge size="sm" />}
                    </span>
                  </span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      <span className="flex items-center space-x-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                        {subItem.icon && (
                          <span className="flex items-center justify-center text-gray-400 dark:text-gray-500">
                            <span className="w-auto h-5 min-w-[20px] flex items-center justify-center">
                              {subItem.icon}
                            </span>
                          </span>
                        )}
                        <span className="truncate">{subItem.name}</span>
                      </span>

                      <span className="flex items-center gap-1 ml-auto">
                        <span className="flex items-center gap-1 ml-auto">
                          {subItem.newOnly && <NewBadge />}
                          {subItem.proOnly && <ProBadge />}
                          {subItem.devOnly && <DevBadge />}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "examples" | "support" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // const isActive = (path: string) => path === pathname;

  const isActive = useCallback(
    (path: string) => {
      // Handle examples routes - they are under /examples/form-elements/...
      if (path.startsWith("/") && pathname?.includes(path)) {
        return (
          pathname === `/examples/form-elements${path}` || pathname === path
        );
      }
      return pathname === path;
    },
    [pathname]
  );

  useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;

    // Check main menu items
    menuSection.items.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
          if (isActive(subItem.path)) {
            setOpenSubmenu({ type: "main", index });
            submenuMatched = true;
          }
        });
      }
    });

    // Check examples section items
    examplesSection.items.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
          if (isActive(subItem.path)) {
            setOpenSubmenu({ type: "examples", index });
            submenuMatched = true;
          }
        });
      }
    });

    // Only close submenu if no match and we're not on a submenu page
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (
    index: number,
    menuType: "main" | "examples" | "support" | "others"
  ) => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-full transition-all duration-300 ease-in-out z-50 border-r border-gray-200
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        } items-center`}
        style={{ minHeight: "82px" }}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <Image
                className="dark:hidden"
                src="/images/logo/logo.svg"
                alt="Logo"
                width={150}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                priority
                width={150}
                height={40}
                style={{ height: "auto" }}
              />
            </>
          ) : (
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="">
          <div className="flex flex-col gap-1">
            {/* Menu Section */}
            {(!menuSection.devOnly || devMode) && (
              <div>
                <SectionDivider
                  label={
                    isExpanded || isHovered || isMobileOpen ? (
                      "Menu"
                    ) : (
                      <HorizontalDotsIcon className="w-5 h-5" />
                    )
                  }
                  showDevBadge={
                    (isExpanded || isHovered || isMobileOpen) &&
                    menuSection.devOnly &&
                    devMode
                  }
                />
                {renderMenuItems(filteredMainNavItems, "main")}
              </div>
            )}

            {/* Support Section */}
            {(!supportSection.devOnly || devMode) && (
              <div>
                <SectionDivider
                  label={
                    isExpanded || isHovered || isMobileOpen ? (
                      "Support"
                    ) : (
                      <HorizontalDotsIcon className="w-5 h-5" />
                    )
                  }
                  showDevBadge={
                    (isExpanded || isHovered || isMobileOpen) &&
                    supportSection.devOnly &&
                    devMode
                  }
                />
                {renderMenuItems(supportSection.items, "support")}
              </div>
            )}
            {/* Examples Section */}
            {(!examplesSection.devOnly || devMode) && (
              <div>
                <SectionDivider
                  label={
                    isExpanded || isHovered || isMobileOpen ? (
                      "Examples"
                    ) : (
                      <HorizontalDotsIcon className="w-5 h-5" />
                    )
                  }
                  showDevBadge={
                    (isExpanded || isHovered || isMobileOpen) &&
                    examplesSection.devOnly &&
                    devMode
                  }
                />
                {renderMenuItems(examplesSection.items, "examples")}
              </div>
            )}

            {/* Others Section */}
            {(!othersSection.devOnly || devMode) && (
              <div>
                <SectionDivider
                  label={
                    isExpanded || isHovered || isMobileOpen ? (
                      "Others"
                    ) : (
                      <HorizontalDotsIcon className="w-5 h-5" />
                    )
                  }
                  showDevBadge={
                    (isExpanded || isHovered || isMobileOpen) &&
                    othersSection.devOnly &&
                    devMode
                  }
                />
                {renderMenuItems(othersSection.items, "others")}
              </div>
            )}
          </div>
        </nav>
        {/* Sidebar widget */}
        {/* {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null} */}
      </div>
    </aside>
  );
};

export default AppSidebar;

interface SectionDividerProps {
  label: React.ReactNode;
  showDevBadge?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  label,
  showDevBadge,
}) => {
  const isIcon = React.isValidElement(label);

  return (
    <div className="flex items-center my-1 select-none">
      {" "}
      {/* Changed my-2 to my-1 */}
      {/* Left line */}
      <hr className="flex-1 border-t border-gray-300 dark:border-gray-600" />
      {/* Label or Icon */}
      {isIcon ? (
        <div className="flex items-center justify-center w-8 h-8 mx-2">
          <span className="flex items-center justify-center w-full h-full text-gray-300 dark:text-gray-500">
            {label}
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-2 pl-2 w-auto justify-start">
          <span className="uppercase tracking-wider text-xs font-semibold text-gray-300 dark:text-gray-500 text-left">
            {label}
          </span>
          {showDevBadge && (
            <span className="normal-case text-xs leading-none">
              <DevBadge />
            </span>
          )}
        </div>
      )}
      {/* Right line */}
      <hr className="flex-1 border-t border-gray-300 dark:border-gray-600" />
    </div>
  );
};

// export default SectionDivider;
