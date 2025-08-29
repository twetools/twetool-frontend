import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicUsage from "./BasicUsage";
import ButtonsWithIcons from "./ButtonsWithIcons";
import ButtonGroupSizes from "./ButtonGroupSizes";
import ButtonGroupStates from "./ButtonGroupStates";
import ComponentProperties from "./ComponentProperties";
import DarkModeCompatibility from "./DarkModeCompatibility";

export default function ButtonsGroupPage() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Buttons Group" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicUsage />
          <ButtonGroupSizes />
          <ComponentProperties />
        </div>

        <div className="space-y-6">
          <ButtonsWithIcons />
          <ButtonGroupStates />
          <DarkModeCompatibility />
        </div>
      </div>
    </div>
  );
}
