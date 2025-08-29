import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicUsage from "./BasicUsage";
import IconLists from "./IconLists";
import InteractiveLists from "./InteractiveLists";
import StateManagement from "./StateManagement";
import ComponentProperties from "./ComponentProperties";
import DarkModeCompatibility from "./DarkModeCompatibility";

export default function ListPage() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Lists" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicUsage />
          <InteractiveLists />
          <ComponentProperties />
        </div>

        <div className="space-y-6">
          <IconLists />
          <StateManagement />
          <DarkModeCompatibility />
        </div>
      </div>
    </div>
  );
}
