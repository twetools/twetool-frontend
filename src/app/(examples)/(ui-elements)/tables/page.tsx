import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicDataTable from "./BasicDataTable";
import DataTableWithActions from "./DataTableWithActions";
import DataTableWithFiltering from "./DataTableWithFiltering";
import DataTableAdvancedFeatures from "./DataTableAdvancedFeatures";
import DataTableSorting from "./DataTableSorting";
import DataTableCustomization from "./DataTableCustomization";
import DataTableWithRowInteractions from "./DataTableWithRowInteractions";
import BasicRowInteractionExample from "./BasicRowInteractionExample";
import DataTableWithTopPagination from "./DataTableWithTopPagination";
import BasicDataTableNoCheckBox from "./BasicDataTableNoCheckbox";

export default function DataTablesPage() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Data Tables" />
      <div className="space-y-6">
        <BasicDataTable />
        <BasicRowInteractionExample />
        <BasicDataTableNoCheckBox />
        <DataTableWithTopPagination />
        <DataTableWithRowInteractions />
        <DataTableWithFiltering />
        <DataTableAdvancedFeatures />
        <DataTableWithActions />
        <DataTableSorting />
        <DataTableCustomization />
      </div>
    </div>
  );
}
