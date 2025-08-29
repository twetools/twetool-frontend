"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Avatar from "@/components/ui/avatar/Avatar";

export default function BasicUsage() {
  // Sample avatar images - you can replace these with actual image URLs
  const sampleAvatars = [
    "/images/user/user-01.jpg",
    "/images/user/user-02.jpg",
    "/images/user/user-03.jpg",
    "/images/user/user-04.jpg",
  ];

  return (
    <ComponentCard title="Basic Usage">
      <div className="flex items-center gap-4">
        <Avatar src={sampleAvatars[0]} alt="John Doe" />
        <Avatar src={sampleAvatars[1]} alt="Jane Smith" />
        <Avatar src={sampleAvatars[2]} alt="Mike Johnson" />
        <Avatar src={sampleAvatars[3]} alt="Sarah Wilson" />
      </div>
    </ComponentCard>
  );
}
