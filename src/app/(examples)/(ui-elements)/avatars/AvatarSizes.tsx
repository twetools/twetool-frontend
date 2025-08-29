"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Avatar from "@/components/ui/avatar/Avatar";

export default function AvatarSizes() {
  const sampleAvatar = "/images/user/user-01.jpg";

  return (
    <ComponentCard title="Avatar Sizes">
      <div className="flex items-end gap-4">
        <div className="text-center">
          <Avatar src={sampleAvatar} alt="Extra Small" size="xsmall" />
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
            xsmall
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">24x24</p>
        </div>
        <div className="text-center">
          <Avatar src={sampleAvatar} alt="Small" size="small" />
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">small</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">32x32</p>
        </div>
        <div className="text-center">
          <Avatar src={sampleAvatar} alt="Medium" size="medium" />
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
            medium
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">40x40</p>
        </div>
        <div className="text-center">
          <Avatar src={sampleAvatar} alt="Large" size="large" />
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">large</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">48x48</p>
        </div>
        <div className="text-center">
          <Avatar src={sampleAvatar} alt="Extra Large" size="xlarge" />
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
            xlarge
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">56x56</p>
        </div>
        <div className="text-center">
          <Avatar src={sampleAvatar} alt="Extra Extra Large" size="xxlarge" />
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
            xxlarge
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">64x64</p>
        </div>
      </div>
    </ComponentCard>
  );
}
