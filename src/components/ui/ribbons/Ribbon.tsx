import React from "react";

interface RibbonProps {
  children: React.ReactNode;
  variant?: "filled" | "rounded" | "shaped" | "hover";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: "brand" | "success" | "warning" | "danger" | "info";
  className?: string;
  text?: string;
  icon?: React.ReactNode;
  animated?: boolean;
}

interface RibbonWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const RibbonWrapper: React.FC<RibbonWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-white/[0.03] ${className}`}
    >
      {children}
    </div>
  );
};

export const RibbonContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="p-5 pt-16">
      <p className="text-sm text-gray-500 dark:text-gray-400">{children}</p>
    </div>
  );
};

const Ribbon: React.FC<RibbonProps> = ({
  children,
  variant = "filled",
  position = "top-left",
  color = "brand",
  className = "",
  text = "Popular",
  icon,
  animated = false,
}) => {
  const colorClasses = {
    brand: "bg-brand-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
    info: "bg-blue-500",
  };

  const getVariantClasses = () => {
    const baseColor = colorClasses[color];

    switch (variant) {
      case "filled":
        return `absolute -left-9 -top-7 mt-3 flex h-14 w-24 -rotate-45 items-end justify-center ${baseColor} px-4 py-1.5 text-sm font-medium text-white shadow-theme-xs`;

      case "rounded":
        return `absolute -left-px mt-3 inline-block rounded-r-full ${baseColor} px-4 py-1.5 text-sm font-medium text-white`;

      case "shaped":
        return `after:bottom-0-0 absolute -left-px mt-3 inline-block ${baseColor} px-4 py-1.5 text-sm font-medium text-white before:absolute before:-right-4 before:top-0 before:border-[13px] before:border-transparent before:border-l-${color}-500 before:border-t-${color}-500 before:content-[''] after:absolute after:-right-4 after:border-[13px] after:border-transparent after:border-b-${color}-500 after:border-l-${color}-500 after:content-['']`;

      case "hover":
        return `group absolute -left-px mt-3 flex -translate-x-[55px] items-center gap-1 ${baseColor} px-4 py-1.5 text-sm font-medium text-white transition-transform duration-500 ease-in-out before:absolute before:-right-4 before:top-0 before:border-[16px] before:border-transparent before:border-l-${color}-500 before:border-t-${color}-500 before:content-[''] after:absolute after:-right-4 after:border-[16px] after:border-transparent after:border-b-${color}-500 after:border-l-${color}-500 after:content-[''] ${
          animated ? "group-hover:translate-x-0" : ""
        }`;

      default:
        return `absolute -left-px mt-3 inline-block ${baseColor} px-4 py-1.5 text-sm font-medium text-white`;
    }
  };

  const ribbonContent = (
    <>
      {variant === "hover" && icon && (
        <span className="transition-opacity duration-300 ease-linear opacity-0 group-hover:opacity-100">
          {text}
        </span>
      )}
      {variant !== "hover" && text}
      {icon && (
        <span className={variant === "hover" ? "" : "ml-1"}>{icon}</span>
      )}
    </>
  );

  return (
    <RibbonWrapper className={animated ? "group" : ""}>
      <span className={`${getVariantClasses()} ${className}`}>
        {ribbonContent}
      </span>
      <RibbonContent>{children}</RibbonContent>
    </RibbonWrapper>
  );
};

export default Ribbon;
