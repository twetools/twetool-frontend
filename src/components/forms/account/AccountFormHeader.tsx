import React from "react";
import { UserIcon } from "@/icons";
import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";

interface AccountFormHeaderProps {
  isEdit: boolean;
}

const AccountFormHeader: React.FC<AccountFormHeaderProps> = ({ isEdit }) => (
  <div className="flex flex-col gap-2 mb-6">
    <Breadcrumb
      items={[
        { label: "Accounts", href: "/accounts" },
        { label: isEdit ? "Edit Account" : "New Account" },
      ]}
      variant="chevron"
    />
    <div className="flex items-center gap-2">
      <UserIcon className="h-6 w-6 text-blue-500" />
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
        {isEdit ? "Edit Account" : "New Account"}
      </h2>
    </div>
  </div>
);

export default AccountFormHeader;
