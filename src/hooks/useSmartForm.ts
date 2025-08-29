import { useState, useCallback } from "react";

export interface FormFieldState {
  value: any;
  error: string;
  touched: boolean;
}

export interface FormState {
  [key: string]: FormFieldState;
}

export interface UseSmartFormOptions {
  initialValues?: { [key: string]: any };
  validationRules?: { [key: string]: (value: any) => string };
  requiredFields?: string[];
}

export interface UseSmartFormReturn {
  values: { [key: string]: any };
  errors: { [key: string]: string };
  touchedFields: { [key: string]: boolean };
  formState: FormState;

  // Field management
  setValue: (fieldName: string, value: any) => void;
  setError: (fieldName: string, error: string) => void;
  setTouched: (fieldName: string) => void;

  // Validation
  validateField: (fieldName: string) => string;
  validateForm: () => boolean;

  // Utilities
  getFieldProps: (fieldName: string) => {
    hasValue: boolean;
    hasBeenTouched: boolean;
    error: string;
    required: boolean;
  };

  // Reset
  resetForm: () => void;
  resetField: (fieldName: string) => void;
}

/**
 * Hook for managing form state with smart asterisk pattern
 * Handles validation, touched states, and provides utilities for enhanced UX
 */
export const useSmartForm = ({
  initialValues = {},
  validationRules = {},
  requiredFields = [],
}: UseSmartFormOptions = {}): UseSmartFormReturn => {
  const [formState, setFormState] = useState<FormState>(() => {
    const state: FormState = {};

    // Initialize with provided values
    Object.keys(initialValues).forEach((key) => {
      state[key] = {
        value: initialValues[key] || "",
        error: "",
        touched: false,
      };
    });

    // Ensure all required fields are initialized
    requiredFields.forEach((field) => {
      if (!state[field]) {
        state[field] = {
          value: initialValues[field] || "",
          error: "",
          touched: false,
        };
      }
    });

    return state;
  });

  const setValue = useCallback(
    (fieldName: string, value: any) => {
      setFormState((prev) => ({
        ...prev,
        [fieldName]: {
          ...prev[fieldName],
          value,
          error: validationRules[fieldName]
            ? validationRules[fieldName](value)
            : "",
        },
      }));
    },
    [validationRules]
  );

  const setError = useCallback((fieldName: string, error: string) => {
    setFormState((prev) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        error,
      },
    }));
  }, []);

  const setTouched = useCallback((fieldName: string) => {
    setFormState((prev) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        touched: true,
      },
    }));
  }, []);

  const validateField = useCallback(
    (fieldName: string): string => {
      const field = formState[fieldName];
      if (!field) return "";

      let error = "";

      // Check if required field is empty
      if (requiredFields.includes(fieldName)) {
        const value = field.value;
        const isEmpty =
          value === "" ||
          value === null ||
          value === undefined ||
          (typeof value === "string" && value.trim() === "");
        if (isEmpty) {
          error = `${fieldName
            .replace(/_/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase())} is required`;
        }
      }

      // Apply custom validation if no required field error
      if (!error && validationRules[fieldName]) {
        error = validationRules[fieldName](field.value);
      }

      setError(fieldName, error);
      return error;
    },
    [formState, requiredFields, validationRules]
  );

  const validateForm = useCallback((): boolean => {
    let isValid = true;

    Object.keys(formState).forEach((fieldName) => {
      const error = validateField(fieldName);
      if (error) isValid = false;
    });

    return isValid;
  }, [formState, validateField]);

  const getFieldProps = useCallback(
    (fieldName: string) => {
      const field = formState[fieldName] || {
        value: "",
        error: "",
        touched: false,
      };

      return {
        hasValue:
          field.value !== "" &&
          field.value !== null &&
          field.value !== undefined &&
          (typeof field.value !== "string" || field.value.trim() !== ""),
        hasBeenTouched: field.touched,
        error: field.error,
        required: requiredFields.includes(fieldName),
      };
    },
    [formState, requiredFields]
  );

  const resetForm = useCallback(() => {
    setFormState((prev) => {
      const newState: FormState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = {
          value: initialValues[key] || "",
          error: "",
          touched: false,
        };
      });
      return newState;
    });
  }, [initialValues]);

  const resetField = useCallback(
    (fieldName: string) => {
      setFormState((prev) => ({
        ...prev,
        [fieldName]: {
          value: initialValues[fieldName] || "",
          error: "",
          touched: false,
        },
      }));
    },
    [initialValues]
  );

  // Computed values for easy access
  const values = Object.keys(formState).reduce((acc, key) => {
    acc[key] = formState[key].value;
    return acc;
  }, {} as { [key: string]: any });

  const errors = Object.keys(formState).reduce((acc, key) => {
    acc[key] = formState[key].error;
    return acc;
  }, {} as { [key: string]: string });

  const touchedFields = Object.keys(formState).reduce((acc, key) => {
    acc[key] = formState[key].touched;
    return acc;
  }, {} as { [key: string]: boolean });

  return {
    values,
    errors,
    touchedFields,
    formState,
    setValue,
    setError,
    setTouched,
    validateField,
    validateForm,
    getFieldProps,
    resetForm,
    resetField,
  };
};
