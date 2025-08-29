import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicPagination from "./BasicPagination";
import PaginationVariants from "./PaginationVariants";
import PaginationStates from "./PaginationStates";
import PaginationCustomization from "./PaginationCustomization";

export default function PaginationPage() {
  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="Pagination" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BasicPagination />
          <PaginationStates />
        </div>

        <div className="space-y-6">
          <PaginationVariants />
          <PaginationCustomization />
        </div>
      </div>
    </div>
  );
}
