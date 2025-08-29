import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicUsage from "./BasicUsage";
import ColoredLinks from "./ColoredLinks";
import UnderlineLinks from "./UnderlineLinks";
import OpacityVariants from "./OpacityVariants";
import InteractiveExamples from "./InteractiveExamples";
import ComponentProperties from "./ComponentProperties";
import DarkModeCompatibility from "./DarkModeCompatibility";

export default function LinksPage() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Links" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicUsage />
          <UnderlineLinks />
          <InteractiveExamples />
          <ComponentProperties />
        </div>

        <div className="space-y-6">
          <ColoredLinks />
          <OpacityVariants />
          <DarkModeCompatibility />
        </div>
      </div>
    </div>
  );
}
