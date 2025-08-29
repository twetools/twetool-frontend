"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ErrorContextType {
  // Error state
  error: ErrorState | null;

  // Actions
  showError: (error: ErrorInput) => void;
  clearError: () => void;

  // Utility methods
  handleAsyncError: (
    operation: () => Promise<void>,
    errorMessage?: string
  ) => Promise<boolean>;
}

interface ErrorState {
  title: string;
  message: string;
  variant: "warning" | "danger" | "info";
  timestamp: Date;
}

interface ErrorInput {
  title?: string;
  message: string;
  variant?: "warning" | "danger" | "info";
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export function useError() {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error("useError must be used within an ErrorProvider");
  }
  return context;
}

interface ErrorProviderProps {
  children: ReactNode;
}

export function ErrorProvider({ children }: ErrorProviderProps) {
  const [error, setError] = useState<ErrorState | null>(null);

  const showError = (errorInput: ErrorInput) => {
    const errorState: ErrorState = {
      title:
        errorInput.title || getDefaultTitle(errorInput.variant || "danger"),
      message: errorInput.message,
      variant: errorInput.variant || "danger",
      timestamp: new Date(),
    };
    setError(errorState);
  };

  const clearError = () => {
    setError(null);
  };

  const handleAsyncError = async (
    operation: () => Promise<void>,
    errorMessage?: string
  ): Promise<boolean> => {
    try {
      await operation();
      return true;
    } catch (error) {
      const message = errorMessage || formatErrorMessage(error);
      showError({
        title: "Operation Failed",
        message,
        variant: "danger",
      });
      return false;
    }
  };

  const getDefaultTitle = (variant: "warning" | "danger" | "info"): string => {
    switch (variant) {
      case "danger":
        return "Error";
      case "warning":
        return "Warning";
      case "info":
        return "Information";
      default:
        return "Error";
    }
  };

  const formatErrorMessage = (error: any): string => {
    if (typeof error === "string") {
      return error;
    }

    if (error instanceof Error) {
      return error.message;
    }

    if (error?.message) {
      return error.message;
    }

    if (error?.code) {
      switch (error.code) {
        case "P2002":
          return "A record with this information already exists.";
        case "P2025":
          return "The record you're trying to update doesn't exist.";
        case "P2003":
          return "This operation violates a foreign key constraint.";
        case "P2016":
          return "Query interpretation error. Please check your data.";
        default:
          return `Database error (${error.code}): ${
            error.message || "Unknown error"
          }`;
      }
    }

    // Handle network errors
    if (error?.status) {
      switch (error.status) {
        case 400:
          return "Invalid request. Please check your input.";
        case 401:
          return "You're not authorized to perform this action.";
        case 403:
          return "Access denied. You don't have permission for this action.";
        case 404:
          return "The requested resource was not found.";
        case 409:
          return "Conflict: The resource already exists or has been modified.";
        case 422:
          return "Invalid data provided. Please check your input.";
        case 500:
          return "Server error. Please try again later.";
        default:
          return `Network error (${error.status}): ${
            error.message || "Unknown error"
          }`;
      }
    }

    return "An unexpected error occurred. Please try again.";
  };

  const value: ErrorContextType = {
    error,
    showError,
    clearError,
    handleAsyncError,
  };

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
}
