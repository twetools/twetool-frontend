"use client";
import React, { useState, useEffect } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import ProgressBar from "@/components/ui/progress-bar/ProgressBar";
import Button from "@/components/ui/button/Button";

export default function InteractiveProgress() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const simulateDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 150);
  };

  const resetProgress = () => {
    setUploadProgress(0);
    setDownloadProgress(0);
  };

  return (
    <ComponentCard title="Interactive Progress">
      <div className="space-y-8">
        {/* Upload Simulation */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            File Upload Simulation
          </h4>
          <div className="space-y-3 max-w-sm">
            <ProgressBar
              progress={Math.floor(uploadProgress)}
              size="md"
              label="outside"
            />
            <div className="flex gap-2">
              <Button size="sm" onClick={simulateUpload} disabled={isUploading}>
                {isUploading ? "Uploading..." : "Start Upload"}
              </Button>
              <Button size="sm" variant="outline" onClick={resetProgress}>
                Reset
              </Button>
            </div>
          </div>
        </div>

        {/* Download Simulation */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            File Download Simulation
          </h4>
          <div className="space-y-3 max-w-sm">
            <ProgressBar
              progress={Math.floor(downloadProgress)}
              size="lg"
              label="inside"
            />
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={simulateDownload}
                disabled={isDownloading}
              >
                {isDownloading ? "Downloading..." : "Start Download"}
              </Button>
            </div>
          </div>
        </div>

        {/* Real-time Status */}
        <div>
          <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
            Status Information
          </h4>
          <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
            <p>
              <strong>Upload:</strong> {Math.floor(uploadProgress)}%{" "}
              {isUploading && "(in progress)"}
            </p>
            <p>
              <strong>Download:</strong> {Math.floor(downloadProgress)}%{" "}
              {isDownloading && "(in progress)"}
            </p>
          </div>
        </div>
      </div>
    </ComponentCard>
  );
}
