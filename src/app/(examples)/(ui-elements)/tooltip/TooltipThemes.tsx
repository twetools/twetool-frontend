"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Tooltip from "@/components/ui/tooltip/Tooltip";
import Button from "@/components/ui/button/Button";

export default function TooltipThemes() {
  return (
    <ComponentCard title="Tooltip Themes">
      <div className="space-y-8">
        {/* Theme Variations Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Light vs Dark Themes
          </h4>
          <div className="flex items-center gap-10">
            <Tooltip content="Light theme tooltip" position="top" theme="light">
              <Button size="sm" variant="outline">
                Light Theme
              </Button>
            </Tooltip>

            <Tooltip content="Dark theme tooltip" position="top" theme="dark">
              <Button size="sm" variant="primary">
                Dark Theme
              </Button>
            </Tooltip>
          </div>
        </div>

        {/* Theme Comparison Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Theme Comparison
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Light Theme Examples */}
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Light Theme
              </h5>
              <div className="flex flex-wrap items-center gap-4">
                <Tooltip content="Top light" position="top" theme="light">
                  <Button size="sm" variant="outline">
                    Top
                  </Button>
                </Tooltip>
                <Tooltip content="Right light" position="right" theme="light">
                  <Button size="sm" variant="outline">
                    Right
                  </Button>
                </Tooltip>
                <Tooltip content="Bottom light" position="bottom" theme="light">
                  <Button size="sm" variant="outline">
                    Bottom
                  </Button>
                </Tooltip>
                <Tooltip content="Left light" position="left" theme="light">
                  <Button size="sm" variant="outline">
                    Left
                  </Button>
                </Tooltip>
              </div>
            </div>

            {/* Dark Theme Examples */}
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Dark Theme
              </h5>
              <div className="flex flex-wrap items-center gap-4">
                <Tooltip content="Top dark" position="top" theme="dark">
                  <Button size="sm" variant="primary">
                    Top
                  </Button>
                </Tooltip>
                <Tooltip content="Right dark" position="right" theme="dark">
                  <Button size="sm" variant="primary">
                    Right
                  </Button>
                </Tooltip>
                <Tooltip content="Bottom dark" position="bottom" theme="dark">
                  <Button size="sm" variant="primary">
                    Bottom
                  </Button>
                </Tooltip>
                <Tooltip content="Left dark" position="left" theme="dark">
                  <Button size="sm" variant="primary">
                    Left
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Context Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Theme Usage Guidelines
          </h4>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
              <p>
                <strong>Light Theme:</strong> Default theme, works well with
                most UI elements and provides good contrast.
              </p>
              <p>
                <strong>Dark Theme:</strong> Use for emphasis or when tooltips
                need to stand out more prominently.
              </p>
              <p>
                <strong>Tip:</strong> Choose theme based on the surrounding UI
                context and contrast requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
