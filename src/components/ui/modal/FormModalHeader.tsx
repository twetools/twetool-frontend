import React from "react";

interface FormModalHeaderProps {
  title?: string;
  subTitle?: string;
  icon?: React.ReactNode;
}

const FormModalHeader: React.FC<FormModalHeaderProps> = ({
  title,
  subTitle,
  icon,
}) => {
  if (!title) return null;

  return (
    <div className="mb-6">
      <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 flex items-center gap-3">
        {icon && (
          <span className="flex-shrink-0 w-6 h-6 text-brand-500 dark:text-brand-400 [&>svg]:w-full [&>svg]:h-full">
            {icon}
          </span>
        )}
        {title}
      </h4>
      {subTitle && (
        <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {subTitle}
        </div>
      )}
    </div>
  );
};

export default FormModalHeader;
