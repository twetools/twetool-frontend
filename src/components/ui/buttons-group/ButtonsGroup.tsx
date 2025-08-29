import React from "react";

type ButtonGroupItem = {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
};

type ButtonsGroupProps = {
  items: ButtonGroupItem[];
  variant?: "primary" | "secondary";
  iconPosition?: "left" | "right" | "none";
  size?: "small" | "medium" | "large";
  className?: string;
};

const ButtonsGroup: React.FC<ButtonsGroupProps> = ({
  items,
  variant = "primary",
  iconPosition = "none",
  size = "medium",
  className = "",
}) => {
  const getButtonBaseClasses = (hasIcon: boolean) => {
    const sizeClasses = {
      small: "px-4 py-3 text-sm", // Match Button sm size
      medium: "px-5 py-3.5 text-sm", // Match Button md size
      large: "px-6 py-4 text-base",
    };

    return `inline-flex items-center ${
      hasIcon ? "gap-2" : ""
    } font-medium transition ring-1 ring-inset first:rounded-l-lg last:rounded-r-lg ${
      sizeClasses[size]
    }`;
  };

  const getButtonVariantClasses = (item: ButtonGroupItem, index: number) => {
    const isFirst = index === 0;
    const isActive = item.active;
    const isDisabled = item.disabled;

    if (isDisabled) {
      return variant === "primary"
        ? "bg-gray-100 text-gray-400 ring-gray-200 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600 dark:ring-gray-700"
        : "bg-gray-50 text-gray-400 ring-gray-200 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600 dark:ring-gray-700";
    }

    if (variant === "primary") {
      if (isActive || isFirst) {
        return "text-white bg-brand-500 ring-brand-500 hover:bg-brand-600";
      }
      return "-ml-px bg-transparent text-brand-600 ring-brand-600 hover:bg-brand-600 hover:text-white";
    } else {
      if (isActive || isFirst) {
        return "text-gray-900 bg-gray-100 ring-gray-300 hover:bg-gray-200 dark:bg-white/5 dark:text-white dark:ring-gray-600 dark:hover:bg-white/10";
      }
      return "-ml-px bg-transparent text-gray-700 ring-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:bg-transparent dark:text-gray-400 dark:ring-gray-600 dark:hover:bg-white/5 dark:hover:text-gray-300";
    }
  };

  const renderIcon = (icon: React.ReactNode) => {
    if (!icon) return null;

    // Use same clean pattern as Button component
    return <span className="flex items-center">{icon}</span>;
  };
  const renderButton = (item: ButtonGroupItem, index: number) => {
    const hasIcon = !!(item.icon && iconPosition !== "none");
    const buttonClasses = `${getButtonBaseClasses(
      hasIcon
    )} ${getButtonVariantClasses(item, index)}`;

    return (
      <button
        key={index}
        type="button"
        onClick={item.onClick}
        disabled={item.disabled}
        className={buttonClasses}
      >
        {iconPosition === "left" && item.icon && renderIcon(item.icon)}
        {item.label}
        {iconPosition === "right" && item.icon && renderIcon(item.icon)}
      </button>
    );
  };

  return (
    <div
      className={`max-w-full pb-3 overflow-x-auto custom-scrollbar sm:pb-0 buttons-group ${className}`}
    >
      <div className="inline-flex items-center shadow-sm">
        {items.map((item, index) => renderButton(item, index))}
      </div>
    </div>
  );
};

export default ButtonsGroup;
