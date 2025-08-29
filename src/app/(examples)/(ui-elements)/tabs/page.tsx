import React from "react";
import PageBreadCrumb from "@/components/common/PageBreadCrumb";
import DefaultTabs from "./DefaultTabs";
import UnderlineTabs from "./UnderlineTabs";
import TabsWithIcons from "./TabsWithIcons";
import TabsWithBadges from "./TabsWithBadges";
import VerticalTabs from "./VerticalTabs";

export default function TabsPage() {
  return (
    <div className="space-y-6">
      <PageBreadCrumb pageTitle="Tabs Examples" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultTabs />
          <TabsWithIcons />
          <VerticalTabs />
        </div>

        <div className="space-y-6">
          <UnderlineTabs />
          <TabsWithBadges />
        </div>
      </div>
    </div>
  );
}
