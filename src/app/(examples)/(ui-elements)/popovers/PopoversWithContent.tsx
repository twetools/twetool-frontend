"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Popover from "@/components/ui/popovers/Popover";
import Button from "@/components/ui/button/Button";
import ToggleSwitch from "@/components/form-elements/input/ToggleSwitch";
import { UserIcon, SettingsIcon, InfoIcon, PlusIcon } from "@/icons";

export default function PopoversWithContent() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  return (
    <ComponentCard title="Popovers with Rich Content">
      <div className="space-y-8">
        {/* Content Variations */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Rich Content Examples
          </h4>
          <div className="flex flex-wrap items-center gap-4">
            <Popover
              position="bottom"
              trigger={
                <Button
                  size="sm"
                  variant="outline"
                  startIcon={<UserIcon className="h-5 w-5" />}
                >
                  User Profile
                </Button>
              }
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <UserIcon className="h-5 w-5 text-brand-500 dark:text-brand-400" />
                    <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                      User Profile
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-100 dark:bg-brand-900/20 rounded-full flex items-center justify-center">
                      <UserIcon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        John Doe
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        john.doe@example.com
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        Administrator
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Popover>

            <Popover
              position="bottom"
              trigger={
                <Button
                  size="md"
                  variant="ghost"
                  startIcon={<SettingsIcon className="h-5 w-5" />}
                >
                  Quick Settings
                </Button>
              }
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <SettingsIcon className="h-5 w-5 text-brand-500 dark:text-brand-400" />
                    <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                      Quick Settings
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Notifications
                      </span>
                      <ToggleSwitch
                        checked={notifications}
                        onChange={setNotifications}
                        color="blue"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Dark Mode
                      </span>
                      <ToggleSwitch
                        checked={darkMode}
                        onChange={setDarkMode}
                        color="gray"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Auto-save
                      </span>
                      <ToggleSwitch
                        checked={autoSave}
                        onChange={setAutoSave}
                        color="blue"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Popover>

            <Popover
              position="bottom"
              trigger={
                <Button size="sm" startIcon={<InfoIcon />}>
                  Help & Info
                </Button>
              }
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-blue-200 bg-blue-100 px-5 py-3 dark:border-blue-700 dark:bg-blue-800">
                  <div className="flex items-center gap-3">
                    <InfoIcon className="text-blue-600 dark:text-blue-400" />
                    <h3 className="text-base font-semibold text-blue-800 dark:text-blue-100">
                      Help & Information
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong className="text-gray-900 dark:text-white">
                        Keyboard Shortcuts:
                      </strong>
                    </p>
                    <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      <div className="flex justify-between">
                        <span>Save</span>
                        <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                          Ctrl+S
                        </kbd>
                      </div>
                      <div className="flex justify-between">
                        <span>New</span>
                        <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                          Ctrl+N
                        </kbd>
                      </div>
                      <div className="flex justify-between">
                        <span>Search</span>
                        <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                          Ctrl+K
                        </kbd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popover>
          </div>
          <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800 mt-4">
            Popovers can contain complex layouts, icons, toggles, and
            interactive elements
          </div>
        </div>

        {/* Action Popovers */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Action Popovers
          </h4>
          <div className="flex flex-wrap items-center gap-4">
            <Popover
              position="bottom"
              trigger={
                <Button size="sm" variant="outline" startIcon={<PlusIcon />}>
                  Add New
                </Button>
              }
            >
              <div className="w-[300px]">
                <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex items-center gap-3">
                    <PlusIcon className="h-5 w-5 text-brand-500 dark:text-brand-400" />
                    <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                      Create New
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                      New Contact
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                      New Property
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                      New Lead
                    </button>
                    <hr className="border-gray-200 dark:border-gray-700" />
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                      Import Data
                    </button>
                  </div>
                </div>
              </div>
            </Popover>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 mt-4">
            Action popovers provide quick access to related functionality and
            menu options
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
