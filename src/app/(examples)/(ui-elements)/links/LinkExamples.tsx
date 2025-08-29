"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Link from "@/components/ui/links/Link";

export default function LinkExamples() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <ComponentCard title="Link Examples">
      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Basic Usage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Default Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Default Links
              </h4>
              <div className="space-y-3">
                <div>
                  <Link href="#" onClick={handleClick}>
                    Default link
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="default">
                    Explicit default link
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    External link
                  </Link>
                </div>
              </div>
            </div>

            {/* Colored Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Colored Links
              </h4>
              <div className="space-y-3">
                <div>
                  <Link href="#" variant="colored" color="primary">
                    Primary link
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="colored" color="success">
                    Success link
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="colored" color="danger">
                    Danger link
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Colored Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                More Colors
              </h4>
              <div className="space-y-3">
                <div>
                  <Link href="#" variant="colored" color="warning">
                    Warning link
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="colored" color="info">
                    Info link
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="colored" color="secondary">
                    Secondary link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Colored CustomLinks with Underline */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Colored CustomLinks with Underline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Underlined Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Primary Colors with Underline
              </h4>
              <div className="space-y-3">
                <div>
                  <Link href="#" variant="underline" color="primary">
                    Primary CustomLink
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="underline" color="secondary">
                    Secondary CustomLink
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="underline" color="success">
                    Success CustomLink
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="underline" color="danger">
                    Danger CustomLink
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Colors */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Additional Colors with Underline
              </h4>
              <div className="space-y-3">
                <div>
                  <Link href="#" variant="underline" color="warning">
                    Warning CustomLink
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="underline" color="info">
                    Info CustomLink
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="underline" color="light">
                    Light CustomLink
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="underline" color="dark">
                    Dark CustomLink
                  </Link>
                </div>
              </div>
            </div>

            {/* Dark Mode Underline */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Dark Mode Variations
              </h4>
              <div className="space-y-3">
                <div>
                  <Link href="#" variant="underline" color="light">
                    Light in Dark Mode
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="underline" color="primary">
                    Primary in Dark Mode
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="underline" color="info">
                    Info in Dark Mode
                  </Link>
                </div>
                <div>
                  <Link href="#" variant="underline" color="warning">
                    Warning in Dark Mode
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CustomLink Opacity */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            CustomLink Opacity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Opacity 10
              </h4>
              <Link href="#" variant="opacity" opacity={10}>
                Link opacity 10
              </Link>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Opacity 25
              </h4>
              <Link href="#" variant="opacity" opacity={25}>
                Link opacity 25
              </Link>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Opacity 50
              </h4>
              <Link href="#" variant="opacity" opacity={50}>
                CustomLink opacity 50
              </Link>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Opacity 75
              </h4>
              <Link href="#" variant="opacity" opacity={75}>
                Link opacity 75
              </Link>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Opacity 100
              </h4>
              <Link href="#" variant="opacity" opacity={100}>
                Link opacity 100
              </Link>
            </div>
          </div>
        </div>

        {/* Link Opacity Hover */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Link Opacity Hover
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Hover 10
              </h4>
              <Link href="#" variant="opacityHover" opacity={10}>
                Link opacity 10
              </Link>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Hover 25
              </h4>
              <Link href="#" variant="opacityHover" opacity={25}>
                Link opacity 25
              </Link>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Hover 50
              </h4>
              <Link href="#" variant="opacityHover" opacity={50}>
                Link opacity hover 50
              </Link>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Hover 75
              </h4>
              <Link href="#" variant="opacityHover" opacity={75}>
                Link opacity 75
              </Link>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                Hover 100
              </h4>
              <Link href="#" variant="opacityHover" opacity={100}>
                Link opacity 100
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Example */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Interactive Example
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Click the link below to test functionality:
            </p>
            <div className="space-y-2">
              <div>
                <Link
                  href="#"
                  variant="colored"
                  color="primary"
                  onClick={handleClick}
                >
                  Interactive link (clicked {clickCount} times)
                </Link>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Links maintain full Next.js functionality with proper navigation
                and state management.
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
