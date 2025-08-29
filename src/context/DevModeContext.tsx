"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

const DevModeContext = createContext<
  { enabled: boolean; toggle: () => void } | undefined
>(undefined);

export function DevModeProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  // Load initial state from localStorage on mount (client-side)
  useEffect(() => {
    const storedValue = localStorage.getItem("devMode");
    if (storedValue === "true") {
      setEnabled(true);
    }
  }, []);

  // Update localStorage whenever the setting changes
  const toggle = () => {
    setEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("devMode", String(next));
      return next;
    });
  };

  return (
    <DevModeContext.Provider value={{ enabled, toggle }}>
      {children}
    </DevModeContext.Provider>
  );
}

export function useDevMode() {
  const context = useContext(DevModeContext);
  if (!context)
    throw new Error("useDevMode must be used within DevModeProvider");
  return context;
}
