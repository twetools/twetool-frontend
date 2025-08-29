import { useError } from "@/context/ErrorContext";

/**
 * Custom hook for common error handling patterns in twetool
 * Provides standardized error handling for forms, API calls, and user operations
 */
export function useErrorHandler() {
  const { handleAsyncError, showError } = useError();

  /**
   * Handle form submission errors with user-friendly messages
   * Let ErrorContext format the actual error instead of using generic messages
   */
  const handleFormError = async (
    operation: () => Promise<void>,
    context: "create" | "update" | "delete",
    entityName: string = "record"
  ): Promise<boolean> => {
    // Don't provide custom message - let ErrorContext format the actual error
    return handleAsyncError(operation);
  };

  /**
   * Handle API operation errors with standardized messaging
   * Let ErrorContext format the actual error instead of using generic messages
   */
  const handleApiError = async (
    operation: () => Promise<void>,
    operationName: string = "operation"
  ): Promise<boolean> => {
    // Don't provide custom message - let ErrorContext format the actual error
    return handleAsyncError(operation);
  };

  /**
   * Handle validation errors from form fields
   */
  const handleValidationError = (fieldName: string, message: string) => {
    showError({
      title: "Validation Error",
      message: `${fieldName}: ${message}`,
      variant: "warning",
    });
  };

  /**
   * Handle permission errors
   */
  const handlePermissionError = (action: string) => {
    showError({
      title: "Permission Denied",
      message: `You don't have permission to ${action}. Please contact your administrator.`,
      variant: "warning",
    });
  };

  /**
   * Handle network connectivity errors
   */
  const handleNetworkError = () => {
    showError({
      title: "Network Error",
      message:
        "Unable to connect to the server. Please check your internet connection and try again.",
      variant: "danger",
    });
  };

  /**
   * Handle general user-facing errors with custom messages
   */
  const handleUserError = (
    title: string,
    message: string,
    variant: "warning" | "danger" | "info" = "danger"
  ) => {
    showError({ title, message, variant });
  };

  return {
    handleFormError,
    handleApiError,
    handleValidationError,
    handlePermissionError,
    handleNetworkError,
    handleUserError,
    handleAsyncError,
    showError,
  };
}
