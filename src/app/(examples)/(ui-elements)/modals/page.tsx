"use client";

import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DefaultModal from "./DefaultModal";
import ModalAlerts from "./ModalAlerts";



export default function ModalElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Modal Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultModal />
          <ModalAlerts />
          
        </div>
        <div className="space-y-6"></div>
      </div>
    </div>
  );
}