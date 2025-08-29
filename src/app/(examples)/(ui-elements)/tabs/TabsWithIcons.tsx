"use client";

import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Tab from "@/components/ui/tabs/Tab";

// Example SVG Icons
const OverviewIcon: React.FC = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.83203 2.5835C3.58939 2.5835 2.58203 3.59085 2.58203 4.83349V7.25015C2.58203 8.49279 3.58939 9.50015 4.83203 9.50015H7.2487C8.49134 9.50015 9.4987 8.49279 9.4987 7.25015V4.8335C9.4987 3.59086 8.49134 2.5835 7.2487 2.5835H4.83203ZM4.08203 4.83349C4.08203 4.41928 4.41782 4.0835 4.83203 4.0835H7.2487C7.66291 4.0835 7.9987 4.41928 7.9987 4.8335V7.25015C7.9987 7.66436 7.66291 8.00015 7.2487 8.00015H4.83203C4.41782 8.00015 4.08203 7.66436 4.08203 7.25015V4.83349ZM4.83203 10.5002C3.58939 10.5002 2.58203 11.5075 2.58203 12.7502V15.1668C2.58203 16.4095 3.58939 17.4168 4.83203 17.4168H7.2487C8.49134 17.4168 9.4987 16.4095 9.4987 15.1668V12.7502C9.4987 11.5075 8.49134 10.5002 7.2487 10.5002H4.83203ZM4.08203 12.7502C4.08203 12.336 4.41782 12.0002 4.83203 12.0002H7.2487C7.66291 12.0002 7.9987 12.336 7.9987 12.7502V15.1668C7.9987 15.5811 7.66291 15.9168 7.2487 15.9168H4.83203C4.41782 15.9168 4.08203 15.5811 4.08203 15.1668V12.7502ZM10.4987 4.83349C10.4987 3.59085 11.5061 2.5835 12.7487 2.5835H15.1654C16.408 2.5835 17.4154 3.59086 17.4154 4.8335V7.25015C17.4154 8.49279 16.408 9.50015 15.1654 9.50015H12.7487C11.5061 9.50015 10.4987 8.49279 10.4987 7.25015V4.83349ZM12.7487 4.0835C12.3345 4.0835 11.9987 4.41928 11.9987 4.83349V7.25015C11.9987 7.66436 12.3345 8.00015 12.7487 8.00015H15.1654C15.5796 8.00015 15.9154 7.66436 15.9154 7.25015V4.8335C15.9154 4.41928 15.5796 4.0835 15.1654 4.0835H12.7487ZM12.7487 10.5002C11.5061 10.5002 10.4987 11.5075 10.4987 12.7502V15.1668C10.4987 16.4095 11.5061 17.4168 12.7487 17.4168H15.1654C16.408 17.4168 17.4154 16.4095 17.4154 15.1668V12.7502C17.4154 11.5075 16.408 10.5002 15.1654 10.5002H12.7487ZM11.9987 12.7502C11.9987 12.336 12.3345 12.0002 12.7487 12.0002H15.1654C15.5796 12.0002 15.9154 12.336 15.9154 12.7502V15.1668C15.9154 15.5811 15.5796 15.9168 15.1654 15.9168H12.7487C12.3345 15.9168 11.9987 15.5811 11.9987 15.1668V12.7502Z"
      fill="currentColor"
    />
  </svg>
);

const NotificationIcon: React.FC = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7487 2.29248C10.7487 1.87827 10.4129 1.54248 9.9987 1.54248C9.58448 1.54248 9.2487 1.87827 9.2487 2.29248V2.83613C6.08132 3.20733 3.6237 5.9004 3.6237 9.16748V14.4591H3.33203C2.91782 14.4591 2.58203 14.7949 2.58203 15.2091C2.58203 15.6234 2.91782 15.9591 3.33203 15.9591H4.3737H15.6237H16.6654C17.0796 15.9591 17.4154 15.6234 17.4154 15.2091C17.4154 14.7949 17.0796 14.4591 16.6654 14.4591H16.3737V9.16748C16.3737 5.9004 13.9161 3.20733 10.7487 2.83613V2.29248ZM14.8737 14.4591V9.16748C14.8737 6.47509 12.6911 4.29248 9.9987 4.29248C7.30631 4.29248 5.1237 6.47509 5.1237 9.16748V14.4591H14.8737ZM7.9987 17.7085C7.9987 18.1228 8.33448 18.4585 8.7487 18.4585H11.2487C11.6629 18.4585 11.9987 18.1228 11.9987 17.7085C11.9987 17.2943 11.6629 16.9585 11.2487 16.9585H8.7487C8.33448 16.9585 7.9987 17.2943 7.9987 17.7085Z"
      fill="currentColor"
    />
  </svg>
);

const AnalyticsIcon: React.FC = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.85954 4.0835C9.5834 4.0835 9.35954 4.30735 9.35954 4.5835V15.4161C9.35954 15.6922 9.5834 15.9161 9.85954 15.9161H10.1373C10.4135 15.9161 10.6373 15.6922 10.6373 15.4161V4.5835C10.6373 4.30735 10.4135 4.0835 10.1373 4.0835H9.85954ZM7.85954 4.5835C7.85954 3.47893 8.75497 2.5835 9.85954 2.5835H10.1373C11.2419 2.5835 12.1373 3.47893 12.1373 4.5835V15.4161C12.1373 16.5206 11.2419 17.4161 10.1373 17.4161H9.85954C8.75497 17.4161 7.85954 16.5206 7.85954 15.4161V4.5835ZM4.58203 8.9598C4.30589 8.9598 4.08203 9.18366 4.08203 9.4598V15.4168C4.08203 15.693 4.30589 15.9168 4.58203 15.9168H4.85981C5.13595 15.9168 5.35981 15.693 5.35981 15.4168V9.4598C5.35981 9.18366 5.13595 8.9598 4.85981 8.9598H4.58203ZM2.58203 9.4598C2.58203 8.35523 3.47746 7.4598 4.58203 7.4598H4.85981C5.96438 7.4598 6.85981 8.35523 6.85981 9.4598V15.4168C6.85981 16.5214 5.96438 17.4168 4.85981 17.4168H4.58203C3.47746 17.4168 2.58203 16.5214 2.58203 15.4168V9.4598ZM14.637 12.435C14.637 12.1589 14.8609 11.935 15.137 11.935H15.4148C15.691 11.935 15.9148 12.1589 15.9148 12.435V15.4168C15.9148 15.693 15.691 15.9168 15.4148 15.9168H15.137C14.8609 15.9168 14.637 15.693 14.637 15.4168V12.435ZM15.137 10.435C14.0325 10.435 13.137 11.3304 13.137 12.435V15.4168C13.137 16.5214 14.0325 17.4168 15.137 17.4168H15.4148C16.5194 17.4168 17.4148 16.5214 17.4148 15.4168V12.435C17.4148 11.3304 16.5194 10.435 15.4148 10.435H15.137Z"
      fill="currentColor"
    />
  </svg>
);

const CustomersIcon: React.FC = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.9987 3.5415C8.61799 3.5415 7.4987 4.66079 7.4987 6.0415C7.4987 7.42221 8.61799 8.5415 9.9987 8.5415C11.3794 8.5415 12.4987 7.42221 12.4987 6.0415C12.4987 4.66079 11.3794 3.5415 9.9987 3.5415ZM5.9987 6.0415C5.9987 3.83236 7.78956 2.0415 9.9987 2.0415C12.2078 2.0415 13.9987 3.83236 13.9987 6.0415C13.9987 8.25064 12.2078 10.0415 9.9987 10.0415C7.78956 10.0415 5.9987 8.25064 5.9987 6.0415ZM6.24967 11.5415C4.59282 11.5415 3.24967 12.8847 3.24967 14.5415V15.8755C3.24967 16.2897 3.58546 16.6255 3.99967 16.6255C4.41389 16.6255 4.74967 16.2897 4.74967 15.8755V14.5415C4.74967 13.7132 5.42139 13.0415 6.24967 13.0415H13.7497C14.578 13.0415 15.2497 13.7132 15.2497 14.5415V15.8755C15.2497 16.2897 15.5855 16.6255 15.9997 16.6255C16.4139 16.6255 16.7497 16.2897 16.7497 15.8755V14.5415C16.7497 12.8847 15.4065 11.5415 13.7497 11.5415H6.24967Z"
      fill="currentColor"
    />
  </svg>
);

export default function TabsWithIcons() {
  const tabItemsWithIcons = [
    {
      key: "overview",
      title: "Overview",
      icon: <OverviewIcon />,
      content: (
        <div>
          <h3 className="mb-1 text-xl font-medium text-gray-800 dark:text-white/90">
            Overview
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Overview ipsum dolor sit amet consectetur. Non vitae facilisis urna
            tortor placerat egestas donec. Faucibus diam gravida enim elit lacus
            a. Tincidunt fermentum condimentum quis et a et tempus. Tristique
            urna nisi nulla elit sit libero scelerisque ante.
          </p>
        </div>
      ),
    },
    {
      key: "notification",
      title: "Notification",
      icon: <NotificationIcon />,
      content: (
        <div>
          <h3 className="mb-1 text-xl font-medium text-gray-800 dark:text-white/90">
            Notification
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Notification ipsum dolor sit amet consectetur. Non vitae facilisis
            urna tortor placerat egestas donec. Faucibus diam gravida enim elit
            lacus a. Tincidunt fermentum condimentum quis et a et tempus.
            Tristique urna nisi nulla elit sit libero scelerisque ante.
          </p>
        </div>
      ),
    },
    {
      key: "analytics",
      title: "Analytics",
      icon: <AnalyticsIcon />,
      content: (
        <div>
          <h3 className="mb-1 text-xl font-medium text-gray-800 dark:text-white/90">
            Analytics
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Analytics ipsum dolor sit amet consectetur. Non vitae facilisis urna
            tortor placerat egestas donec. Faucibus diam gravida enim elit lacus
            a. Tincidunt fermentum condimentum quis et a et tempus. Tristique
            urna nisi nulla elit sit libero scelerisque ante.
          </p>
        </div>
      ),
    },
    {
      key: "customers",
      title: "Customers",
      icon: <CustomersIcon />,
      content: (
        <div>
          <h3 className="mb-1 text-xl font-medium text-gray-800 dark:text-white/90">
            Customers
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Customers ipsum dolor sit amet consectetur. Non vitae facilisis urna
            tortor placerat egestas donec. Faucibus diam gravida enim elit lacus
            a. Tincidunt fermentum condimentum quis et a et tempus. Tristique
            urna nisi nulla elit sit libero scelerisque ante.
          </p>
        </div>
      ),
    },
  ];

  return (
    <ComponentCard title="Tabs with Icons">
      <div className="space-y-8">
        {/* Default Tabs with Icons */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Default Style with Icons
          </h4>
          <Tab items={tabItemsWithIcons} defaultActiveKey="overview" />
        </div>

        {/* Underline Tabs with Icons */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Underline Style with Icons
          </h4>
          <Tab
            items={tabItemsWithIcons}
            defaultActiveKey="notification"
            variant="underline"
          />
        </div>
      </div>
    </ComponentCard>
  );
}
