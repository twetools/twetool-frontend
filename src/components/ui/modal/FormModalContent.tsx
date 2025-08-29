import React, { useEffect, useRef } from "react";

interface FormModalContentProps {
  children: React.ReactNode;
  isOpen: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

const FormModalContent: React.FC<FormModalContentProps> = ({
  children,
  isOpen,
  onSubmit,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isOpen && formRef.current) {
      const firstInput = formRef.current.querySelector<HTMLElement>(
        'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      firstInput?.focus();

      // Compensate for scrollbar width
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.marginRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.marginRight = ""; // Reset margin
    }

    return () => {
      document.body.style.marginRight = ""; // Clean up on unmount
    };
  }, [isOpen]);

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormModalContent;
