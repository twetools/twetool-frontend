"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Tooltip from "@/components/ui/tooltip/Tooltip";
import Button from "@/components/ui/button/Button";

export default function TooltipPositioning() {
  return (
    <ComponentCard title="Tooltip Positioning">
      <div className="space-y-8">
        {/* Position Variations Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Position Variations
          </h4>
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-center">
            <Tooltip content="This is a top tooltip" position="top">
              <Button size="sm">Top</Button>
            </Tooltip>

            <Tooltip content="This is a right tooltip" position="right">
              <Button size="sm">Right</Button>
            </Tooltip>

            <Tooltip content="This is a bottom tooltip" position="bottom">
              <Button size="sm">Bottom</Button>
            </Tooltip>

            <Tooltip content="This is a left tooltip" position="left">
              <Button size="sm">Left</Button>
            </Tooltip>
          </div>
        </div>

        {/* Positioning Context Section */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Positioning in Context
          </h4>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="grid grid-cols-3 gap-4 place-items-center">
              <Tooltip content="Top left corner" position="bottom">
                <Button size="sm" variant="outline">
                  Corner
                </Button>
              </Tooltip>

              <Tooltip content="Center top" position="bottom">
                <Button size="sm" variant="outline">
                  Center
                </Button>
              </Tooltip>

              <Tooltip content="Top right corner" position="bottom">
                <Button size="sm" variant="outline">
                  Corner
                </Button>
              </Tooltip>

              <Tooltip content="Middle left" position="right">
                <Button size="sm" variant="outline">
                  Left
                </Button>
              </Tooltip>

              <Tooltip content="Center element" position="top">
                <Button size="sm" variant="primary">
                  Center
                </Button>
              </Tooltip>

              <Tooltip content="Middle right" position="left">
                <Button size="sm" variant="outline">
                  Right
                </Button>
              </Tooltip>

              <Tooltip content="Bottom left corner" position="top">
                <Button size="sm" variant="outline">
                  Corner
                </Button>
              </Tooltip>

              <Tooltip content="Center bottom" position="top">
                <Button size="sm" variant="outline">
                  Center
                </Button>
              </Tooltip>

              <Tooltip content="Bottom right corner" position="top">
                <Button size="sm" variant="outline">
                  Corner
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
