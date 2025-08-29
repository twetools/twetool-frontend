"use client";
import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicNotifications from "./BasicNotifications";
import CookieConsentExamples from "./CookieConsentExamples";
import UpdateNotificationExamples from "./UpdateNotificationExamples";
import NotificationFeatures from "./NotificationFeatures";

export default function NotificationElements() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Notification Examples" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicNotifications />
          <UpdateNotificationExamples />
        </div>

        <div className="space-y-6">
          <CookieConsentExamples />
          <NotificationFeatures />
        </div>
      </div>
    </div>
  );
}
