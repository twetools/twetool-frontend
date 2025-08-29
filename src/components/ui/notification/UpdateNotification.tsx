"use client";
import React from "react";
import { CloseIcon } from "@/icons";

interface UpdateNotificationProps {
  title: string;
  message: string;
  onLaterClick?: () => void;
  onUpdateClick?: () => void;
  className?: string;
}

const UpdateNotification: React.FC<UpdateNotificationProps> = ({
  title,
  message,
  onLaterClick,
  onUpdateClick,
  className = "",
}) => {
  return (
    <div
      className={`w-full max-w-md rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-700 dark:bg-gray-800 ${className}`}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="text-brand-500">
          <CloseIcon />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <h5 className="mb-1 text-base font-medium text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {message}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            {onLaterClick && (
              <button
                type="button"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                onClick={onLaterClick}
              >
                Later
              </button>
            )}
            {onUpdateClick && (
              <button
                type="button"
                className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-600"
                onClick={onUpdateClick}
              >
                Update Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateNotification;
