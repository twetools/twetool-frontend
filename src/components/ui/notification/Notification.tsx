"use client";
import React, { useState, useEffect } from "react";
import {
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from "@/icons";

interface NotificationProps {
  variant: "success" | "info" | "warning" | "error";
  title: string;
  description?: string;
  autoHide?: boolean;
  hideDuration?: number;
  onClose?: () => void;
  className?: string;
}

const Notification: React.FC<NotificationProps> = ({
  variant,
  title,
  description,
  autoHide = true,
  hideDuration = 5000,
  onClose,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide functionality
  useEffect(() => {
    if (autoHide && hideDuration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, hideDuration);

      return () => clearTimeout(timer);
    }
  }, [autoHide, hideDuration]);

  // Styling configuration for each notification type
  const variantStyles = {
    success: {
      borderColor: "border-green-500",
      iconBg:
        "bg-green-50 text-green-500 dark:bg-green-900/20 dark:text-green-400",
      icon: <SuccessIcon className="h-6 w-6" />,
    },
    info: {
      borderColor: "border-blue-500",
      iconBg: "bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400",
      icon: <InfoIcon className="h-6 w-6" />,
    },
    warning: {
      borderColor: "border-orange-500",
      iconBg:
        "bg-orange-50 text-orange-500 dark:bg-orange-900/20 dark:text-orange-400",
      icon: <WarningIcon className="h-6 w-6" />,
    },
    error: {
      borderColor: "border-red-500",
      iconBg: "bg-red-50 text-red-500 dark:bg-red-900/20 dark:text-red-400",
      icon: <ErrorIcon className="h-6 w-6" />,
    },
  };

  const { borderColor, iconBg, icon } = variantStyles[variant];

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`flex items-start justify-between gap-3 rounded-md border-l-4 bg-white p-4 shadow-lg dark:bg-gray-800 ${borderColor} ${className}`}
    >
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${iconBg}`}
        >
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
            {title}
          </h4>
          {description && (
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        aria-label="Close notification"
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default Notification;
