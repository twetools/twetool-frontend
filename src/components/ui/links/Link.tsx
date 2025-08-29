import React from "react";
import NextLink from "next/link";

type LinkVariant =
  | "default"
  | "colored"
  | "underline"
  | "opacity"
  | "opacityHover";
type LinkColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

type LinkOpacity = 10 | 25 | 50 | 75 | 100;

interface LinkProps {
  href: string;
  children: React.ReactNode;
  variant?: LinkVariant;
  color?: LinkColor;
  opacity?: LinkOpacity;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  variant = "default",
  color = "primary",
  opacity = 100,
  className = "",
  target,
  rel,
  onClick,
  ...props
}) => {
  const baseClasses =
    "text-sm font-normal transition-colors duration-200 hover:underline";

  const colorClasses = {
    primary:
      "text-brand-500 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300",
    secondary:
      "text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
    success:
      "text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300",
    danger:
      "text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
    warning:
      "text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300",
    info: "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
    light:
      "text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400",
    dark: "text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-200",
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "colored":
        return colorClasses[color];
      case "underline":
        return `${colorClasses[color]} underline`;
      case "opacity":
        return `text-gray-500/${opacity} hover:text-gray-600/${opacity} dark:text-gray-400/${opacity} dark:hover:text-gray-300/${opacity}`;
      case "opacityHover":
        return `text-gray-500 hover:text-gray-500/${opacity} dark:text-gray-400 dark:hover:text-gray-400/${opacity}`;
      case "default":
      default:
        return "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white";
    }
  };

  const classes = `${baseClasses} ${getVariantClasses()} ${className}`;

  return (
    <NextLink
      href={href}
      className={classes}
      target={target}
      rel={rel}
      onClick={onClick}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
