import type React from "react";
import type { ReactNode } from "react";

type TooltipPosition = "top" | "right" | "bottom" | "left";
type TooltipTheme = "light" | "dark";

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: TooltipPosition;
  theme?: TooltipTheme;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = "top",
  theme = "light",
  className = "",
}) => {
  const getPositionClasses = (pos: TooltipPosition) => {
    switch (pos) {
      case "top":
        return "bottom-full left-1/2 mb-2.5 -translate-x-1/2";
      case "right":
        return "left-full top-1/2 ml-2.5 -translate-y-1/2";
      case "bottom":
        return "top-full left-1/2 mt-2.5 -translate-x-1/2";
      case "left":
        return "right-full top-1/2 mr-2.5 -translate-y-1/2";
    }
  };

  const getArrowClasses = (pos: TooltipPosition) => {
    switch (pos) {
      case "top":
        return "-bottom-1 left-1/2 -translate-x-1/2";
      case "right":
        return "-left-1.5 top-1/2 -translate-y-1/2";
      case "bottom":
        return "-top-1 left-1/2 -translate-x-1/2";
      case "left":
        return "-right-1.5 top-1/2 -translate-y-1/2";
    }
  };

  const getThemeClasses = (themeType: TooltipTheme) => {
    return themeType === "light"
      ? "bg-white text-gray-700 dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700"
      : "bg-gray-900 text-white border border-gray-700";
  };

  const getArrowThemeClasses = (themeType: TooltipTheme) => {
    return themeType === "light"
      ? "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
      : "bg-gray-900 border-gray-700";
  };

  return (
    <div className={`relative inline-block group ${className}`}>
      {children}
      <div
        className={`invisible absolute z-30 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100 ${getPositionClasses(
          position
        )}`}
      >
        <div className="relative">
          <div
            className={`${getThemeClasses(
              theme
            )} whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium shadow-lg`}
          >
            {content}
          </div>
          <div
            className={`absolute h-3 w-4 rotate-45 border ${getArrowThemeClasses(
              theme
            )} ${getArrowClasses(position)}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
