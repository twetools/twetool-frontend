"use client";
import React, { useState } from "react";
import { CloseIcon } from "@/icons";

interface CookieConsentProps {
  message: string;
  onCookieSettings?: () => void;
  onDenyAll?: () => void;
  onAcceptAll?: () => void;
  className?: string;
}

const CookieConsent: React.FC<CookieConsentProps> = ({
  message,
  onCookieSettings,
  onDenyAll,
  onAcceptAll,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div
      className={`relative w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800 ${className}`}
    >
      {/* Close Button */}
      <button
        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        onClick={handleClose}
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      {/* Message */}
      <p className="mb-6 pr-4 text-sm text-gray-700 dark:text-gray-300">
        {message}
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
        {/* Cookie Settings */}
        {onCookieSettings && (
          <button
            type="button"
            className="text-left text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            onClick={onCookieSettings}
          >
            Cookie Settings
          </button>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {onDenyAll && (
            <button
              type="button"
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              onClick={() => {
                onDenyAll();
                handleClose();
              }}
            >
              Deny All
            </button>
          )}
          {onAcceptAll && (
            <button
              type="button"
              className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-600"
              onClick={() => {
                onAcceptAll();
                handleClose();
              }}
            >
              Accept All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
