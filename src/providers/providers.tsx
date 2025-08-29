// app/providers.tsx
"use client";

import { DevModeProvider } from "@/context/DevModeContext";
import { ErrorProvider } from "@/context/ErrorContext";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import GlobalErrorHandler from "@/components/common/GlobalErrorHandler";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <ErrorProvider>
        <DevModeProvider>
          {children}
          <GlobalErrorHandler />
        </DevModeProvider>
      </ErrorProvider>
    </ErrorBoundary>
  );
}
