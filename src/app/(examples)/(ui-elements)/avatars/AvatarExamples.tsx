"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Avatar from "@/components/ui/avatar/Avatar";

export default function AvatarExamples() {
  const [currentSize, setCurrentSize] = useState<
    "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge"
  >("medium");
  const [currentStatus, setCurrentStatus] = useState<
    "online" | "offline" | "busy" | "none"
  >("online");

  // Sample avatar images - you can replace these with actual image URLs
  const sampleAvatars = [
    "/images/user/user-01.jpg",
    "/images/user/user-02.jpg",
    "/images/user/user-03.jpg",
    "/images/user/user-04.jpg",
  ];

  return (
    <ComponentCard title="Avatars">
      <div className="space-y-8">
        {/* Basic Usage Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Basic Usage
          </h3>
          <div className="flex items-center gap-4">
            <Avatar src={sampleAvatars[0]} alt="John Doe" />
            <Avatar src={sampleAvatars[1]} alt="Jane Smith" />
            <Avatar src={sampleAvatars[2]} alt="Mike Johnson" />
            <Avatar src={sampleAvatars[3]} alt="Sarah Wilson" />
          </div>
        </div>

        {/* Avatar Sizes Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Avatar Sizes
          </h3>
          <div className="flex items-end gap-4">
            <div className="text-center">
              <Avatar src={sampleAvatars[0]} alt="Extra Small" size="xsmall" />
              <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
                xsmall
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">24x24</p>
            </div>
            <div className="text-center">
              <Avatar src={sampleAvatars[0]} alt="Small" size="small" />
              <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
                small
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">32x32</p>
            </div>
            <div className="text-center">
              <Avatar src={sampleAvatars[0]} alt="Medium" size="medium" />
              <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
                medium
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">40x40</p>
            </div>
            <div className="text-center">
              <Avatar src={sampleAvatars[0]} alt="Large" size="large" />
              <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
                large
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">48x48</p>
            </div>
            <div className="text-center">
              <Avatar src={sampleAvatars[0]} alt="Extra Large" size="xlarge" />
              <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
                xlarge
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">56x56</p>
            </div>
            <div className="text-center">
              <Avatar
                src={sampleAvatars[0]}
                alt="Double Extra Large"
                size="xxlarge"
              />
              <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
                xxlarge
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">64x64</p>
            </div>
          </div>
        </div>

        {/* Status Indicators Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Status Indicators
          </h3>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <Avatar
                src={sampleAvatars[0]}
                alt="Online User"
                size="large"
                status="online"
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                Online
              </p>
            </div>
            <div className="text-center">
              <Avatar
                src={sampleAvatars[1]}
                alt="Offline User"
                size="large"
                status="offline"
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                Offline
              </p>
            </div>
            <div className="text-center">
              <Avatar
                src={sampleAvatars[2]}
                alt="Busy User"
                size="large"
                status="busy"
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                Busy
              </p>
            </div>
            <div className="text-center">
              <Avatar
                src={sampleAvatars[3]}
                alt="No Status"
                size="large"
                status="none"
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                No Status
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Example Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Interactive Example
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar
                src={sampleAvatars[0]}
                alt="Interactive Avatar"
                size={currentSize}
                status={currentStatus}
              />
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Size
                  </label>
                  <select
                    value={currentSize}
                    onChange={(e) =>
                      setCurrentSize(e.target.value as typeof currentSize)
                    }
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="xsmall">Extra Small</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                    <option value="xxlarge">Double Extra Large</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Status
                  </label>
                  <select
                    value={currentStatus}
                    onChange={(e) =>
                      setCurrentStatus(e.target.value as typeof currentStatus)
                    }
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="none">No Status</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="busy">Busy</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Use Cases Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Common Use Cases
          </h3>
          <div className="space-y-6">
            {/* User Profile Header */}
            <div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                User Profile Header
              </h4>
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <Avatar
                  src={sampleAvatars[0]}
                  alt="John Doe"
                  size="large"
                  status="online"
                />
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    John Doe
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Senior Developer
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Online
                  </p>
                </div>
              </div>
            </div>

            {/* Team Members List */}
            <div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                Team Members List
              </h4>
              <div className="space-y-2">
                {[
                  {
                    name: "Alice Johnson",
                    role: "Product Manager",
                    avatar: sampleAvatars[0],
                    status: "online" as const,
                  },
                  {
                    name: "Bob Smith",
                    role: "UI Designer",
                    avatar: sampleAvatars[1],
                    status: "busy" as const,
                  },
                  {
                    name: "Carol Davis",
                    role: "Developer",
                    avatar: sampleAvatars[2],
                    status: "offline" as const,
                  },
                  {
                    name: "David Wilson",
                    role: "QA Engineer",
                    avatar: sampleAvatars[3],
                    status: "online" as const,
                  },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                  >
                    <Avatar
                      src={member.avatar}
                      alt={member.name}
                      size="medium"
                      status={member.status}
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">
                        {member.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comment Thread */}
            <div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
                Comment Thread
              </h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Avatar src={sampleAvatars[0]} alt="Commenter" size="small" />
                  <div className="flex-1">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                        Sarah Chen
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Great work on the new feature! The user interface is
                        really intuitive.
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Avatar src={sampleAvatars[1]} alt="Commenter" size="small" />
                  <div className="flex-1">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                        Mike Rodriguez
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Thanks! I agree, the team did an excellent job on the
                        design.
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      1 hour ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Component Properties Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Component Properties
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="space-y-3 text-sm">
              <div>
                <strong className="text-gray-900 dark:text-white">src</strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (required): string - URL of the avatar image
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">alt</strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (optional): string - Alt text for accessibility (default:
                  "User Avatar")
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">size</strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (optional): "xsmall" | "small" | "medium" | "large" | "xlarge"
                  | "xxlarge" (default: "medium")
                </span>
              </div>
              <div>
                <strong className="text-gray-900 dark:text-white">
                  status
                </strong>
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  (optional): "online" | "offline" | "busy" | "none" (default:
                  "none")
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Compatibility Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Dark Mode Compatibility
          </h3>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Avatar components are fully compatible with dark mode. Status
              indicators automatically adjust their border colors, and all text
              elements follow the established dark mode color scheme.
            </p>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
