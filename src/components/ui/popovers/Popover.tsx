"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";

type Position = "top" | "right" | "bottom" | "left";

export interface PopoverProps {
  position: Position;
  trigger: React.ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Popover({
  position,
  trigger,
  children,
  className = "",
}: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePopover = () => setIsOpen(!isOpen);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  };

  const arrowClasses = {
    top: "bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45",
    right:
      "left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 rotate-45",
    bottom:
      "top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45",
    left: "right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 rotate-45",
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div ref={triggerRef} onClick={togglePopover}>
        {trigger}
      </div>
      {isOpen && (
        <div
          ref={popoverRef}
          className={`absolute z-[9999] ${positionClasses[position]}`}
        >
          <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:shadow-xl">
            {children}
            <div
              className={`absolute w-3 h-3 bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700 ${arrowClasses[position]}`}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
