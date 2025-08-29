import { useEffect, useRef } from "react";

interface UseFormAutoFocusOptions {
  /**
   * Whether to enable auto-focus functionality
   * @default false
   */
  enabled?: boolean;

  /**
   * Whether this is a new record being created
   * @default false
   */
  isNewRecord?: boolean;

  /**
   * Delay before focusing in milliseconds
   * @default 100
   */
  delay?: number;

  /**
   * Custom selector for the first focusable element
   * @default 'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
   */
  selector?: string;
}

/**
 * Hook for auto-focusing the first field in a form for new records
 *
 * This provides a reusable pattern for focusing the first field when creating new records,
 * following the established pattern from FormModalContent but making it available for any form.
 *
 * @param containerRef - Ref to the container element containing the form fields
 * @param options - Configuration options for auto-focus behavior
 *
 * @example
 * ```tsx
 * function MyForm({ contact, isNewRecord }) {
 *   const formRef = useRef<HTMLDivElement>(null);
 *
 *   const { autoFocusFirstField } = useFormAutoFocus(formRef, {
 *     enabled: true,
 *     isNewRecord: !contact?.id,
 *   });
 *
 *   return (
 *     <div ref={formRef}>
 *       <PersonalInfoSection
 *         autoFocusFirstField={autoFocusFirstField}
 *         // ... other props
 *       />
 *     </div>
 *   );
 * }
 * ```
 */
export default function useFormAutoFocus(
  containerRef: React.RefObject<HTMLElement>,
  options: UseFormAutoFocusOptions = {}
) {
  const {
    enabled = true,
    isNewRecord = false,
    delay = 100,
    selector = 'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
  } = options;

  const hasAutoFocused = useRef(false);

  useEffect(() => {
    // Only auto-focus once per component lifetime
    if (
      !enabled ||
      !isNewRecord ||
      hasAutoFocused.current ||
      !containerRef.current
    ) {
      return;
    }

    const timer = setTimeout(() => {
      const firstInput =
        containerRef.current?.querySelector<HTMLElement>(selector);
      if (firstInput) {
        firstInput.focus();
        hasAutoFocused.current = true;
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [enabled, isNewRecord, delay, selector, containerRef]);

  // Reset the auto-focus flag when isNewRecord changes from false to true
  useEffect(() => {
    if (isNewRecord) {
      hasAutoFocused.current = false;
    }
  }, [isNewRecord]);

  return {
    /**
     * Whether to auto-focus the first field
     * This can be passed to form sections that support autoFocusFirstField prop
     */
    autoFocusFirstField: enabled && isNewRecord,

    /**
     * Whether auto-focus has already been triggered
     */
    hasAutoFocused: hasAutoFocused.current,
  };
}
